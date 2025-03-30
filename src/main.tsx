import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Header from './components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Header />
  </StrictMode> 
)