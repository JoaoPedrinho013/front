import { Link as RouterLink } from 'react-router-dom';
import { Link, Box, AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../assets/icons/zorua.png';
import Navigation from './Navigation.tsx';
import FormWhats from './FormWhats.tsx'
import '../styles/footer.css';

export default function Footer() {
  return (
    <AppBar position='static'>
      <Toolbar
        sx={{
          width: '100dvw',
          backgroundColor: '#2c2c2c',
          justifyContent: 'space-around',
        }}
      >
        <Link component={RouterLink} to="/" className='logo-footer'>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, cursor: 'pointer'}}
            
          />
        </Link>
        <Navigation layout='column'/>
        <FormWhats />

      </Toolbar>
      <Typography className='rightsReserved' variant='subtitle1'>Panelinha 2025 &copy; All rights reserved.</Typography>
    </AppBar>
  );
}
