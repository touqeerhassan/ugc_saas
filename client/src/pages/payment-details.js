import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { API_SERVICE } from "../config";
import { useAuth } from "../hooks/use-auth";
import CustomSnackbar from "../components/custom-snackbar";
import { Box, Button, Card, CardContent, Container } from "@mui/material";

function PaymentSuccess() {
  const router = useRouter();
  const { user } = useAuth();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [status, setStatus] = useState("");

  const { payment_intent_client_secret, payment_intent, redirect_status } =
    router.query;

  const addFunds = async () => {
    if (redirect_status !== "succeeded") {
      alert("Payment failed");
    }
    const response = await fetch(`${API_SERVICE}/addFundsFPX`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientSecret: payment_intent,
        userId: user.id,
      }),
    });

    if (response.status == 200) {
      setMessage("Funds added to wallet");
      setStatus("succeeded");
      setSeverity("success");
      setOpen(true);
      setLoading(false);
    } else {
      setMessage(await response.json());
      setStatus("failed");
      setSeverity("error");
      setOpen(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    addFunds();
  }, []);

  return (
    <>
      <CustomSnackbar
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box>
          <Card>
            <CardContent>
              <h1>Payment Info</h1>
              <p>Payment Status: {status}</p>
              <Button
                variant="contained"
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default PaymentSuccess;
