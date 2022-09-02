import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import { useAuth } from "../../../hooks/use-auth";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const AccountGeneralSettings = (props) => {
  // To get the user from the authContext, you can use
  const { user } = useAuth();
  console.log(user);
  const [name, setName] = useState(user?.name);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleNameChange = () => {
    const firebaseUser = firebase.auth().currentUser;
    console.log(firebaseUser);
    firebaseUser
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        // Update successful
        // ...
        console.log("Profile Updated");
        handleClick();
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

  return (
    <Box sx={{ mt: 4 }} {...props}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Basic details</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {user?.avatar ? (
                  <Avatar
                    src={user?.avatar}
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                  >
                    <UserCircleIcon fontSize="small" />
                  </Avatar>
                ) : (
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {user &&
                      (user.name
                        ? user.name[0].toUpperCase()
                        : user.email[0].toUpperCase())}
                  </Avatar>
                )}
                <Button>Change</Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  alignItems: "center",
                }}
              >
                <TextField
                  value={name}
                  label="Full Name"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                  }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    handleNameChange();
                  }}
                >
                  Save
                </Button>
              </Box>
              <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
                open={open}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  "Name Updated Successfully"
                </Alert>
              </Snackbar>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  alignItems: "center",
                }}
              >
                <TextField
                  defaultValue={user?.email}
                  disabled
                  label="Email Address"
                  required
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderStyle: "dashed",
                    },
                  }}
                />
                <Button>Edit</Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Public profile</Typography>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 3,
                }}
              >
                <div>
                  <Typography variant="subtitle1">
                    Make Contact Info Public
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Means that anyone viewing your profile will be able to see
                    your contacts details.
                  </Typography>
                </div>
                <Switch />
              </Box>
              <Divider />
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 3,
                }}
              >
                <div>
                  <Typography variant="subtitle1">Available to hire</Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Toggling this will let your teammates know that you are
                    available for acquiring new projects.
                  </Typography>
                </div>
                <Switch defaultChecked />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Delete Account</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography sx={{ mb: 3 }} variant="subtitle1">
                Delete your account and all of your source data. This is
                irreversible.
              </Typography>
              <Button color="error" variant="outlined">
                Delete account
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
