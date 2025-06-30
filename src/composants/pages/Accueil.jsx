import ImageBg from "./section1/ImageBg";
import Contenu from "./section1/Contenu";

const Accueil = () => {
    return (
        <main className="relative min-h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <ImageBg />

            {/* Text and Social Icons */}
            <Contenu />
        </main>
    );
};

export default Accueil;