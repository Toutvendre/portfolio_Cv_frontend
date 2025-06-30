import { useState, useEffect } from 'react';
import colors from "@/lib/couleurs/librairie_couleur";
import { API_URL } from '@/config/config';

const Button = ({ children, className, disabled, ...props }) => {
    return (
        <button
            className={className}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default function Contact() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setIsAnimating(true);
        }, 500);

        return () => clearTimeout(animationTimer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: result.message });
                setFormData({
                    prenom: '',
                    nom: '',
                    email: '',
                    telephone: '',
                    service: '',
                    message: ''
                });

                // Auto-hide success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus({ type: 'error', message: result.message || 'Une erreur est survenue.' });
            }
        } catch {
            setStatus({ type: 'error', message: 'Erreur de connexion au serveur.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen w-full px-4 sm:px-6 lg:px-20 py-20"
            style={{
                backgroundColor: colors.zinc[950],
                backgroundImage: `linear-gradient(135deg, ${colors.zinc[950]} 0%, ${colors.zinc[900]} 50%, ${colors.zinc[800]} 100%)`,
                color: colors.zinc[50]
            }}
        >
            {/* Effet de fond géométrique */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.zinc[700]} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${colors.zinc[600]} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <div
                        className="w-16 h-1 mb-6 mx-auto rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                        }}
                    />

                    <p
                        className="text-sm font-bold mb-4 tracking-wide uppercase"
                        style={{
                            color: colors.zinc[400],
                            letterSpacing: '1.2px'
                        }}
                    >
                        Démarrons votre projet
                    </p>

                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide"
                        style={{
                            color: colors.zinc[50],
                            fontFamily: "'Playfair Display', serif",
                            letterSpacing: '-0.5px'
                        }}
                    >
                        CONTACT<span style={{ color: colors.red[600] }}>.</span>
                    </h2>

                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{
                            color: colors.zinc[300],
                            fontWeight: '500'
                        }}
                    >
                        Vous avez une idée brillante ? Parlons-en et créons ensemble quelque chose d'exceptionnel.
                    </p>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Formulaire de contact */}
                    <div
                        className="relative rounded-2xl border-2 p-8 md:p-10"
                        style={{
                            background: `linear-gradient(135deg, ${colors.zinc[900]} 0%, ${colors.zinc[800]} 100%)`,
                            borderColor: colors.zinc[700],
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        {/* Accent géométrique */}
                        <div
                            className="w-12 h-1 mb-8 rounded-full"
                            style={{
                                background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                            }}
                        />

                        <h3
                            className="text-2xl md:text-3xl font-bold mb-6"
                            style={{
                                color: colors.zinc[50],
                                fontFamily: "'Playfair Display', serif"
                            }}
                        >
                            Écrivons votre histoire
                        </h3>

                        {/* Message de statut */}
                        {status && (
                            <div
                                className={`mb-6 p-4 rounded-xl border-2 transition-all duration-300 ${status.type === 'success'
                                    ? 'bg-green-900/30 border-green-600 text-green-100'
                                    : 'bg-red-900/30 border-red-600 text-red-100'
                                    }`}
                            >
                                <p className="text-sm font-medium">{status.message}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Prénom et Nom */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label
                                        className="block text-xs font-bold uppercase tracking-wide mb-2"
                                        style={{ color: colors.zinc[400] }}
                                    >
                                        Prénom *
                                    </label>
                                    <input
                                        type="text"
                                        name="prenom"
                                        required
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-2 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] outline-none"
                                        style={{
                                            color: colors.zinc[50],
                                            borderColor: colors.zinc[600],
                                            focusBorderColor: colors.red[600]
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = colors.red[600]}
                                        onBlur={(e) => e.target.style.borderColor = colors.zinc[600]}
                                    />
                                </div>
                                <div className="group">
                                    <label
                                        className="block text-xs font-bold uppercase tracking-wide mb-2"
                                        style={{ color: colors.zinc[400] }}
                                    >
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        name="nom"
                                        required
                                        value={formData.nom}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-2 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] outline-none"
                                        style={{
                                            color: colors.zinc[50],
                                            borderColor: colors.zinc[600]
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = colors.red[600]}
                                        onBlur={(e) => e.target.style.borderColor = colors.zinc[600]}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <label
                                    className="block text-xs font-bold uppercase tracking-wide mb-2"
                                    style={{ color: colors.zinc[400] }}
                                >
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-2 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] outline-none"
                                    style={{
                                        color: colors.zinc[50],
                                        borderColor: colors.zinc[600]
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = colors.red[600]}
                                    onBlur={(e) => e.target.style.borderColor = colors.zinc[600]}
                                />
                            </div>

                            {/* Téléphone */}
                            <div className="group">
                                <label
                                    className="block text-xs font-bold uppercase tracking-wide mb-2"
                                    style={{ color: colors.zinc[400] }}
                                >
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-2 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] outline-none"
                                    style={{
                                        color: colors.zinc[50],
                                        borderColor: colors.zinc[600]
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = colors.red[600]}
                                    onBlur={(e) => e.target.style.borderColor = colors.zinc[600]}
                                />
                            </div>

                            {/* Service */}
                            <div className="group">
                                <label
                                    className="block text-xs font-bold uppercase tracking-wide mb-2"
                                    style={{ color: colors.zinc[400] }}
                                >
                                    Service *
                                </label>
                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-2 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] outline-none"
                                    style={{
                                        color: colors.zinc[50],
                                        borderColor: colors.zinc[600],
                                        backgroundColor: colors.zinc[800]
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = colors.red[600]}
                                    onBlur={(e) => e.target.style.borderColor = colors.zinc[600]}
                                >
                                    <option value="" style={{ backgroundColor: colors.zinc[800] }}>
                                        Choisissez un service
                                    </option>
                                    <option value="Développement Web" style={{ backgroundColor: colors.zinc[800] }}>
                                        Développement Web
                                    </option>
                                    <option value="Design UI/UX" style={{ backgroundColor: colors.zinc[800] }}>
                                        Design UI/UX
                                    </option>
                                    <option value="Identité Visuelle" style={{ backgroundColor: colors.zinc[800] }}>
                                        Identité Visuelle
                                    </option>
                                    <option value="Optimisation SEO" style={{ backgroundColor: colors.zinc[800] }}>
                                        Optimisation SEO
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="group">
                                <label
                                    className="block text-xs font-bold uppercase tracking-wide mb-2"
                                    style={{ color: colors.zinc[400] }}
                                >
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-2 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] outline-none resize-none"
                                    style={{
                                        color: colors.zinc[50],
                                        borderColor: colors.zinc[600]
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = colors.red[600]}
                                    onBlur={(e) => e.target.style.borderColor = colors.zinc[600]}
                                />
                            </div>

                            {/* Bouton d'envoi */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-10 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                style={{
                                    background: isSubmitting
                                        ? colors.zinc[600]
                                        : `linear-gradient(90deg, ${colors.red[600]}, ${colors.red[700]})`,
                                    color: colors.zinc[50],
                                    borderColor: colors.zinc[50],
                                    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </Button>
                        </form>
                    </div>

                    {/* Animation et informations - Masqué sur mobile, repositionné */}
                    <div className="hidden lg:block space-y-8">
                        {/* Animation géométrique */}
                        <div className="relative h-80 flex items-center justify-center">
                            <div
                                className={`
                                    w-64 h-64 rounded-full relative
                                    transform transition-all duration-1000 ease-in-out
                                    ${isAnimating
                                        ? 'translate-x-0 opacity-100 scale-100'
                                        : 'translate-x-20 opacity-0 scale-50'
                                    }
                                `}
                                style={{
                                    background: `linear-gradient(135deg, ${colors.red[600]} 0%, ${colors.red[700]} 100%)`,
                                    boxShadow: '0 8px 32px rgba(239, 68, 68, 0.3)'
                                }}
                            >
                                <div
                                    className="absolute inset-2 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: colors.zinc[900] }}
                                >
                                    <div className="text-center">
                                        <h3
                                            className="text-xl font-bold mb-2"
                                            style={{
                                                color: colors.red[400],
                                                fontFamily: "'Playfair Display', serif"
                                            }}
                                        >
                                            Créativité
                                        </h3>
                                        <p
                                            className="text-sm"
                                            style={{ color: colors.zinc[300] }}
                                        >
                                            Innovation & Excellence
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Éléments décoratifs */}
                            <div
                                className={`
                                    absolute top-1/4 right-1/4
                                    w-12 h-12 rounded-full
                                    transform transition-all duration-1000 ease-in-out
                                    ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                                `}
                                style={{ backgroundColor: colors.red[600] }}
                            />
                            <div
                                className={`
                                    absolute bottom-1/4 left-1/4
                                    w-8 h-8 rounded-full
                                    transform transition-all duration-1500 ease-in-out
                                    ${isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                                `}
                                style={{ backgroundColor: colors.red[700] }}
                            />
                        </div>

                        {/* Informations de contact */}
                        <div className="space-y-6">
                            <div>
                                <h4
                                    className="text-lg font-bold mb-2"
                                    style={{ color: colors.zinc[50] }}
                                >
                                    Restons connectés
                                </h4>
                                <p
                                    className="text-base"
                                    style={{ color: colors.zinc[300] }}
                                >
                                    Suivez-moi sur les réseaux sociaux pour découvrir mes derniers projets et partager nos passions communes.
                                </p>
                            </div>

                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/alexis-ki-099781358"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                                    style={{
                                        backgroundColor: colors.zinc[800],
                                        borderColor: colors.zinc[600],
                                        color: colors.zinc[300]
                                    }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/Toutvendre"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                                    style={{
                                        backgroundColor: colors.zinc[800],
                                        borderColor: colors.zinc[600],
                                        color: colors.zinc[300]
                                    }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/AlexisKI07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                                    style={{
                                        backgroundColor: colors.zinc[800],
                                        borderColor: colors.zinc[600],
                                        color: colors.zinc[300]
                                    }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section réseaux sociaux pour mobile - Placée en bas */}
                <div className="lg:hidden mt-16 text-center">
                    <h4
                        className="text-lg font-bold mb-4"
                        style={{ color: colors.zinc[50] }}
                    >
                        Restons connectés
                    </h4>
                    <p
                        className="text-sm mb-6"
                        style={{ color: colors.zinc[300] }}
                    >
                        Suivez-moi sur les réseaux sociaux
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/alexis-ki-099781358"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                            style={{
                                backgroundColor: colors.zinc[800],
                                borderColor: colors.zinc[600],
                                color: colors.zinc[300]
                            }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/Toutvendre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                            style={{
                                backgroundColor: colors.zinc[800],
                                borderColor: colors.zinc[600],
                                color: colors.zinc[300]
                            }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="https://x.com/AlexisKI07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
                            style={{
                                backgroundColor: colors.zinc[800],
                                borderColor: colors.zinc[600],
                                color: colors.zinc[300]
                            }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer signature discret */}
            < div
                className="absolute bottom-4 left-4 text-xs opacity-60"
                style={{ color: colors.zinc[500] }
                }
            >
                Contact • KI Brou Alexis
            </div >
        </section >
    );
}