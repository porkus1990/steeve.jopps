import { Container } from '@mui/material';

import { MetaTags } from '@redwoodjs/web';

import NewJob from 'src/components/Job/NewJob';

const NewJobPage = () => {
  return (
    <>
      <MetaTags title="New job" />

      <Container component="main" maxWidth="md">
        <NewJob />
      </Container>
    </>
  );
};

export default NewJobPage;
