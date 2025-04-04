import '../styles.css'

const GreenGradientWithText = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white mt-[-75px]">
      <div className="relative">
      <div className="w-200 h-150 rounded-full bg-[#00FF17] blur-[180px] opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>  
        <div className="relative z-10 text-center">
          <h1 className="font-['Instrument Sans'] text-white font-semibold text-7xl leading-tight">
            Innovación que te<br />abre puertas
          </h1>
          <p className="text-black text-lg mt-3">
            By Senasec
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenGradientWithText;