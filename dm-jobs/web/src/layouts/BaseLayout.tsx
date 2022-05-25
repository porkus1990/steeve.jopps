import { Link, routes } from '@redwoodjs/router';
import { useAuth } from '@redwoodjs/auth';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TopMenu from '../components/User/TopMenu/TopMenu';

const BaseLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <header>
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
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default BaseLayout;
