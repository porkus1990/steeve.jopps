import { Set, Router, Route } from '@redwoodjs/router'
import JobsLayout from 'src/layouts/JobsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={JobsLayout}>
        <Route path="/jobs/new" page={JobNewJobPage} name="newJob" />
        <Route path="/jobs/{id:Int}/edit" page={JobEditJobPage} name="editJob" />
        <Route path="/jobs/{id:Int}" page={JobJobPage} name="job" />
        <Route path="/jobs" page={JobJobsPage} name="jobs" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
