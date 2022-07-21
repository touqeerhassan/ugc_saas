import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

function PricingCard({ title, price, description }) {
  return (
    <Card variant="outlined" align="center">
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>{title}</div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">
              {`$${price}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: "12px" }}>{description}</div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: "14px", color: "blue", marginTop: "20px" }}>
              Show Examples
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PricingCard;