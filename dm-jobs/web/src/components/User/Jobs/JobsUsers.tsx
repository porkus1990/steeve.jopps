import JobCell from 'src/components/Job/JobCell/JobCell';
import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
} from '@mui/material';

interface JobsUsers {
  jobId: string;
}

const JobsUsers = ({ userJobs }) => {
  console.log(userJobs);
  return (
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
          {userJobs.map((uj: JobsUsers) => (
            <JobCell key={uj.jobId} id={uj.jobId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobsUsers;
