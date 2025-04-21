import Card from "./card";
const GreenGradientBackground = () => {
  return (
    <div className="static transform -translate-y-[-50px] h-[750px] bg-gradient-to-b from-white-500 via-[#00FF18] to-white mt-100">  
        <div className="flex flex-col">
          <div className="mt-100 flex flex-row gap-20 justify-center items-center">
            <Card 
                  title="Facil"
                  subtitle="Acceso instantáneo"
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit donec justo,  faucibus tempor maecenas pretium lectus facilisi hendrerit senectus,  quam per himenaeos taciti luctus "
              />
              <Card
                  title="Rapido"
                  subtitle="Sin intermediarios"
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit donec justo,  faucibus tempor maecenas pretium lectus facilisi hendrerit senectus,  quam per himenaeos taciti luctus "  
              />
              <Card
                  title="Agil"
                  subtitle="Informacion inmediata"
                  description="Lorem ipsum dolor sit amet consectetur adipiscing elit donec justo,  faucibus tempor maecenas pretium lectus facilisi hendrerit senectus,  quam per himenaeos taciti luctus "
              />
          </div>
        </div>
    </div>
  );
};

export default GreenGradientBackground;

/* Rectangle 99 */
