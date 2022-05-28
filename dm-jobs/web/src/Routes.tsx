import { Private, Set, Router, Route } from '@redwoodjs/router';
import BaseLayout from 'src/layouts/BaseLayout';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[800],
    },
  },
});

const Routes = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Set wrap={BaseLayout}>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
          <Private unauthenticated="home">
            <Route path="/jobs/new" page={JobNewJobPage} name="newJob" />
            <Route path="/jobs/{id:Int}/edit" page={JobEditJobPage} name="editJob" />
            <Route path="/jobs/{id:Int}" page={JobJobPage} name="job" />
            <Route path="/jobs" page={JobJobsPage} name="jobs" />
            <Route path="/user/profile" page={UserProfilePage} name="userProfile" />
            <Route path="/user/jobs" page={User} name="jobsPage" />
            <Route path="/user/account" page={UserAccountPage} name="userAccount" />
            <Route path="/user/settings" page={UserSettingsPage} name="userSettings" />
          </Private>
          <Route path="/" page={HomePage} name="home" />
          <Route notfound page={NotFoundPage} />
        </Set>
      </ThemeProvider>
    </Router>
  );
};

export default Routes;
