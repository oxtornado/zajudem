import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './heroSection.tsx'
import SectionTwo from './sectionTwo.tsx'
import Card from './card.tsx'
import Dropdown from './dropdown.tsx'
import LastSection from './lastSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroSection />
    <SectionTwo />
    <Card />
    <Dropdown />    
    <LastSection />
  </StrictMode>,
)
