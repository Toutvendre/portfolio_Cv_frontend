import React, { useState, useEffect } from "react";
import colors from "@/lib/couleurs/librairie_couleur";

const skills = [
    { name: "React / Framework", level: 60 },
    { name: "Laravel", level: 70 },
    { name: "HTML/CSS", level: 80 },
    { name: "Figma", level: 50 },
];

export default function APropos() {
    const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0));

    useEffect(() => {
        // Déclencher l'animation après le montage du composant
        const timer = setTimeout(() => {
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    setAnimatedSkills(prev => {
                        const newSkills = [...prev];
                        newSkills[index] = skill.level;
                        return newSkills;
                    });
                }, index * 200); // Délai progressif pour chaque barre
            });
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-8 pb-24 md:pb-0"
            style={{
                backgroundColor: colors.zinc[950],
                backgroundImage: `linear-gradient(135deg, ${colors.zinc[950]} 0%, ${colors.zinc[900]} 50%, ${colors.zinc[800]} 100%)`,
                color: colors.zinc[50]
            }}
            aria-labelledby="about-title"
        >
            {/* Effet de fond géométrique subtil */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.zinc[700]} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${colors.zinc[600]} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full select-none relative z-10">
                {/* Bloc de gauche */}
                <article
                    className="flex flex-col items-center justify-between p-10 h-[480px] border-l border-b rounded-lg"
                    style={{
                        borderColor: colors.zinc[700],
                        background: `linear-gradient(180deg, ${colors.zinc[900]}20, ${colors.zinc[800]}40)`,
                        backdropFilter: 'blur(10px)',
                        boxShadow: `0 4px 12px ${colors.zinc[950]}40`
                    }}
                >
                    {/* Haut : Chiffre et point rouge */}
                    <div className="relative flex items-center justify-center flex-1 w-full">
                        <div
                            className="text-[10rem] md:text-[16rem] font-extrabold leading-none"
                            style={{
                                color: colors.zinc[800],
                                fontFamily: "'Playfair Display', serif"
                            }}
                            aria-hidden="true"
                        >
                            2
                        </div>
                        <div
                            className="w-10 h-10 rounded-full shadow-lg"
                            style={{
                                backgroundColor: colors.red[600],
                                position: "absolute",
                                top: "77%",
                                left: "75%",
                                transform: "translate(-50%, -50%)",
                                boxShadow: `0 0 20px ${colors.red[600]}50`
                            }}
                            aria-hidden="true"
                        ></div>
                    </div>

                    {/* Milieu : Ligne fine avec gradient */}
                    <div
                        className="w-40 h-px my-9"
                        style={{
                            background: `linear-gradient(90deg, transparent, ${colors.zinc[400]}, transparent)`
                        }}
                        aria-hidden="true"
                    ></div>
                </article>

                {/* Bloc de droite */}
                <article className="flex flex-col justify-center">
                    <header>
                        {/* Accent géométrique */}
                        <div
                            className="w-16 h-1 mb-6 rounded-full"
                            style={{
                                background: `linear-gradient(90deg, ${colors.zinc[50]}, ${colors.red[600]})`
                            }}
                        />

                        <h2
                            id="about-title"
                            className="text-4xl font-bold mb-6"
                            style={{
                                color: colors.zinc[50],
                                fontFamily: "'Playfair Display', serif"
                            }}
                        >
                            Une Expertise Solide en Développement Web
                        </h2>
                    </header>

                    <p
                        className="mb-8 leading-relaxed"
                        style={{
                            color: colors.zinc[300],
                            fontSize: '1.1rem'
                        }}
                    >
                        Passionné par le développement web et le design, je concrétise vos idées en projets performants avec rigueur et créativité.
                    </p>

                    <section aria-label="Compétences techniques" className="space-y-6">
                        {skills.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-2">
                                    <h3
                                        className="uppercase text-xs font-bold tracking-wider"
                                        style={{ color: colors.zinc[400] }}
                                    >
                                        {skill.name}
                                    </h3>
                                    <span
                                        className="text-xs font-semibold"
                                        style={{ color: colors.zinc[50] }}
                                    >
                                        {skill.level}%
                                    </span>
                                </div>
                                <div
                                    className="w-full h-2 rounded-full overflow-hidden"
                                    style={{ backgroundColor: colors.zinc[800] }}
                                >
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            backgroundColor: colors.red[600],
                                            width: `${animatedSkills[idx]}%`,
                                            boxShadow: `0 0 10px ${colors.red[600]}50`,
                                            transition: 'width 1s ease-out'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </section>
                </article>
            </div>
        </section>
    );
}