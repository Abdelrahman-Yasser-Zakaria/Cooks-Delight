import { Link } from "react-router-dom";
import Frame4 from "../assets/images/Frame 4.png";
const CTABanner = () => {
  return (
    <section className="px-6 py-6 ">
      <div className="max-w-8xl mx-auto relative overflow-hidden rounded-[40px] bg-brand-red py-16 lg:py-24 px-6 text-center shadow-2xl">

        <div className="absolute inset-0 ">
          <img
            src={Frame4}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="text-white/80 text-[11px] font-black uppercase tracking-[0.3em] mb-6">
            Sign Up
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Join the Fun <br /> Create Account Now!
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mb-12 font-medium leading-relaxed">
            Create an account to save your favorite recipes, share your own dishes, and enjoy a personalized cooking experience.
          </p>
          <Link to="/signup" className="bg-brand-dark hover:bg-black text-white font-black px-12 py-4 rounded-full transition-all uppercase text-[12px] tracking-widest shadow-xl active:scale-95">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
