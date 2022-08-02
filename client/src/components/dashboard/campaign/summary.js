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
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import RectangleIcon from "@mui/icons-material/RectangleOutlined";

function findReimbursementPrice(...prices) {
  let sum = 0;
  for (const element of prices) {
    if (!element) continue;
    sum += parseFloat(element);
  }
  return sum;
}

function findContentPrice(contentType, imagePrice, videoPrice) {
  if (contentType === 0) {
    return imagePrice || 0;
  } else {
    return videoPrice || 0;
  }
}

function findTotalBudget(contentPrice, reimbursementPrice) {
  contentPrice = contentPrice ? parseFloat(contentPrice) : 0;
  return contentPrice + reimbursementPrice;
}

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CAMPAIGN,
  ADD_CONTENT,
  ADD_PRODUCT_INFO,
} from "../../../store/campaign/actions";
import { useAuth } from "../../../hooks/use-auth";
import { API_SERVICE } from "../../../config";
import { useRouter } from "next/router";

function toDoublePrice(price) {
  if (price) {
    price = parseFloat(price);
    return price;
  }
  return 0;
}

export default function Summary({ content, setContent }) {
  const campaign = useSelector((state) => state.campaign);
  const router = useRouter();
  const { campaignId } = router.query;
  console.log(campaign);
  const dispatch = useDispatch();

  const increment = () => {
    setContent({ ...content, noOfCreators: content?.noOfCreators + 1 });
  };

  const decrement = () => {
    if (content?.noOfCreators < 2) {
      return;
    }
    setContent({ ...content, noOfCreators: content?.noOfCreators - 1 });
  };

  let productPrice = toDoublePrice(campaign?.product?.price);
  let contentPrice = findContentPrice(
    campaign?.content?.contentType,
    campaign?.content?.imageContent?.price,
    campaign?.content?.videoContent?.price
  );
  let videoDurationPrice =
    campaign?.content?.contentType === 1
      ? toDoublePrice(campaign?.content?.videoDuration?.price)
      : 0;
  let shipping = toDoublePrice(campaign?.shipping);
  let tax = toDoublePrice(campaign?.tax);
  let creatorPrice = toDoublePrice(campaign?.content?.creatorLevel?.price);
  let costPerJob =
    productPrice +
    contentPrice +
    shipping +
    tax +
    videoDurationPrice +
    creatorPrice;
  let subTotalCost = costPerJob * content?.noOfCreators;
  let platFormFee = subTotalCost * 0.1;
  let totalBudget = subTotalCost + platFormFee;

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
          {`${campaignId ? "Edit" : "New"} Campaign`}: {campaign?.campaignName}
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
                    backgroundImage: `url(${campaign?.product?.cover})`,
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
                    ${productPrice.toFixed(2)}
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
                  {campaign?.selectedPayment === "reimbursement"
                    ? "Reimbursement"
                    : "Delivered By Me"}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  {campaign?.selectedPayment === "reimbursement"
                    ? "Creators buy the product you refund the cost"
                    : "No extra shipping cost/taxes"}
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
                  {campaign?.content?.contentType === 0 ? (
                    <ImageIcon sx={{ mr: 1 }} />
                  ) : (
                    <VideocamIcon sx={{ mr: 1 }} />
                  )}

                  <div style={{ fontSize: "16px", marginRight: "20px" }}>
                    {campaign?.content?.contentType === 0
                      ? campaign?.content?.imageContent?.title
                      : campaign?.content?.videoContent?.title}
                  </div>
                  <RectangleIcon sx={{ mr: 1 }} />
                  <div style={{ fontSize: "16px" }}>
                    {campaign?.content?.contentFormat?.title}
                  </div>
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
                    {campaign?.content?.contentDescription}
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
                  <div style={{ fontSize: "14px" }}>
                    {`Price per
                    ${
                      campaign?.content?.contentType === 0 ? "Image" : "Video"
                    }`}
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    ${contentPrice.toFixed(2)}
                  </div>
                </div>
                {campaign?.content?.contentType === 1 && (
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
                      Price for added video duration
                    </div>
                    <div style={{ fontSize: "14px" }}>
                      ${videoDurationPrice.toFixed(2)}
                    </div>
                  </div>
                )}

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
                  <div style={{ fontSize: "14px" }}>
                    ${productPrice.toFixed(2)}
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
                  <div style={{ fontSize: "14px" }}>Creator level price</div>
                  <div style={{ fontSize: "14px" }}>
                    ${creatorPrice.toFixed(2)}
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
                  <div style={{ fontSize: "14px" }}>Shipping</div>
                  <div style={{ fontSize: "14px" }}>${shipping.toFixed(2)}</div>
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
                  <div style={{ fontSize: "14px" }}> ${tax.toFixed(2)}</div>
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
                    ${costPerJob.toFixed(2)}
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
                      value={content?.noOfCreators}
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
                  <div style={{ fontSize: "14px" }}>
                    ${subTotalCost.toFixed(2)}
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
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    Platform Fee
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                    ${platFormFee.toFixed(2)}
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
                    ${totalBudget.toFixed(2)}
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
