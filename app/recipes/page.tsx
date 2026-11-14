import { Metadata } from 'next';
import { Suspense } from 'react';
import { constructMetadata } from '@/lib/seo';
import { RecipesClient } from './RecipesClient';

export const metadata: Metadata = constructMetadata({
  title: 'Crispy Fried Chicken Recipes – KFC-Style, Kerala Kozhi Porichathu & Wings',
  description: 'Explore tested crispy fried chicken recipes: KFC-style at home, Kerala Kozhi Porichathu, restaurant-style Chicken 65, and Korean double-fried chicken with kadhai frying tips.',
  canonicalUrl: '/recipes',
});

export default function RecipesPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-10 h-10 border-4 border-[#D71920] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-semibold text-gray-500">Loading recipes...</p>
        </div>
      }
    >
      <RecipesClient />
    </Suspense>
  );
}
