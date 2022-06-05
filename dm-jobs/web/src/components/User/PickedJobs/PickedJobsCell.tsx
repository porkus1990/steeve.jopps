import type { JobUserPicksByUser } from 'types/graphql';
import { Typography } from '@mui/material';
import JobCell from 'src/components/Job/JobCell/JobCell';
import { useTranslation } from 'react-i18next';

export const QUERY = gql`
  query JobUserPicksByUser($userAuthId: String!) {
    jobUserPicks: jobUserPicksByUser(userId: $userAuthId) {
      jobId
    }
  }
`;

export const Success = ({ jobUserPicks }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography component="h2" variant="h5" sx={{ marginBottom: 2 }}>
        {t('job/user/picks/your_picked_jobs')}
      </Typography>
      {jobUserPicks.map((jobUserPick) => (
        <JobCell key={jobUserPick.jobId} id={jobUserPick.jobId} />
      ))}
    </div>
  );
};
