import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

import Videocam from "@mui/icons-material/Videocam";
import { CircularProgress, Container, Grid, IconButton } from "@mui/material";
import { FileDropzone } from "../../file-dropzone";
import { gtm } from "../../../lib/gtm";
import { fileToBase64 } from "../../../utils/file-to-base64";

import { storage } from "../../../lib/firebase";
import { v4 as uuid } from "uuid";

export default function SampleVideo({ cover, setCover }) {
  const [loading, setLoading] = useState(false);
  const handleDropCover = async ([file]) => {
    console.log(file);
    uploadVideo(file);
  };

  const uploadVideo = (file) => {
    console.log(file);
    if (file === null) return;
    setLoading(true);
    console.log(cover);

    if (cover) {
      const desertRef = storage.refFromURL(cover);
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
      .ref(`ugcsass/product-demos/${name}`)
      .put(file)
      .on("state_changed", alert("success"), alert, () => {
        storage
          .ref("ugcsass")
          .child("product-demos")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setCover(url);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    console.log("Here");
    setLoading(false);
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
                  Upload a product demo video
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="secondary" style={{ color: "gray" }}>
                  Upload a 30-60 second long product demonstration video with a
                  detailed description of your product and "how-to", along with
                  benefits and brand endorsement.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    {loading ? (
                      <CircularProgress align="center" />
                    ) : cover ? (
                      <video src={cover} width="560" height="315" controls>
                        Your browser does not support the video tag.
                      </video>
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
                          Select a product demo video
                        </Typography>
                        <Typography
                          align="center"
                          color="textSecondary"
                          sx={{ mt: 1 }}
                          variant="subtitle1"
                        >
                          Video used for the product demo
                        </Typography>
                      </Box>
                    )}

                    <Button
                      onClick={handleRemove}
                      sx={{ mt: 3 }}
                      disabled={!cover}
                    >
                      Remove video
                    </Button>
                    <Box sx={{ mt: 3 }}>
                      <FileDropzone
                        accept="video/*"
                        maxFiles={1}
                        onDrop={handleDropCover}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>
                <Typography variant="secondary" sx={{ color: "gray" }}>
                  Please take a look at the video example
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3wQiyOmAUOA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
