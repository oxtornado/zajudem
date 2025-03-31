import Button from './button';
import "../styles.css";
const Header = () => {
  return (
    <div className="header">
      <a href="/" className=''>Quienes somos</a>
      <a href="/">Servicio</a>
      <Button />
    </div>
  );
};

export default Header;