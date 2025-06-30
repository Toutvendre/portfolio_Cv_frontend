import React from 'react';
import colors from '@/lib/couleurs/librairie_couleur';

const Button = ({ children, className, asChild, ...props }) => {
    if (asChild && React.Children.count(children) === 1) {
        return React.cloneElement(children, {
            className: `${className} ${children.props.className || ''}`,
            ...props
        });
    }
    return <button className={className} {...props}>{children}</button>;
};

const Contenu = () => {
    return (
        <div
            className="relative min-h-screen w-full px-4 sm:px-6 lg:px-20"
            style={{
                backgroundColor: `${colors.zinc[950]}80`, // Ajout de transparence (80 = 50% opacité)
                backgroundImage: `linear-gradient(135deg, ${colors.zinc[950]}80 0%, ${colors.zinc[900]}60 50%, ${colors.zinc[800]}40 100%)`,
                color: colors.zinc[50]
            }}
        >
            {/* Effet de fond géométrique */}
            <div
                className="absolute inset-0 opacity-5 z-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.zinc[700]} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${colors.zinc[600]} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Styles pour ajustement zoom 125% */}
            <style jsx>{`
                @media screen and (-webkit-device-pixel-ratio: 1.25) {
                    .content-container {
                        padding-bottom: 16rem !important;
                    }
                }
                @media screen and (min-resolution: 120dpi) and (max-resolution: 144dpi) {
                    .content-container {
                        padding-bottom: 16rem !important;
                    }
                }
            `}</style>

            {/* Texte principal */}
            <div className="content-container relative z-20 min-h-screen flex flex-col justify-end items-start md:items-end pb-32 sm:pb-40 md:pb-64">
                <div className="text-right md:text-right max-w-xl sm:max-w-2xl md:max-w-3xl w-full">
                    {/* Accent géométrique */}
                    <div
                        className="w-16 h-1 mb-6 ml-auto rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                        }}
                    />

                    <p
                        className="text-md sm:text-lg md:text-2xl font-medium mb-4 tracking-wide uppercase text-xs font-bold"
                        style={{
                            color: colors.zinc[400],
                            letterSpacing: '1.2px'
                        }}
                    >
                        Développeur Web
                    </p>

                    <h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide leading-tight"
                        style={{
                            color: colors.zinc[50],
                            fontFamily: "'Playfair Display', serif",
                            letterSpacing: '-0.5px'
                        }}
                    >
                        ALEXIS<span style={{ color: colors.red[600] }}>.</span>
                    </h1>

                    <p
                        className="text-xl sm:text-2xl md:text-lg lg:text-xl mb-8 leading-relaxed"
                        style={{
                            color: colors.zinc[300],
                            fontWeight: '500'
                        }}
                    >
                        Développeur Web Fullstack passionné, je maîtrise HTML, CSS, JavaScript, React et Laravel pour créer des sites performants et esthétiques, avec des interfaces intuitives, tout en restant à la pointe des dernières technologies pour offrir des solutions modernes et de haute qualité.
                    </p>

                    <Button
                        asChild
                        className="inline-block px-10 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg border-2"
                        style={{
                            background: `linear-gradient(90deg, ${colors.red[600]}, ${colors.red[700]})`,
                            color: colors.zinc[50],
                            borderColor: colors.zinc[50],
                            boxShadow: '0 3px 8px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <a
                            href="/pdf/cv.pdf"
                            download
                            rel="noopener noreferrer"
                        >
                            Télécharger CV
                        </a>
                    </Button>
                </div>
            </div>

            {/* Footer signature discret */}
            <div
                className="absolute bottom-4 left-4 text-xs opacity-60"
                style={{ color: colors.zinc[500] }}
            >
                © 2025 KI Brou Alexis
            </div>
        </div>
    );
};

export default Contenu;