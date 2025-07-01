import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import colors from '@/lib/couleurs/librairie_couleur';

const projects = [
    {
        id: 1,
        title: "Project Logement Social",
        description: "Une plateforme complète de souscription au logement social avec gestion des dossiers et interface administrateur intuitive.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Laravel", "MySQL"],
        image: "/images/hs.png",
        liveLink: "https://votre-site-demo.com",
        githubLink: "https://github.com/Toutvendre",
        category: "Web Development",
        year: "2024"
    },
    {
        id: 2,
        title: "Desktop Application",
        description: "Application desktop Java avancée avec capture et analyse de trames TCP et UDP en temps réel pour le monitoring réseau.",
        technologies: ["Java", "JavaFX", "PCAP4J", "CSS3"],
        image: "/images/java.png",
        liveLink: "https://votre-site-demo.com",
        githubLink: "https://github.com/Toutvendre",
        category: "Desktop Application",
        year: "2024"
    },
    {
        id: 3,
        title: "Full Stack Portfolio",
        description: "Portfolio moderne et responsive développé avec React.js, API REST Laravel et base de données PostgreSQL optimisée.",
        technologies: ["React", "Tailwind CSS", "Laravel", "PostgreSQL"],
        image: "/images/porto1.png",
        liveLink: "https://votre-site-demo.com",
        githubLink: "https://github.com/Toutvendre",
        category: "Full Stack",
        year: "2024"
    },
    {
        id: 4,
        title: "Platforme D'information (Vulagtic)",
        description: "Développement d'une plateforme web pour Vulagtic, permettant la diffusion de formations, d'activités et d'autres annonces liées à ses services.",
        technologies: ["React", "Tailwind CSS", "Laravel", "PostgreSQL"],
        image: "/images/vulgatic/vulgatic.png",
        liveLink: "https://votre-site-demo.com",
        githubLink: "https://github.com/Toutvendre",
        category: "Full Stack",
        year: "2024"
    }
];

const Button = ({ children, className, asChild, ...props }) => {
    if (asChild && React.Children.count(children) === 1) {
        return React.cloneElement(children, {
            className: `${className} ${children.props.className || ''}`,
            ...props
        });
    }
    return <button className={className} {...props}>{children}</button>;
};

const ProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentProject = projects[currentIndex];

    const changeProject = (newIndex) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
        }, 300);
    };

    const nextProject = () => {
        const newIndex = (currentIndex + 1) % projects.length;
        changeProject(newIndex);
    };

    const prevProject = () => {
        const newIndex = (currentIndex - 1 + projects.length) % projects.length;
        changeProject(newIndex);
    };

    return (
        <div
            id="projects"
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

            {/* Contenu principal */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* En-tête de section */}
                <div className="text-center mb-20">
                    <div
                        className="w-16 h-1 mx-auto mb-6 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                        }}
                    />
                    <p
                        className="text-sm sm:text-base font-medium mb-4 tracking-wide uppercase"
                        style={{
                            color: colors.zinc[400],
                            letterSpacing: '1.2px'
                        }}
                    >
                        Portfolio
                    </p>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide"
                        style={{
                            color: colors.zinc[50],
                            fontFamily: "'Playfair Display', serif",
                            letterSpacing: '-0.5px'
                        }}
                    >
                        MES PROJETS<span style={{ color: colors.red[600] }}>.</span>
                    </h2>
                    <p
                        className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                        style={{
                            color: colors.zinc[300],
                            fontWeight: '400'
                        }}
                    >
                        Une sélection de réalisations illustrant mes compétences en développement web et applications.
                    </p>
                </div>

                {/* Projet actuel */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Informations du projet */}
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                        <div className="flex items-center gap-4 mb-6">
                            <span
                                className="px-4 py-2 rounded-full text-sm font-medium"
                                style={{
                                    backgroundColor: colors.zinc[800],
                                    color: colors.zinc[300]
                                }}
                            >
                                {currentProject.category}
                            </span>
                            <span
                                className="text-sm font-medium"
                                style={{ color: colors.zinc[500] }}
                            >
                                {currentProject.year}
                            </span>
                        </div>

                        <h3
                            className="text-3xl sm:text-4xl font-bold mb-6"
                            style={{
                                color: colors.zinc[50],
                                fontFamily: "'Playfair Display', serif"
                            }}
                        >
                            {currentProject.title}
                        </h3>

                        <p
                            className="text-lg leading-relaxed mb-8"
                            style={{
                                color: colors.zinc[300],
                                fontWeight: '400'
                            }}
                        >
                            {currentProject.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-8">
                            <p
                                className="text-sm font-medium mb-4 tracking-wide uppercase"
                                style={{
                                    color: colors.zinc[400],
                                    letterSpacing: '1px'
                                }}
                            >
                                Technologies
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {currentProject.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 rounded-lg text-sm font-medium"
                                        style={{
                                            backgroundColor: colors.zinc[800],
                                            color: colors.zinc[200],
                                            border: `1px solid ${colors.zinc[700]}`
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                            <Button
                                asChild
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg border-2"
                                style={{
                                    background: `linear-gradient(90deg, ${colors.red[600]}, ${colors.red[700]})`,
                                    color: colors.zinc[50],
                                    borderColor: colors.red[600]
                                }}
                            >
                                <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={18} />
                                    Voir le projet
                                </a>
                            </Button>
                            <Button
                                asChild
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 border-2"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: colors.zinc[50],
                                    borderColor: colors.zinc[50]
                                }}
                            >
                                <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Github size={18} />
                                    Code source
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Aperçu visuel */}
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                        <div
                            className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl group"
                            style={{
                                background: `linear-gradient(135deg, ${colors.zinc[800]}, ${colors.zinc[700]})`,
                                border: `1px solid ${colors.zinc[600]}`
                            }}
                        >
                            {/* Image du projet */}
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                style={{
                                    filter: 'brightness(0.8) contrast(1.1)'
                                }}
                            />

                            {/* Overlay avec numéro */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                <div className="absolute bottom-4 left-4">
                                    <div
                                        className="text-4xl font-bold"
                                        style={{
                                            color: colors.zinc[200],
                                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                        }}
                                    >
                                        {String(currentProject.id).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>

                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div
                                        className="text-sm font-medium mb-2"
                                        style={{ color: colors.zinc[200] }}
                                    >
                                        Cliquez pour voir plus
                                    </div>
                                    <ExternalLink
                                        size={24}
                                        style={{ color: colors.zinc[200] }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-8 mt-16">
                    <button
                        onClick={prevProject}
                        disabled={isAnimating}
                        className="p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50"
                        style={{
                            backgroundColor: colors.zinc[800],
                            color: colors.zinc[300],
                            border: `1px solid ${colors.zinc[700]}`
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Indicateurs */}
                    <div className="flex gap-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeProject(index)}
                                disabled={isAnimating}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'scale-125' : 'hover:scale-110'
                                    }`}
                                style={{
                                    backgroundColor: index === currentIndex ? colors.red[600] : colors.zinc[600]
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextProject}
                        disabled={isAnimating}
                        className="p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50"
                        style={{
                            backgroundColor: colors.zinc[800],
                            color: colors.zinc[300],
                            border: `1px solid ${colors.zinc[700]}`
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Lien vers GitHub */}
                <div className="text-center mt-16">
                    <Button
                        asChild
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: 'transparent',
                            color: colors.zinc[400],
                            border: `1px solid ${colors.zinc[700]}`
                        }}
                    >
                        <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                            Voir tous mes projets sur GitHub
                        </a>
                    </Button>
                </div>
            </div>

            {/* Footer signature */}
            <div
                className="absolute bottom-4 right-4 text-xs opacity-60"
                style={{ color: colors.zinc[500] }}
            >
                Projets © 2025
            </div>
        </div>
    );
};

export default ProjectsSection;