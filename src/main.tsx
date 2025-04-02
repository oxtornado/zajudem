import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Header from './components/header'
import GreenGradientWithText from './components/hero'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Header />
  <GreenGradientWithText />
  </StrictMode> 
)