import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes?limit=10");
        // Sort by rating descending
        const sorted = response.data.recipes.sort((a, b) => b.rating - a.rating);
        setRecipes(sorted);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (loading) return (
    <div className="h-60 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-orange"></div>
    </div>
  );

  return (
    <section className="px-6 py-12 bg-[#F2EDE4] max-w-8xl mx-auto">

      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight font-semibold font-weight: 600">
          Featured Recipes
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-gray-300 rounded-full hover:bg-white transition-colors text-gray-400 hover:text-brand-dark"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-gray-300 rounded-full bg-brand-dark text-white hover:bg-black transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>


      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:flex md:flex-row md:overflow-x-auto md:no-scrollbar md:scroll-smooth gap-6 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full md:min-w-[450px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group transition-all hover:shadow-md"
          >

            <div className="h-64 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-left text-brand-dark flex flex-col flex-grow bg-white">
              <h3 className="text-2xl font-black mb-4 group-hover:text-brand-red transition-colors leading-tight font-semibold font-weight: 600">
                {recipe.name}
              </h3>
              <p className="text-brand-dark/60 text-sm line-clamp-2 mb-8 font-medium font-semibold font-weight: 600">
                {recipe.instructions?.[0] || `A delicious ${recipe.cuisine} dish.`}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/50">
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} MIN - {recipe.difficulty} PREP
                </span>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full hover:bg-[#EE6352] transition-colors shadow-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
