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

function CreatorLevelCard({ title, price, selected, onClick }) {
  return (
    <Card
      onClick={onClick}
      variant="outlined"
      align="center"
      style={{
        borderColor: selected ? "#5048E5" : "#E6E8F0",
        backgroundColor: selected ? "#dcdaf9" : "white",
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>{title}</div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: "20px" }}>
              {" "}
              {price ? `+$${price}` : "Included"}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CreatorLevelCard;
