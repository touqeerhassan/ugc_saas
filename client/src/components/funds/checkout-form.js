import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Head from "next/head";

import { API_SERVICE } from "../../config";
import CustomSnackbar from "../custom-snackbar";
import { useAuth } from "../../hooks/use-auth";

export default function CheckoutForm({ handleBack, setClientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  //   const [details, setDetails] = useState({
  //     name: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //   });

  const [details, setDetails] = useState({
    name: "Demo User",
    address: "B 345, sherlock lane",
    city: "New York",
    zip: "83888",
    country: "US",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          shipping: {
            name: details.name,
            address: {
              line1: details.address,
              postal_code: details.zip,
              city: details.city,
              country: details.country,
            },
          },
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000",
        },
        redirect: "if_required",
      })
      .then(async function (result) {
        console.log(result);
        const { paymentIntent, error } = result;
        if (error) {
          if (
            error.type === "card_error" ||
            error.type === "validation_error"
          ) {
            setMessage(error.message);
            setSeverity("error");
            setOpen(true);
            setLoading(false);
          } else {
            console.log(error);
            setMessage("An unexpected error occurred.");
            setSeverity("error");
            setOpen(true);
            setLoading(false);
          }
        } else {
          if (paymentIntent.status === "succeeded") {
            const { currency, amount, customer } = paymentIntent;
            const response = await fetch(`${API_SERVICE}/addFunds`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                currency,
                amount,
                userId: user.id,
              }),
            });
            if (response.status == 200) {
              setMessage("Funds added to wallet");
              setSeverity("success");
              setOpen(true);
              setLoading(false);
            } else {
              setMessage("An Unknown error occurred");
              setSeverity("error");
              setOpen(true);
              setLoading(false);
            }
          } else {
            setMessage(paymentIntent.status);
            setSeverity("error");
            setOpen(true);
            setLoading(false);
          }
        }
      });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    // setIsLoading(false);
  };

  return (
    <>
      <div>
        <Head>
          <title>Test</title>
          <link href="/static/card-section.css" rel="stylesheet" key="test" />
        </Head>
      </div>
      <label>
        <Box
          maxWidth="600px"
          sx={{
            margin: "40px auto",
            border: 1.5,
            backgroundColor: "background.paper",
            borderColor: "black",
            p: 5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Holder Name"
                name="name"
                required
                value={details.name}
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12}>
               <CardElement></CardElement>
             </Grid> */}
            <Grid item md={12} xs={12}>
              <h4>Billing Details</h4>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                autoFocus
                fullWidth
                label="Street Address"
                name="address"
                required
                value={details.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                required
                value={details.country}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                value={details.zip}
                fullWidth
                label="Zip"
                name="zip"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                value={details.city}
                fullWidth
                label="City"
                name="city"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box height="200px">
                <PaymentElement />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                mt={12}
                alignItems="center"
                justifyContent="space-between"
                display="flex"
              >
                <div onClick={handleBack}>Go Back</div>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  style={{ paddingLeft: "40px", paddingRight: "40px" }}
                >
                  {loading ? "Loading" : "Add Funds"}
                </Button>
              </Box>
            </Grid>

            <CustomSnackbar
              open={open}
              setOpen={setOpen}
              message={message}
              severity={severity}
            />
          </Grid>
        </Box>
      </label>
    </>
  );
}
