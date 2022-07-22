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

import { FileDropzone } from "../../file-dropzone";

import { gtm } from "../../../lib/gtm";
import { fileToBase64 } from "../../../utils/file-to-base64";

export default function About({ children }) {
  const [cover, setCover] = useState("/static/mock-images/covers/cover_4.jpeg");
  const [info, setInfo] = useState("");

  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  };

  const handleRemove = () => {
    setCover(null);
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
                <Typography variant="h5">
                  Let's add a face to your profile
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="secondary" style={{ color: "gray" }}>
                  This will be your avatar, so give us your best shot.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    {cover ? (
                      <Box
                        sx={{
                          backgroundImage: `url(${cover})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          borderRadius: 1,
                          height: 150,
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
                          height: 150,
                        }}
                      >
                        <Typography
                          align="center"
                          color="textSecondary"
                          variant="h6"
                        >
                          Select a product image
                        </Typography>
                        <Typography
                          align="center"
                          color="textSecondary"
                          sx={{ mt: 1 }}
                          variant="subtitle1"
                        >
                          Image used for the your product cover
                        </Typography>
                      </Box>
                    )}
                    <Button
                      onClick={handleRemove}
                      sx={{ mt: 3 }}
                      disabled={!cover}
                    >
                      Remove photo
                    </Button>
                    <Box sx={{ mt: 3 }}>
                      <FileDropzone
                        accept="image/*"
                        maxFiles={1}
                        onDrop={handleDropCover}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="secondary" sx={{ fontWeight: "bold" }}>
                  Help our team get a better sense of who you are as a Creator.
                  What is your experience? Are there any areas you specialize
                  in? (Optional)
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline="true"
                  rows={4}
                  value={info}
                  name="info"
                  onChange={(e) => setInfo(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>

            {children}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
