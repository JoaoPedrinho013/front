import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header.tsx';
import ShinyShowcase from './pages/ShinyShowcase.tsx';
import ShinyDex from './pages/ShinyDex.tsx';
import ShinyRare from './pages/ShinyRare.tsx';
import Login  from './components/Login.tsx';
import AdminPlayers from './pages/AdminPlayers.tsx';
import AdminPlayerCatches from './pages/AdminPlayerCatches.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/front'>
      <Header />
      <Routes>
        <Route path="/" element={<ShinyShowcase />} />
        <Route path="/dex" element={<ShinyDex />} />
        <Route path="/rares" element={<ShinyRare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-players" element={<AdminPlayers />} />
        <Route path="/admin-player-catches" element={<AdminPlayerCatches />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
