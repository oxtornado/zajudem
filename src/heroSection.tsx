import './heroSection.css'
import senaLogo from '../src/images/senasec-logo.png'
import Button from './button.tsx'

function heroSection() {
  return (
    <>
      <div className='heroSection'>
        <img 
          src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="logo" 
          alt="Vite logo" 
        />
        <div className="senasecLogo">
        <img src={senaLogo} alt="Sena Logo" />
        </div>
          <div className="startHere">
          <h1>Integracion ideal <br /> de seguridad <br /> fisica</h1>
          <Button />
        </div>
      </div>
    </>
  )
}

export default heroSection