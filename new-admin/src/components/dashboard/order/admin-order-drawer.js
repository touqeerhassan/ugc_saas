import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import numeral from "numeral";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import { X as XIcon } from "../../../icons/x";
import { PropertyList } from "../../property-list";
import { PropertyListItem } from "../../property-list-item";
import { Scrollbar } from "../../scrollbar";

import VideocamIcon from "@mui/icons-material/Videocam";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Link from "next/link";

import ImageIcon from "@mui/icons-material/Image";
import RectangleIcon from "@mui/icons-material/RectangleOutlined";

import { API_SERVICE } from "../../../config";

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

import { useRouter } from "next/router";
import { useMounted } from "../../../hooks/use-mounted";

function toDoublePrice(price) {
  if (price) {
    price = parseFloat(price);
    return price;
  }
  return 0;
}

const OrderPreview = (props) => {
  const { lgUp, order, onClose } = props;
  const [reviewOpen, setReviewOpen] = useState(false);
  const [review, setReview] = useState("");
  const handleReviewOpen = () => {
    setReviewOpen(true);
  };
  const handleReviewClose = () => {
    setReviewOpen(false);
  };

  let productPrice = toDoublePrice(order?.campaign?.product?.price);
  let contentPrice = findContentPrice(
    order?.campaign?.content?.contentType,
    order?.campaign?.content?.imageContent?.price,
    order?.campaign?.content?.videoContent?.price
  );
  let videoDurationPrice =
    order?.campaign?.content?.contentType === 1
      ? toDoublePrice(order?.campaign?.content?.videoDuration?.price)
      : 0;
  let shipping = toDoublePrice(order?.campaign?.shipping);
  let tax = toDoublePrice(order?.campaign?.tax);
  let creatorPrice = toDoublePrice(order?.campaign?.content?.creatorLevel?.price);
  let costPerJob = productPrice + contentPrice + shipping + tax + videoDurationPrice + creatorPrice;
  let subTotalCost = costPerJob * order?.campaign?.content?.noOfCreators;
  let platFormFee = subTotalCost * 0.04;
  let totalBudget = subTotalCost + platFormFee;

  const align = lgUp ? "horizontal" : "vertical";

  return (
    <>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Campaign Name: {order?.campaign?.campaignName}
      </Typography>
      {order?.campaign?.content?.contentType === 0 ? (
        <center>
          <img style={{ width: "320px", marginTop: "5px" }} src={order?.demoImage} alt="Image" />
        </center>
      ) : (
        <center>
          <video
            style={{ width: "320px", height: "180px", marginTop: "5px" }}
            src={order?.demoVideo}
            alt="Video"
            controls
          />
        </center>
      )}

      <Box
        sx={{
          alignItems: "center",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
          borderRadius: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
          my: 3,
        }}
      >
        <Typography color="textSecondary" sx={{ mr: 2 }} variant="overline">
          {`Download ${order?.campaign?.content?.contentType === 0 ? "Image" : "Video"}`}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
            m: -1,
            "& > button": {
              m: 1,
            },
          }}
        >
          <Link href={order?.demoVideo} passHref>
            <a target="_blank" download>
              <Button size="small" variant="contained">
                Download
              </Button>
            </a>
          </Link>
        </Box>
      </Box>

      {/* <Typography sx={{ my: 3 }} variant="h6">
        Details
      </Typography> */}
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
            <div style={{ color: "gray", fontSize: "14px" }}>Content type and format</div>

            {/* <div
              style={{ color: "blue", fontSize: "14px" }}
              color="blue"
            >
              Edit
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            {order?.campaign?.content?.contentType === 0 ? (
              <ImageIcon sx={{ mr: 1 }} />
            ) : (
              <VideocamIcon sx={{ mr: 1 }} />
            )}

            <div style={{ fontSize: "16px", marginRight: "20px" }}>
              {order?.campaign?.content?.contentType === 0
                ? order?.campaign?.content?.imageContent?.title
                : order?.campaign?.content?.videoContent?.title}
            </div>
            <RectangleIcon sx={{ mr: 1 }} />
            <div style={{ fontSize: "16px" }}>{order?.campaign?.content?.contentFormat?.title}</div>
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
            <div style={{ color: "gray", fontSize: "14px" }}>Description</div>

            {/* <div
              style={{ color: "blue", fontSize: "14px" }}
              color="blue"
            >
              Edit
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "16px", marginRight: "20px" }}>
              {order?.campaign?.content?.contentDescription}
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
        ${order?.campaign?.content?.contentType === 0 ? "Image" : "Video"}`}
            </div>
            <div style={{ fontSize: "14px" }}>${contentPrice.toFixed(2)}</div>
          </div>
          {order?.campaign?.content?.contentType === 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <div style={{ fontSize: "14px" }}>Price for added video duration</div>
              <div style={{ fontSize: "14px" }}>${videoDurationPrice.toFixed(2)}</div>
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
            <div style={{ fontSize: "14px" }}>${productPrice.toFixed(2)}</div>
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
            <div style={{ fontSize: "14px" }}>${creatorPrice.toFixed(2)}</div>
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
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>Cost per job</div>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>${costPerJob.toFixed(2)}</div>
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
            <div style={{ fontSize: "14px" }}>Subtotal cost per campaign</div>
            <div style={{ fontSize: "14px" }}>${subTotalCost.toFixed(2)}</div>
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
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>Platform Fee</div>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>${platFormFee.toFixed(2)}</div>
          </div>
          <div align="right" style={{ fontSize: "14px", fontWeight: "bold" }}>
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
              Expected total budget(entire campaign)
            </div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>${totalBudget.toFixed(2)}</div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const OrderDrawerDesktop = styled(Drawer)({
  width: 500,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    position: "relative",
    width: 500,
  },
});

const OrderDrawerMobile = styled(Drawer)({
  flexShrink: 0,
  maxWidth: "100%",
  height: "calc(100% - 64px)",
  width: 500,
  "& .MuiDrawer-paper": {
    height: "calc(100% - 64px)",
    maxWidth: "100%",
    top: 64,
    width: 500,
  },
});

export const OrderDrawer = (props) => {
  const { containerRef, onClose, open, order, ...other } = props;

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = order ? (
    <>
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 2,
        }}
      >
        <Typography color="inherit" variant="h6">
          {order.number}
        </Typography>
        <IconButton color="inherit" onClick={onClose}>
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          px: 3,
          py: 4,
        }}
      >
        <OrderPreview order={order} lgUp={lgUp} onClose={onClose} />
      </Box>
    </>
  ) : null;

  if (lgUp) {
    return (
      <OrderDrawerDesktop
        anchor="right"
        open={open}
        SlideProps={{ container: containerRef?.current }}
        variant="persistent"
        {...other}
      >
        {content}
      </OrderDrawerDesktop>
    );
  }

  return (
    <OrderDrawerMobile
      anchor="right"
      ModalProps={{ container: containerRef?.current }}
      onClose={onClose}
      open={open}
      SlideProps={{ container: containerRef?.current }}
      variant="temporary"
      {...other}
    >
      {content}
    </OrderDrawerMobile>
  );
};

OrderDrawer.propTypes = {
  containerRef: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  order: PropTypes.object,
};
