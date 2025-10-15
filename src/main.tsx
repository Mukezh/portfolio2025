import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import MainHomePage from './components/MainHomepage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainHomePage />
  </StrictMode>,
)
