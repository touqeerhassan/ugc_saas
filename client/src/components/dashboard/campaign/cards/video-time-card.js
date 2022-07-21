import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import React from "react";

function VideoTimeCard({ icon, time, banner, price }) {
  return (
    <Card variant="outlined" align="center">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            {banner ? (
              <Box sx={{ mb: 1 }}>
                <span
                  style={{
                    fontSize: "12px",
                    backgroundColor: "#E8C309",
                    padding: "2px 5px",
                    fontWeight: "bold",
                  }}
                >
                  {banner}
                </span>
              </Box>
            ) : (
              <Box sx={{ mb: 1 }}>
                <span
                  style={{
                    fontSize: "12px",
                    // backgroundColor: "#E8C309",
                    padding: "2px 5px",
                    fontWeight: "bold",
                  }}
                >
                  Free
                </span>
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            {icon}
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: "12px" }}>{time}</div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: "20px" }}>{price || "Included"}</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default VideoTimeCard;
