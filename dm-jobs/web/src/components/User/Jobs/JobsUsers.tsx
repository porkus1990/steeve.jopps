import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import JobCell from 'src/components/Job/JobCell';
import { headerConfig } from 'src/config/jobTableHeaderConfig';

interface JobsUsers {
  jobId: string;
}

const JobsUsers = ({ userJobs }) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} size="medium">
        <TableHead sx={{ backgroundColor: 'black' }}>
          <TableRow>
            {headerConfig.map((entry) => (
              <TableCell key={entry} sx={{ color: 'white' }}>
                {t(`job/table/header/${entry}`)}
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
