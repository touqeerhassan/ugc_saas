//React - Stepper
import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import {
  ADD_BASIC_DETAILS,
  ADD_PROFILE_SPECIALIZATION,
  ADD_SOCIAL,
  ADD_CATEGORIES,
  ADD_BRAND_SELFIE,
  ADD_PRODUCT_DEMO,
} from "../../../store/actions"

const steps = [
  "Personal Information",
  "About me",
  "Social Media Links",
  "Campaigns",
  "Sample Photo",
  "Sample Video",
]

const nextSteps = ["Disclaimer", "Summary"]
//Page - 1
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Head from "next/head"
import NextLink from "next/link"
import { Card, CardContent, Container, Grid, CardActions } from "@mui/material"
import { FileDropzone } from "../../../components/file-dropzone"
import { QuillEditor } from "../../../components/quill-editor"
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left"
import { DotsVertical as DotsHorizontalIcon } from "../../../icons/dots-vertical"
import { gtm } from "../../../lib/gtm"
import { fileToBase64 } from "../../../utils/file-to-base64"

//Page - 2

import PersonalInformation from "../../../components/dashboard/onboarding/personal-information"
import About from "../../../components/dashboard/onboarding/about"
import SocialMedia from "../../../components/dashboard/onboarding/social-media"
import Categories from "../../../components/dashboard/onboarding/categories"
import SamplePhoto from "../../../components/dashboard/onboarding/sample-photo"
import SampleVideo from "../../../components/dashboard/onboarding/sample-video"
import ProfileSummary from "../../../components/dashboard/onboarding/profile-summary"
import Disclaimer from "../../../components/dashboard/onboarding/disclaimer"
import ProfilePendingReview from "../../../components/dashboard/onboarding/profile-pending-review"

const BlogPostCreate = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [nextStep, setNextStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  function isEnabled() {
    console.log(social)
    if (activeStep === 0) {
      return (
        personalInfo.first != "" &&
        personalInfo.last != "" &&
        personalInfo.DOB != "" &&
        personalInfo.gender != "" &&
        personalInfo.contact != "" &&
        personalInfo.country != "" &&
        personalInfo.address1 != "" &&
        personalInfo.address2 != "" &&
        personalInfo.city != "" &&
        personalInfo.state != "" &&
        personalInfo.zip != ""
      )
    } else if (activeStep === 1) {
      return profile != "" && specialization != ""
    } else if (activeStep === 2) {
      return (social.instagram != "" && social.facebook !="" && social.youtube !="" && social.amazon !="" && social.twitter !="" && social.website !="")
    } else if(activeStep === 3){
      return(categories.primary !="" && categories.secondary !="" && categories.tertiary !="")
    }else if(activeStep === 4){
      return (brandSelfie!="")
    }else if(activeStep === 5){
      return (productDemo!="")
    }

  }

  const creator = useSelector((state) => state.creator)
  const dispatch = useDispatch()

  //Page - 1
  const [personalInfo, setPersonalInfo] = useState({
    first: creator?.first,
    last: creator?.last,
    DOB: creator?.DOB,
    gender: creator?.gender,
    contact: creator?.contact,
    country: creator?.address?.country,
    address1: creator?.address?.line1,
    address2: creator?.address?.line2,
    city: creator?.address?.city,
    state: creator?.address?.state,
    zip: creator?.address?.zip,
  })

  const handlePersonalInfoChange = (event) => {
    console.log(personalInfo)
    if (personalInfo === "") {
    }

    if (typeof event === "string") {
      setPersonalInfo({
        ...personalInfo,
        contact: event,
      })
    } else {
      setPersonalInfo({
        ...personalInfo,
        [event.target.name]: event.target.value,
      })
    }
  }

  //Page - 2
  const [profile, setProfile] = useState(creator?.profile)
  const [specialization, setSpecialization] = useState(creator?.specialization)

  //Page - 3
  const [social, setSocial] = useState(creator?.social)

  const handleSocialChange = (e) => {
    setSocial({ ...social, [e.target.name]: e.target.value })
  }

  //Page - 4
  const [categories, setCategories] = useState({
    primary: "",
    secondary: "",
    tertiary: "",
  })

  const handleCategoryChange = (e) => {
    setCategories({ ...categories, [e.target.name]: e.target.value })
  }

  //Page - 5
  const [brandSelfie, setBrandSelfie] = useState(creator?.brandSelfie)

  //Page - 6
  const [productDemo, setProductDemo] = useState(creator?.productDemo)

  const isStepOptional = (step) => {
    return (
      step === 0 ||
      step === 1 ||
      step === 2 ||
      step === 3 ||
      step === 4 ||
      step === 5
    )
  }

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    if (activeStep === 0) {
      console.log("Hello")
      if (!personalInfo) {
        console.log("ABC")
      }
      dispatch({
        type: ADD_BASIC_DETAILS,
        payload: {
          first: personalInfo.first,
          last: personalInfo.last,
          DOB: personalInfo.DOB,
          gender: personalInfo.gender,
          contact: personalInfo.contact,
          address: {
            country: personalInfo.country,
            line1: personalInfo.address1,
            line2: personalInfo.address2,
            city: personalInfo.city,
            state: personalInfo.state,
            zip: personalInfo.zip,
          },
        },
      })
    } else if (activeStep === 1) {
      dispatch({
        type: ADD_PROFILE_SPECIALIZATION,
        payload: {
          profile: profile,
          specialization: specialization,
        },
      })
    } else if (activeStep == 2) {
      dispatch({
        type: ADD_SOCIAL,
        payload: {
          social: social,
        },
      })
    } else if (activeStep == 3) {
      dispatch({
        type: ADD_CATEGORIES,
        payload: {
          categories: categories,
        },
      })
    } else if (activeStep == 4) {
      dispatch({
        type: ADD_BRAND_SELFIE,
        payload: {
          brandSelfie: brandSelfie,
        },
      })
    } else if (activeStep == 5) {
      dispatch({
        type: ADD_PRODUCT_DEMO,
        payload: {
          productDemo: productDemo,
        },
      })
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  useEffect(() => {
    gtm.push({ event: "page_view" })
  }, [])

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
              {activeStep === 0 && (
                <PersonalInformation
                  state={personalInfo}
                  handleChange={handlePersonalInfoChange}
                />
              )}
              {activeStep === 1 && (
                <About
                  profile={profile}
                  setProfile={setProfile}
                  specialization={specialization}
                  setSpecialization={setSpecialization}
                />
              )}
              {activeStep === 2 && (
                <SocialMedia state={social} handleChange={handleSocialChange} />
              )}
              {activeStep === 3 && (
                <Categories
                  state={categories}
                  handleChange={handleCategoryChange}
                  categories={[
                    "electronics",
                    "fashion",
                    "home",
                    "sports",
                    "travel",
                    "other",
                  ]}
                />
              )}
              {activeStep === 4 && (
                <SamplePhoto
                  brandSelfie={brandSelfie}
                  setBrandSelfie={setBrandSelfie}
                />
              )}
              {activeStep === 5 && (
                <SampleVideo cover={productDemo} setCover={setProductDemo} />
              )}
              {activeStep === steps.length && nextStep === 0 && (
                <Disclaimer onClick={() => setNextStep(nextStep + 1)} />
              )}
              {activeStep === steps.length && nextStep === 1 && (
                <ProfileSummary
                  onEdit={(pageNumber) => setActiveStep(pageNumber)}
                  onClick={() => setNextStep(nextStep + 1)}
                />
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
                    const stepProps = {}
                    if (isStepOptional(index)) {
                    }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    )
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
                        disabled={isEnabled() ? false : true}
                        className="btn"
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
  )
}

export default BlogPostCreate
