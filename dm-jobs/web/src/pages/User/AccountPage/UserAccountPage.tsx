import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useRef } from 'react';
import { MetaTags } from '@redwoodjs/web';

const UserAccountPage = () => {
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();

  const townRef = useRef<HTMLInputElement>();
  const streetRef = useRef<HTMLInputElement>();
  const zipCodeRef = useRef<HTMLInputElement>();

  const onSubmit = () => {};
  return (
    <>
      <MetaTags title="Account settings" />
      <CssBaseline />

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Basic account information
          </Typography>
          <Box component="div" sx={{ mt: 3 }} className="rw-form-wrapper">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="Firstname"
                  name="firstName"
                  inputRef={firstNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Lastname"
                  name="lastName"
                  inputRef={lastNameRef}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Additional account information
          </Typography>
          <Box component="div" sx={{ mt: 3 }} className="rw-form-wrapper">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="town"
                  label="Town"
                  name="town"
                  inputRef={townRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  inputRef={streetRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="zipCode"
                  label="Zip code"
                  name="zipCode"
                  inputRef={zipCodeRef}
                />
              </Grid>
            </Grid>
          </Box>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Save
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default UserAccountPage;
