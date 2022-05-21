import { useAuth } from '@redwoodjs/auth';
import JobsUsersCell from 'src/components/User/Jobs/JobsUsersCell';

const JobsPage = () => {
  const { currentUser } = useAuth();

  return <JobsUsersCell userId={currentUser.sub} />;
};

export default JobsPage;
