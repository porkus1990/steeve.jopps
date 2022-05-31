import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const PickJobDialog = ({ open, handleClose, pickJob }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t('job/do_you_want')}</DialogTitle>
      <DialogContent>{t('job/picking')}</DialogContent>
      <DialogActions>
        <Button onClick={pickJob}>{t('job/button_yes')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PickJobDialog;
