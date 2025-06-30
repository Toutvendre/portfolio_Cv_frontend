import Header from "@/composants/en_tete/header";
import SocialLinks from "@/composants/social/social";
import Information from "@/composants/social/information";
import Accueil from "@/composants/pages/Accueil";
import APropos from "./composants/pages/APropos";
import Services from "./composants/pages/Services";
import Resumer from "./composants/pages/resumer";
import PortfolioProjects from "./composants/pages/Projet";
import Contact from "./composants/pages/Contacte";
import colors from "@/lib/couleurs/librairie_couleur";


const App = () => {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{ backgroundColor: colors.zinc[950], color: colors.zinc[950] }}
    >
      <Header />
      <SocialLinks />
      <Information />
      <Accueil />
      <APropos />
      <Services />
      <Resumer />
      <PortfolioProjects />
      <Contact />
    </div>
  );
};


export default App;