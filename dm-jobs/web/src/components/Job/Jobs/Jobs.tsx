import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import PickJobDialog from 'src/components/General/JobDisplay/PickJobDialog';

const JobsList = ({ jobs }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [pickDialogOpen, setPickDialog] = useState<boolean>(false);

  const onAccordionChange =
    (acc: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? acc : false);
    };

  const togglePickDialog = () => {
    setPickDialog(!pickDialogOpen);
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
            <Button onClick={togglePickDialog}>Pick it!</Button>
          </AccordionDetails>
        </Accordion>
      ))}
      <PickJobDialog open={pickDialogOpen} handleClose={togglePickDialog} />
    </div>
  );
};

export default JobsList;
