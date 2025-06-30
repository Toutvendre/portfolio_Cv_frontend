import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faInfoCircle, faCogs, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PiedDePage = () => {
    return (
        <footer
            className="fixed bottom-0 left-0 w-full text-white py-3 px-3 block md:hidden shadow-lg backdrop-blur-md bg-opacity-30"
            style={{ backgroundColor: 'rgba(24, 24, 27, 0.7)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
            role="contentinfo"
            aria-label="Pied de page navigation mobile"
        >
            <nav className="flex justify-around items-center" aria-label="Mobile navigation links">
                <a
                    href="../Accueil"
                    className="text-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-0"
                    aria-label="Page d'accueil"
                >
                    <FontAwesomeIcon icon={faRocket} className="text-lg mb-1" />
                    <p className="text-sm">Accueil</p>
                </a>
                <a
                    href="/section/a-propos"
                    className="text-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-0"
                    aria-label="À propos"
                >
                    <FontAwesomeIcon icon={faInfoCircle} className="text-lg mb-1" />
                    <p className="text-sm">À propos</p>
                </a>
                <a
                    href="../Services"
                    className="text-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-0"
                    aria-label="Mes services"
                >
                    <FontAwesomeIcon icon={faCogs} className="text-lg mb-1" />
                    <p className="text-sm">Services</p>
                </a>
                <a
                    href="/section1/projets"
                    className="text-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-0"
                    aria-label="Mes projets"
                >
                    <FontAwesomeIcon icon={faProjectDiagram} className="text-lg mb-1" />
                    <p className="text-sm">Projets</p>
                </a>
                <a
                    href="/section1/contact"
                    className="text-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-0"
                    aria-label="Page de contact principale"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg mb-1" />
                    <p className="text-sm">Contact</p>
                </a>
            </nav>
        </footer>
    );
};

export default PiedDePage;