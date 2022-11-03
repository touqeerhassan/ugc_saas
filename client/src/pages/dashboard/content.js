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
import { ProjectListFilters } from "../../components/dashboard/product/product-list-filters";
import { ProductListTable } from "../../components/dashboard/product/product-list-table";

const applyFilters = (products, filters) =>
  products.filter((product) => {
    if (filters.name) {
      const nameMatched = product.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());

      if (!nameMatched) {
        return false;
      }
    }

    // It is possible to select multiple category options
    if (filters.category?.length > 0) {
      const categoryMatched = filters.category.includes(product.category);

      if (!categoryMatched) {
        return false;
      }
    }

    // It is possible to select multiple status options
    if (filters.status?.length > 0) {
      const statusMatched = filters.status.includes(product.status);

      if (!statusMatched) {
        return false;
      }
    }

    // Present only if filter required
    if (typeof filters.inStock !== "undefined") {
      const stockMatched = product.inStock === filters.inStock;

      if (!stockMatched) {
        return false;
      }
    }

    return true;
  });

const applyPagination = (products, page, rowsPerPage) =>
  products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

const Content = () => {
  const [value, setValue] = useState("my-content");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    name: undefined,
    category: [],
    status: [],
    inStock: undefined,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleFiltersChange = (filters) => {
    setFilters(filters);
  };
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const filteredProducts = applyFilters(products, filters);
  const paginatedProducts = applyPagination(
    filteredProducts,
    page,
    rowsPerPage
  );

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
          // sx={{
          //   backgroundColor: "white",
          //   borderRadius: "15px",
          //   boxShadow: "3px 2px 5px  lightgrey",
          //   pt: 2,
          //   pb: 6,
          // }}
          >
            <Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      sx={{ fontSize: "18px", padding: "10px" }}
                      label="My content (0)"
                      value="my-content"
                    />
                    <Tab
                      sx={{ fontSize: "18px", padding: "10px" }}
                      label="Extra content (0)"
                      value="extra-content"
                    />
                  </TabList>
                </Box>
                <TabPanel value="my-content">
                  <Card>
                    <ProjectListFilters onChange={handleFiltersChange} />
                    <ProductListTable
                      onPageChange={handlePageChange}
                      onRowsPerPageChange={handleRowsPerPageChange}
                      page={page}
                      products={paginatedProducts}
                      productsCount={filteredProducts.length}
                      rowsPerPage={rowsPerPage}
                    />
                  </Card>
                </TabPanel>
                <TabPanel value="extra-content">
                  <Card>
                    <ProjectListFilters onChange={handleFiltersChange} />
                    <ProductListTable
                      onPageChange={handlePageChange}
                      onRowsPerPageChange={handleRowsPerPageChange}
                      page={page}
                      products={paginatedProducts}
                      productsCount={filteredProducts.length}
                      rowsPerPage={rowsPerPage}
                    />
                  </Card>
                </TabPanel>
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
