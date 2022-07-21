import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { Button, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
function SummarySidebar() {
  const [creators, setCreators] = useState(1);
  const increment = () => {
    setCreators((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    if (creators < 2) {
      return;
    }
    setCreators((prevValue) => prevValue - 1);
  };
  return (
    <Box sx={{ my: 4, mx: 2 }}>
      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Cost per product
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>$95.00</div>
        <div style={{ color: "blue", marginLeft: "10px", fontSize: "14px" }}>
          Details
        </div>
        <ExpandMoreIcon style={{ color: "blue" }} />
      </div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Number of creators needed
      </div>
      <div>2</div>

      <Divider sx={{ mt: 2 }} />
      <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "12px", marginRight: "10px" }}>
          Expected Budget
        </div>
        <InfoIcon style={{ fontSize: "14px" }} />
      </div>

      <div style={{ fontWeight: "bold", fontSize: "18px" }}>$110.00</div>
    </Box>
  );
}

export default SummarySidebar;
