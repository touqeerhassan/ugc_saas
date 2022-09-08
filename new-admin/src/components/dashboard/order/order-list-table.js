import PropTypes from "prop-types";
import { format } from "date-fns";
import numeral from "numeral";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { SeverityPill } from "../../severity-pill";

const severityMap = {
  1: "success",
  3: "info",
  2: "info",
  4: "error",
  5: "warning",
};

function formatMonth(month) {
  var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  return months[month];
}

export const OrderListTable = (props) => {
  const {
    onOpenDrawer,
    onPageChange,
    onRowsPerPageChange,
    orders,
    ordersCount,
    page,
    rowsPerPage,
    ...other
  } = props;

  return (
    <div {...other}>
      <Table>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              hover
              key={order._id}
              onClick={() => onOpenDrawer?.(order._id)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "neutral.800" : "neutral.200",
                    borderRadius: 2,
                    maxWidth: "fit-content",
                    ml: 3,
                    p: 1,
                  }}
                >
                  <Typography align="center" variant="subtitle2">
                    {/* {format(order.date, "LLL").toUpperCase()} */}
                    {formatMonth(new Date(order?.date).getMonth())?.toUpperCase()}
                  </Typography>
                  <Typography align="center" variant="h6">
                    {/* {format(order.date, "LLL").toUpperCase()} */}
                    {new Date(order?.date).getDate()}
                  </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">{order?.campaign?.campaignName}</Typography>
                  <Typography color="textSecondary" variant="body2">
                    Total of {numeral(order?.price).format(`$0,0.00`)}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <SeverityPill color={severityMap[order.status] || "warning"}>
                  {order.status === 1
                    ? "Complete"
                    : order.status === 2
                    ? "Submitted"
                    : order.status === 3
                    ? "Pending"
                    : order.status === 4
                    ? "Cancelled"
                    : "Asked For Revision"}
                </SeverityPill>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={ordersCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};

OrderListTable.propTypes = {
  onOpenDrawer: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  orders: PropTypes.array.isRequired,
  ordersCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
