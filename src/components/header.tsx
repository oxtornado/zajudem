import Button from './button';
import "../styles.css";
const Header = () => {
return (
  <div>
    <div className="flex justify-evenly mx-20 mt-1">
      <a href="/" className=''>Quienes somos</a>
      <a href="/">Servicio</a>
      <Button /> 
    </div>
  </div> 
);
};

export default Header;