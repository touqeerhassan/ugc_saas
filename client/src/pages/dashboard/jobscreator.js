import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, Typography, Card, CardContent, Chip, Stack, IconButton  } from '@mui/material';

import VideocamIcon from '@mui/icons-material/Videocam';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { Cog as CogIcon } from '../../icons/cog';
import { gtm } from '../../lib/gtm';

const Finance = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Jobs
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">
                  Jobs
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  m: -1
                }}
              >
                <Button
                  startIcon={<CogIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Filters
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>

            <Grid item xs={6} sm={6}>
                <Card
                    variant='outlined'
                >
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={4}>
                                <img style={{ width: '100%', marginTop: '5px' }} src="https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse-500x500.jpg" alt="Image" />
                            </Grid>
                            <Grid item xs={6} sm={8}>
                                <Typography
                                    sx={{ float: 'right' }}
                                >
                                    Earning <br /><span style={{ color: 'blue', fontWeight: 'bold' }} >$59.00</span> 
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{ float: 'left' }}
                                >
                                    Leather Small Handbag <br /> <span style={{ fontSize: '15px' }} >$20.00</span> 
                                </Typography>

                                <br />
                                <br />

                                <Chip color='primary' label='Free product' variant='outlined' size='small' sx={{ mt: 2 }} />

                                <Stack direction="row" sx={{ mt: 3 }} spacing={1}>
                                    <VideocamIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Product Demo Video 
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <StayCurrentPortraitIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Vertical Video (single or more)
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <AccessTimeIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        30 sec
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        fullWidth
                                    >
                                        Take this job
                                    </Button>
                                    <IconButton color="error" component="label">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Stack>

                                
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6}>
                <Card
                    variant='outlined'
                >
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={4}>
                                <img style={{ width: '100%', marginTop: '5px' }} src="https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse-500x500.jpg" alt="Image" />
                            </Grid>
                            <Grid item xs={6} sm={8}>
                                <Typography
                                    sx={{ float: 'right' }}
                                >
                                    Earning <br /><span style={{ color: 'blue', fontWeight: 'bold' }} >$59.00</span> 
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{ float: 'left' }}
                                >
                                    Leather Small Handbag <br /> <span style={{ fontSize: '15px' }} >$20.00</span> 
                                </Typography>

                                <br />
                                <br />

                                <Chip color='primary' label='Free product' variant='outlined' size='small' sx={{ mt: 2 }} />

                                <Stack direction="row" sx={{ mt: 3 }} spacing={1}>
                                    <VideocamIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Product Demo Video 
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <StayCurrentPortraitIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Vertical Video (single or more)
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <AccessTimeIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        30 sec
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        fullWidth
                                    >
                                        Take this job
                                    </Button>
                                    <IconButton color="error" component="label">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Stack>

                                
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6}>
                <Card
                    variant='outlined'
                >
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={4}>
                                <img style={{ width: '100%', marginTop: '5px' }} src="https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse-500x500.jpg" alt="Image" />
                            </Grid>
                            <Grid item xs={6} sm={8}>
                                <Typography
                                    sx={{ float: 'right' }}
                                >
                                    Earning <br /><span style={{ color: 'blue', fontWeight: 'bold' }} >$59.00</span> 
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{ float: 'left' }}
                                >
                                    Leather Small Handbag <br /> <span style={{ fontSize: '15px' }} >$20.00</span> 
                                </Typography>

                                <br />
                                <br />

                                <Chip color='primary' label='Free product' variant='outlined' size='small' sx={{ mt: 2 }} />

                                <Stack direction="row" sx={{ mt: 3 }} spacing={1}>
                                    <VideocamIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Product Demo Video 
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <StayCurrentPortraitIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Vertical Video (single or more)
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <AccessTimeIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        30 sec
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        fullWidth
                                    >
                                        Take this job
                                    </Button>
                                    <IconButton color="error" component="label">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Stack>

                                
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6}>
                <Card
                    variant='outlined'
                >
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={4}>
                                <img style={{ width: '100%', marginTop: '5px' }} src="https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse-500x500.jpg" alt="Image" />
                            </Grid>
                            <Grid item xs={6} sm={8}>
                                <Typography
                                    sx={{ float: 'right' }}
                                >
                                    Earning <br /><span style={{ color: 'blue', fontWeight: 'bold' }} >$59.00</span> 
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{ float: 'left' }}
                                >
                                    Leather Small Handbag <br /> <span style={{ fontSize: '15px' }} >$20.00</span> 
                                </Typography>

                                <br />
                                <br />

                                <Chip color='primary' label='Free product' variant='outlined' size='small' sx={{ mt: 2 }} />

                                <Stack direction="row" sx={{ mt: 3 }} spacing={1}>
                                    <VideocamIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Product Demo Video 
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <StayCurrentPortraitIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        Vertical Video (single or more)
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
                                    <AccessTimeIcon color='primary' />
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        30 sec
                                    </Typography>
                                </Stack>

                                <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        fullWidth
                                    >
                                        Take this job
                                    </Button>
                                    <IconButton color="error" component="label">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Stack>

                                
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            

          </Grid>
         
            
        </Container>
      </Box>
    </>
  );
};

Finance.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Finance;
