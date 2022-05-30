import { Box, CssBaseline, Grid } from '@mui/material';
import { MetaTags } from '@redwoodjs/web';
import JobsCell from 'src/components/Job/JobsCell';

const PickJobPage = () => {
  return (
    <>
      <MetaTags title="Pick a job" />
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="div" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <JobsCell />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PickJobPage;
