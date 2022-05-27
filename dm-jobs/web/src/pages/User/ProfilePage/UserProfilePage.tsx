import { MetaTags } from '@redwoodjs/web';
import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import UserAddresses from 'src/components/User/UserAddresses/UserAddresses';
import UserJobs from 'src/components/User/UserJobs/UserJobs';

const UserProfilePage = () => {
  return (
    <>
      <MetaTags title="Account overview" />
      <CssBaseline />
      <Grid
        sx={{
          padding: 2,
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
          Account overview
        </Typography>
        <Grid>
          <UserAddresses />
        </Grid>
        <Grid
          sx={{
            marginTop: 8,
          }}
        >
          <UserJobs />
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfilePage;
