import type { JobUserPicksByUser } from 'types/graphql';

export const QUERY = gql`
  query JobUserPicksByUser($userAuthId: String!) {
    jobUserPicks: jobUserPicksByUser(userId: $userAuthId) {
      jobId
    }
  }
`;

export const Success = ({ jobUserPicks }) => {
  console.log(jobUserPicks);

  return <div>success</div>;
};
