import Navbar from "../components/Navbar";
import FeaturedRecipes from "../components/FeaturedRecipes";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import about from "../assets/images/about3.png";
import gallary1 from "../assets/images/gallary1.png";
import gallary2 from "../assets/images/gallary2.png";
import gallary3 from "../assets/images/gallary3.png";
import gallary4 from "../assets/images/gallary4.png";
import gallary5 from "../assets/images/gallary5.png";
import gallary6 from "../assets/images/gallary6.png";
import gallary7 from "../assets/images/gallary7.png";
import gallary8 from "../assets/images/gallary8.png";

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 11.98 9.75 8.94 9.75 15.02" />
  </svg>
);

const About = () => {
  const galleryImages = [gallary1, gallary2, gallary3, gallary4, gallary5, gallary6, gallary7, gallary8];

  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="px-6 pt-24 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <h1 className="text-6xl lg:text-8xl font-black text-[#2D2D2D] uppercase leading-[0.9] tracking-tighter">
              Welcome to <br /> My Culinary <br /> Haven!
            </h1>
            <div className="flex flex-col items-start pt-4">
              <p className="text-[#2D2D2D]/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo,
                the culinary enthusiast behind this haven of flavors, Cooks Delight.
                Join me on a gastronomic journey where each dish carries a story,
                and every recipe is a crafted symphony of taste.
              </p>
              <Link
                to="/recipes"
                className="bg-[#FFA31A] hover:bg-[#e69217] text-[#2D2D2D] font-bold py-3 px-10 rounded-full transition-all uppercase text-[13px] tracking-widest"
              >
                Explore Recipes
              </Link>
            </div>
          </div>
        </section>

        {/* 2. STORY SECTION */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Chef Image & Follow Bar */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-[30px] overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={about} // Use your about image variable
                  alt="Chef Isabella Russo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Follow Me Bar */}
              <div className="w-full flex items-center justify-between px-8 py-3 bg-transparent border border-[#2D2D2D]/20 rounded-full text-[12px] font-bold uppercase tracking-widest text-[#2D2D2D]">
                <span>Follow Me</span>
                <div className="flex gap-6">
                  <a href="#" className="hover:opacity-70"><Facebook size={18} /></a>
                  <a href="#" className="hover:opacity-70"><Instagram size={18} /></a>
                  <a href="#" className="hover:opacity-70"><Youtube size={18} /></a>
                </div>
              </div>
            </div>

            {/* Right: Narrative Text */}
            <div className="lg:col-span-7 pt-4">
              <h2 className="text-4xl lg:text-5xl font-black text-[#2D2D2D] uppercase tracking-tighter mb-8 leading-tight">
                From Italian Roots <br /> To Global Palates
              </h2>
              <div className="space-y-6 text-[#2D2D2D]/70 text-sm lg:text-base leading-relaxed">
                <p>
                  Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family’s kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones...
                </p>
                <p>
                  Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world...
                </p>
                <p>
                  Whether you’re a seasoned home cook or just starting your culinary adventure, I’m delighted to have you here. Let’s stir, simmer, and savor the beauty of creating something wonderful together.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-[#2D2D2D] text-sm mb-2">Warmest regards,</p>
                {/* Signature Font */}
                <span className="text-4xl lg:text-5xl text-[#2D2D2D] font-medium italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Isabella Russo
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-6 py-20 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-square rounded-3xl overflow-hidden shadow-sm group">
                  <img
                    src={img}
                    alt={`Gallery moment ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Recipes Section */}
        <div className="bg-white/30">
          <FeaturedRecipes />
        </div>

        {/* CTA Banner */}
        <CTABanner />

      </main>

      <Footer />
    </div>
  );
};

export default About;
