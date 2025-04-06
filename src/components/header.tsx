import { useEffect, useState } from 'react';
import Button from './button';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carga inicial. Reemplázalo por tu lógica real si es necesario.
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        mt-3 transition-all duration-700 ease-in-out
        ${isLoading ? 'blur-md opacity-60 pointer-events-none' : 'blur-0 opacity-100'}
      `}
    >
      <div className="flex justify-evenly">
        <a href="/">Quienes somos</a>
        <a href="/">Servicio</a>
        <Button />
      </div>
    </div>
  );
};

export default Header;
