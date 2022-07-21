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

function CreatorLevelCard({ title, price }) {
  return (
    <Card variant="outlined" align="center">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>{title}</div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: "20px" }}>{price || "Included"}</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CreatorLevelCard;
