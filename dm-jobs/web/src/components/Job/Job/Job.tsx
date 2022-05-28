import { TableCell, TableRow } from '@mui/material';

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  );
};

const Job = ({ job }) => {
  return (
    <>
      <TableRow>
        <TableCell>{job.title}</TableCell>
        <TableCell>{job.description}</TableCell>
        <TableCell>{job.price}</TableCell>
        <TableCell>{job.threeWords}</TableCell>
        <TableCell>{job.status}</TableCell>
        <TableCell>{timeTag(job.timeout)}</TableCell>
        <TableCell>{job.additionalAddressInformation}</TableCell>
      </TableRow>
    </>
  );
};

export default Job;
