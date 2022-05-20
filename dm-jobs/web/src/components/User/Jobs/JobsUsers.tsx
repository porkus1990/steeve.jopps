import JobCell from 'src/components/Job/JobCell/JobCell';

interface JobsUsers {
  jobId: string;
}

const JobsUsers = ({ userJobs }) => {
  console.log(userJobs);
  return (
    <>
      {userJobs.map((uj: JobsUsers) => (
        <JobCell key={uj.jobId} id={uj.jobId} />
      ))}
    </>
  );
};

export default JobsUsers;
