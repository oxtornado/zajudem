import Button from "./ui/button.tsx";

const Footer = () => {
    return (
        <div className="relative h-96 flex flex-col mt-32">
            {/* Contenido principal */}
            <div className="flex-grow flex flex-col items-center justify-center mb-52 mt-40">
                <h1 className="text-5xl font-bold text-center">
                    Apostemos por formacion de calidad
                </h1>
                <div className="pt-2 flex justify-center mt-4">
                    <Button />
                </div>
            </div>
            <div className="w-full flex justify-center py-4">
                <div className="w-full max-w-6xl flex justify-between px-4">
                    <p>Zajudem Inc. 2025</p>
                    <div className="flex gap-6">
                        <p>
                            <a href="#">Github</a>
                        </p>    
                        <p>
                            <a href="#">Email</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;