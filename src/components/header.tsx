import Button from './button';

const Header = () => {
  return (
    <div className="mt-3">
      <div className="flex justify-evenly">
        <a href="/" className="">Quienes somos</a>
        <a href="/">Servicio</a>
        <Button />
      </div>
    </div>
  );
};
  
export default Header;