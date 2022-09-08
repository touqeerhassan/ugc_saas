import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import { Container, Grid, TextField } from "@mui/material";
import { FileDropzone } from "../../file-dropzone";
import { storage } from "../../../lib/firebase";

import { v4 as uuid } from "uuid";

export default function About({
  profile,
  setProfile,
  specialization,
  setSpecialization,
}) {
  const handleDropCover = async ([file]) => {
    // const data = await fileToBase64(file);
    uploadImage(file);
  };

  const handleRemove = () => {
    setProfile(null);
  };

  const uploadImage = (file) => {
    if (file === null) return;
    console.log(profile);

    if (profile) {
      const desertRef = storage.refFromURL(profile);

      desertRef
        .delete()
        .then(function () {
          // File deleted successfully
          console.log("Deleted");
        })
        .catch(function (error) {
          // Uh-oh, an error occurred!
          console.log(error);
        });
    }

    const name = uuid();
    storage
      .ref(`ugcsass/creator-profiles/${name}`)
      .put(file)
      .on("state_changed", alert("uploading"), alert, () => {
        storage
          .ref("ugcsass")
          .child("creator-profiles")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setProfile(url);
          });
      });
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
                    {profile ? (
                      <Box
                        sx={{
                          backgroundImage: `url(${profile})`,
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
                          Image used for the your product profile
                        </Typography>
                      </Box>
                    )}
                    <Button
                      onClick={handleRemove}
                      sx={{ mt: 3 }}
                      disabled={!profile}
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
                  value={specialization}
                  name="specialization"
                  onChange={(e) => setSpecialization(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
