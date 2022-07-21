//React - Stepper
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Page - 1
import { useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const ProductDescription = ({ title, value }) => (
  <Box sx={{ pb: 2 }}>
    <Typography variant="secondary">{title}</Typography>
    <Typography variant="h6">{value}</Typography>
  </Box>
);

function ProductInformation({ productInfo }) {
  const [selectedPayment, setSelectedPayment] = useState("reimbursement");
  const [shipping, setShipping] = useState("");
  const [tax, setTax] = useState("");
  return (
    <>
      <Container
        maxWidth="md"
        // style={{ margin: "0 20px", padding: "0 50px" }}
      >
        <NextLink href="/dashboard" passHref>
          <Button component="a" startIcon={<ArrowLeftIcon fontSize="small" />}>
            Dashboard
          </Button>
        </NextLink>
        <Typography variant="h5" sx={{ mt: 3 }}>
          Campaign Details:
          {` ${productInfo.campaignName || " No product selected"} `}
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Grid
              container
              spacing={2}
              xs={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h6">Product Information</Typography>
              </Grid>
              <Grid item xs={4}>
                {productInfo.product?.cover ? (
                  <Box
                    sx={{
                      backgroundImage: `url(${productInfo.product?.cover})`,
                      backgroundPosition: "center",
                      // backgroundSize: "cover",
                      borderRadius: 1,
                      height: 300,

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      border: 1,
                      borderRadius: 1,
                      borderStyle: "dashed",
                      borderColor: "divider",
                      height: 100,
                    }}
                  >
                    <Typography
                      align="center"
                      color="textSecondary"
                      variant="h6"
                    >
                      No Image Selected
                    </Typography>
                    <Typography
                      align="center"
                      color="textSecondary"
                      sx={{ mt: 1 }}
                      variant="subtitle1"
                    >
                      Image used for the your product cover -- here
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item xs={8}>
                <Box sx={{ m: 3 }}>
                  <ProductDescription
                    title="Brand"
                    value={productInfo.brand || "No brand selected"}
                  />
                  <ProductDescription
                    title="Product Name(visible for creators)"
                    value={productInfo.product?.name || "No product selected"}
                  />
                  <ProductDescription
                    title="Product Price"
                    value={`$${productInfo.product?.price || "0"}`}
                  />
                  <ProductDescription
                    title="Category"
                    value={
                      productInfo.product?.category || "No product selected"
                    }
                  />
                  <ProductDescription
                    title="External Website Link"
                    value={productInfo.product?.link || "No product selected"}
                  />
                  <ProductDescription
                    title="Max. Handling Time"
                    value={
                      productInfo.product?.handlingTime || "No product selected"
                    }
                  />
                  <ProductDescription
                    title="Max. Shipping Time"
                    value={
                      productInfo.product?.shippingTime || "No product selected"
                    }
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  {/* <FormLabel id="demo-row-radio-buttons-group-label">
                              Payment
                            </FormLabel> */}
                  <RadioGroup
                    // sx={{ mt: 2 }}
                    row
                    value={selectedPayment}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  >
                    <FormControlLabel
                      value="reimbursement"
                      control={<Radio />}
                      label="Reimbursement"
                    />
                    <FormControlLabel
                      sx={{ mx: 5 }}
                      value="deliveredByMe"
                      control={<Radio />}
                      label="Delivered By Me"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {selectedPayment == "reimbursement" && (
                <>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="input-with-icon-textfield"
                      label="Shipping Cost"
                      onChange={(e) => {
                        setShipping(e.target.value);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachMoneyIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      onChange={(e) => setTax(e.target.value)}
                      id="input-with-icon-textfield"
                      label="Taxes"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachMoneyIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default ProductInformation;