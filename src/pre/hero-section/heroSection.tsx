import './heroSection.css'
import SenaLogo from '../images/senasec-logo.png'
import Button from '../button/button.tsx'
import SecurityCamera from '../images/security-camera.png'

function heroSection() {
  return (
    <>
      <div className='heroSection'>
        <img 
          src={SecurityCamera} 
          className="logo" 
          alt="Vite logo" 
        />
        <div className="senasecLogo">
        <img src={SenaLogo} alt="Sena Logo" />
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