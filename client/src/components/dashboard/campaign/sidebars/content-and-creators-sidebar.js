import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CAMPAIGN,
  ADD_CONTENT,
  ADD_PRODUCT_INFO,
} from "../../../../store/campaign/actions";
import { useAuth } from "../../../../hooks/use-auth";
import { API_SERVICE } from "../../../../config";

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

function findTotalBudget(
  contentPrice,
  reimbursementPrice,
  videoDurPrice,
  creatorPrice
) {
  contentPrice = contentPrice ? parseFloat(contentPrice) : 0;
  return contentPrice + reimbursementPrice + videoDurPrice + creatorPrice;
}

function ContentAndCreatorsSidebar({ content, setContent }) {
  let videoDurationPrice =
    content?.contentType === 1
      ? toDoublePrice(content?.videoDuration?.price)
      : 0;

  let creatorPrice = toDoublePrice(content?.creatorLevel?.price);

  const { contentType } = content;

  const campaign = useSelector((state) => state.campaign);
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
  return (
    <Box sx={{ my: 4, mx: 2 }}>
      <div style={{ color: "gray", fontSize: "12px" }}>Matching Creators</div>
      <div>2508</div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Price per {contentType === 0 ? "image" : "video"}
      </div>
      <div>
        $
        {findContentPrice(
          contentType,
          content?.imageContent?.price,
          content?.videoContent?.price
        ).toFixed(2)}
      </div>

      {contentType === 1 && (
        <>
          <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
            Price for video duration
          </div>
          <div>${videoDurationPrice.toFixed(2)}</div>
        </>
      )}

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Creator level price
      </div>
      <div>${creatorPrice.toFixed(2)}</div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Reimbursement price per product
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          $
          {findReimbursementPrice(
            campaign?.shipping,
            campaign?.product?.price,
            campaign?.tax
          ).toFixed(2)}
        </div>
        <div style={{ color: "blue", marginLeft: "10px", fontSize: "14px" }}>
          Details
        </div>
        <ExpandMoreIcon style={{ color: "blue" }} />
      </div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Number of creators needed
      </div>
      <div style={{ fontSize: "12px", display: "flex" }}>
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
          fullWidth
          value={content?.noOfCreators}
          variant="outlined"
          size="small"
        ></TextField>
        <Button
          onClick={increment}
          variant="outlined"
          style={{
            borderRadius: "5px",
            padding: "5px 10px",
            fontSize: "14px",
          }}
        >
          +
        </Button>
      </div>
      <Divider sx={{ mt: 2 }} />
      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Total Budget
      </div>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        $
        {(
          content?.noOfCreators *
          findTotalBudget(
            findContentPrice(
              contentType,
              content?.imageContent?.price,
              content?.videoContent?.price
            ),
            findReimbursementPrice(
              campaign?.shipping,
              campaign?.product?.price,
              campaign?.tax
            ),
            videoDurationPrice,
            creatorPrice
          )
        ).toFixed(2)}
      </div>
    </Box>
  );
}

export default ContentAndCreatorsSidebar;
