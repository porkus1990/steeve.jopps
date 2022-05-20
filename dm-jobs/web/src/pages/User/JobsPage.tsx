import { useAuth } from '@redwoodjs/auth';
import UserJobsCell from 'src/components/User/Jobs/UserJobsCell';

const JobsPage = () => {
  const { currentUser } = useAuth();

  return <UserJobsCell userId={currentUser.sub} />;
};

export default JobsPage;
