import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Avatar,
  Dialog,
  DialogContent,
  Card,
  CardContent,
  DialogActions,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

const Content = () => {
  const [value, setValue] = useState("my-content");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>Dashboard: Overview | Material Kit Pro</title>
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
                <Typography variant="h4">Avaliable Content</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "3px 2px 5px  lightgrey",
              pt: 2,
              pb: 6,
            }}
          >
            <Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    style={{ paddingLeft: "20px" }}
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      sx={{ fontSize: "18px" }}
                      label="My Content"
                      value="my-content"
                    />
                    <Tab
                      sx={{ fontSize: "18px" }}
                      label="Extra Content"
                      value="extra-content"
                    />
                  </TabList>
                </Box>
                <TabPanel value="my-content">my-content</TabPanel>
                <TabPanel value="extra-content">extra-content</TabPanel>
              </TabContext>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Content.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Content;
