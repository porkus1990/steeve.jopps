import { useAuth } from '@redwoodjs/auth';
import { Typography } from '@mui/material';
import JobUsersCell from 'src/components/User/Jobs/JobsUsersCell';

const UserJobs = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Typography component="h2" variant="h5" sx={{ marginBottom: 2 }}>
        Your announced jobs
      </Typography>
      <JobUsersCell userAuthId={currentUser.sub} />
    </>
  );
};

export default UserJobs;
