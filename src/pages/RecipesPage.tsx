import React, { useState } from 'react';
import { NavigationPage, Recipe } from '../types';
import { RECIPES } from '../data/mockData';
import { 
  UtensilsCrossed, 
  Search, 
  Clock, 
  Flame, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface RecipesPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Smoothie & Snacks'];

  const filteredRecipes = RECIPES.filter((r) => {
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      r.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <UtensilsCrossed className="w-3.5 h-3.5" /> Clinical Culinary Medicine
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004b70] tracking-tight font-heading">
          Clinical Nutrition Recipe Library
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Evidence-based recipes developed by clinical dietitians. Each dish is balanced for glycemic stability, gut mucosal health, and optimal athletic recovery.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#004b70] text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search salmon, quinoa, protein..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-emerald-600"
          />
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => setActiveRecipe(recipe)}
            className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                  {recipe.category}
                </span>
                <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm">
                  {recipe.calories} kcal
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors font-heading">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Clock className="w-3.5 h-3.5" /> Ready in {recipe.prepTimeMinutes} mins
                  </p>
                </div>

                {/* Macro breakdown grid */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Protein</span>
                    <strong className="text-emerald-700 font-extrabold">{recipe.protein}g</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Carbs</span>
                    <strong className="text-slate-800 font-extrabold">{recipe.carbs}g</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Fats</span>
                    <strong className="text-slate-800 font-extrabold">{recipe.fat}g</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {recipe.benefits}
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {recipe.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004b70] group-hover:text-emerald-600">
              <span>View Recipe & Instructions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="text-slate-400 font-medium text-sm">No recipes found matching your filter.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Recipe Modal Details */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveRecipe(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {activeRecipe.category}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeRecipe.prepTimeMinutes} mins
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                {activeRecipe.title}
              </h2>

              {/* Macro Bar */}
              <div className="grid grid-cols-4 gap-3 p-4 rounded-2xl bg-[#e8f4f8] text-center text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px]">Calories</span>
                  <strong className="text-slate-900 text-sm font-extrabold">{activeRecipe.calories} kcal</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Protein</span>
                  <strong className="text-emerald-700 text-sm font-extrabold">{activeRecipe.protein}g</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Carbohydrates</span>
                  <strong className="text-slate-900 text-sm font-extrabold">{activeRecipe.carbs}g</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Healthy Fats</span>
                  <strong className="text-slate-900 text-sm font-extrabold">{activeRecipe.fat}g</strong>
                </div>
              </div>

              {/* Clinical Benefit Callout */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed font-medium">
                <strong>Clinical Nutrition Rationale:</strong> {activeRecipe.benefits}
              </div>

              {/* Ingredients */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Ingredients Required:</h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Preparation Steps:</h4>
                <ol className="space-y-2 text-xs text-slate-700 list-decimal pl-4">
                  {activeRecipe.instructions.map((step, i) => (
                    <li key={i} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveRecipe(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveRecipe(null);
                  onNavigate('get-started');
                }}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-xs"
              >
                Get Custom Meal Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
