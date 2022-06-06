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
import { headerConfig } from 'src/config/jobTableHeaderConfig';

interface JobsUsers {
  jobId: string;
}

const JobsUsers = ({ userJobs }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} size="medium">
        <TableHead sx={{ backgroundColor: 'black' }}>
          <TableRow>
            {headerConfig.map((entry) => (
              <TableCell key={entry} sx={{ color: 'white' }}>
                {entry}
              </TableCell>
            ))}
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
