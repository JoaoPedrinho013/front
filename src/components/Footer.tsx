import { Link as RouterLink } from 'react-router-dom';
import { Link, Box, AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../assets/images/turma.jpeg';
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
          borderTop:"1px solid #34B8FF"
        }}
      >
        <Link component={RouterLink} to="/" sx={{ textAlign: 'center', width: '33%', cursor: 'default' }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            className='logo-footer'
          />
        </Link>
        <Navigation layout='column'/>
        <FormWhats />

      </Toolbar>
      <Typography className='rightsReserved' variant='subtitle1'>Panelinha 2025 &copy; All rights reserved.</Typography>
    </AppBar>
  );
}
