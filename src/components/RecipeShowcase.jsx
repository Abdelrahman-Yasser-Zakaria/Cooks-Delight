import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeShowcase = ({ initialCategory = "All" }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Side Dish"];

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let url = "https://dummyjson.com/recipes?limit=0";
        const response = await axios.get(url);

        let filteredRecipes = response.data.recipes;
        if (activeCategory !== "All") {
          filteredRecipes = filteredRecipes.filter(r =>
            r.mealType.some(m => m.toLowerCase() === activeCategory.toLowerCase()) ||
            r.tags.some(t => t.toLowerCase() === activeCategory.toLowerCase())
          );
        }

        setRecipes(filteredRecipes.slice(0, 18));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [activeCategory]);

  return (
    <section className="px-6 py-20 bg-brand-cream text-white">
      <div className="max-w-8xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6 inline-block">
            Recipes
          </span>
          <h2 className="text-4xl text-brand-dark lg:text-6xl font-black uppercase tracking-tight mb-6 text-center font-weight: 400;">
            Embark on a Journey
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto font-medium">
            With our diverse collection of recipes we have something to satisfy every palate.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-sm ${activeCategory === cat
                ? "bg-[#ade65e] text-brand-dark border-transparent"
                : "bg-white text-gray-500 border border-gray-200 hover:border-brand-dark"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="h-60 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-brand-cream rounded-3xl overflow-hidden flex flex-col group transition-all"
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              ))
            ) : (
              <div className="col-span-full py-20">
                <p className="text-gray-400 text-xl font-bold">No recipes found in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeShowcase;
