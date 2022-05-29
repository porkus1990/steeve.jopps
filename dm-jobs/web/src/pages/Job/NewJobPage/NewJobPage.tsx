import { MetaTags } from '@redwoodjs/web';
import { Container } from '@mui/material';
import NewJob from 'src/components/Job/NewJob';

const NewJobPage = () => {
  return (
    <>
      <MetaTags title="New job" />

      <Container component="main" maxWidth="sm">
        <NewJob />
      </Container>
    </>
  );
};

export default NewJobPage;
