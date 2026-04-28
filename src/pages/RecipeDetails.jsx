import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ClockIcon, FireIcon, UserGroupIcon, StarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import CTABanner from "../components/CTABanner";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight mb-4">Recipe Not Found</h2>
          <Link to="/recipes" className="text-brand-red underline font-bold uppercase tracking-widest text-sm">Back to Recipes</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="relative h-[60vh] w-full bg-brand-dark overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags?.map(tag => (
                <span key={tag} className="bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              {recipe.name}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 font-bold text-sm uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-brand-orange" />
                <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} Mins</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-5 h-5 text-[#ade65e]" />
                <span>{recipe.servings} Servings</span>
              </div>
              <div className="flex items-center gap-2">
                <FireIcon className="w-5 h-5 text-brand-red" />
                <span>{recipe.caloriesPerServing} kcal</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span>{recipe.rating} ({recipe.reviewCount} Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Ingredients */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight mb-8">Ingredients</h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {recipe.ingredients?.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-brand-dark font-medium">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight mb-8">Instructions</h2>
              <div className="space-y-8">
                {recipe.instructions?.map((instruction, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform shadow-md">
                      {idx + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg text-brand-dark/80 font-medium leading-relaxed">
                        {instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetails;
