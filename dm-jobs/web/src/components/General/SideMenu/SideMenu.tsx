import { Divider, Drawer, IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

const drawerWidth = 240;

const SideMenu = ({ open, handleClose }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <IconButton onClick={handleClose}>
        <ChevronLeft />
      </IconButton>
      <Divider />
      Drawer
    </Drawer>
  );
};

export default SideMenu;
