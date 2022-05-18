import type { FindJobById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Job from 'src/components/Job/Job'

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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Job not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ job }: CellSuccessProps<FindJobById>) => {
  return <Job job={job} />
}
