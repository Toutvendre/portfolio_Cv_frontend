import React, { useState } from "react";
import colors from "@/lib/couleurs/librairie_couleur";
import {
    Code,
    Palette,
    Globe,
    Layers,
    Server,
    Database,
    Zap,
    Grid
} from "lucide-react";

const experiences = [
    {
        date: "2022 - Présent",
        title: "Développeur Full Stack Indépendant",
        company: "Auto-entrepreneur",
        description: "Développement web full stack en autonomie avec HTML, CSS, JavaScript, React, PHP et MySQL....."
    },
    {
        date: "Janvier 2025- Avril 2025",
        title: "Stagiaire Développeur Web",
        company: "Ministère de l'Urbanisme et de l'Habitat",
        description: "Création d'une plateforme de souscription au logement social avec Laravel, au sein du ministère."
    },
    {
        date: "2021 - Présent",
        title: "Développeur Web (Projets Académiques)",
        company: "Université",
        description: "Projets web académiques : e-commerce, blog, gestion, avec HTML, CSS, JS et PHP."
    },
    {
        date: "2020 - Présent",
        title: "Community Manager",
        company: "BurkinaBeauté, Bobo-Dioulasso",
        description: "Communication digitale et création visuelle pour les réseaux sociaux."
    },
];

const cursus = [
    {
        date: "2024 -présent",
        title: "Master en Sécurité Informatique",
        institution: "Université Aube Nouvelle",
        description: "Je suis actuellement en cours de formation en Master en Sécurité Informatique.",
    },
    {
        date: "2025",
        title: "Certificat Développeur JavaScript",
        institution: "JS Institute",
        description: "J'ai obtenu le certificat de développeur JavaScript.",
    },
    {
        date: "2022 - 2024",
        title: "Génie Informatique",
        institution: "Université Aube Nouvelle",
        description: "J'ai obtenu le diplôme de licence en Génie Informatique.",
    },
];

const skills = [
    { name: "HTML", icon: Code },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: Zap },
    { name: "React", icon: Globe },
    { name: "Laravel", icon: Layers },
    { name: "PostgreSQL / MySQL", icon: Database },
    { name: "Tailwind", icon: Grid },
    { name: "Bootstrap", icon: Server },
];

