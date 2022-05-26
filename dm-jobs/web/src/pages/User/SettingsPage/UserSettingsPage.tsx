import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { MetaTags } from '@redwoodjs/web';

const UserSettingsPage = () => {
  return (
    <>
      <MetaTags title="User settings" />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Your settings
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default UserSettingsPage;
