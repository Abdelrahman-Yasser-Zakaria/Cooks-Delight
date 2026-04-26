import { Link } from "react-router-dom";
import breakfast from "../assets/icons/breakfast.png";
import lunch from "../assets/icons/lunch.png";
import dinner from "../assets/icons/dinner.png";
import dessert from "../assets/icons/dessert.png";
import snack from "../assets/icons/snack.png";




const Categories = () => {
  const categories = [
    { name: "Breakfast", icon: breakfast },
    { name: "Lunch", icon: lunch },
    { name: "Dinner", icon: dinner },
    { name: "Dessert", icon: dessert },
    { name: "Snack", icon: snack },
  ];

  return (
    <section className="px-6 py-12 bg-[#F2EDE4]">
      <div className="max-w-8xl mx-auto bg-brand-blue rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-lg border border-white/20">

        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6">
            Explore
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight mb-8 leading-[1.1]">
            Our Diverse <br /> Palette
          </h2>
          <p className="text-brand-dark/70 text-base lg:text-lg mb-10 max-w-md font-medium leading-relaxed">
            If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
          </p>
          <Link to="/recipes" className="border-1 border-black text-brand-dark font-black px-10 py-3.5 rounded-full hover:bg-brand-dark hover:text-white transition-all uppercase text-[12px] tracking-widest active:scale-95 shadow-md">
            see more
          </Link>
        </div>


        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col">
            {categories.map((cat, index) => (
              <Link
                key={cat.name}
                to={`/recipes?category=${cat.name.toLowerCase()}`}
                className={`flex items-center justify-between py-6 group border-b border-brand-dark/10 transition-all hover:translate-x-2 ${index === categories.length - 1 ? "border-b-0" : ""
                  }`}
              >
                <div className="flex items-center gap-6">
                  <div className="text-brand-dark transition-transform group-hover:scale-110 duration-300">
                    <img src={cat.icon} alt={cat.name} />
                  </div>
                  <span className="text-xl font-black text-brand-dark uppercase tracking-widest group-hover:text-brand-red transition-colors">
                    {cat.name}
                  </span>
                </div>
                <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
