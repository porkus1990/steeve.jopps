import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@redwoodjs/auth';

import JobUsersCell from 'src/components/User/Jobs/JobsUsersCell';

const UserJobs = () => {
  const { currentUser } = useAuth();
  const { t } = useTranslation();

  const userAuthId = currentUser.sub;
  return (
    <>
      <Typography component="h2" variant="h5" sx={{ marginBottom: 2 }}>
        {t('job/user/picks/your_announced_jobs')}
      </Typography>
      <JobUsersCell userAuthId={userAuthId} />
    </>
  );
};

export default UserJobs;
