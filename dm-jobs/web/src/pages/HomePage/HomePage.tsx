import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Map } from '../../components/Map';

const HomePage = () => {
  const { isAuthenticated, logOut } = useAuth();
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Steeve.jopps
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <p />
      <Map />
      {isAuthenticated ? (
        <div>
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <div>not logged in</div>
      )}
    </>
  );
};

export default HomePage;
