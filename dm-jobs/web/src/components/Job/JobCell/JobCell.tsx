import type { FindJobById } from 'types/graphql';

import type { CellSuccessProps } from '@redwoodjs/web';

import Job from 'src/components/Job/Job';

export const QUERY = gql`
  query FindJobById($id: Int!) {
    job: job(id: $id) {
      id
      createdAt
      title
      description
      price
      longitude
      latitude
      threeWords
      status
      timeout
      additionalAddressInformation
      pickedBy {
        userId
      }
    }
  }
`;

export const Empty = () => (
  <tr>
    <td>
      <span>No jobs announced</span>
    </td>
  </tr>
);

export const Loading = () => (
  <tr>
    <td>
      <span>Loading...</span>
    </td>
  </tr>
);

export const Success = ({ job }: CellSuccessProps<FindJobById>) => {
  console.log(job.pickedBy);
  return <Job job={job} />;
};
