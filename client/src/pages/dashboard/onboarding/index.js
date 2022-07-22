//React - Stepper
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Personal Information",
  "About me",
  "Social Media Links",
  "Campaigns",
  "Sample Photo",
  "Sample Video",
];

const nextSteps = ["Disclaimer", "Summary"];
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
  CardActions,
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
import PersonalInformation from "../../../components/dashboard/onboarding/personal-information";
import About from "../../../components/dashboard/onboarding/about";
import SocialMedia from "../../../components/dashboard/onboarding/social-media";
import Categories from "../../../components/dashboard/onboarding/categories";
import SamplePhoto from "../../../components/dashboard/onboarding/sample-photo";
import SampleVideo from "../../../components/dashboard/onboarding/sample-video";
import ProfileSummary from "../../../components/dashboard/onboarding/profile-summary";
import Disclaimer from "../../../components/dashboard/onboarding/disclaimer";
import ProfilePendingReview from "../../../components/dashboard/onboarding/profile-pending-review";

const BlogPostCreate = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextStep, setNextStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return (
      step === 0 ||
      step === 1 ||
      step === 2 ||
      step === 3 ||
      step === 4 ||
      step === 5
    );
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Blog: Post Create | Material Kit Pro</title>
      </Head>
      <Grid container justify="center" sx={{ mt: 4 }}>
        <Grid item md={activeStep > 5 ? 2 : 3} align="center">
          <Typography
            variant="h6"
            style={{ display: nextStep == 2 ? "none" : "block" }}
          >
            Back
          </Typography>
        </Grid>
        <Grid item md={activeStep > 5 ? 8 : 6} align="center">
          <Typography
            variant="h5"
            style={{ display: nextStep == 2 ? "none" : "block" }}
          >
            {activeStep < 6
              ? `Step ${activeStep + 1} of ${steps.length}: ${
                  steps[activeStep]
                }`
              : nextSteps[nextStep]}
          </Typography>
        </Grid>
        <Grid item md={activeStep > 5 ? 2 : 3} align="center"></Grid>
        <Grid item md={activeStep > 5 ? 2 : 3} align="center"></Grid>
        <>
          <Grid item md={activeStep > 5 ? 8 : 6}>
            <Box
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                py: 3,
              }}
            >
              <></>
              {activeStep === 0 && <PersonalInformation />}
              {activeStep === 1 && <About />}
              {activeStep === 2 && <SocialMedia />}
              {activeStep === 3 && <Categories />}
              {activeStep === 4 && <SamplePhoto />}
              {activeStep === 5 && <SampleVideo />}
              {activeStep === steps.length && nextStep === 0 && (
                <Disclaimer onClick={() => setNextStep(nextStep + 1)} />
              )}
              {activeStep === steps.length && nextStep === 1 && (
                <ProfileSummary onClick={() => setNextStep(nextStep + 1)} />
              )}
              {activeStep === steps.length && nextStep === 2 && (
                <ProfilePendingReview
                  onClick={() => setNextStep(nextStep + 1)}
                />
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
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
                ) : ( */}
                <React.Fragment></React.Fragment>
                {/* )} */}
              </Box>
            </Box>
          </Grid>

          <Grid item md={activeStep > 5 ? 2 : 3}>
            <Box
              component="main"
              sx={{
                mx: 3,
                my: 4,
              }}
            >
              {activeStep < 6 && (
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => {
                    const stepProps = {};
                    if (isStepOptional(index)) {
                    }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              )}
            </Box>
          </Grid>
        </>

        <Grid item md={activeStep > 5 ? 2 : 3} align="center"></Grid>
        {activeStep < 6 && (
          <Grid item md={activeStep > 5 ? 8 : 6} align="center">
            <Container maxWidth="md">
              <Card variant="outlined">
                <CardActions>
                  <Grid container spacing={2} sx={{ py: 2 }}>
                    <Grid item xs={6} align="center">
                      {isStepOptional(activeStep) && (
                        <Button
                          fullWidth
                          variant="contained"
                          color="inherit"
                          onClick={handleSkip}
                          sx={{ mr: 1 }}
                        >
                          Skip
                        </Button>
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        onClick={handleNext}
                        variant="contained"
                        fullWidth
                      >
                        {activeStep === steps.length - 1
                          ? "Finish"
                          : "Next Step"}
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Container>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default BlogPostCreate;
