import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Header from './components/header'
import GreenGradientWithText from './components/greenGradient'
import GreenGradientText from './components/greenGradientText'
import WhoAreWe from './components/whoAreWe'
import GradientBackground from './components/middleGradient'
import Footer from './components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Header />
  <GreenGradientWithText />
  <GreenGradientText />
  <WhoAreWe />
  <GradientBackground />
  <Footer />
  </StrictMode> 
)