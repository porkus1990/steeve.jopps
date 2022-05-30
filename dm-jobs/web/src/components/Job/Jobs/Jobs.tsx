import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { QUERY } from 'src/components/Job/JobsCell';

const JobsList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <Accordion key={job.id}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={'panel-' + job.id + '-content'}
            id={'panel-' + job.id + 'header'}
          >
            <Typography>
              {job.title} - {job.description}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>{job.additionalAddressInformation}</p>
              <p>
                {job.longitude} - {job.latitude}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default JobsList;
