import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const JobsList = ({ jobs }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const onAccordionChange =
    (acc: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? acc : false);
    };

  return (
    <div>
      === platzhalter sorting/kategorien/etc === <br />
      === display user created the job with rating (if exists with at least x
      ratings)
      {jobs.map((job) => (
        <Accordion
          key={job.id}
          expanded={expanded === 'job' + job.id}
          onChange={onAccordionChange('job' + job.id)}
        >
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
                {job.longitude} - {job.latitude} - open job detail on click with
                or show here map
              </p>
            </Typography>
            <Button>Pick it!</Button>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default JobsList;
