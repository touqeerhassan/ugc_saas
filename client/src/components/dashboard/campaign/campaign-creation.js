import React, { useState, useEffect } from "react";
//React - Stepper
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { v4 as uuid } from "uuid";

const steps = [
  "Campaign Creation",
  "Product Information",
  "Content and Creators",
  "Summary",
  "Payment",
];

//Page - 1

import NextLink from "next/link";
import {
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import { FileDropzone } from "../../file-dropzone";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import { gtm } from "../../../lib/gtm";
import { fileToBase64 } from "../../../utils/file-to-base64";
import { useRouter } from "next/router";
import { storage } from "../../../lib/firebase";

function CreateCampaign({
  brand,
  setBrand,
  selectedProduct,
  setSelectedProduct,
  campaignName,
  setCampaignName,
  products,
  setProducts,
  addProduct,
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { campaignId } = router.query;

  // const [file, setFile] = useState(null);

  const [newProduct, setNewProduct] = useState({
    cover: "",
    name: "",
    price: 0,
    categories: ["Sports", "Clothing"],
    selectedCategory: "",
    link: "",
    handlingTime: "",
    shippingTime: "",
  });

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const uploadImage = (file) => {
    if (file === null) return;
    console.log(newProduct?.cover);

    if (newProduct?.cover) {
      const desertRef = storage.refFromURL(newProduct?.cover);

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
      .ref(`ugcsass/products/${name}`)
      .put(file)
      .on("state_changed", alert("success"), alert, () => {
        storage
          .ref("ugcsass")
          .child("products")
          .child(name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setNewProduct({ ...newProduct, cover: url });
          });
      });
  };

  const handleNewProductChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    // setNewProduct({ ...newProduct, cover: data });
    uploadImage(file);
  };

  const handleRemove = () => {
    setNewProduct({ ...newProduct, cover: null });
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container
        maxWidth="md"
        // style={{ margin: "0 20px", padding: "0 50px" }}
      >
        <NextLink href="/dashboard" passHref>
          <Button component="a" startIcon={<ArrowLeftIcon fontSize="small" />}>
            Dashboard
          </Button>
        </NextLink>
        <Typography variant="h3" sx={{ mt: 3 }}>
          {`${campaignId ? "Edit" : "New"} Campaign`}
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5">Campaign Creation</Typography>
            <Box sx={{ mt: 3 }}>
              <TextField
                fullWidth
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                label="Brand Name"
              />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
                sx={{ my: 1 }}
              >
                <Button onClick={handleDialogOpen}>Add a new product</Button>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Product</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedProduct}
                    label={selectedProduct}
                    onChange={handleProductChange}
                  >
                    {products.map((product) => (
                      <MenuItem key={product._id} value={product._id}>
                        {product.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <Box sx={{ mt: 5 }}>
                <TextField
                  value={campaignName}
                  fullWidth
                  onChange={(e) => setCampaignName(e.target.value)}
                  label="Campaign name"
                />
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
                    {newProduct?.cover ? (
                      <Box
                        sx={{
                          backgroundImage: `url(${newProduct?.cover})`,
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
                      disabled={!newProduct?.cover}
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
                <TextField
                  name="name"
                  value={newProduct?.name}
                  onChange={handleNewProductChange}
                  fullWidth
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type={Number}
                  name="price"
                  value={newProduct?.price}
                  onChange={handleNewProductChange}
                  fullWidth
                  label="Price"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="selectedCategory"
                    value={newProduct?.selectedCategory}
                    label={newProduct?.selectedCategory}
                    onChange={handleNewProductChange}
                  >
                    {newProduct?.categories?.map((category, index) => (
                      <MenuItem key={index} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="link"
                  value={newProduct?.link}
                  onChange={handleNewProductChange}
                  fullWidth
                  label="External Website Link"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="handlingTime"
                  value={newProduct?.handlingTime}
                  onChange={handleNewProductChange}
                  fullWidth
                  label="Max. handling time(days)"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="shippingTime"
                  value={newProduct?.shippingTime}
                  onChange={handleNewProductChange}
                  fullWidth
                  label="Max. shipping time(days)"
                />
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
                    onClick={() => {
                      addProduct(newProduct);
                      handleDialogClose();
                    }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateCampaign;
