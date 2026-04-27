import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedRecipes from "../components/FeaturedRecipes";
import RecipeShowcase from "../components/RecipeShowcase";
import AboutPreview from "../components/AboutPreview";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedRecipes />
        <RecipeShowcase />
        <AboutPreview />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};






export default Home;