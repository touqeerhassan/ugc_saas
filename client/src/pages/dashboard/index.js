import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Tabs,
  Tab,
  Avatar,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { OverviewBanner } from "../../components/dashboard/overview/overview-banner";
import { OverviewCryptoWallet } from "../../components/dashboard/overview/overview-crypto-wallet";
import { OverviewInbox } from "../../components/dashboard/overview/overview-inbox";
import { OverviewLatestTransactions } from "../../components/dashboard/overview/overview-latest-transactions";
import { OverviewPrivateWallet } from "../../components/dashboard/overview/overview-private-wallet";
import { OverviewTotalBalance } from "../../components/dashboard/overview/overview-total-balance";
import { OverviewTotalTransactions } from "../../components/dashboard/overview/overview-total-transactions";
import { ArrowRight as ArrowRightIcon } from "../../icons/arrow-right";
import { Briefcase as BriefcaseIcon } from "../../icons/briefcase";
import { Download as DownloadIcon } from "../../icons/download";
import { ExternalLink as ExternalLinkIcon } from "../../icons/external-link";
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../icons/information-circle-outlined";
import { Reports as ReportsIcon } from "../../icons/reports";
import { Users as UsersIcon } from "../../icons/users";
import { API_SERVICE } from "../../config";
import { gtm } from "../../lib/gtm";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/use-auth";
import HoverVideoPlayer from "react-hover-video-player";
import { videoLinks, imageLinks } from "../../content-data/data";

