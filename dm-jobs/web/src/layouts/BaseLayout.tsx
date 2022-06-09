import { Fragment, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router';

import SideMenu from '../components/General/SideMenu';
import TopMenu from '../components/User/TopMenu/TopMenu';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: 3,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const BaseLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const handleSideMenuOpen = () => {
    setSideMenuOpen(true);
  };

  const handleSideMenuClose = () => {
    setSideMenuOpen(false);
  };

  return (
    <Fragment>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" open={sideMenuOpen}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, ...(sideMenuOpen && { display: 'none ' }) }}
              onClick={handleSideMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Steeve.jopps
            </Typography>
            {isAuthenticated ? (
              <TopMenu />
            ) : (
              <Link to={routes.login()} className="homepage homepage__login">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Login
                </Typography>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <SideMenu open={sideMenuOpen} handleClose={handleSideMenuClose} />
      <Main open={sideMenuOpen}>{children}</Main>
    </Fragment>
  );
};

export default BaseLayout;
