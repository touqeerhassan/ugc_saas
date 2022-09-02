import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Avatar,
  Dialog,
  DialogContent,
  Card,
  CardContent,
  DialogActions,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

import { Cog as CogIcon } from "../../icons/cog";
import { gtm } from "../../lib/gtm";
import { useRouter } from "next/router";
import { API_SERVICE } from "../../config";
import { useAuth } from "../../hooks/use-auth";

import CardActions from "@mui/material/CardActions";

import NextLink from "next/link";

import {
  CardMedia,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { ArrowLeft as ArrowLeftIcon } from "../../icons/arrow-left";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageIcon from "@mui/icons-material/Image";
import RectangleIcon from "@mui/icons-material/RectangleOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import AccessTime from "@mui/icons-material/AccessTime";
import MoreTime from "@mui/icons-material/moreTime";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";

const Creators = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [creators, setCreators] = useState([]);

  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["userId", "userType", "name", "email"]);

  const fetchCreators = async () => {
    try {
      const response = await fetch(`${API_SERVICE}/get_all_creators`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setCreators(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_SERVICE}/get_all_users`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setUsers(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  useEffect(() => {
    fetchUsers();
    fetchCreators();
  }, []);

  function search(items) {
    return items?.filter((item) => {
      return searchParam.some((newItem) => {
        console.log(item);
        console.log(newItem);
        return item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
      });
    });
  }

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setQ(e.target.value);
  };

  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    <>
      <Dialog onClose={() => setSuccessOpen(false)} open={successOpen} maxWidth="md">
        <DialogContent>
          <Container maxWidth="lg">
            <Card sx={{ display: "flex" }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5">Personal Information</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      <CardMedia
                        backgroundSize="contain"
                        height="100%"
                        width="100%"
                        component="img"
                        image={selectedCreator?.profile}
                        alt="green iguana"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>First name</div>
                    <div style={{ color: "gray" }}>{selectedCreator?.first || "Not provided"}</div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>Last name</div>
                    <div style={{ color: "gray" }}>{selectedCreator?.last || "Not provided"}</div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>Date of Birth</div>
                    <div style={{ color: "gray" }}>{selectedCreator?.DOB || "Not provided"}</div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>Gender</div>
                    <div style={{ color: "gray" }}>{selectedCreator?.gender || "Not provided"}</div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>Phone Number</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.contact || "Not provided"}
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Typography variant="h5">Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>Country</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.address?.country || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>Address Line 1</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.address?.line1 || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>Address Line 2</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.address?.line2 || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>City/Town</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.address?.city || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>State</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.address?.state || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div style={{ fontWeight: "bold" }}>Zip Code</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.address?.zip || "Not provided"}
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Typography variant="h5">Social Media Links</Typography>
                  </Grid>
                  {isValidUrl(selectedCreator?.social?.instagram) && (
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <InstagramIcon sx={{ mr: 2 }}></InstagramIcon>
                      <div
                        style={{ color: "gray" }}
                        onClick={() => {
                          router.push(selectedCreator?.social?.instagram);
                        }}
                      >
                        {selectedCreator?.social?.instagram || "Not provided"}
                      </div>
                    </Grid>
                  )}

                  {isValidUrl(selectedCreator?.social?.facebook) && (
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <FacebookIcon sx={{ mr: 2 }}></FacebookIcon>
                      <div
                        style={{ color: "gray" }}
                        onClick={() => {
                          router.push(selectedCreator?.social?.facebook);
                        }}
                      >
                        {selectedCreator?.social?.facebook || "Not provided"}
                      </div>
                    </Grid>
                  )}
                  {isValidUrl(selectedCreator?.social?.twitter) && (
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <TwitterIcon sx={{ mr: 2 }}></TwitterIcon>
                      <div
                        style={{ color: "gray" }}
                        onClick={() => {
                          router.push(selectedCreator?.social?.twitter);
                        }}
                      >
                        {selectedCreator?.social?.twitter || "Not provided"}
                      </div>
                    </Grid>
                  )}
                  {isValidUrl(selectedCreator?.social?.youtube) && (
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <YouTubeIcon sx={{ mr: 2 }}></YouTubeIcon>
                      <div
                        style={{ color: "gray" }}
                        onClick={() => {
                          router.push(selectedCreator?.social?.youtube);
                        }}
                      >
                        {selectedCreator?.social?.youtube || "Not provided"}
                      </div>
                    </Grid>
                  )}
                  {isValidUrl(selectedCreator?.social?.amazon) && (
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <FilterDramaIcon sx={{ mr: 2 }}></FilterDramaIcon>
                      <div
                        style={{ color: "gray" }}
                        onClick={() => {
                          router.push(selectedCreator?.social?.amazon);
                        }}
                      >
                        {selectedCreator?.social?.amazon || "Not provided"}
                      </div>
                    </Grid>
                  )}
                  {isValidUrl(selectedCreator?.social?.website) && (
                    <Grid item xs={12} sx={{ display: "flex" }}>
                      <LanguageIcon sx={{ mr: 2 }}></LanguageIcon>
                      <div
                        style={{ color: "gray" }}
                        onClick={() => {
                          router.push(selectedCreator?.social?.website);
                        }}
                      >
                        {selectedCreator?.social?.website || "Not provided"}
                      </div>
                    </Grid>
                  )}

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Typography variant="h5">Categories</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>Primary Category</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.categories?.primary || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>Secondary Category</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.categories?.secondary || "Not provided"}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ fontWeight: "bold" }}>Third Category</div>
                    <div style={{ color: "gray" }}>
                      {selectedCreator?.categories?.tertiary || "Not provided"}
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Typography variant="h5">Certification</Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Typography variant="secondary" sx={{ fontWeight: "bold" }}>
                      Image Certification
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      {selectedCreator?.brandSelfie ? (
                        <CardMedia
                          backgroundSize="contain"
                          height="100%"
                          width="100%"
                          component="img"
                          image={selectedCreator?.brandSelfie}
                          alt="green iguana"
                        />
                      ) : (
                        <div style={{ color: "gray" }}>Not provided</div>
                      )}
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Typography variant="secondary" sx={{ fontWeight: "bold" }}>
                      Video Certification
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      sx={{
                        width: "200px",
                        height: "150px",
                      }}
                    >
                      {selectedCreator?.productDemo ? (
                        <video
                          controls
                          height="100%"
                          width="100%"
                          component="video"
                          src={selectedCreator?.productDemo}
                        />
                      ) : (
                        <div style={{ color: "gray" }}>Not provided</div>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSuccessOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
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
                <Typography variant="h4">Users</Typography>
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
                  value={q}
                  onChange={handleSearch}
                />
              </Grid>
            </Grid>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Sr No.</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Funds</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {search(users)?.map((user, index) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{user?.name || "Not provided"}</TableCell>
                    <TableCell align="center">{user?.email || "Not provided"}</TableCell>
                    <TableCell align="center">{user?.userType}</TableCell>
                    <TableCell align="center">{`$${parseInt(user?.funds?.amount).toFixed(
                      2
                    )}`}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          console.log(user);
                          if (user?.userType === "brand") return;
                          // console.log(creator?.price);
                          setSelectedCreator(
                            creators.find((creator) => creator.userId === user.userId)
                          );
                          setSuccessOpen(true);
                        }}
                      >
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
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
