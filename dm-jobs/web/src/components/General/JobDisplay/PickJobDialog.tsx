import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const PickJobDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Pick job?</DialogTitle>
      <DialogContent>
        By clicking "yes" you're guaranteeing to execute the job.
      </DialogContent>
      <DialogActions>
        <Button>Yes!</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PickJobDialog;
