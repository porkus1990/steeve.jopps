import { Link, navigate, routes } from '@redwoodjs/router';
import { useRef } from 'react';
import {
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useAuth } from '@redwoodjs/auth';
import { MetaTags } from '@redwoodjs/web';
import { toast, Toaster } from '@redwoodjs/web/toast';
import { useEffect } from 'react';

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home());
    }
  }, [isAuthenticated]);

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onSubmit = async (data) => {
    const response = await signUp({ ...data });

    if (response.message) {
      toast(response.message);
    } else if (response.error) {
      toast.error(response.error);
    } else {
      // user is signed in automatically
      toast.success('Welcome!');
    }
  };

  return (
    <>
      <MetaTags title="Signup" />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ mt: 3 }}
            className="rw-form-wrapper"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  ref={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SignupPage;
