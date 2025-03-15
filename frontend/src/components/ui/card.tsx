interface CardProps {
  image?: any;
  title: string;
  subtitle: string;
  description: string;
}

const Card = ({ image, title, subtitle, description }: CardProps) => {
  return (
    <div className="w-1/4 bg-white rounded-md shadow-sm">
      <div className="h-60 bg-gray-200 rounded-md p-10 m-4">
        {image}
      </div>
      <div className="p-4">
        <h2 className="text-4xl font-bold mb-1">{title}</h2>
        <p className="text-base text-gray-600 mb-3">{subtitle}</p>
        <p className="text-sm text-gray-500 pb-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;