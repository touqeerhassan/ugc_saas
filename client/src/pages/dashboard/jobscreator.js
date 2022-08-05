import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { API_SERVICE } from "../../config";

import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { Cog as CogIcon } from "../../icons/cog";
import { gtm } from "../../lib/gtm";
import { Search as SearchIcon } from "../../icons/search";
import JobCard from "../../components/dashboard/jobscreator/job-card";

const sortOptions = [
  {
    label: "Newest",
    value: "desc",
  },
  {
    label: "Oldest",
    value: "asc",
  },
];

const Finance = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sort, setSort] = useState("desc");
  const [filters, setFilters] = useState({
    query: "",
    status: undefined,
  });
  const queryRef = useRef(null);

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const handleQueryChange = (event) => {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      query: queryRef.current?.value,
    }));
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSort(value);
  };

  const fetchCampaigns = async () => {
    try {
      const response = await fetch(`${API_SERVICE}/get_all_campaigns`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        // console.log(response);
        const data = await response.json();
        console.log(data);
        setCampaigns(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <>
      <Head>
        <title>Jobs</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Jobs</Typography>
              </Grid>
              <Grid item></Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  m: -1,
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleQueryChange}
                  sx={{
                    flexGrow: 1,

                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    defaultValue=""
                    fullWidth
                    inputProps={{ ref: queryRef }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Search by order number"
                  />
                  <Button
                    startIcon={<CogIcon fontSize="small" />}
                    sx={{ mx: 2 }}
                    variant="outlined"
                  >
                    Filters
                  </Button>
                  {/* <TextField
                    label="Sort By"
                    name="order"
                    onChange={handleSortChange}
                    select
                    SelectProps={{ native: true }}
                    value={sort}
                    sx={{ mx: 2 }}
                  /> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            {campaigns.map((campaign) => (
              <Grid item xs={12} md={6} key={campaign._id}>
                <JobCard campaign={campaign} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Finance.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Finance;
