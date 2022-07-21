import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
function ContentAndCreatorsSidebar() {
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
      <div style={{ color: "gray", fontSize: "12px" }}>Matching Creators</div>
      <div>2508</div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Price per image
      </div>
      <div>$15.00</div>

      <div style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Reimbursement price per product
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
          value={creators}
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
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>$110.00</div>
    </Box>
  );
}

export default ContentAndCreatorsSidebar;
