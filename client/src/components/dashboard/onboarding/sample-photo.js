import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import { Container, Grid } from "@mui/material";
import { FileDropzone } from "../../file-dropzone";
import { storage } from "../../../lib/firebase";
import { v4 as uuid } from "uuid";

export default function SamplePhoto({ brandSelfie, setBrandSelfie }) {
  const cover = "/static/images/covers/cover_4.jpg";
  const handleDropCover = async ([file]) => {
    uploadImage(file);
  };

  const uploadImage = (file) => {
    if (file === null) return;
    console.log(brandSelfie);

    if (brandSelfie) {
      const desertRef = storage.refFromURL(brandSelfie);
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
      .ref(`ugcsass/brand-selfies/${name}`)
      .put(file)
      .on("state_changed", alert("uploading"), alert, () => {
        storage
          .ref("ugcsass")
          .child("brand-selfies")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setBrandSelfie(url);
          });
      });
  };

  const handleRemove = () => {
    setBrandSelfie(null);
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
                <Typography variant="h5">Upload a brand selfie</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="secondary" style={{ color: "gray" }}>
                  Upload a photo with you holding the product you love.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    {brandSelfie ? (
                      <Box
                        sx={{
                          backgroundImage: `url(${brandSelfie})`,
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
                      disabled={!brandSelfie}
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
              <Grid item xs={12} sx={{ mt: 3 }}>
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Please take a look at the examples.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    backgroundImage: `url(/static/mock-images/covers/cover_4.jpeg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: 1,
                    height: 150,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    backgroundImage: `url(/static/mock-images/covers/cover_5.jpeg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: 1,
                    height: 150,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    backgroundImage: `url(/static/mock-images/covers/cover_6.jpeg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: 1,
                    height: 150,
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
