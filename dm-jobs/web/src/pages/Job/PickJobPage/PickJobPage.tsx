import { CssBaseline, Grid } from '@mui/material';

import { MetaTags } from '@redwoodjs/web';

import JobsCell from 'src/components/Job/JobsCell';

const PickJobPage = () => {
  return (
    <>
      <MetaTags title="Pick a job" />
      <CssBaseline />

      <Grid
        sx={{
          padding: 2,
          paddingLeft: 4,
          marginTop: 8,
        }}
      >
        <Grid container spacing={2}>
          <JobsCell />
        </Grid>
      </Grid>
    </>
  );
};

export default PickJobPage;
