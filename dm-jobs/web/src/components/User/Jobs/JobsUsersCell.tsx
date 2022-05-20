import JobsUsers from './JobsUsers';

export const QUERY = gql`
  query jobUsersByUser($userId: String!) {
    jobUsersByUser: jobUsersByUser(userId: $userId) {
      jobId
    }
  }
`;

export const Loading = () => <div>Loading your jobs ...</div>;

export const Success = ({ jobUsersByUser }) => {
  return <JobsUsers userJobs={jobUsersByUser} />;
};
