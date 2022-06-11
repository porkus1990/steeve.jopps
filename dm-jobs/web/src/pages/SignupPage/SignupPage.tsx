import { MetaTags } from '@redwoodjs/web';

import SignUpForm from 'src/components/User/SignUpForm/SignUpForm';

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" />

      <SignUpForm />
    </>
  );
};

export default SignupPage;
