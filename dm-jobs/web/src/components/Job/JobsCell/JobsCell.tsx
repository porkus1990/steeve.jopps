import type { FindJobs } from 'types/graphql';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router';
import { Box, Container, Grid } from '@mui/material';
import JobsList from 'src/components/Job/JobsList';
import JobCategoryFilter from 'src/components/General/Filter/CategoryFilter';
import { useState } from 'react';

export const QUERY = gql`
  query FindJobs {
    jobsNotPicked {
      id
      createdAt
      categories
      title
      description
      price
      longitude
      latitude
      tags
      threeWords
      timeout
      status
      additionalAddressInformation
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No open gitjobs yet. '}
      <Link to={routes.newJob()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ jobsNotPicked }: CellSuccessProps<FindJobs>) => {
  const [activeJobsNotPicked, setActiveJobsNotPicked] =
    useState<Array<FindJobs>>(jobsNotPicked);

  const filter = (category) => {
    setActiveJobsNotPicked(
      jobsNotPicked.filter((jnp: FindJobs) => jnp.categories.includes(category))
    );
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <JobCategoryFilter filter={filter} />
          </Grid>
          <Grid item xs={12}>
            <JobsList jobs={activeJobsNotPicked} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
