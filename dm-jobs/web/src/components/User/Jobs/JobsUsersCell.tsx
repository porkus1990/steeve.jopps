import JobsUsers from './JobsUsers';

export const QUERY = gql`
  query jobUsersByUser($userAuthId: String!) {
    jobUsersByUser: jobUsersByUser(userAuthId: $userAuthId) {
      jobId
    }
  }
`;

export const Loading = () => <div>Loading your jobs ...</div>;

export const Success = ({ jobUsersByUser }) => {
  return <JobsUsers userJobs={jobUsersByUser} />;
};
