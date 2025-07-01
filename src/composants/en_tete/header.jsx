import { Home, User, Briefcase, FileText, FolderOpen, Mail } from "lucide-react";

// Simuler l'import des couleurs
const colors = {
    red: {
        600: "#dc2626"
    }
};

const EnTete = () => {
    const navItems = [
        { href: "/", label: "Accueil", icon: Home },
        { href: "#about", label: "A propos", icon: User },
        { href: "#services", label: "Services", icon: Briefcase },
        { href: "#resume", label: "Resume", icon: FileText },
        { href: "#projects", label: "projects", icon: FolderOpen },
        { href: "#contact", label: "Contact", icon: Mail }
    ];

    return (
        <>
            {/* Header desktop - reste en haut */}
            <header className="hidden md:flex fixed  ml-auto top-0 left-0 w-full z-30 px-6 py-6 justify-end items-center text-white">
                {/* Logo à gauche */}
                <h1 className="text-2xl font-bold tracking-tight">
                    <a href="/" className="text-white">
                        Alexis<span style={{ color: colors.red[600] }}>.</span>
                    </a>
                </h1>

                {/* Menu centré */}
                <nav className="flex space-x-8 text-sm uppercase font-medium justify-center w-full gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="hover:text-red-500 transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Header mobile - logo seulement en haut */}
            <header className="md:hidden fixed top-0 left-0 w-full z-30 px-6 py-4 flex justify-start items-center text-white bg-black/20 backdrop-blur-sm">
                <h1 className="text-xl font-bold tracking-tight">
                    <a href="/" className="text-white">
                        Alexis<span style={{ color: colors.red[600] }}>.</span>
                    </a>
                </h1>
            </header>

            {/* Navigation footer mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-30 bg-black/90 backdrop-blur-sm border-t border-gray-800">
                <div className="flex justify-around items-center py-2">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex flex-col items-center py-2 px-1 text-white hover:text-red-500 transition-colors duration-300"
                            >
                                <IconComponent size={20} className="mb-1" />
                                <span className="text-xs font-medium">{item.label}</span>
                            </a>
                        );
                    })}
                </div>
            </nav>

            {/* Spacer pour éviter que le contenu soit caché par la nav footer */}
            <div className="md:hidden h-16"></div>
        </>
    );
};

export default EnTete;