import React from "react";
import { ArrowRight } from "lucide-react";
import colors from "@/lib/couleurs/librairie_couleur";

const services = [
    { id: "01", title: "Développement Web", description: "Création de sites web performants et modernes." },
    { id: "02", title: "Design UI/UX", description: "Conception d'interfaces élégantes et intuitives." },
    { id: "03", title: "Identité Visuelle", description: "Création de logos et de chartes graphiques uniques." },
    { id: "04", title: "Optimisation SEO", description: "Amélioration du référencement naturel pour booster votre visibilité." },
];

export default function Services() {
    return (
        <section
            id="services"
            className="min-h-screen flex flex-col items-center justify-center py-20 px-8 relative"
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

            <div className="relative z-10 max-w-6xl w-full">
                {/* En-tête avec accent */}
                <div className="text-center mb-16">
                    <div
                        className="w-20 h-1 mx-auto mb-8 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                        }}
                    />
                    <h2
                        className="text-5xl font-bold"
                        style={{
                            color: colors.zinc[50],
                            fontFamily: "'Playfair Display', serif"
                        }}
                    >
                        Mes Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="relative group border-t pt-8 transition-all duration-500 rounded-lg p-6 hover:scale-105"
                            style={{
                                borderTopColor: colors.zinc[700],
                                background: `linear-gradient(180deg, ${colors.zinc[900]}30, ${colors.zinc[800]}50)`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: `0 4px 12px ${colors.zinc[950]}30`,
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderTopColor = colors.red[600];
                                e.currentTarget.style.boxShadow = `0 8px 25px ${colors.red[600]}20, 0 0 0 1px ${colors.red[600]}30`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderTopColor = colors.zinc[700];
                                e.currentTarget.style.boxShadow = `0 4px 12px ${colors.zinc[950]}30`;
                            }}
                        >
                            {/* Numéro du service */}
                            <div
                                className="absolute top-12 px-3 left-0 transform -translate-y-1/2 text-4xl font-bold transition-all duration-300"
                                style={{
                                    color: colors.zinc[600],
                                    fontFamily: "'Playfair Display', serif"
                                }}
                            >
                                {service.id}
                            </div>

                            {/* Contenu principal */}
                            <div className="pl-12 pr-20 relative">
                                <h3
                                    className="text-2xl font-semibold mb-4 relative inline-block transition-all duration-300"
                                    style={{ color: colors.zinc[50] }}
                                >
                                    {service.title}
                                    <span
                                        className="absolute left-0 -bottom-1 h-0.5 transition-all duration-300"
                                        style={{
                                            width: '0%',
                                            backgroundColor: colors.red[600]
                                        }}
                                    ></span>
                                </h3>
                                <p
                                    className="mb-8 leading-relaxed"
                                    style={{ color: colors.zinc[300] }}
                                >
                                    {service.description}
                                </p>

                                {/* Bouton flèche */}
                                <div className="absolute top-8 right-0">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
                                        style={{
                                            backgroundColor: colors.red[600],
                                            boxShadow: `0 4px 15px ${colors.red[600]}40`
                                        }}
                                    >
                                        <ArrowRight
                                            size={20}
                                            className="transition-all duration-300 hover:rotate-45"
                                            style={{ color: colors.zinc[50] }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}