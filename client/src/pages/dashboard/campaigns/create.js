//React - Stepper
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Campaign Creation",
  "Product Information",
  "Content and Creators",
  "Summary",
  "Payment",
];

//Page - 1
import { useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FileDropzone } from "../../../components/file-dropzone";
import { QuillEditor } from "../../../components/quill-editor";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import { DotsVertical as DotsHorizontalIcon } from "../../../icons/dots-vertical";
import { gtm } from "../../../lib/gtm";
import { fileToBase64 } from "../../../utils/file-to-base64";

const BlogPostCreate = () => {
  //React - Stepper
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //Page - 1
  const [cover, setCover] = useState("/static/mock-images/covers/cover_4.jpeg");

  const [selectedBrand, setSelectedBrand] = useState("none");
  const [brands, setBrands] = useState([{ value: "none", label: "None" }]);

  const [selectedProduct, setSelectedProduct] = useState("none");
  const [products, setProducts] = useState([{ value: "none", label: "None" }]);

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };
  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  };

  const handleRemove = () => {
    setCover(null);
  };

  const emails = ["username@gmail.com", "user02@gmail.com"];

  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Blog: Post Create | Material Kit Pro</title>
      </Head>
      <Grid container justify="center" alignItems="center">
        <Grid item md={2} align="center">
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mx: 3,
            }}
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {/* {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment> */}
            {/* )} */}
          </Box>
        </Grid>
        <Grid item md={10}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 4,
            }}
          >
            <Container maxWidth="sm">
              <NextLink href="/dashboard" passHref>
                <Button
                  component="a"
                  startIcon={<ArrowLeftIcon fontSize="small" />}
                >
                  Dashboard
                </Button>
              </NextLink>
              <Typography variant="h3" sx={{ mt: 3 }}>
                New Campaign
              </Typography>

              <Card sx={{ mt: 4 }}>
                <CardContent>
                  <Typography variant="h5">Campaign Creation</Typography>
                  <Box sx={{ mt: 3 }}>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-end"
                      sx={{ my: 1 }}
                    >
                      <Button align="right">Add a new brand</Button>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Brand
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedBrand}
                          label="None"
                          onChange={handleBrandChange}
                        >
                          {brands.map((brand) => (
                            <MenuItem value={brand.value}>
                              {brand.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>

                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-end"
                      sx={{ my: 1 }}
                    >
                      <Button onClick={handleDialogOpen}>
                        Add a new product
                      </Button>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Product
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedProduct}
                          label="None"
                          onChange={handleProductChange}
                        >
                          {products.map((brand) => (
                            <MenuItem value={brand.value}>
                              {brand.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>

                    <Box sx={{ mt: 5 }}>
                      <TextField fullWidth label="Campaign name" />
                    </Box>

                    <Box
                      sx={{
                        mt: 3,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <NextLink href="/dashboard/campaigns">
                        <Button variant="contained" sx={{ mx: 2 }}>
                          Cancel
                        </Button>
                      </NextLink>

                      <Button
                        variant="contained"
                        sx={{ mx: 2 }}
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Container>
            <Dialog onClose={handleDialogClose} open={open}>
              <DialogTitle>Add a Product</DialogTitle>
              <DialogContent>
                <Box sx={{ m: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Product Image</Typography>
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
                      <Typography variant="h6">Product Details</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Price" />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedProduct}
                          label="None"
                          onChange={handleProductChange}
                        >
                          {products.map((brand) => (
                            <MenuItem value={brand.value}>
                              {brand.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="External Website Link" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Max. handling time(days)" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Max. shipping time(days)" />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          mt: 3,
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{ mx: 2 }}
                          onClick={handleDialogClose}
                        >
                          Cancel
                        </Button>

                        <Button
                          variant="contained"
                          sx={{ mx: 2 }}
                          onClick={handleNext}
                        >
                          Save Changes
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogPostCreate;
