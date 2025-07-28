import { Link as RouterLink } from 'react-router-dom';
import { Link, Box, AppBar, Toolbar, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import logo from '../assets/icons/zorua.png';
import Navigation from './Navigation.tsx';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar
        sx={{
          width: '100dvw',
          backgroundColor: '#2c2c2c',
          justifyContent: 'space-around',
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
        <Navigation layout='row'/>
        <Link component={RouterLink} to="/login" underline="none" color="inherit">
          <Tooltip title="Login" placement="bottom">
            <LoginIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Link>

      </Toolbar>
    </AppBar>
  );
}
