import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../hooks/use-auth";
import toast from "react-hot-toast";

function AccountDisabled() {
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/");
    toast.success("Logged out successfully");
  };
  return (
    <Box
      sx={{
        m: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">Your account has been disabled</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogout}>
        LOGOUT
      </Button>
    </Box>
  );
}

export default AccountDisabled;
