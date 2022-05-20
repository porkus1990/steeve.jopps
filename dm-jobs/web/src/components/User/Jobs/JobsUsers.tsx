interface JobsUsers {
  jobId: string;
}

const JobsUsers = ({ userJobs }) => {
  console.log(userJobs);
  return (
    <>
      {userJobs.map((uj: JobsUsers) => (
        <p key={uj.jobId}>{uj.jobId}</p>
      ))}
    </>
  );
};

export default JobsUsers;