const Overview = () => {
  const [displayBanner, setDisplayBanner] = useState(true);
  const [value, setValue] = useState("Video");
  const [campaigns, setCampaigns] = useState([]);
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_SERVICE}/get_campaigns/${user?.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        // console.log(response);
        const data = await response.json();
        console.log(data);
        setCampaigns(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBid = async () => {
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
  console.log(creators);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchCampaigns();
    fetchBid();
  }, [user?.id]);

  useEffect(() => {
    // router.push('/dashboard/orders');
    gtm.push({ event: "page_view" });
  }, []);

  useEffect(() => {
    // Restore the persistent state from local/session storage
    const value = globalThis.sessionStorage.getItem("dismiss-banner");

    if (value === "true") {
      // setDisplayBanner(false);
    }
  }, []);

  const handleDismissBanner = () => {
    // Update the persistent state
    // globalThis.sessionStorage.setItem('dismiss-banner', 'true');
    setDisplayBanner(false);
  };
  console.log(videoLinks);
  console.log(imageLinks);

  return (
    <>
      <Head>
        <title>Dashboard: Overview | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          {loading === "false" ? (
            "Loading..."
          ) : (
            <>
              <Box sx={{ mb: 4 }}>
                <Grid container justifyContent="space-between" spacing={3}>
                  <Grid item>
                    <Typography variant="h4">Dashboard</Typography>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow: "3px 2px 5px  lightgrey",
                    mt: 3,
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      sx={{
                        alignItems: "center",
                        borderRight: (theme) => ({
                          md: `1px solid ${theme.palette.divider}`,
                        }),
                        borderBottom: (theme) => ({
                          md: "none",
                          xs: `1px solid ${theme.palette.divider}`,
                        }),
                        display: "flex",
                        justifyContent: "space-between",
                        p: 3,
                      }}
                    >
                      <div>
                        <Typography variant="h5">
                          {campaigns?.length}
                        </Typography>
                        <Typography color="textSecondary" variant="overline">
                          My Posts
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      sx={{
                        alignItems: "center",
                        borderRight: (theme) => ({
                          md: `1px solid ${theme.palette.divider}`,
                        }),
                        borderBottom: (theme) => ({
                          md: "none",
                          xs: `1px solid ${theme.palette.divider}`,
                        }),
                        display: "flex",
                        justifyContent: "space-between",
                        p: 3,
                      }}
                    >
                      <div>
                        <Typography variant="h5">
                          {
                            campaigns.filter(
                              (campaign) => campaign.content?.contentType === 0
                            ).length
                          }
                        </Typography>
                        <Typography color="textSecondary" variant="overline">
                          My Images
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                      sx={{
                        alignItems: "center",
                        borderRight: (theme) => ({
                          md: `1px solid ${theme.palette.divider}`,
                        }),
                        borderBottom: (theme) => ({
                          md: "none",
                          xs: `1px solid ${theme.palette.divider}`,
                        }),
                        display: "flex",
                        justifyContent: "space-between",
                        p: 3,
                      }}
                    >
                      <div>
                        <Typography variant="h5">
                          {
                            campaigns.filter(
                              (campaign) => campaign.content?.contentType === 1
                            ).length
                          }
                        </Typography>
                        <Typography color="textSecondary" variant="overline">
                          My Videos
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  boxShadow: "3px 2px 5px  lightgrey",
                  pt: 2,
                  pb: 6,
                }}
              >
                <Box style={{ textAlign: "center", lineHeight: "18px" }}>
                  <h2>What kind of content can you expect?</h2>
                  {/* <p>Videos start at as low as $60 and photos start at $15.</p> */}
                </Box>

                <Box>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        centered
                      >
                        <Tab
                          sx={{ fontSize: "18px" }}
                          label="Video"
                          value="Video"
                        />
                        <Tab
                          sx={{ fontSize: "18px" }}
                          label="Photo"
                          value="Photo"
                        />
                      </TabList>
                    </Box>
                    <TabPanel value="Video">
                      <Grid
                        container
                        spacing={{ xs: 3, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        {videoLinks &&
                          videoLinks.map((video) => {
                            return (
                              <>
                                <Grid item xs={2} sm={4} md={2}>
                                  <HoverVideoPlayer
                                    videoStyle={{
                                      borderRadius: "14px",
                                    }}
                                    style={{
                                      width: "100%",
                                    }}
                                    videoSrc={video.url}
                                  />
                                </Grid>
                              </>
                            );
                          })}
                      </Grid>
                    </TabPanel>
                    <TabPanel value="Photo">
                      <Grid
                        container
                        spacing={{ xs: 3, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        {imageLinks &&
                          imageLinks.map((image, index) => {
                            return (
                              <Grid item xs={2} sm={4} md={2}>
                                <img
                                  style={{ borderRadius: "14px" }}
                                  width="100%"
                                  height="100%"
                                  src={image.src}
                                ></img>
                              </Grid>
                            );
                          })}
                      </Grid>
                    </TabPanel>
                  </TabContext>
                </Box>
                <Box style={{ textAlign: "center", lineHeight: "18px" }}>
                  <h2>Want the same content with your product?</h2>
                  <p>Start now and hire your first creator!</p>
                  <Button
                    onClick={() => router.push("/dashboard/campaigns/create")}
                    variant="contained"
                    size="large"
                    sx={{ color: "#FFFFFF", backgroundColor: "#111827", mt: 1 }}
                  >
                    Create Campaign
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  boxShadow: "3px 2px 5px  lightgrey",
                  pb: 6,
                  mt: 4,
                  paddingLeft: "40px",
                  paddingTop: "40px",
                }}
              >
                <h3>Hire lots of UGC creators ready to work with you!</h3>
                <Box>
                  <Grid
                    container
                    spacing={{ xs: 3, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {creators &&
                      creators.map((creator) => {
                        return (
                          <>
                            <Grid
                              style={{ position: "relative" }}
                              item
                              xs={2}
                              sm={4}
                              md={2}
                            >
                              <div>
                                <Avatar
                                  sx={{ width: 100, height: 100 }}
                                  alt={creator?.first[0] + creator?.last[0]}
                                  src={creator?.profile}
                                />
                              </div>

                              <Typography
                                variant="h6"
                                sx={{
                                  position: "absolute",
                                  top: "100px",
                                  left: "30px",
                                  backgroundColor: "#f5f5f5",
                                  color: "black",
                                  width: "fit-content",
                                  padding: "7px",
                                  borderRadius: "15px",
                                }}
                              >
                                {creator?.first}
                              </Typography>
                            </Grid>
                          </>
                        );
                      })}
                  </Grid>
                </Box>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};

Overview.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Overview;
