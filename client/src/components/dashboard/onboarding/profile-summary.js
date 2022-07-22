import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import {
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
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
import { FileDropzone } from "../../file-dropzone";

import { gtm } from "../../../lib/gtm";
import { fileToBase64 } from "../../../utils/file-to-base64";

export default function Disclaimer({ children, onClick }) {
  const [cover, setCover] = useState("/static/mock-images/covers/cover_4.jpeg");
  const [info, setInfo] = useState("");

  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  };

  const handleRemove = () => {
    setCover(null);
  };

  return (
    <>
      <Container
        maxWidth="md"
        // style={{ margin: "0 20px", padding: "0 50px" }}
      >
        <Card sx={{ display: "flex" }}>
          <Box>
            <CardMedia
              backgroundSize="contain"
              height="100%"
              width="100%"
              component="img"
              image={cover}
              alt="green iguana"
            />
          </Box>

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
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Edit
                </Typography>
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
                    image={cover}
                    alt="green iguana"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>First name</div>
                <div style={{ color: "gray" }}>Shivanshu</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>Last name</div>
                <div style={{ color: "gray" }}>Gupta</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>Date of Birth</div>
                <div style={{ color: "gray" }}>01/01/1999</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>Gender</div>
                <div style={{ color: "gray" }}>Male</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>Phone Number</div>
                <div style={{ color: "gray" }}>+91 2873646361</div>
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
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Edit
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <div style={{ fontWeight: "bold" }}>Country</div>
                <div style={{ color: "gray" }}>USA</div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ fontWeight: "bold" }}>Address</div>
                <div style={{ color: "gray" }}>B20293, Sherlock Lane</div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ fontWeight: "bold" }}>City/Town</div>
                <div style={{ color: "gray" }}>Falls Church</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>State</div>
                <div style={{ color: "gray" }}>Georgia</div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ fontWeight: "bold" }}>Zip Code</div>
                <div style={{ color: "gray" }}>28388</div>
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
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Edit
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ display: "flex" }}>
                <InstagramIcon sx={{ mr: 2 }}></InstagramIcon>
                <div style={{ color: "gray" }}>Not provided</div>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <FacebookIcon sx={{ mr: 2 }}></FacebookIcon>
                <div style={{ color: "gray" }}>Not provided</div>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <TwitterIcon sx={{ mr: 2 }}></TwitterIcon>
                <div style={{ color: "gray" }}>Not provided</div>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <YouTubeIcon sx={{ mr: 2 }}></YouTubeIcon>
                <div style={{ color: "gray" }}>Not provided</div>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <FilterDramaIcon sx={{ mr: 2 }}></FilterDramaIcon>
                <div style={{ color: "gray" }}>Not provided</div>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <LanguageIcon sx={{ mr: 2 }}></LanguageIcon>
                <div style={{ color: "gray" }}>Not provided</div>
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
                <Typography variant="h5">Categories</Typography>
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Edit
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <div style={{ fontWeight: "bold" }}>Primary Category</div>
                <div style={{ color: "gray" }}>Electronics</div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ fontWeight: "bold" }}>Secondary Category</div>
                <div style={{ color: "gray" }}>Sports</div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ fontWeight: "bold" }}>Third Category</div>
                <div style={{ color: "gray" }}>Food & Beverages</div>
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
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Edit
                </Typography>
              </Grid>

              <Grid item xs={12}>
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
                    image={cover}
                    alt="green iguana"
                  />
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
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Edit
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <div style={{ color: "gray" }}>Not provided</div>
              </Grid>

              <Grid item xs={12}>
                <Button
                  onClick={onClick}
                  fullWidth
                  sx={{ backgroundColor: "black", color: "white" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
