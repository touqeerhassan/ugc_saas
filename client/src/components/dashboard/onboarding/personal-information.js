import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import {
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageIcon from "@mui/icons-material/Image";
import RectangleIcon from "@mui/icons-material/RectangleOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import AccessTime from "@mui/icons-material/AccessTime";
import MoreTime from "@mui/icons-material/moreTime";
import InfoIcon from "@mui/icons-material/Info";

export default function PersonalInformation({ children }) {
  const [description, setDescription] = useState("");
  const [creators, setCreators] = useState(1);
  const cover = "/static/mock-images/covers/cover_4.jpeg";

  const [state, setState] = useState({
    first: "Shivanshu",
    last: "Gupta",
    DOB: "",
    gender: "male",
    contact: "",
    country: "in",
    address1: "",
    address2: "",
    city: "",
    state: "ca",
    zip: "",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Container
        maxWidth="md"
        // style={{ margin: "0 20px", padding: "0 50px" }}
      >
        <Card sx={{ mt: 4 }} variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h5">Complete Your Profile</Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="secondary" style={{ color: "gray" }}>
                  Your first impression matters! Create a profile that will
                  stand out from the crowd.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First name"
                  name="first"
                  value={state.first}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="last"
                  value={state.last}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="date"
                  label="Date of birth"
                  name="DOB"
                  value={state.DOB}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Gender
                  </InputLabel>
                  <Select
                    label="Male"
                    name="gender"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={state.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Contact"
                  id="outlined-start-adornment"
                  value={state.contact}
                  name="contact"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+1</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography variant="h5">What's your home address?</Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="secondary" style={{ color: "gray" }}>
                  Where should we send products?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Country
                  </InputLabel>
                  <Select
                    label="India"
                    name="country"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={state.country}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="in">India</MenuItem>
                    <MenuItem value="us">USA</MenuItem>
                    <MenuItem value="jp">Japan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Address line 1"
                  name="address1"
                  value={state.address1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Address line 2"
                  name="address2"
                  value={state.address2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="City/Town"
                  name="city"
                  value={state.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    State
                  </InputLabel>
                  <Select
                    label="California"
                    name="state"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={state.state}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="ca">California</MenuItem>
                    <MenuItem value="fl">Florida</MenuItem>
                    <MenuItem value="ga">Georgia</MenuItem>
                    <MenuItem value="mi">Michigan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Zip code"
                  name="zip"
                  value={state.zip}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {children}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}