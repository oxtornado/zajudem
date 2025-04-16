const GreenGradientWithText = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white mt-[-75px]">
      <div className="relative">
        <div className="w-[900px] h-[750px] rounded-full bg-[#00FF17] blur-[100px] opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-instrument text-white font-semibold text-7xl leading-tight">
            Innovación que te<br />abre puertas
          </h1>
          <p className="text-black text-lg mt-3">By Senasec</p>
        </div>
      </div>
    </div>
  );
};

export default GreenGradientWithText;
