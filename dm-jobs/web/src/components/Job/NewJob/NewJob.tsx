import { useMutation } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
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
  const [createJob, { loading, error }] = useMutation(CREATE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success('Job created');
      navigate(routes.jobs());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
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
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Job</h2>
      </header>
      <div className="rw-segment-main">
        <JobForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewJob;
