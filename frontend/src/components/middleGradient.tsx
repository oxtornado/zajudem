import Card from "./ui/card";

const GreenGradientBackground = () => {
  return (
    <div className="relative mt-[-200px] h-screen bg-gradient-to-b from-transparent via-[#09ff00] to-white">
      <div className="flex flex-col pt-96 mx-auto"> 
      <div className="flex flex-row gap-20 justify-center items-center">
          <Card
            title="Facil"
            subtitle="Acceso instantáneo"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit donec justo, faucibus tempor maecenas pretium lectus facilisi hendrerit senectus, quam per himenaeos taciti luctus "
          />
          <Card
            title="Rapido"
            subtitle="Sin intermediarios"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit donec justo, faucibus tempor maecenas pretium lectus facilisi hendrerit senectus, quam per himenaeos taciti luctus "
          />
          <Card
            title="Agil"
            subtitle="Informacion inmediata"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit donec justo, faucibus tempor maecenas pretium lectus facilisi hendrerit senectus, quam per himenaeos taciti luctus "
          />
        </div>
      </div>
    </div>
  );
};

export default GreenGradientBackground;