import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/login">
      <button className="px-2 py-1 text-sm font-light text-black bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg active:shadow-inner transition-all">
        Comience aquí
      </button>
    </Link>
  );
};

export default Button;
