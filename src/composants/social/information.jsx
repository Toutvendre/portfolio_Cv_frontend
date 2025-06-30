import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="fixed top-4 right-4 z-30 flex flex-col items-end">
            {/* Bouton Informations */}
            <div
                className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-2 cursor-pointer border-b border-r border-white rounded-tr-md"
                onClick={handleToggle}
            >
                <span className="text-white text-base sm:text-lg font-serif">Informations</span>
                <FontAwesomeIcon icon={faInfoCircle} className="text-white text-base sm:text-lg" />
            </div>

            {/* Menu déroulant */}
            {isOpen && (
                <div className="mt-2 w-56 sm:w-64 bg-neutral-900 border border-neutral-700 rounded-md p-3 sm:p-4 text-white space-y-3 sm:space-y-4">
                    {/* Téléphone */}
                    <div className="flex justify-between items-center">
                        <a href="tel:+22607850631" className="flex items-center space-x-2 text-xs sm:text-sm hover:underline">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                            <span>+226 07 85 06 31</span>
                        </a>
                        <button
                            onClick={() => copyToClipboard("+226 07 85 06 31")}
                            className="text-xs text-gray-400 hover:text-white"
                            aria-label="Copier le numéro de téléphone"
                        >
                            Copier
                        </button>
                    </div>

                    {/* Email */}
                    <div className="flex justify-between items-center">
                        <a href="mailto:alexis07ki@gmail.com" className="flex items-center space-x-2 text-xs sm:text-sm hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                            <span>alexis07ki@gmail.com</span>
                        </a>
                        <button
                            onClick={() => copyToClipboard("alexis07ki@gmail.com")}
                            className="text-xs text-gray-400 hover:text-white"
                            aria-label="Copier l'email"
                        >
                            Copier
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Information;
