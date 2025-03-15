import { useEffect, useState } from 'react';
import Button from './ui/button.tsx';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carga inicial. Reemplázalo por tu lógica real si es necesario.
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="pt-2 flex justify-evenly">
        <a href="/">Quienes somos</a>
        <a href="/">Servicio</a>
        <Button />
      </div>
  );
};

export default Header;
