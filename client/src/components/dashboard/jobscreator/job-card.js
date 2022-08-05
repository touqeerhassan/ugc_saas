import {
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  imageContents,
  videoContents,
  videoDurationContents,
  creatorLevels,
  contentFormatContents,
} from "../../../content-data/data";
import { Box } from "@mui/system";

function calcBudget(budget) {
  let totalBudget = 0;
  if (budget?.shipping) {
    totalBudget += parseInt(budget.shipping);
  } else if (budget?.tax) {
    totalBudget += parseInt(budget.tax);
  } else if (budget?.product?.price) {
    totalBudget += parseInt(budget.product.price);
  }
}

function JobCard({ campaign }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            md={4}
            style={{ alignItems: "center", display: "flex" }}
          >
            <img
              style={{
                width: "100%",
              }}
              src={campaign?.product?.cover}
              alt="Image"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <Box sx={{ p: 2 }}>
              {/* <Typography sx={{ float: "right" }}>
                Earning <br />
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  $59.00
                </span>
              </Typography> */}
              <Typography variant="h6" sx={{ float: "left" }}>
                {campaign?.product?.name} <br />
                <span
                  style={{
                    fontSize: "15px",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  ${parseInt(campaign?.product?.price).toFixed(2)}
                </span>
              </Typography>
              <br />
              <br />
              <Chip
                color="primary"
                label="Free product"
                variant="outlined"
                size="small"
                sx={{ mt: 2 }}
              />
              <Stack direction="row" sx={{ mt: 3 }} spacing={1}>
                {campaign?.content?.contentType === 0 ? (
                  <ImageIcon color="primary" />
                ) : (
                  <VideocamIcon color="primary" />
                )}

                <Typography variant="subtitle2">
                  Product Demo
                  {campaign?.content?.contentType === 0 ? " Image" : " Video"}
                </Typography>
              </Stack>
              <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                <StayCurrentPortraitIcon color="primary" />
                <Typography variant="subtitle2">
                  {`${campaign?.content?.contentType === 0 ? "Image" : "Video"}
                   orientation :
                  ${
                    contentFormatContents.find(
                      (item) => item.id === campaign?.content?.contentFormat
                    ).title
                  }`}
                </Typography>
              </Stack>
              {campaign?.content?.contentType === 1 && (
                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                  <AccessTimeIcon color="primary" />
                  <Typography variant="subtitle2">
                    {`
                    ${
                      videoDurationContents.find(
                        (item) => item.id === campaign?.content?.videoDuration
                      ).time
                    }
                    sec`}
                  </Typography>
                </Stack>
              )}
              <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                <Button size="small" variant="contained" fullWidth>
                  Take this job
                </Button>
                <IconButton color="error" component="label">
                  <FavoriteIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default JobCard;
