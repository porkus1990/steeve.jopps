import { CssBaseline, Grid, Typography } from '@mui/material';

import { useAuth } from '@redwoodjs/auth';
import { MetaTags } from '@redwoodjs/web';

import PickedJobsCell from 'src/components/User/PickedJobsCell';
import UserAddresses from 'src/components/User/UserAddresses/UserAddresses';
import UserJobs from 'src/components/User/UserJobs/UserJobs';
import UserStarCell from 'src/components/User/UserStarCell';

const UserProfilePage = () => {
  const { currentUser } = useAuth();
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
          <UserStarCell userId={currentUser.sub} />
        </Grid>
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
        <Grid
          sx={{
            marginTop: 8,
          }}
        >
          <PickedJobsCell userAuthId={currentUser.sub as string} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfilePage;
