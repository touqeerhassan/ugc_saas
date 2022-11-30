import { Fragment, useState } from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { ChevronDown as ChevronDownIcon } from '../../../icons/chevron-down';
import { ChevronRight as ChevronRightIcon } from '../../../icons/chevron-right';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Image as ImageIcon } from '../../../icons/image';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const categoryOptions = [
  {
    label: 'Healthcare',
    value: 'healthcare'
  },
  {
    label: 'Makeup',
    value: 'makeup'
  },
  {
    label: 'Dress',
    value: 'dress'
  },
  {
    label: 'Skincare',
    value: 'skincare'
  },
  {
    label: 'Jewelry',
    value: 'jewelry'
  },
  {
    label: 'Blouse',
    value: 'blouse'
  }
];

function formatMonth(month) {
  var months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return months[month];
}

export const ProductListTable = (props) => {
  const {
    onPageChange,
    onRowsPerPageChange,
    page,
    contents,
    productsCount,
    rowsPerPage,
    extra,
    ...other
  } = props;
  const [openProduct, setOpenProduct] = useState(null);

  const handleOpenProduct = (productId) => {
    setOpenProduct((prevValue) => (prevValue === productId ? null : productId));
  };

  const handleUpdateProduct = () => {
    setOpenProduct(null);
    toast.success('Product updated');
  };

  const handleCancelEdit = () => {
    setOpenProduct(null);
  };

  const handleDeleteProduct = () => {
    toast.error('Product cannot be deleted');
  };

  return (
    <div {...other}>
      {/* <Scrollbar>
        <Table sx={{ minWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell width="25%">
                Name
              </TableCell>
              <TableCell width="25%">
                Stock
              </TableCell>
              <TableCell>
                Price
              </TableCell>
              <TableCell>
                sku
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contents.map((content) => {
              console.log(content)

              return (
                <Fragment key={product.id}>
                  <TableRow
                    hover
                    key={product.id}
                  >
                    <TableCell
                      padding="checkbox"
                      sx={{
                        ...(open && {
                          position: 'relative',
                          '&:after': {
                            position: 'absolute',
                            content: '" "',
                            top: 0,
                            left: 0,
                            backgroundColor: 'primary.main',
                            width: 3,
                            height: 'calc(100% + 1px)'
                          }
                        })
                      }}
                      width="25%"
                    >
                      <IconButton onClick={() => handleOpenProduct(product.id)}>
                        {open
                          ? <ChevronDownIcon fontSize="small" />
                          : <ChevronRightIcon fontSize="small" />}
                      </IconButton>
                    </TableCell>
                    <TableCell width="25%">
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        {product.image
                          ? (
                            <Box
                              sx={{
                                alignItems: 'center',
                                backgroundColor: 'background.default',
                                backgroundImage: `url(${product.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderRadius: 1,
                                display: 'flex',
                                height: 80,
                                justifyContent: 'center',
                                overflow: 'hidden',
                                width: 80
                              }}
                            />
                          )
                          : (
                            <Box
                              sx={{
                                alignItems: 'center',
                                backgroundColor: 'background.default',
                                borderRadius: 1,
                                display: 'flex',
                                height: 80,
                                justifyContent: 'center',
                                width: 80
                              }}
                            >
                              <ImageIcon fontSize="small" />
                            </Box>
                          )}
                        <Box
                          sx={{
                            cursor: 'pointer',
                            ml: 2
                          }}
                        >
                          <Typography variant="subtitle2">
                            {product.name}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                          >
                            in {product.category}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell width="25%">
                      <LinearProgress
                        value={product.quantity}
                        variant="determinate"
                        color={product.quantity >= 10 ? 'success' : 'error'}
                        sx={{
                          height: 8,
                          width: 36
                        }}
                      />
                      <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        {product.quantity}
                        {' '}
                        in stock
                        {product.variants > 1 && ` in ${product.variants} variants`}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {numeral(product.price).format(`${product.currency}0,0.00`)}
                    </TableCell>
                    <TableCell>
                      {product.sku}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={product.status === 'published' ? 'success' : 'info'}>
                        {product.status}
                      </SeverityPill>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <DotsHorizontalIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  {open && (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        sx={{
                          p: 0,
                          position: 'relative',
                          '&:after': {
                            position: 'absolute',
                            content: '" "',
                            top: 0,
                            left: 0,
                            backgroundColor: 'primary.main',
                            width: 3,
                            height: 'calc(100% + 1px)'
                          }
                        }}
                      >
                        <CardContent>
                          <Grid
                            container
                            spacing={3}
                          >
                            <Grid
                              item
                              md={6}
                              xs={12}
                            >
                              <Typography variant="h6">
                                Basic details
                              </Typography>
                              <Divider sx={{ my: 2 }} />
                              <Grid
                                container
                                spacing={3}
                              >
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                >
                                  <TextField
                                    defaultValue={product.name}
                                    fullWidth
                                    label="Product name"
                                    name="name"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                >
                                  <TextField
                                    defaultValue={product.sku}
                                    disabled
                                    fullWidth
                                    label="SKU"
                                    name="sku"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                >
                                  <TextField
                                    defaultValue={product.category}
                                    fullWidth
                                    label="Category"
                                    select
                                  >
                                    {categoryOptions.map((option) => (
                                      <MenuItem
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                                </Grid>
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                >
                                  <TextField
                                    defaultValue={product.id}
                                    disabled
                                    fullWidth
                                    label="Barcode"
                                    name="barcode"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              md={6}
                              xs={12}
                            >
                              <Typography variant="h6">
                                Pricing and stocks
                              </Typography>
                              <Divider sx={{ my: 2 }} />
                              <Grid
                                container
                                spacing={3}
                              >
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                >
                                  <TextField
                                    defaultValue={product.price}
                                    fullWidth
                                    label="Old price"
                                    name="old-price"
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          {product.currency}
                                        </InputAdornment>
                                      )
                                    }}
                                    type="number"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                >
                                  <TextField
                                    defaultValue={product.price}
                                    fullWidth
                                    label="New price"
                                    name="new-price"
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          $
                                        </InputAdornment>
                                      )
                                    }}
                                    type="number"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  md={6}
                                  xs={12}
                                  sx={{
                                    alignItems: 'center',
                                    display: 'flex'
                                  }}
                                >
                                  <Switch />
                                  <Typography variant="subtitle2">
                                    Keep selling when stock is empty
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <Divider />
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            px: 2,
                            py: 1
                          }}
                        >
                          <Button
                            onClick={handleUpdateProduct}
                            sx={{ m: 1 }}
                            type="submit"
                            variant="contained"
                          >
                            Update
                          </Button>
                          <Button
                            onClick={handleCancelEdit}
                            sx={{ m: 1 }}
                            variant="outlined"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleDeleteProduct}
                            color="error"
                            sx={{
                              m: 1,
                              ml: 'auto'
                            }}
                          >
                            Delete product
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={productsCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
      <Table>
        <TableBody>
          {contents.map((content) => (
            content.status === 2 &&
            <TableRow
              hover
              key={content._id}
            // onClick={() => onOpenDrawer?.(content._id)}
            // sx={{ cursor: "pointer" }}
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
                      theme.palette.mode === "dark"
                        ? "neutral.800"
                        : "neutral.200",
                    borderRadius: 2,
                    maxWidth: "fit-content",
                    ml: 3,
                    p: 1,
                  }}
                >
                  <Typography align="center" variant="subtitle2">
                    {/* {format(order.date, "LLL").toUpperCase()} */}
                    {formatMonth(
                      new Date(content?.date).getMonth()
                    )?.toUpperCase()}
                  </Typography>
                  <Typography align="center" variant="h6">
                    {/* {format(order.date, "LLL").toUpperCase()} */}
                    {new Date(content?.date).getDate()}
                  </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">
                    {content?.campaign?.campaignName}
                  </Typography>
                  {/* <Typography color="textSecondary" variant="body2">
                    Total of {numeral(order?.price).format(`$0,0.00`)}
                  </Typography> */}
                </Box>
              </TableCell>
              <TableCell align="right">
                {extra ? (
                  content?.campaign?.content?.contentType === 0 ? (
                    < center >
                      <img
                        style={{ width: "100px" }}
                        src={content?.demoExtraImage}
                        alt="Image"
                      />
                    </center>
                  ) : (
                    <center>
                      <video
                        style={{ width: "100px", height: "180px", marginTop: "5px" }}
                        src={content?.demoExtraVideo}
                        alt="Video"
                        controls
                      />
                    </center>
                  )
                ) : (
                  content?.campaign?.content?.contentType === 0 ? (
                    < center >
                      <img
                        style={{ width: "100px" }}
                        src={content?.demoImage}
                        alt="Image"
                      />
                    </center>
                  ) : (
                    <center>
                      <video
                        style={{ width: "100px", height: "180px", marginTop: "5px" }}
                        src={content?.demoVideo}
                        alt="Video"
                        controls
                      />
                    </center>
                  )
                )}
                {/* {content?.campaign?.content?.contentType === 0 ? (
                  < center >
                    <img
                      style={{ width: "100px" }}
                      src={content?.demoImage}
                      alt="Image"
                    />
                  </center>
                ) : (
                  <center>
                    <video
                      style={{ width: "100px", height: "180px", marginTop: "5px" }}
                      src={content?.demoVideo}
                      alt="Video"
                      controls
                    />
                  </center>
                )} */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <TablePagination
        component="div"
        count={ordersCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </div >
  );
};

ProductListTable.propTypes = {
  contents: PropTypes.array.isRequired,
  productsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  extra: PropTypes.bool
};
