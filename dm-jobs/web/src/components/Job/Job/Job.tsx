import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
} from '@mui/material';

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="medium">
          <TableHead sx={{ backgroundColor: 'black' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Title</TableCell>
              <TableCell sx={{ color: 'white' }}>Description</TableCell>
              <TableCell sx={{ color: 'white' }}>Price</TableCell>
              <TableCell sx={{ color: 'white' }}>Three words</TableCell>
              <TableCell sx={{ color: 'white' }}>Status</TableCell>
              <TableCell sx={{ color: 'white' }}>Timeout</TableCell>
              <TableCell sx={{ color: 'white' }}>
                Additional address information
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.description}</TableCell>
              <TableCell>{job.price}</TableCell>
              <TableCell>{job.threeWords}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>{timeTag(job.timeout)}</TableCell>
              <TableCell>{job.additionalAddressInformation}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Job;
