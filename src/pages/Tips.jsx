import Navbar from "../components/Navbar";
import TipsIntro from "../components/TipsIntro";
import MasteringBasics from "../components/MasteringBasics";
import TipsTricks from "../components/TipsTricks";
import NourishingPalate from "../components/NourishingPalate";
import FeaturedRecipes from "../components/FeaturedRecipes";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";


const Tips = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main>
        <TipsIntro />
        <FeaturedRecipes />
        <MasteringBasics />
        <NourishingPalate />
        <TipsTricks />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )

};

export default Tips;
