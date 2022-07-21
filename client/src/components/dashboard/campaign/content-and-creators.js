import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import {
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import PricingCard from "./cards/pricing-card";
import VideoTimeCard from "./cards/video-time-card";
import AccessTime from "@mui/icons-material/AccessTime";
import MoreTime from "@mui/icons-material/moreTime";
import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";
import CreatorLevelCard from "./cards/creator-level-card";
import InfoIcon from "@mui/icons-material/Info";

export default function ContentAndCreators() {
  const [value, setValue] = React.useState(0);
  const [description, setDescription] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container
        maxWidth="md"
        // style={{ margin: "0 20px", padding: "0 50px" }}
      >
        <NextLink href="/dashboard" passHref>
          <Button component="a" startIcon={<ArrowLeftIcon fontSize="small" />}>
            Dashboard
          </Button>
        </NextLink>
        <Typography variant="h5" sx={{ mt: 3 }}>
          New Campaign: Name of the test
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Content Type</Typography>
            <Box sx={{ width: "100%", py: 2 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label={
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <ImageIcon sx={{ mr: 1 }} />
                        Image
                      </Box>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <VideocamIcon sx={{ mr: 1 }} />
                        Video
                      </Box>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Selfie with creators"
                      price="20.00"
                      description="Selfies with content creators"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Selfie with creators"
                      price="20.00"
                      description="Selfies with content creators"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Selfie with creators"
                      price="20.00"
                      description="Selfies with content creators"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Selfie with creators"
                      price="20.00"
                      description="Selfies with content creators"
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Product demo"
                      price="60.00"
                      description="Detailed on-camera demonstration"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PricingCard
                      title="Product demo"
                      price="60.00"
                      description="Detailed on-camera demonstration"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Product demo"
                      price="60.00"
                      description="Detailed on-camera demonstration"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <PricingCard
                      title="Product demo"
                      price="60.00"
                      description="Detailed on-camera demonstration"
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </Container>
      {value == 1 && (
        <Container maxWidth="md">
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6">Video Duration</Typography>
              <Box sx={{ width: "100%", py: 4 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={3}>
                    <VideoTimeCard
                      time="15 seconds"
                      icon={<AccessTime fontSize="large" />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <VideoTimeCard
                      banner="Save 30%"
                      time="30 seconds"
                      price="+$18.00"
                      icon={<MoreTime fontSize="large" />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <VideoTimeCard
                      banner="Save 50%"
                      time="60 seconds"
                      price="+$30.00"
                      icon={<MoreTime fontSize="large" />}
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>
      )}

      <Container maxWidth="md">
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Content Format</Typography>
            <Box sx={{ width: "100%", py: 4 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Card
                    variant="outlined"
                    align="center"
                    style={{
                      height: "100px",
                      width: "120px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="secondary">Any</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    variant="outlined"
                    align="center"
                    style={{
                      height: "192px",
                      width: "108px",
                    }}
                  >
                    <CardContent>
                      <div>Portrait</div>
                      <div>9:16</div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    variant="outlined"
                    align="center"
                    style={{
                      height: "108px",
                      width: "192px",
                    }}
                  >
                    <CardContent>
                      <div>Landscape</div>
                      <div>16:9</div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    variant="outlined"
                    align="center"
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  >
                    <CardContent>
                      <div>Square</div>
                      <div>1:1</div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="md">
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Content Description</Typography>
            <Box sx={{ width: "100%", pt: 4 }}>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                rows={3}
                id="outlined-textarea"
                // label="Multiline Placeholder"
                placeholder="Please describe in detail what you wan the content to look like"
                multiline
                inputProps={{ maxLength: 600 }}
              />
              <div
                style={{ marginTop: "20px" }}
              >{`Characters: ${description.length}/600`}</div>
              <div style={{ marginTop: "30px" }}>
                Recommendations on what to mention in the description:
              </div>
              <div>1. Specify what you exactly want to see. </div>
              <div>
                2. Specify the location in which the content should be filmed.
              </div>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="md">
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Creators</Typography>
            <Typography
              variant="secondary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: "10px",
              }}
            >
              <div>Creator Level</div>
              <InfoIcon />
            </Typography>

            <Box sx={{ width: "100%", py: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                  <CreatorLevelCard title="Level 1" />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <CreatorLevelCard title="Level 2" price="+$4.50" />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <CreatorLevelCard title="Level 3" price="+$9.00" />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <CreatorLevelCard title="Pro Level" price="+$15.00" />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ width: "100%", pt: 4 }}>
              <div>Gender</div>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Male" />
                <FormControlLabel control={<Checkbox />} label="Female" />
                <FormControlLabel control={<Checkbox />} label="Non Binary" />
              </FormGroup>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
