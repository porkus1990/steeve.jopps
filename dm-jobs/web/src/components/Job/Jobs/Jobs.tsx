import humanize from 'humanize-string';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/Job/JobsCell';

const DELETE_JOB_MUTATION = gql`
  mutation DeleteJobMutation($id: Int!) {
    deleteJob(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  );
};

const JobsList = ({ jobs }) => {
  const [deleteJob] = useMutation(DELETE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success('Job deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete job ' + id + '?')) {
      deleteJob({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Created at</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Three words</th>
            <th>Status</th>
            <th>Timeout</th>
            <th>Additional address information</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{timeTag(job.createdAt)}</td>
              <td>{truncate(job.title)}</td>
              <td>{truncate(job.description)}</td>
              <td>{truncate(job.price)}</td>
              <td>{truncate(job.longitude)}</td>
              <td>{truncate(job.latitude)}</td>
              <td>{truncate(job.threeWords)}</td>
              <td>{truncate(job.status)}</td>
              <td>{timeTag(job.timeout)}</td>
              <td>{truncate(job.additionalAddressInformation)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
