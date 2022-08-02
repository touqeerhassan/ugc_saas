import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

function ContentFormatCard({ height, width, title, ratio, selected, onClick }) {
  return (
    <Card
      variant="outlined"
      align="center"
      onClick={onClick}
      style={{
        height: height,
        width: width,
        borderColor: selected ? "#5048E5" : "#E6E8F0",
        backgroundColor: selected ? "#dcdaf9" : "white",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="secondary">{title}</Typography>
        {ratio && <Typography variant="secondary">{ratio}</Typography>}
      </CardContent>
    </Card>
  );
}

export default ContentFormatCard;
