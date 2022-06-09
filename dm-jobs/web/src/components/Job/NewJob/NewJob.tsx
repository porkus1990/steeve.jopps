import { Typography } from '@mui/material';

import { useAuth } from '@redwoodjs/auth';
import { useMutation } from '@redwoodjs/web';

import JobForm from 'src/components/Job/JobForm';

const CREATE_JOB_MUTATION = gql`
  mutation CreateJobMutation($input: CreateJobInput!) {
    createJob(input: $input) {
      id
    }
  }
`;

const CREATE_JOB_USER_MUTATION = gql`
  mutation CreateJobUserMutation($input: CreateJobUserInput!) {
    createJobUser(input: $input) {
      id
    }
  }
`;

const NewJob = () => {
  const [createJob, { loading, error }] = useMutation(CREATE_JOB_MUTATION);
  const [createJobUser] = useMutation(CREATE_JOB_USER_MUTATION);

  const { currentUser } = useAuth();

  const onSave = async (input) => {
    console.log(input);
    const { data: newJob } = await createJob({
      variables: { input },
    });

    createJobUser({
      variables: {
        input: {
          jobId: newJob.createJob.id,
          userId: currentUser.sub,
        },
      },
    });
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        New Job
      </Typography>
      <JobForm onSave={onSave} loading={loading} error={error} />
    </>
  );
};

export default NewJob;
