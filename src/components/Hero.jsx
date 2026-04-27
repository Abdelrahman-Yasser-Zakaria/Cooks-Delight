import HeroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="px-6 py-6 bg-[#F2EDE4]">
      <div className="relative h-[550px] w-full rounded-[40px] overflow-hidden shadow-xl mx-auto max-w-8xl">

        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Chef cooking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight max-w-4xl mb-8 leading-[0.9]">
            Unleash Culinary <br /> Excellence
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-2xl mb-12 font-medium leading-relaxed">
            Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <button className="bg-brand-orange hover:bg-orange-500 text-brand-dark font-bold py-4.5 px-12 rounded-full transition-all uppercase text-[12px] tracking-widest shadow-lg shadow-orange-500/20 active:scale-95">
              Sign Up Now!
            </button>
            <button className="bg-brand-dark/80 hover:bg-brand-dark backdrop-blur-md text-white border border-white/20 font-bold py-4.5 px-12 rounded-full transition-all uppercase text-[12px] tracking-widest active:scale-95">
              Explore Recipes
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-2">
            <div className="w-10 h-1 bg-white/20 rounded-full"></div>
            <div className="w-10 h-1 bg-white rounded-full"></div>
            <div className="w-10 h-1 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

