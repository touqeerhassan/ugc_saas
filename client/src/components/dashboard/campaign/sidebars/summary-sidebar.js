import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { Button, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";

function findReimbursementPrice(...prices) {
  let sum = 0;
  for (const element of prices) {
    if (!element) continue;
    sum += parseFloat(element);
  }
  return sum;
}

function toDoublePrice(price) {
  if (price) {
    price = parseFloat(price);
    return price;
  }
  return 0;
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
} from "../../../../store/actions";
import { useAuth } from "../../../../hooks/use-auth";
import { API_SERVICE } from "../../../../config";

function SummarySidebar() {
  const campaign = useSelector((state) => state.campaign);
  console.log(campaign);
  const dispatch = useDispatch();

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
  let subTotalCost = costPerJob * campaign?.content?.noOfCreators;
  let platFormFee = subTotalCost * 0.1;
  let totalBudget = subTotalCost + platFormFee;

  return (
    <Box sx={{ my: 4, mx: 2 }}>
      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Cost per job
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>${costPerJob.toFixed(2)}</div>
        <div style={{ color: "blue", marginLeft: "10px", fontSize: "14px" }}>
          Details
        </div>
        <ExpandMoreIcon style={{ color: "blue" }} />
      </div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Number of creators needed
      </div>
      <div>{campaign?.content?.noOfCreators}</div>

      <Divider sx={{ mt: 2 }} />
      <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "12px", marginRight: "10px" }}>
          Expected Budget
        </div>
        <InfoIcon style={{ fontSize: "14px" }} />
      </div>

      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        ${totalBudget.toFixed(2)}
      </div>
    </Box>
  );
}

export default SummarySidebar;
