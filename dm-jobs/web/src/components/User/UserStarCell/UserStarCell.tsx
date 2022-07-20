import { Fragment } from 'react';

import StarIcon from '@mui/icons-material/Star';
import { Grid } from '@mui/material';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

export const QUERY = gql`
  query FindUser($userId: String!) {
    userStar: userByUserAuthId(userId: $userId) {
      id
      rating
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ userStar }: CellSuccessProps) => {
  const { rating } = userStar;
  return (
    <Fragment>
      <Grid container>
        <Grid item>{rating}</Grid>
        <Grid item>
          <StarIcon sx={{ color: 'gold' }} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
