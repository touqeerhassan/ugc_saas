import {
  Box,
  Grid,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Card,
} from "@mui/material";
import React, { useState } from "react";

function PaymentIntent({ createPaymentIntent }) {
  const [currency, setCurrency] = useState("usd");
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState("card");

  return (
    <Box
      maxWidth="600px"
      sx={{
        margin: "40px auto",
        border: 1,
        borderRadius: "2%",
        backgroundColor: "background.paper",
        // minHeight: "100%",
        borderColor: "black",
        p: 5,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Payment Method
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Payment Method"
              onChange={(e) => {
                setType(e.target.value);
                if (e.target.value === "fpx") {
                  setCurrency("myr");
                }
              }}
            >
              <MenuItem value="card">Card</MenuItem>
              <MenuItem value="fpx">FPX</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            fullWidth
            disabled
            label="Payment Method"
            defaultValue="Card"
          />
        </Grid> */}

        <Grid item xs={12}>
          <TextField
            value={amount}
            type="number"
            required={true}
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            fullWidth
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField fullWidth disabled label="Currency" defaultValue="USD" />
        </Grid> */}

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="myr">MYR</MenuItem>
              <MenuItem value="idr">IDR</MenuItem>
              <MenuItem value="usd">USD</MenuItem>
              {/* <MenuItem value="gbp">GBP</MenuItem>
              <MenuItem value="inr">INR</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            onClick={() => createPaymentIntent({ type, amount, currency })}
            sx={{ py: 1.5 }}
          >
            CONTINUE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentIntent;
