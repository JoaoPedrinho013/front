import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link, Stack } from '@mui/material';
import '../styles/navigation.css';

interface NavigationProps {
  layout: string;
}

export default function Navigation({ layout }: NavigationProps) {
  const location = useLocation();

  return (
    <React.StrictMode>
      <Stack className={`navegation navegation_${layout}`}>
        <Link
          className={location.pathname === '/' ? 'ativo' : ''}
          component={RouterLink}
          to="/"
          underline="none"
          color="inherit"
        >
          SHINY SHOWCASE
        </Link>

        <Link
          className={location.pathname === '/dex' ? 'ativo' : ''}
          component={RouterLink}
          to="/dex"
          underline="none"
          color="inherit"
        >
          SHINY DEX
        </Link>

        <Link
          className={location.pathname === '/rares' ? 'ativo' : ''}
          component={RouterLink}
          to="/rares"
          underline="none"
          color="inherit"
        >
          SHINY RARES
        </Link>
      </Stack>
    </React.StrictMode>
  );
}
