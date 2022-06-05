import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Button,
  Snackbar,
  Typography,
  AlertColor,
} from '@mui/material';
import { useMutation } from '@redwoodjs/web';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import { useAuth } from '@redwoodjs/auth';
import PickJobDialog from 'src/components/General/JobDisplay/PickJobDialog';
import { useTranslation } from 'react-i18next';

const PICK_JOB_MUTATION = gql`
  mutation CreateJobUserPickMutation($input: CreateJobUserPickInput!) {
    createJobUserPick(input: $input) {
      id
    }
  }
`;

const JobsList = ({ jobs }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | boolean>(false);
  const [pickDialogOpen, setPickDialog] = useState<boolean>(false);
  const [jobPickState, setJobPickState] = useState<AlertColor | null>(null);
  // const [createJobUserPick] = useMutation(PICK_JOB_MUTATION);
  // const { currentUser } = useAuth();

  const onAccordionChange =
    (acc: number | boolean) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? acc : false);
    };

  const togglePickDialog = () => {
    setPickDialog(!pickDialogOpen);
  };

  const handleCloseAlert = () => {
    setJobPickState(null);
  };

  const pickedJob = (/*{ id }*/) => {
    try {
      setJobPickState('success');
    } catch (e) {
      setJobPickState('error');
    }

    togglePickDialog();
  };

  return (
    <div>
      === platzhalter sorting/kategorien/etc === <br />
      === display user created the job with rating (if exists with at least x
      ratings)
      {jobs.map((job) => (
        <Accordion
          key={job.id}
          expanded={expanded === job.id}
          onChange={onAccordionChange(job.id)}
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
              {job.additionalAddressInformation}
              {job.longitude} - {job.latitude} - open job detail on click with
              or show here map
            </Typography>
            <Button onClick={togglePickDialog}>Pick it!</Button>
          </AccordionDetails>
        </Accordion>
      ))}
      <PickJobDialog
        open={pickDialogOpen}
        handleClose={togglePickDialog}
        pickJob={() => pickedJob({ id: expanded })}
      />
      {jobPickState !== null ? (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert severity={jobPickState} onClose={handleCloseAlert}>
            {t(`job/pick_${jobPickState}`)}
          </Alert>
        </Snackbar>
      ) : (
        ''
      )}
    </div>
  );
};

export default JobsList;
