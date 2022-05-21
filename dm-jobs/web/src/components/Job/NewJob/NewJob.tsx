import { useMutation } from '@redwoodjs/web';
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

const CREATE_JOB_CATEGORY_CONNECTION = gql`
  mutation CreateJobCategoryMutation($input: CreateJobCategoriesOnJobInput!) {
    createJobCategoriesOnJob(input: $input) {
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
  const [createJobCategoriesOnJob] = useMutation(
    CREATE_JOB_CATEGORY_CONNECTION
  );

  const onSave = async (input) => {
    const { data: newJob } = await createJob({
      variables: { input: input.data },
    });

    const { jobCategory } = input;

    jobCategory.forEach(async (category) => {
      await createJobCategoriesOnJob({
        variables: {
          input: {
            jobId: newJob.createJob.id,
            categoryId: category,
          },
        },
      });
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
