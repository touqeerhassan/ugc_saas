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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";
import { FileDropzone } from "../../../components/file-dropzone";
import { QuillEditor } from "../../../components/quill-editor";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import { DotsVertical as DotsHorizontalIcon } from "../../../icons/dots-vertical";
import { gtm } from "../../../lib/gtm";
import { fileToBase64 } from "../../../utils/file-to-base64";

//Page - 2
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreateCampaign from "../../../components/dashboard/campaign/campaign-creation";
import ProductInformation from "../../../components/dashboard/campaign/product-info";
import ContentAndCreators from "../../../components/dashboard/campaign/content-and-creators";
import Summary from "../../../components/dashboard/campaign/summary";
import Payment from "../../../components/dashboard/campaign/payment";
import ContentAndCreatorsSidebar from "../../../components/dashboard/campaign/sidebars/content-and-creators-sidebar";
import SummarySidebar from "../../../components/dashboard/campaign/sidebars/summary-sidebar";

const BlogPostCreate = () => {
  //Global
  // const [productInfo, setProductInfo] = useState({});
  const [productInfo, setProductInfo] = useState({
    brand: "Sortwind",
    campaignName: "Test Campaign",
    product: {
      cover: "/static/mock-images/covers/cover_4.jpeg",
      name: "Test",
      price: "12",
      categories: ["Sports", "Clothing"],
      selectedCategory: "Sports",
      link: "https://google.com",
      handlingTime: "2",
      shippingTime: "4",
    },
  });

  //React - Stepper
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (pageNumber) => {
    console.log(productInfo);
    console.log("Hello");
    console.log(pageNumber);
    // if (pageNumber == 0) {
    //   let product = products.find((item) => item.name === selectedProduct);
    //   setProductInfo({ brand, campaignName, product });
    // } else if (pageNumber == 1) {
    //   console.log("page 2");
    // }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const addProduct = (product) => {
    console.log(products);
    console.log(product);
    setProducts([...products, product]);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [brand, setBrand] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Blog: Post Create | Material Kit Pro</title>
      </Head>
      <Grid container justify="center">
        <Grid item md={2} align="center">
          <Box
            component="main"
            sx={{
              mx: 3,
              my: 4,
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
          </Box>
        </Grid>
        <Grid item xs={0.01}>
          <Divider orientation="vertical" />
        </Grid>

        <>
          <Grid item md={8}>
            <Box
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                py: 3,
              }}
            >
              <></>
              {activeStep === 0 && (
                <CreateCampaign
                  brand={brand}
                  setBrand={setBrand}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  campaignName={campaignName}
                  setCampaignName={setCampaignName}
                  products={products}
                  setProducts={setProducts}
                  addProduct={addProduct}
                />
              )}
              {activeStep === 1 && (
                <ProductInformation
                  productInfo={productInfo}
                ></ProductInformation>
              )}
              {activeStep === 2 && <ContentAndCreators />}
              {activeStep === 3 && <Summary />}
              {activeStep === 4 && <Payment />}
              {activeStep === steps.length && (
                <>
                  You've created your campaign Click here to go back to
                  Dashboard
                </>
              )}
              <Card variant="outlined" sx={{ m: 3 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <NextLink href="/dashboard/campaigns">
                      <Button variant="contained" sx={{ mx: 2 }}>
                        Cancel
                      </Button>
                    </NextLink>

                    <Box>
                      <Button
                        variant="contained"
                        sx={{ mx: 2 }}
                        onClick={() => handleBack()}
                      >
                        Back
                      </Button>

                      {activeStep === steps.length ? (
                        <Button
                          variant="contained"
                          sx={{ mx: 2 }}
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          sx={{ mx: 2 }}
                          onClick={() => handleNext(activeStep)}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={0.01}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={1.98}>
            {activeStep === 2 && <ContentAndCreatorsSidebar />}
            {activeStep === 4 && <SummarySidebar />}
          </Grid>
        </>
      </Grid>
    </>
  );
};

export default BlogPostCreate;
