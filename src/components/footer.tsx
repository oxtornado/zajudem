import Button from "./button";
const Footer = () => {
    return (
        <div> 
            <div className="m-60">
                <h1 className="text-5xl font-bold text-center">
                    Apostemos por formacion de calidad
                </h1>
                <div className="pt-2 flex justify-center mt-4">
                    <Button />
                </div>
            </div>
            <div className="flex place-items-center justify-center mx-120 mb-5"> 
                <p className="w-70">Zajudem Inc.</p>
                    <p className="mr-5 ml-155">
                        <a href="#">Email</a>
                    </p>
                    <p>
                        <a href="#">Github</a>
                    </p>
            </div>
        </div>
    );
};

export default Footer;