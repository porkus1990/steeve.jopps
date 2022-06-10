import { useEffect, useRef, useState } from 'react';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { AccountType } from '@prisma/client';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@redwoodjs/auth';
import { Link, navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast, Toaster } from '@redwoodjs/web/toast';

const USER_SETUP_MUTATION = gql`
  mutation InsertUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

const SignUpForm = () => {
  const { isAuthenticated, signUp } = useAuth();
  const [userSetupMutation] = useMutation(USER_SETUP_MUTATION);
  const { t } = useTranslation();

  const [accountType, setAccountType] = useState<AccountType>(
    AccountType.execute
  );

  const handleAccountTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccountType((event.target as HTMLInputElement).value as AccountType);
  };

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

  const passwordRef = useRef<HTMLInputElement>();

  const onSubmit = async () => {
    const response = await signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (response.message) {
      toast(response.message);
    } else if (response.error) {
      toast.error(response.error);
    } else {
      console.log(accountType);
      const userResp = await userSetupMutation({
        variables: {
          input: {
            userId: response.user.id,
            accountType,
          },
        },
      });
      console.log(userResp);
      // user is signed in automatically
      toast.success('Welcome!');
    }
  };

  return (
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
                autoComplete="new-password"
                inputRef={passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="account-type">
                  {t('job/user/signUp/account_type_choose')}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="account-type"
                  value={accountType}
                  name="radio-buttons-group"
                  onChange={handleAccountTypeChange}
                >
                  <FormControlLabel
                    value={AccountType.execute}
                    control={<Radio />}
                    label={t(
                      `job/user/signUp/account_type_${AccountType.execute}`
                    )}
                  />
                  <FormControlLabel
                    value={AccountType.provide}
                    control={<Radio />}
                    label={t(
                      `job/user/signUp/account_type_${AccountType.provide}`
                    )}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmit}
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
  );
};

export default SignUpForm;
