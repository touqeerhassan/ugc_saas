import { useEffect } from "react";
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
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Cog as CogIcon } from "../../icons/cog";
import { gtm } from "../../lib/gtm";

const Creators = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
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
                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>

                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>

                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>

                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>

                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>

                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>

                <TableRow
                  key="1"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />

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
                </TableRow>
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
