import React from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  Card,
  CardContent,
  DialogActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function BrandDialog({ setbrandOpen, brandOpen, campaigns }) {
  return (
    <Dialog onClose={() => setbrandOpen(false)} open={brandOpen} maxWidth="md">
      <DialogContent>
        <Container maxWidth="lg">
          <Card>
            <CardContent>
              <Box
                sx={{
                  m: -1,
                  mt: 3,
                }}
              >
                <Grid container>
                  <Grid
                    item
                    md={4}
                    xs={12}
                    sx={{
                      alignItems: "center",
                      borderRight: (theme) => ({
                        md: `1px solid ${theme.palette.divider}`,
                      }),
                      borderBottom: (theme) => ({
                        md: "none",
                        xs: `1px solid ${theme.palette.divider}`,
                      }),
                      display: "flex",
                      justifyContent: "space-between",
                      p: 3,
                    }}
                  >
                    <div>
                      <Typography variant="h5">{campaigns.length}</Typography>
                      <Typography color="textSecondary" variant="overline">
                        Total Campaigns
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                    sx={{
                      alignItems: "center",
                      borderRight: (theme) => ({
                        md: `1px solid ${theme.palette.divider}`,
                      }),
                      borderBottom: (theme) => ({
                        md: "none",
                        xs: `1px solid ${theme.palette.divider}`,
                      }),
                      display: "flex",
                      justifyContent: "space-between",
                      p: 3,
                    }}
                  >
                    <div>
                      <Typography variant="h5">
                        {campaigns.filter((campaign) => campaign.content?.contentType === 0).length}
                      </Typography>
                      <Typography color="textSecondary" variant="overline">
                        Image Related
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={12}
                    sx={{
                      alignItems: "center",
                      borderRight: (theme) => ({
                        md: `1px solid ${theme.palette.divider}`,
                      }),
                      borderBottom: (theme) => ({
                        md: "none",
                        xs: `1px solid ${theme.palette.divider}`,
                      }),
                      display: "flex",
                      justifyContent: "space-between",
                      p: 3,
                    }}
                  >
                    <div>
                      <Typography variant="h5">
                        {campaigns.filter((campaign) => campaign.content?.contentType === 1).length}
                      </Typography>
                      <Typography color="textSecondary" variant="overline">
                        Video Related
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 6, mb: 4, mx: 2 }}>
                    <Typography variant="h5">All Campaigns</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TableContainer sx={{ mx: 2 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">S. No</TableCell>
                            <TableCell align="center">Brand</TableCell>
                            <TableCell align="center">Campaign Name</TableCell>
                            <TableCell align="center">Content Type</TableCell>
                            {/* <TableCell align="center">Action</TableCell> */}
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {campaigns.map((row, i) => {
                            return (
                              <TableRow hover key={row._id} sx={{ cursor: "pointer" }}>
                                <TableCell align="center">{i + 1}</TableCell>
                                <TableCell align="center">{row?.brand}</TableCell>
                                <TableCell align="center">{row?.campaignName}</TableCell>
                                <TableCell align="center">
                                  {row?.content?.contentType === 0 ? "Image" : "Video"}
                                </TableCell>

                                {/* <TableCell align="center">
                                  <Tooltip title="Delete">
                                    <IconButton
                                      onClick={() => {
                                        // deleteCampaign(row._id);
                                      }}
                                      color="error"
                                      aria-label="upload picture"
                                      component="span"
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Tooltip>
                                </TableCell> */}
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setbrandOpen(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BrandDialog;
