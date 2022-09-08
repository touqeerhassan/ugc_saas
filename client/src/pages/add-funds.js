import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { DashboardLayout } from "../components/dashboard/dashboard-layout";
import PaymentIntent from "../components/funds/payment-intent";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { API_SERVICE } from "../config";
import CheckoutForm from "../components/funds/checkout-form";
import { AuthGuard } from "../components/authentication/auth-guard";
import { useAuth } from "../hooks/use-auth";
import CustomSnackbar from "../components/custom-snackbar";

console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function AddFunds() {
  const [clientSecret, setClientSecret] = useState(null);
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {}, [user]);

  const createPaymentIntent = async ({ type, amount, currency }) => {
    console.log(type, amount, currency);
    const response = await fetch(`${API_SERVICE}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        type,
      }),
    });

    const { clientSecret, error } = await response.json();
    if (error) {
      console.log(error);
      setMessage(error);
      setOpen(true);
    }
    if (clientSecret) {
      setClientSecret(clientSecret);
    }
  };

  const handleBack = () => {
    setClientSecret(null);
  };

  return (
    <>
      <div>
        <Head>
          <title>Test</title>
          <link href="/static/card-section.css" rel="stylesheet" key="test" />
        </Head>
      </div>
      <CustomSnackbar
        open={open}
        setOpen={setOpen}
        message={message}
        severity="error"
      />
      <label>
        {clientSecret ? (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret: clientSecret }}
          >
            <CheckoutForm
              clientSecret={clientSecret}
              handleBack={handleBack}
              //   setClientSecret={() => setClientSecret(null)}
            />
          </Elements>
        ) : (
          <PaymentIntent createPaymentIntent={createPaymentIntent} />
        )}
      </label>
    </>
  );
}

AddFunds.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default AddFunds;
