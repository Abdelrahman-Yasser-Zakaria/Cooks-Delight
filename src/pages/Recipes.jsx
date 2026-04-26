import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { ClockIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/solid";

const Recipes = () => {
  const [searchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("search");
  const category = searchParams.get("category");
  const displayTerm = query || category || "All Recipes";

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let url = "https://dummyjson.com/recipes?limit=30";
        if (query) {
          url = `https://dummyjson.com/recipes/search?q=${query}`;
        } else if (category && category !== "All") {
          // DummyJSON category/tag fetch
          url = `https://dummyjson.com/recipes/tag/${category}`;
        }

        const response = await axios.get(url);
        // Tag response sometimes differs in structure
        const data = response.data.recipes || [];
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query, category]);

  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      <Navbar />

      <main className="pt-12 pb-24">
        {/* Results Header */}
        <section className="px-6 mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4 inline-block">
                Discovery
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tight leading-tight">
                Displaying Results <br /> For: <span className="text-brand-orange">{displayTerm}</span>
              </h1>
            </div>
            <div className="text-right">
              <p className="text-brand-dark/50 font-black uppercase tracking-widest text-sm italic">
                {loading ? "Searching..." : `${recipes.length} recipes found`}
              </p>
            </div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="px-6 max-w-8xl mx-auto">
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
                      <h3 className="text-2xl font-black mb-4 group-hover:text-brand-red transition-colors leading-tight">
                        {recipe.name}
                      </h3>
                      <p className="text-brand-dark/60 text-sm line-clamp-2 mb-8 font-medium">
                        {recipe.instructions?.[0] || `A delicious ${recipe.cuisine} dish.`}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/50">
                          {recipe.prepTimeMinutes + recipe.cookTimeMinutes} MIN - {recipe.difficulty} PREP - {recipe.servings} SERVES
                        </span>
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
        </section>

      </main>
      <CTABanner />



      <Footer />
    </div>
  );
};

export default Recipes;
