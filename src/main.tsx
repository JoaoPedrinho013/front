import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header.tsx';
import ShinyShowcase from './pages/ShinyShowcase.tsx';
import ShinyDex from './pages/ShinyDex.tsx';
import ShinyRare from './pages/ShinyRare.tsx';
import Login  from './components/Login.tsx';
import Admin from './pages/Admin.tsx';
import Footer from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ShinyShowcase />} />
        <Route path="/dex" element={<ShinyDex />} />
        <Route path="/rares" element={<ShinyRare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
