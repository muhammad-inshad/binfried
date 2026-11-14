import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChefHat, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
  priority?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, priority = false }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#F0E2DE] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <Link href={`/recipes/${recipe.slug}`} className="relative block aspect-4/3 overflow-hidden bg-stone-100">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Category Pill */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#D71920] font-bold text-xs px-3 py-1 rounded-full shadow-xs">
          {recipe.category}
        </span>
        {/* Difficulty Badge */}
        <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-xs ${
          recipe.difficulty === 'Easy'
            ? 'bg-emerald-100 text-emerald-800'
            : recipe.difficulty === 'Medium'
            ? 'bg-amber-100 text-amber-800'
            : 'bg-rose-100 text-rose-800'
        }`}>
          {recipe.difficulty}
        </span>
      </Link>

      {/* Card Content */}
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          {/* Metadata times */}
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-2.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D71920]" />
              {recipe.totalTime}
            </span>
            <span className="flex items-center gap-1">
              <ChefHat className="w-3.5 h-3.5 text-[#D71920]" />
              {recipe.servings}
            </span>
            {recipe.calories && (
              <span className="flex items-center gap-1 text-gray-400">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                {recipe.calories.split(' ')[0]} cal
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#D71920] transition-colors line-clamp-2 mb-2 leading-snug font-serif">
            <Link href={`/recipes/${recipe.slug}`}>
              {recipe.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {recipe.description}
          </p>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-400">
            By {recipe.author.name.replace('Chef ', '')}
          </span>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
          >
            <span>View Recipe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

