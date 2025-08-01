import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link, Box, AppBar, Toolbar, Tooltip, IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../assets/icons/Zorua.gif';
import Navigation from './Navigation.tsx';

export default function Header() {
  const location = useLocation();
  const showLoginIcon = location.pathname !== '/admin';


  return (
    <AppBar position='static'>
      <Toolbar
        sx={{
          width: '100dvw',
          backgroundColor: '#2c2c2c',
          justifyContent: 'space-around',
          borderBottom: "1px solid #34B8FF"
        }}
      >
        <Link component={RouterLink} to="/">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, cursor: 'pointer' }}
          />
        </Link>

        <Navigation layout='row' />

        {showLoginIcon ? (
          <Link component={RouterLink} to="/login" underline="none" color="inherit">
            <Tooltip title="Sign in" placement="bottom" arrow>
              <IconButton color='inherit'><LoginIcon /></IconButton>
            </Tooltip>
          </Link>
        ) : (
          <Link component={RouterLink} to="/" underline="none" color="inherit">
            <Tooltip title="Sign out" placement="bottom" arrow>
              <IconButton color='inherit'><LogoutIcon /></IconButton>
            </Tooltip>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
