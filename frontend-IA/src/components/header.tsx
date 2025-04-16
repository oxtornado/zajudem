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
      <div className="flex justify-evenly">
        <a href="/">Quienes somos</a>
        <a href="/">Servicio</a>
        <Button />
      </div>
  );
};

export default Header;
