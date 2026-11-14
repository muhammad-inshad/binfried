'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, 
  ChefHat, 
  Flame, 
  Printer, 
  Share2, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles,
  ArrowRight,
  Bookmark,
  Check
} from 'lucide-react';
import { Recipe } from '@/types';
import { RECIPES_DATA } from '@/data/recipes';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { getRecipeSchema, getFAQSchema, getAuthorPersonSchema } from '@/lib/schema';
import { RecipeCard } from '@/components/recipes/RecipeCard';

interface Props {
  recipe: Recipe;
}

export const RecipeDetailView: React.FC<Props> = ({ recipe }) => {
  const [copied, setCopied] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const relatedRecipes = RECIPES_DATA
    .filter((r) => r.slug !== recipe.slug)
    .slice(0, 3);

  return (
    <div className="pb-20">
      <JsonLd data={getRecipeSchema(recipe)} />
      <JsonLd data={getAuthorPersonSchema(recipe.author.name, recipe.author.role)} />
      {recipe.faqs.length > 0 && <JsonLd data={getFAQSchema(recipe.faqs)} />}

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Recipes', url: '/recipes' },
            { name: recipe.title, url: `/recipes/${recipe.slug}` },
          ]}
        />

        {/* Recipe Header Block */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-red-100 text-[#D71920] font-bold text-xs uppercase tracking-wider">
              {recipe.category}
            </span>
            <span className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
              recipe.difficulty === 'Easy'
                ? 'bg-emerald-100 text-emerald-800'
                : recipe.difficulty === 'Medium'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-rose-100 text-rose-800'
            }`}>
              {recipe.difficulty} Level
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-serif tracking-tight leading-tight">
            {recipe.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
            {recipe.description}
          </p>

          {/* Author & Dates Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-[#F0E2DE] py-3 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D71920] text-white flex items-center justify-center font-bold text-sm">
                {recipe.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{recipe.author.name}</p>
                <p className="text-gray-500 text-xs">{recipe.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Updated {recipe.updatedAt}
              </span>
            </div>

            {/* Action Buttons: Print & Share */}
            <div className="flex items-center gap-2 no-print">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg border border-gray-300 hover:border-gray-500 text-gray-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                title="Print full recipe instructions"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Recipe</span>
              </button>
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg bg-red-50 text-[#D71920] hover:bg-red-100 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-lg border border-[#F0E2DE] mb-10 bg-gray-100">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Quick Recipe Metric Stats Card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs mb-12">
          <div className="text-center border-r last:border-r-0 border-gray-100">
            <span className="text-xs uppercase text-gray-400 font-bold tracking-wider">Prep Time</span>
            <p className="text-lg font-black text-gray-900 mt-0.5">{recipe.prepTime}</p>
          </div>
          <div className="text-center sm:border-r border-gray-100">
            <span className="text-xs uppercase text-gray-400 font-bold tracking-wider">Cook Time</span>
            <p className="text-lg font-black text-[#D71920] mt-0.5">{recipe.cookTime}</p>
          </div>
          <div className="text-center border-r last:border-r-0 border-gray-100">
            <span className="text-xs uppercase text-gray-400 font-bold tracking-wider">Total Time</span>
            <p className="text-lg font-black text-gray-900 mt-0.5">{recipe.totalTime}</p>
          </div>
          <div className="text-center">
            <span className="text-xs uppercase text-gray-400 font-bold tracking-wider">Yield</span>
            <p className="text-lg font-black text-gray-900 mt-0.5">{recipe.servings}</p>
          </div>
        </div>

        {/* Main 2-Column Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Ingredients (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs sticky top-24">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <h2 className="text-xl font-black text-gray-900 font-serif flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-[#D71920]" />
                  <span>Ingredients</span>
                </h2>
                <span className="text-xs text-gray-400 font-semibold">
                  Tap to check off
                </span>
              </div>

              <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-start gap-3 p-2 rounded-xl cursor-pointer transition-colors text-sm ${
                        isChecked ? 'bg-gray-50 text-gray-400 line-through' : 'hover:bg-red-50/50 text-gray-800'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-[#D71920] border-[#D71920] text-white' : 'border-gray-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="font-bold text-gray-900">{ing.amount}</span>{' '}
                        <span>{ing.name}</span>
                        {ing.notes && (
                          <span className="text-xs text-gray-400 block italic">({ing.notes})</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 italic">
                * Pro tip: Measure flour by spooning into measuring cups and leveling to prevent dense, heavy breading.
              </div>
            </div>
          </div>

          {/* Right Column: Instructions, Tips, Mistakes (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step-by-Step Instructions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-gray-900 font-serif border-b border-[#F0E2DE] pb-3">
                Step-by-Step Instructions
              </h2>

              <div className="space-y-6">
                {recipe.instructions.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#D71920] text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 font-serif">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed pl-11">
                      {step.description}
                    </p>

                    {step.tip && (
                      <div className="ml-11 bg-orange-50/80 border border-orange-200 rounded-xl p-3 text-xs text-gray-800 flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#D71920]">Technique Note: </strong>
                          {step.tip}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Cooking Tips */}
            <section className="bg-red-50/60 rounded-2xl p-6 border border-red-100 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D71920]" />
                <span>Chef's Secrets For This Recipe</span>
              </h3>
              <ul className="space-y-2.5">
                {recipe.cookingTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Common Mistakes */}
            <section className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Common Mistakes to Avoid</span>
              </h3>
              <ul className="space-y-2.5">
                {recipe.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Recipe FAQs */}
            {recipe.faqs.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900 font-serif border-b border-[#F0E2DE] pb-3">
                  Recipe Questions & Answers
                </h3>
                <div className="space-y-3">
                  {recipe.faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-[#F0E2DE]">
                      <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

        </div>

        {/* Related Recipes Section */}
        <section className="mt-20 pt-12 border-t border-[#F0E2DE] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">
              You Might Also Like
            </h2>
            <Link href="/recipes" className="text-sm font-bold text-[#D71920] hover:underline flex items-center gap-1">
              <span>All Recipes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRecipes.map((rel) => (
              <RecipeCard key={rel.id} recipe={rel} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

