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

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home());
    }
  }, [isAuthenticated]);

  const emailRef = useRef<HTMLInputElement>();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const passwordRef = useRef<HTMLInputElement>();

  const onSubmit = async () => {
    const response = await logIn({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (response.message) {
      toast(response.message);
    } else if (response.error) {
      toast.error(response.error);
    } else {
      toast.success('Welcome back!');
    }
  };

  return (
    <>
      <MetaTags title="Login" />

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
            Sign in
          </Typography>
          <Box component="div" sx={{ mt: 3 }} className="rw-form-wrapper">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
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
                  autoComplete="current-password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="rw-forgot-link">
                  <Link to={routes.forgotPassword()} className="rw-forgot-link">
                    Forgot Password?
                  </Link>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={onSubmit}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
          <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
