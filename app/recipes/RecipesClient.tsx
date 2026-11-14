'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, ChefHat, Sparkles, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import { RECIPES_DATA, RECIPE_CATEGORIES } from '@/data/recipes';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const RecipesClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter & Sort Logic
  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((recipe) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || recipe.category === selectedCategory;

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

      // Search query
      const matchesSearch =
        searchQuery.trim() === '' ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        recipe.ingredients.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDifficulty && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'newest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery, sortBy]);

  const displayedRecipes = filteredRecipes.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedDifficulty('All');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Recipes', url: '/recipes' }]} />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <ChefHat className="w-4 h-4" />
          <span>Curated Recipe Library</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          Fried Chicken Recipes
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Master crispy Southern fried chicken, spicy Nashville hot chicken, KFC copycats, and Korean double-fried wings. Every recipe is meticulously calibrated for home kitchens.
        </p>
      </div>

      {/* Controls Bar: Search + Category + Difficulty + Sort */}
      <div className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs space-y-6">
        
        {/* Search Row */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes by name, ingredient, or spice (e.g. Buttermilk, Thighs, Gochujang)..."
            className="w-full pl-12 pr-4 py-3 bg-[#FFF8F6] border border-[#F0E2DE] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-gray-700 font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {RECIPE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D71920] text-white shadow-sm shadow-red-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters and Sorting Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs font-medium text-gray-600">
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800">Difficulty:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-[#FFF8F6] border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-[#D71920]"
              >
                <option value="All">All Levels</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FFF8F6] border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-[#D71920]"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Recently Published</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 font-semibold">
              Showing <span className="text-gray-900 font-bold">{displayedRecipes.length}</span> of {filteredRecipes.length} recipes
            </span>

            {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || searchQuery !== '') && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-[#D71920] hover:underline font-bold"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Recipe Grid */}
      {displayedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-[#F0E2DE] max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-red-100 text-[#D71920] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 font-serif">No Recipes Found</h3>
          <p className="text-xs text-gray-500">
            We couldn't find any recipes matching your current filters. Try clearing your search query or selecting another category.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#D71920] text-white text-xs font-bold rounded-xl hover:bg-[#A80F17]"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < filteredRecipes.length && (
        <div className="text-center pt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-3.5 bg-white border-2 border-[#D71920] text-[#D71920] hover:bg-[#D71920] hover:text-white font-bold text-sm rounded-xl transition-all shadow-xs"
          >
            Load More Recipes ({filteredRecipes.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

