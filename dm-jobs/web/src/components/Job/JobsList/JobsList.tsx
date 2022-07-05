import { Fragment, useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
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
import { useTranslation } from 'react-i18next';

import { useAuth } from '@redwoodjs/auth';
import { useMutation } from '@redwoodjs/web';

import PickJobDialog from 'src/components/General/JobDisplay/PickJobDialog';
import SpecificJobMap from 'src/components/General/SpecificJob/SpecificJobMap';

const PICK_JOB_MUTATION = gql`
  mutation CreateJobUserPickMutation($input: CreateJobUserPickInput!) {
    createJobUserPick(input: $input) {
      id
    }
  }
`;

const UPDATE_JOB_PICKED_BY_MUTATION = gql`
  mutation UpdateJobPickedByMutation($jobId: Int!, $input: UpdateJobPickedByInput!) {
    updateJobPickedBy(id: $jobId, input: $input) {
      id
    }
  }
`;

const JobsList = ({ jobs }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | boolean>(false);
  const [pickDialogOpen, setPickDialog] = useState<boolean>(false);
  const [jobPickState, setJobPickState] = useState<AlertColor | null>(null);
  const [createJobUserPick] = useMutation(PICK_JOB_MUTATION);
  const [updateJobPickedBy] = useMutation(UPDATE_JOB_PICKED_BY_MUTATION);
  const { currentUser } = useAuth();

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

  const pickedJob = async ({ id }) => {
    try {
      const jobUserPick = await createJobUserPick({
        variables: {
          input: {
            jobId: id,
            userId: currentUser.sub,
          },
        },
      });

      updateJobPickedBy({
        variables: {
          jobId: id,
          input: {
            jobUserPickId: jobUserPick.data.createJobUserPick.id
          },
        },
      });
      setJobPickState('success');
    } catch (e) {
      setJobPickState('error');
    }

    togglePickDialog();
  };

  return (
    <Fragment>
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
            <SpecificJobMap
              coordinates={{
                latitude: parseFloat(job.latitude),
                longitude: parseFloat(job.longitude),
              }}
            />
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
    </Fragment>
  );
};

export default JobsList;
