interface UserJob {
  jobId: string;
}

const UserJob = ({ userJobs }) => {
  console.log(userJobs);
  return (
    <>
      {userJobs.map((uj: UserJob) => (
        <p key={uj.jobId}>{uj.jobId}</p>
      ))}
    </>
  );
};

export default UserJob;
