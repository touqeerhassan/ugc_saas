import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { orderApi } from "../../../__fake-api__/order-api";
import { AuthGuard } from "../../authentication/auth-guard";
import { DashboardLayout } from "../../dashboard/dashboard-layout";
import { OrderDrawer } from "./brand-order-drawer";

import { OrderListTable } from "../../dashboard/order/order-list-table";
import { useMounted } from "../../../hooks/use-mounted";
import { Plus as PlusIcon } from "../../../icons/plus";
import { Search as SearchIcon } from "../../../icons/search";
import { gtm } from "../../../lib/gtm";
import { useAuth } from "../../../hooks/use-auth";

import { API_SERVICE } from "../../../config";

const tabs = [
  {
    label: "All",
    value: 0,
  },
  {
    label: "Completed",
    value: 1,
  },
  {
    label: "Submitted",
    value: 2,
  },
  {
    label: "Pending",
    value: 3,
  },
  {
    label: "Cancelled",
    value: 4,
  },
  {
    label: "Asked For Revision",
    value: 5,
  },
];

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

const applyFilters = (orders, filters) =>
  orders.filter((order) => {
    // if (filters.query) {
    //   // Checks only the order number, but can be extended to support other fields, such as customer
    //   // name, email, etc.
    //   const containsQuery = order.number
    //     .toLowerCase()
    //     .includes(filters.query.toLowerCase());

    //   if (!containsQuery) {
    //     return false;
    //   }
    // }

    if (typeof filters.status !== "undefined") {
      console.log(order.status, filters.status);
      const statusMatched = order.status === filters.status;

      if (!statusMatched) {
        return false;
      }
    }

    return true;
  });

const applySort = (orders, order) =>
  orders.sort((a, b) => {
    const comparator = a.date > b.date ? -1 : 1;

    return order === "desc" ? comparator : -comparator;
  });

const applyPagination = (orders, page, rowsPerPage) =>
  orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

const OrderListInner = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  overflow: "hidden",
  paddingBottom: theme.spacing(8),
  paddingTop: theme.spacing(8),
  zIndex: 1,
  [theme.breakpoints.up("lg")]: {
    marginRight: -500,
  },
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
    },
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const OrderList = () => {
  const isMounted = useMounted();
  const rootRef = useRef(null);
  const queryRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    query: "",
    status: undefined,
  });
  const [drawer, setDrawer] = useState({
    isOpen: false,
    orderId: null,
  });

  const [toggler, setToggler] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    gtm.push({ event: "page_view" });
    console.log(Date.now());
  }, []);

  const getOrders = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_SERVICE}/get_orders/branduser/${user?.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setOrders(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getOrders();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toggler]
  );

  const handleTabsChange = (event, value) => {
    console.log(value);
    setCurrentTab(value);
    setFilters((prevState) => ({
      ...prevState,
      status: value === 0 ? undefined : value,
    }));
  };

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

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleOpenDrawer = (orderId) => {
    setDrawer({
      isOpen: true,
      orderId,
    });
  };

  const handleCloseDrawer = () => {
    setDrawer({
      isOpen: false,
      orderId: null,
    });
  };

  // Usually query is done on backend with indexing solutions
  const filteredOrders = applyFilters(orders, filters);
  const sortedOrders = applySort(filteredOrders, sort);
  const paginatedOrders = applyPagination(sortedOrders, page, rowsPerPage);

  return (
    <>
      <Head>
        <title>Dashboard: Order List | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        ref={rootRef}
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <OrderListInner open={drawer.isOpen}>
          <Box sx={{ px: 3 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Orders</Typography>
              </Grid>
              {/* <Grid item>
                <Button
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                >
                  Add
                </Button>
              </Grid> */}
            </Grid>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              sx={{ mt: 3 }}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              m: -1.5,
              p: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleQueryChange}
              sx={{
                flexGrow: 1,
                m: 1.5,
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
            </Box>
            <TextField
              label="Sort By"
              name="order"
              onChange={handleSortChange}
              select
              SelectProps={{ native: true }}
              sx={{ m: 1.5 }}
              value={sort}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Divider />
          <OrderListTable
            onOpenDrawer={handleOpenDrawer}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            orders={paginatedOrders}
            ordersCount={filteredOrders.length}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </OrderListInner>
        <OrderDrawer
          fetchAgain={() => setToggler(!toggler)}
          containerRef={rootRef}
          onClose={handleCloseDrawer}
          open={drawer.isOpen}
          order={orders.find((order) => order._id === drawer.orderId)}
        />
      </Box>
    </>
  );
};

export default OrderList;
