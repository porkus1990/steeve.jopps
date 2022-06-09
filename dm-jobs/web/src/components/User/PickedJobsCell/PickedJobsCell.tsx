import {
  Paper,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { JobUserPicksByUser } from 'types/graphql';

import JobCell from 'src/components/Job/JobCell';
import { headerConfig } from 'src/config/jobTableHeaderConfig';

export const QUERY = gql`
  query JobUserPicksByUser($userAuthId: String!) {
    jobUserPicks: jobUserPicksByUser(userId: $userAuthId) {
      jobId
    }
  }
`;

export const Success = ({ jobUserPicks }) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography component="h2" variant="h5" sx={{ marginBottom: 2 }}>
        {t('job/user/picks/your_picked_jobs')}
      </Typography>
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
            {jobUserPicks.map((jobUserPick) => (
              <JobCell key={jobUserPick.jobId} id={jobUserPick.jobId} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
