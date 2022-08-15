import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Stack,
  Avatar,
  Dialog,
  DialogContent,
  Card,
  CardContent,
  DialogActions,
} from "@mui/material";
import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Cog as CogIcon } from "../../../icons/cog";
import { gtm } from "../../../lib/gtm";
import { useRouter } from "next/router";
import { API_SERVICE } from "../../../config";
import { useAuth } from "../../../hooks/use-auth";

const Creators = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [bid, setBid] = useState();
  const campaignId = router.query.campaignId;
  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const fetchBid = async () => {
    try {
      const response = await fetch(
        `${API_SERVICE}/get_bid_by_campaign/${campaignId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setBid(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addOrder = async (creator) => {
    try {
      const response = await fetch(`${API_SERVICE}/add_order`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaign: bid?.campaign?._id,
          price: creator?.price,
          status: 3,
          demoImage: "",
          demoVideo: "",
          branduser: user?.id,
          creatoruser: creator?.creator?.userId,
        }),
      });
      if (response.status === 200) {
        // const data = await response.json();
        // console.log(data);
        alert("Success");
        router.push("/dashboard/campaigns/success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  useEffect(() => {
    fetchBid();
  }, []);

  return (
    <>
      <Dialog onClose={() => setSuccessOpen(false)} open={successOpen}>
        {/* <DialogTitle>Add your bid</DialogTitle> */}
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Container
              maxWidth="md"
              // style={{ margin: "0 20px", padding: "0 50px" }}
            >
              <Typography variant="h5" sx={{ mt: 2 }}>
                Creator Details
              </Typography>

              <Card sx={{ mt: 2 }} variant="outlined">
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    xs={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        {`Name: 
                                      ${
                                        selectedCreator?.creator?.first +
                                        " " +
                                        selectedCreator?.creator?.last
                                      }`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        {`Bid Price: $${parseInt(
                          selectedCreator?.price
                        ).toFixed(2)}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        {`Creator Level:
                                      ${selectedCreator?.creatorLevel}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Are you sure you want to choose this creator?
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",

                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{ mx: 2 }}
                        variant="contained"
                        onClick={() => {
                          addOrder(selectedCreator);
                        }}
                      >
                        Yes
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ mx: 2 }}
                        onClick={() => setSuccessOpen(false)}
                      >
                        No
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Box>
        </DialogContent>
        {/* <DialogActions>
                        <Button onClick={() => {}} color="primary">
                          Submit
                        </Button>
                      </DialogActions> */}
      </Dialog>

      <Dialog onClose={() => setErrorOpen(false)} open={errorOpen}>
        {/* <DialogTitle>Add your bid</DialogTitle> */}
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Container
              maxWidth="md"
              // style={{ margin: "0 20px", padding: "0 50px" }}
            >
              <Typography variant="h5" sx={{ mt: 2 }}>
                Insufficient Funds
              </Typography>

              <Card sx={{ mt: 2 }} variant="outlined">
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    xs={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        You don't have sufficient funds in your wallet. Click on
                        the button below to add funds
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",

                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{ mx: 2 }}
                        variant="contained"
                        onClick={() => router.push("/add-funds")}
                      >
                        Add Funds
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Box>
        </DialogContent>
        {/* <DialogActions>
                        <Button onClick={() => {}} color="primary">
                          Submit
                        </Button>
                      </DialogActions> */}
      </Dialog>
      <Head>
        <title>Dashboard: Finance | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Creators</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  m: -1,
                }}
              >
                <TextField
                  sx={{ m: 1 }}
                  variant="outlined"
                  size="small"
                  label="Search"
                />
                <Button
                  startIcon={<CogIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Filters
                </Button>
              </Grid>
            </Grid>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Creator Name</TableCell>
                  <TableCell align="center">Level</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bid?.creators?.map((creator) => (
                  <TableRow
                    key="1"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Stack direction="row" spacing={1}>
                        {/* <Avatar
                          alt="Remy Sharp"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        /> */}

                        <Typography sx={{ pt: 1 }} variant="p">
                          {creator?.creator?.first +
                            " " +
                            creator?.creator?.last}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      {creator?.creatorLevel}
                    </TableCell>
                    <TableCell align="center">{`$${parseInt(
                      creator?.price
                    ).toFixed(2)}`}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          console.log(user);
                          console.log(creator?.price);
                          if (user?.userData?.funds?.amount < creator?.price) {
                            setErrorOpen(true);
                          } else {
                            setSelectedCreator(creator);
                            setSuccessOpen(true);
                          }
                        }}
                      >
                        Choose Creator
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {/* <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ pt: 1 }} variant="p">
                        Test Name
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">PRO Level</TableCell>
                  <TableCell align="center">$29.00</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" size="small">
                      Choose Creator
                    </Button>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

Creators.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Creators;
