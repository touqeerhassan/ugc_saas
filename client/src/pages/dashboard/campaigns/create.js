//React - Stepper
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { storage } from "firebase";

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

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CAMPAIGN,
  ADD_CONTENT,
  ADD_PRODUCT_INFO,
  FETCH_CAMPAIGN_DATA,
} from "../../../store/actions";
import { useAuth } from "../../../hooks/use-auth";
import { API_SERVICE } from "../../../config";
import {
  imageContents,
  videoContents,
  videoDurationContents,
  creatorLevels,
  contentFormatContents,
} from "../../../content-data/data";

import { useRouter } from "next/router";

const BlogPostCreate = () => {
  const campaign = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const router = useRouter();
  const { campaignId } = router.query;
  const { user } = useAuth();
  const [toggler, setToggler] = useState(false);

  //React - Stepper
  const [activeStep, setActiveStep] = React.useState(0);

  const editCampaign = async () => {
    let {
      brand,
      campaignName,
      product,
      content,
      selectedPayment,
      gender,
      shipping,
      tax,
    } = campaign;
    try {
      const response = await fetch(
        `${API_SERVICE}/edit_campaign/${campaignId}/${user?.id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            brand,
            campaignName,
            product: product._id,
            content: {
              contentType: content?.contentType,
              imageContent: content?.imageContent?.id,
              videoContent: content?.videoContent?.id,
              videoDuration: content?.videoDuration?.id,
              contentFormat: content?.contentFormat?.id,
              contentDescription: content?.contentDescription,
              creatorLevel: content?.creatorLevel?.id,
              noOfCreators: content?.noOfCreators,
            },
            payment: selectedPayment,
            gender,
            shipping,
            tax,
            userId: user?.id,
          }),
        }
      );
      if (response.status === 200) {
        console.log(response);
        alert("Campaign Data Edited");
        router.push("/dashboard/campaigns");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addCampaign = async () => {
    let {
      brand,
      campaignName,
      product,
      content,
      selectedPayment,
      gender,
      shipping,
      tax,
    } = campaign;
    try {
      const response = await fetch(`${API_SERVICE}/add_campaign`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand,
          campaignName,
          product: product._id,
          content: {
            contentType: content?.contentType,
            imageContent: content?.imageContent?.id,
            videoContent: content?.videoContent?.id,
            videoDuration: content?.videoDuration?.id,
            contentFormat: content?.contentFormat?.id,
            contentDescription: content?.contentDescription,
            creatorLevel: content?.creatorLevel?.id,
            noOfCreators: content?.noOfCreators,
          },
          payment: selectedPayment,
          gender,
          shipping,
          tax,
          userId: user?.id,
        }),
      });
      if (response.status === 200) {
        console.log(response);
        alert("Campaign Created Successfully");
        router.push("/dashboard/campaigns");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = (pageNumber) => {
    if (pageNumber === 0) {
      if (!brand || !campaignName || !selectedProduct) return;
      dispatch({
        type: ADD_CAMPAIGN,
        payload: {
          brand,
          campaignName,
          product: products.find((product) => product._id === selectedProduct),
        },
      });
    } else if (pageNumber === 1) {
      if (!selectedPayment) return;
      dispatch({
        type: ADD_PRODUCT_INFO,
        payload: {
          selectedPayment,
          shipping,
          tax,
        },
      });
    } else if (pageNumber === 2) {
      let gender;
      if (genderC.male) {
        gender = "male";
      } else if (genderC.female) {
        gender = "female";
      } else {
        gender = "nonBinary";
      }
      console.log(gender);
      if (!content || !gender) return;
      dispatch({
        type: ADD_CONTENT,
        payload: {
          content,
          gender,
        },
      });
    } else if (pageNumber === 3) {
      if (!content) return;
      dispatch({
        type: ADD_CONTENT,
        payload: {
          content,
          gender,
        },
      });
    } else if (pageNumber === 4) {
      console.log(campaign);
      if (!campaignId) {
        addCampaign();
      } else {
        editCampaign();
      }
    }

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
  const [brand, setBrand] = useState(campaign?.brand);
  const [selectedProduct, setSelectedProduct] = useState(campaign?.product);
  const [campaignName, setCampaignName] = useState(campaign?.campaignName);
  const [products, setProducts] = useState([]);

  const fetchSingleProduct = async (productId) => {
    try {
      const response = await fetch(
        `${API_SERVICE}/get_product_by_id/${productId}/${user?.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_SERVICE}/get_products/${user?.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await fetch(`${API_SERVICE}/add_product`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          category: product?.selectedCategory,
          userId: user?.id,
        }),
      });
      const data = response.json();
      setToggler(!toggler);
    } catch (err) {
      console.log(err);
    }
  };

  //Page - 2
  const [selectedPayment, setSelectedPayment] = useState(
    campaign?.selectedPayment || "reimbursement"
  );
  const [shipping, setShipping] = useState(campaign?.shipping || 0);
  const [tax, setTax] = useState(campaign?.tax || 0);

  //Page - 3
  const [content, setContent] = useState({
    ...campaign?.content,
  });
  const [genderC, setGenderC] = React.useState({
    male: true,
    female: false,
    nonBinary: false,
  });

  useEffect(() => {
    gtm.push({ event: "page_view" });
    console.log(campaign);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [user?.id, toggler]);

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
                  tax={tax}
                  setTax={setTax}
                  selectedPayment={selectedPayment}
                  setSelectedPayment={setSelectedPayment}
                  shipping={shipping}
                  setShipping={setShipping}
                />
              )}
              {activeStep === 2 && (
                <ContentAndCreators
                  content={content}
                  setContent={setContent}
                  genderC={genderC}
                  setGenderC={setGenderC}
                />
              )}
              {activeStep === 3 && (
                <Summary content={content} setContent={setContent} />
              )}
              {activeStep === 4 && <Payment />}
              {activeStep === steps.length && (
                <>
                  <Container
                    maxWidth="md"
                    // style={{ margin: "0 20px", padding: "0 50px" }}
                  >
                    <Typography variant="h5" sx={{ mt: 3 }}>
                      Campaign {campaignId ? "Edited" : "Created"} Successfully
                    </Typography>
                    {/* 
                    <Card sx={{ mt: 4 }} variant="outlined">
                      <CardContent>
                        <div
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          Campaign created successfully
                        </div>
                        <div style={{ fontSize: "16px", color: "gray" }}>
                          Click the below button to go back to your dashboard
                        </div>
                        <NextLink href="/dashboard/campaigns">
                          <Button
                            style={{
                              borderRadius: "5px",
                              // color: "white",
                              // backgroundColor: "black",
                              padding: "5px 20px",
                              marginTop: "20px",
                              fontSize: "16px",
                            }}
                            variant="contained"
                          >
                            Go to Dashboard
                          </Button>
                        </NextLink>
                      </CardContent>
                    </Card> */}
                  </Container>
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
            {activeStep === 2 && (
              <ContentAndCreatorsSidebar
                content={content}
                setContent={setContent}
              />
            )}
            {activeStep === 4 && <SummarySidebar />}
          </Grid>
        </>
      </Grid>
    </>
  );
};

export default BlogPostCreate;
