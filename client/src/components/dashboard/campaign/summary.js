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
          New Campaign: Name of the test
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Grid
              container
              spacing={2}
              xs={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h6">Product Information</Typography>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    backgroundImage: `url(${cover})`,
                    backgroundPosition: "top left",
                    // backgroundSize: "cover",
                    borderRadius: 1,
                    height: 150,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>Test</div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "20px", fontSize: "16px" }}>
                    $12.00
                  </div>
                  <div style={{ fontSize: "16px", color: "#0000EE" }}>
                    Product Link
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Reimbursement
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Creators buy the product you refund the cost
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Container
        maxWidth="md"
        // style={{ margin: "0 20px", padding: "0 50px" }}
      >
        <Card sx={{ mt: 4 }}>
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
                <Typography variant="h6">Content and Creators</Typography>
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ color: "gray", fontSize: "14px" }}>
                    Content type and format
                  </div>

                  <div style={{ color: "blue", fontSize: "14px" }} color="blue">
                    Edit
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <ImageIcon sx={{ mr: 1 }} />
                  <div style={{ fontSize: "16px", marginRight: "20px" }}>
                    Selfie with product
                  </div>
                  <RectangleIcon sx={{ mr: 1 }} />
                  <div style={{ fontSize: "16px" }}>Landscape</div>
                </div>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ color: "gray", fontSize: "14px" }}>
                    Description
                  </div>

                  <div style={{ color: "blue", fontSize: "14px" }} color="blue">
                    Edit
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ fontSize: "16px", marginRight: "20px" }}>
                    Test
                  </div>
                </div>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <div style={{ color: "gray", fontSize: "14px" }}>Cost</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px" }}>Price per Image</div>
                  <div style={{ fontSize: "14px" }}>$15.00</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px" }}>Product price</div>
                  <div style={{ fontSize: "14px" }}>$12.00</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px" }}>Shipping</div>
                  <div style={{ fontSize: "14px" }}>$79.00</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px" }}>Taxes</div>
                  <div style={{ fontSize: "14px" }}>$4.00</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    Cost per job
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                    $110.00
                  </div>
                </div>
                <div
                  align="right"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  x
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px" }}>Number of creators</div>
                  <div style={{ fontSize: "14px", display: "flex" }}>
                    <Button
                      onClick={decrement}
                      variant="outlined"
                      style={{
                        borderRadius: "5px",
                        padding: "5px 10px",
                        fontSize: "14px",
                      }}
                    >
                      -
                    </Button>
                    <TextField
                      value={creators}
                      variant="outlined"
                      sx={{ minHeight: 0, width: "100px", padding: 0 }}
                    ></TextField>
                    <Button
                      onClick={increment}
                      variant="outlined"
                      sx={{ minHeight: 0, minWidth: 50, padding: 0 }}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "14px" }}>
                    Subtotal cost per campaign
                  </div>
                  <div style={{ fontSize: "14px" }}>{`$${
                    110 * creators
                  }.00`}</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    Platform Fee
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                    $11.00
                  </div>
                </div>
                <div
                  align="right"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  =
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Expected total budget(for the entire campaign)
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {`${creators * 110 + 11}.00`}
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
