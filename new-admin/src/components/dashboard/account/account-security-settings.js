import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right";
import { Scrollbar } from "../../scrollbar";

import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../../hooks/use-auth";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const AccountSecuritySettings = () => {
  const [open, setOpen] = React.useState(false);

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

  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("12345678");
  const [oldPassword, setOldPassword] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { signInWithEmailAndPassword } = useAuth();

  const handleReLogin = async () => {
    const firebaseUser = firebase.auth().currentUser;
    setDialogOpen(false);
    console.log(oldPassword);
    try {
      await signInWithEmailAndPassword(firebaseUser.email, oldPassword);
    } catch (error) {
      console.log(error);
    }
    firebaseUser
      .updatePassword(password)
      .then(() => {
        // Update successful.
        console.log("Update Successful");
        handleClick();
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log(error);
      });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Change password</Typography>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  disabled={!isEditing}
                  label="Password"
                  type="password"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                    ...(!isEditing && {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderStyle: "dotted",
                      },
                    }),
                  }}
                />
                <Button onClick={isEditing ? handleSave : handleEdit}>
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </Box>
              <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>ReLogin</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To change your password, please ReLogin with your old
                    password
                  </DialogContentText>
                  <TextField
                    value={oldPassword}
                    type="password"
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Password"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleReLogin}>Submit</Button>
                </DialogActions>
              </Dialog>

              <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
                open={open}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  "Password Updated Successfully"
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6">Multi Factor Authentication</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
                <Card sx={{ height: "100%" }} variant="outlined">
                  <CardContent>
                    <Box
                      sx={{
                        display: "block",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          "&::before": {
                            backgroundColor: "error.main",
                            borderRadius: "50%",
                            content: '""',
                            display: "block",
                            height: 8,
                            left: 4,
                            position: "absolute",
                            top: 7,
                            width: 8,
                            zIndex: 1,
                          },
                        }}
                      >
                        <Typography
                          color="error"
                          sx={{ ml: 3 }}
                          variant="body2"
                        >
                          Off
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ mt: 1 }} variant="subtitle2">
                      Authenticator App
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{ mt: 1 }}
                      variant="body2"
                    >
                      Use an authenticator app to generate one time security
                      codes.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                      <Button
                        endIcon={<ArrowRightIcon fontSize="small" />}
                        variant="outlined"
                      >
                        Set Up
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Card sx={{ height: "100%" }} variant="outlined">
                  <CardContent>
                    <Box sx={{ position: "relative" }}>
                      <Box
                        sx={{
                          "&::before": {
                            backgroundColor: "error.main",
                            borderRadius: "50%",
                            content: '""',
                            display: "block",
                            height: 8,
                            left: 4,
                            position: "absolute",
                            top: 7,
                            width: 8,
                            zIndex: 1,
                          },
                        }}
                      >
                        <Typography
                          color="error"
                          sx={{ ml: 3 }}
                          variant="body2"
                        >
                          Off
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ mt: 1 }} variant="subtitle2">
                      Text Message
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{ mt: 1 }}
                      variant="body2"
                    >
                      Use your mobile phone to receive security codes via SMS.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                      <Button
                        endIcon={<ArrowRightIcon fontSize="small" />}
                        variant="outlined"
                      >
                        Set Up
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6">Login history</Typography>
          <Typography color="textSecondary" sx={{ mt: 1 }} variant="body2">
            Your recent login activity:
          </Typography>
        </CardContent>
        <Scrollbar>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell>Login type</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>Client</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2">Credentials login</Typography>
                  <Typography variant="body2" color="body2">
                    on 10:40 AM 2021/09/01
                  </Typography>
                </TableCell>
                <TableCell>95.130.17.84</TableCell>
                <TableCell>Chrome, Mac OS 10.15.7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2">Credentials login</Typography>
                  <Typography color="body2" variant="body2">
                    on 10:40 AM 2021/09/01
                  </Typography>
                </TableCell>
                <TableCell>95.130.17.84</TableCell>
                <TableCell>Chrome, Mac OS 10.15.7</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Scrollbar>
      </Card> */}
    </>
  );
};
