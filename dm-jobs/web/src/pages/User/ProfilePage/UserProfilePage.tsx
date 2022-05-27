import { MetaTags } from '@redwoodjs/web';
import { Box, CssBaseline, Typography } from '@mui/material';
import UserAddresses from 'src/components/User/UserAddresses/UserAddresses';

const UserProfilePage = () => {
  return (
    <>
      <MetaTags title="Account overview" />
      <CssBaseline />
      <Box
        sx={{
          padding: 5,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
          Account overview
        </Typography>
        <UserAddresses />
      </Box>
    </>
  );
};

export default UserProfilePage;