const Resume = () => {
    const [activeTab, setActiveTab] = useState("Experience");

    const renderContent = () => {
        switch (activeTab) {
            case "Experience":
                return (
                    <div className="max-h-[400px] overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin', scrollbarColor: `${colors.red[600]} ${colors.zinc[800]}` }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            {experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="relative p-6 rounded-lg border-l-4 border-b-4 group overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                                    style={{
                                        borderLeftColor: colors.zinc[700],
                                        borderBottomColor: colors.zinc[700],
                                        background: `linear-gradient(180deg, ${colors.zinc[900]}30, ${colors.zinc[800]}50)`,
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderLeftColor = colors.red[600];
                                        e.currentTarget.style.borderBottomColor = colors.red[600];
                                        e.currentTarget.style.boxShadow = `0 8px 25px ${colors.red[600]}20`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderLeftColor = colors.zinc[700];
                                        e.currentTarget.style.borderBottomColor = colors.zinc[700];
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <p className="text-sm mb-2 font-semibold" style={{ color: colors.zinc[400] }}>
                                        {exp.date}
                                    </p>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: colors.zinc[50] }}>
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm mb-3 font-medium" style={{ color: colors.red[500] }}>
                                        {exp.company}
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: colors.zinc[300] }}>
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "cursus":
                return (
                    <div className="max-h-[400px] overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin', scrollbarColor: `${colors.red[600]} ${colors.zinc[800]}` }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            {cursus.map((edu, idx) => (
                                <div
                                    key={idx}
                                    className="relative p-6 rounded-lg border-l-4 border-b-4 group overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                                    style={{
                                        borderLeftColor: colors.zinc[700],
                                        borderBottomColor: colors.zinc[700],
                                        background: `linear-gradient(180deg, ${colors.zinc[900]}30, ${colors.zinc[800]}50)`,
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderLeftColor = colors.red[600];
                                        e.currentTarget.style.borderBottomColor = colors.red[600];
                                        e.currentTarget.style.boxShadow = `0 8px 25px ${colors.red[600]}20`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderLeftColor = colors.zinc[700];
                                        e.currentTarget.style.borderBottomColor = colors.zinc[700];
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <p className="text-sm mb-2 font-semibold" style={{ color: colors.zinc[400] }}>
                                        {edu.date}
                                    </p>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: colors.zinc[50] }}>
                                        {edu.title}
                                    </h3>
                                    <p className="text-sm mb-3 font-medium" style={{ color: colors.red[500] }}>
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: colors.zinc[300] }}>
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "Competences":
                return (
                    <div className="max-h-[400px] overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin', scrollbarColor: `${colors.red[600]} ${colors.zinc[800]}` }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
                            {skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-lg border-2 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 group"
                                    style={{
                                        borderColor: colors.zinc[700],
                                        background: `linear-gradient(180deg, ${colors.zinc[900]}30, ${colors.zinc[800]}50)`,
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = colors.red[600];
                                        e.currentTarget.style.boxShadow = `0 8px 25px ${colors.red[600]}20`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = colors.zinc[700];
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <skill.icon
                                        size={32}
                                        className="mb-3 transition-all duration-300 group-hover:scale-110"
                                        style={{ color: colors.zinc[300] }}
                                    />
                                    <p className="text-sm font-medium text-center" style={{ color: colors.zinc[300] }}>
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section
            id="resume"
            className="min-h-screen flex items-center justify-center py-20 px-8 relative"
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

            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 relative z-10">
                {/* Navigation à gauche */}
                <div className="md:w-1/4 flex flex-col items-start space-y-6">
                    {/* Accent géométrique */}
                    <div
                        className="w-16 h-1 mb-4 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                        }}
                    />

                    <h2
                        className="text-5xl font-bold mb-8 tracking-tight"
                        style={{
                            color: colors.zinc[50],
                            fontFamily: "'Playfair Display', serif"
                        }}
                    >
                        Pourquoi m'engager ?
                    </h2>

                    <p className="mb-8 leading-relaxed" style={{ color: colors.zinc[300] }}>
                        Développeur passionné et autonome, je transforme les idées en solutions concrètes et efficaces.
                    </p>

                    {["Experience", "cursus", "Competences"].map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(tab)}
                            className="w-full text-left py-3 px-4 rounded-md text-lg font-semibold transition-all duration-300 border-2"
                            style={{
                                backgroundColor: activeTab === tab ? colors.red[600] : "transparent",
                                borderColor: activeTab === tab ? colors.red[600] : colors.zinc[600],
                                color: activeTab === tab ? colors.zinc[50] : colors.zinc[300],
                                boxShadow: activeTab === tab ? `0 8px 25px ${colors.red[600]}30` : 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== tab) {
                                    e.target.style.backgroundColor = colors.red[600];
                                    e.target.style.borderColor = colors.red[600];
                                    e.target.style.color = colors.zinc[50];
                                    e.target.style.boxShadow = `0 8px 25px ${colors.red[600]}20`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== tab) {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.borderColor = colors.zinc[600];
                                    e.target.style.color = colors.zinc[300];
                                    e.target.style.boxShadow = 'none';
                                }
                            }}
                        >
                            {tab === "cursus" ? "Cursus" : tab}
                        </button>
                    ))}
                </div>

                {/* Contenu à droite */}
                <div className="md:w-3/4">
                    <h2
                        className="text-5xl font-bold mb-8 tracking-tight"
                        style={{
                            color: colors.zinc[50],
                            fontFamily: "'Playfair Display', serif"
                        }}
                    >
                        {activeTab === "Experience" && "Mon expérience"}
                        {activeTab === "cursus" && "Mon cursus"}
                        {activeTab === "Competences" && "Mes compétences"}
                    </h2>

                    <p className="mb-8 leading-relaxed" style={{ color: colors.zinc[300] }}>
                        Voici un aperçu de mes expériences, mon cursus académique et compétences, reflétant mon parcours dans le développement web.
                    </p>

                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default Resume;