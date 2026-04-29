import { useState, useEffect } from "react";
import HeroImage1 from "../assets/images/hero.png";
import HeroImage2 from "../assets/images/login-image.png";
import HeroImage3 from "../assets/images/recipe1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [HeroImage1, HeroImage2, HeroImage3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="px-6 py-6 bg-[#F2EDE4]">
      <div className="relative h-[550px] w-full rounded-[40px] overflow-hidden shadow-xl mx-auto max-w-8xl">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight max-w-4xl mb-8 leading-[0.9]">
            Unleash Culinary <br /> Excellence
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-2xl mb-12 font-medium leading-relaxed">
            Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12">

            <Link to="/signup">
              <button className="bg-brand-orange hover:bg-[#EE6352] text-brand-dark font-bold py-4.5 px-12 rounded-full transition-all uppercase text-[12px] tracking-widest shadow-lg shadow-orange-500/20 active:scale-95">
                Sign Up Now!
              </button>
            </Link>

            <Link to="/recipes">
              <button className="bg-brand-dark/80 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 font-bold py-4.5 px-12 rounded-full transition-all uppercase text-[12px] tracking-widest active:scale-95">
                Explore Recipes
              </button>
            </Link>

          </div>

          {/* Slider Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-10 h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/20 hover:bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
