import JobCell from 'src/components/Job/JobCell'

type JobPageProps = {
  id: number
}

const JobPage = ({ id }: JobPageProps) => {
  return <JobCell id={id} />
}

export default JobPage
