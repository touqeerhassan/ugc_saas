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
import RectangleIcon from "@mui/icons-material/RectangleOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import PricingCard from "./cards/pricing-card";
import VideoTimeCard from "./cards/video-time-card";
import AccessTime from "@mui/icons-material/AccessTime";
import MoreTime from "@mui/icons-material/moreTime";
import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";
import CreatorLevelCard from "./cards/creator-level-card";
import InfoIcon from "@mui/icons-material/Info";

export default function Summary() {
  const [description, setDescription] = useState("");
  const [creators, setCreators] = useState(1);
  const cover = "/static/mock-images/covers/cover_4.jpeg";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const increment = () => {
    setCreators((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    if (creators < 2) {
      return;
    }
    setCreators((prevValue) => prevValue - 1);
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
          Campaign Payment: Name of the test
        </Typography>

        <Card sx={{ mt: 4 }} variant="outlined">
          <CardContent>
            <Box
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#F1F2F5",
                p: 2,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6">My Wallet</Typography>
              <Typography align="right" variant="h6">
                $0.00
              </Typography>
            </Box>
            <Divider sx={{ mt: 3 }} />
            <img
              style={{ height: "50px", marginTop: "10px" }}
              src="https://support.moqups.com/hc/article_attachments/115010765209/02._Your_Account_-_Logos_.jpg"
              alt=""
            />
            <div style={{ fontSize: "14px", color: "gray" }}>
              Pay directly from your credit card
            </div>
            <Button
              style={{
                borderRadius: "5px",
                color: "white",
                backgroundColor: "black",
                padding: "5px 10px",
                marginTop: "20px",
                fontSize: "14px",
              }}
              variant="contained"
            >
              Add new Card
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
