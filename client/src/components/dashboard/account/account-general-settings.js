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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import { useAuth } from "../../../hooks/use-auth";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { API_SERVICE } from "../../../config";

import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CustomSnackbar from "../../custom-snackbar";
import EditIcon from '@mui/icons-material/Edit';

export const AccountGeneralSettings = (props) => {
  // To get the user from the authContext, you can use

  const { user, handleSelectedCurrencyChange, handleAmountMinus, handleSelectedAddressChange } = useAuth();
  const dispatch = useDispatch();
  console.log(user);
  const [name, setName] = useState(user?.name);
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(user?.userData?.address);
  const [currency, setCurrency] = useState(
    user?.userData?.funds?.selectedCurrency?.toLowerCase() || "usd"
  );

  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const [openProfile, setOpenProfile] = useState(false);

  const [addressChangeSnackBar, setaddressChangeSnackBar] = useState(false);

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

  const handleCurrencyChange = async () => {
    try {
      const response = await fetch(`${API_SERVICE}/change-currency`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?.id,
          selectedCurrency: currency,
        }),
      });
      if (response.status === 200) {
        console.log("Currency Changed");
        await handleSelectedCurrencyChange(currency);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressChange = async () => {
    try {
      const response = await fetch(`${API_SERVICE}/change-address`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?.id,
          address: address,
        }),
      });
      if (response.status === 200) {
        setaddressChangeSnackBar(true)
        await handleSelectedAddressChange(address);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async () => {
    // await handleAmountMinus(withdrawAmount);
    if (withdrawAmount > user?.userData?.funds?.amount || withdrawAmount <= 0) {
      setSeverity("error");
      setMessage("Invalid Amount");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await fetch(
        `${API_SERVICE}/withdraw-funds/${user?.id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: withdrawAmount,
            currency: user?.userData?.funds?.currency,
          }),
        }
      );
      if (response.status === 200) {
        console.log("Money Withdrawn");
        setSeverity("success");
        setMessage("Withdrawal Request Sent");
        setSnackbarOpen(true);
        await handleAmountMinus(withdrawAmount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenProfile = () => {
    setOpenProfile(true);
  }

  const handleCloseProfile = () => {
    // handleNameChange();
    // handleCurrencyChange();
    // handleWithdraw()
    setOpenProfile(false);
  }

  const handleCloseAddressChangeSnackBar = () =>{
    setaddressChangeSnackBar(false)
  }
  return (
    <Box sx={{ mt: 4, mb: 4 }} {...props}>
       <Snackbar open={addressChangeSnackBar} autoHideDuration={6000} onClose={handleCloseAddressChangeSnackBar}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Details updated successfully
          </Alert>
        </Snackbar>
      <Card>
        {
          openProfile === false &&
          <CardContent>
            <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
              <Grid item fullWidth>
                <Box display='flex' style={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Profile Information</Typography>
                  <Button onClick={handleOpenProfile}>
                    <EditIcon />
                  </Button>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {/* {user?.avatar ? (
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
                  <Button>Change</Button> */}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  {/* <TextField
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
                  </Button> */}
                  <Typography style={{ color: 'grey' }}>Full name</Typography>
                </Box>
                <Box>
                  <Typography>{name}</Typography>
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
                  {/* <TextField
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
                  <Button>Edit</Button> */}
                  <Typography style={{ color: 'grey' }}>Email Address</Typography>
                </Box>
                <Box>
                  <Typography>{user?.email}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  {/* <TextField
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
                  <Button>Edit</Button> */}
                  <Typography style={{ color: 'grey' }}>Address</Typography>
                </Box>
                <Box>
                  <Typography>{address}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  {/* <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currency}
                      label="Currency"
                      onChange={(e) => setCurrency(e.target.value)}
                      sx={{
                        flexGrow: 1,
                        mr: 3,
                      }}
                    >
                      <MenuItem value="myr">MYR</MenuItem>
                      <MenuItem value="idr">IDR</MenuItem>
                      <MenuItem value="usd">USD</MenuItem>
                      
                    </Select>
                  </FormControl>
                  <Button
                    onClick={() => {
                      handleCurrencyChange();
                    }}
                  >
                    Save
                  </Button> */}
                  <Typography style={{ color: 'grey' }}>Currency</Typography>
                </Box>
                <Box>
                  {currency.toUpperCase()}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  {/* <TextField
                    // disabled
                    disabled={user?.userData?.funds?.amount === 0 ? true : false}
                    type="Number"
                    inputProps={{
                      step: 0.01,
                      min: 0,
                      max: user?.userData?.funds?.amount,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      // endAdornment: (
                      //   <InputAdornment position="end">per person</InputAdornment>
                      // ),
                    }}
                    value={withdrawAmount}
                    label="Withdraw Money"
                    required
                    size="small"
                    sx={{
                      flexGrow: 1,
                      mr: 3,
                      // "& .MuiOutlinedInput-notchedOutline": {
                      //   borderStyle: "dashed",
                      // },
                    }}
                    onChange={(e) => {
                      setWithdrawAmount(e.target.value);
                    }}
                  />
                  <Button onClick={handleWithdraw}>Submit</Button> */}
                  <Typography style={{ color: 'grey' }}>Withdraw Money</Typography>
                </Box>
                <Box>
                  {currency.toUpperCase()} {withdrawAmount}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        }

        {
          openProfile &&
          <CardContent>
            <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
              <Grid item fullWidth>
                {/* <Typography variant="h6">Profile Information</Typography> */}
                <Box display='flex' style={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Profile Information</Typography>
                  <Button onClick={handleCloseProfile}>
                    Save
                  </Button>
                </Box>
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
                  <Button >Change</Button>
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

                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  <TextField
                    // defaultValue="A-4 Test Address"
                    label="Address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    size="small"
                    sx={{
                      flexGrow: 1,
                      mr: 3,
                    }}
                  />
                  <Button onClick={() => {
                    handleAddressChange();
                  }}
                  >
                    Save
                  </Button>
                </Box>


                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currency}
                      label="Currency"
                      onChange={(e) => setCurrency(e.target.value)}
                      sx={{
                        flexGrow: 1,
                        mr: 3,
                      }}
                    >
                      <MenuItem value="myr">MYR</MenuItem>
                      <MenuItem value="idr">IDR</MenuItem>
                      <MenuItem value="usd">USD</MenuItem>
                      {/* <MenuItem value="gbp">GBP</MenuItem>
                <MenuItem value="inr">INR</MenuItem> */}
                    </Select>
                  </FormControl>
                  <Button
                    onClick={() => {
                      handleCurrencyChange();
                    }}
                  >
                    Save
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  <TextField
                    // disabled
                    disabled={user?.userData?.funds?.amount === 0 ? true : false}
                    type="Number"
                    inputProps={{
                      step: 0.01,
                      min: 0,
                      max: user?.userData?.funds?.amount,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{currency.toUpperCase()}</InputAdornment>
                      ),
                      // endAdornment: (
                      //   <InputAdornment position="end">per person</InputAdornment>
                      // ),
                    }}
                    value={withdrawAmount}
                    label="Withdraw Money"
                    required
                    size="small"
                    sx={{
                      flexGrow: 1,
                      mr: 3,
                      // "& .MuiOutlinedInput-notchedOutline": {
                      //   borderStyle: "dashed",
                      // },
                    }}
                    onChange={(e) => {
                      setWithdrawAmount(e.target.value);
                    }}
                  />
                  <Button onClick={handleWithdraw}>Submit</Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        }
       
      </Card>
      {/* <Card sx={{ mt: 4 }}>
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
      </Card> */}
      <CustomSnackbar
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={message}
        severity={severity}
      />
    </Box>
  );
};
