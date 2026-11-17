import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { INGREDIENTS_DATA } from '@/data/ingredients';
import { RECIPES_DATA } from '@/data/recipes';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { CheckCircle2, Sparkles, ArrowRight, Layers, ChefHat } from 'lucide-react';
import { RecipeCard } from '@/components/recipes/RecipeCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INGREDIENTS_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = INGREDIENTS_DATA.find((i) => i.slug === slug);

  if (!item) {
    return constructMetadata({ title: 'Ingredient Not Found' });
  }

  return constructMetadata({
    title: `${item.name} for Fried Chicken – Science & Best Uses`,
    description: item.summary,
    image: item.image,
    canonicalUrl: `/ingredients/${item.slug}`,
    type: 'article',
  });
}

export default async function IngredientDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = INGREDIENTS_DATA.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedRecipes = RECIPES_DATA.filter((r) =>
    item.relatedRecipes.includes(r.slug)
  );

  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { name: 'Ingredients', url: '/ingredients' },
            { name: item.name, url: `/ingredients/${item.slug}` },
          ]}
        />

        <header className="space-y-4 mb-8">
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-[#D71920] font-bold text-xs uppercase tracking-wider inline-block">
            Ingredient Guide
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-serif leading-tight">
            {item.name}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {item.summary}
          </p>

          <div className="bg-red-50 border-l-4 border-[#D71920] p-4 rounded-r-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block">
              Primary Role in Frying:
            </span>
            <p className="text-sm font-semibold text-gray-800 mt-0.5">
              {item.roleInFrying}
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-lg border border-[#F0E2DE] mb-10 bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Science Breakdown */}
        <div className="space-y-8 text-gray-800">
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F0E2DE] shadow-xs space-y-4">
            <h2 className="text-2xl font-bold font-serif text-gray-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D71920]" />
              <span>How It Works: The Frying Chemistry</span>
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              {item.scienceExplanation}
            </p>
          </section>

          {/* Best Uses & Pro Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs space-y-3">
              <h3 className="font-bold text-lg font-serif text-gray-900">Best Uses</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {item.bestUses.map((use, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs space-y-3">
              <h3 className="font-bold text-lg font-serif text-gray-900">Chef Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {item.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0 mt-2" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Substitutes */}
          {item.substitutes.length > 0 && (
            <div className="bg-orange-50/70 rounded-2xl p-6 border border-orange-200">
              <h3 className="font-bold text-base font-serif text-gray-900 mb-2">
                Recommended Substitutes
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                {item.substitutes.map((sub, i) => (
                  <li key={i}>• {sub}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
            <section className="pt-8 border-t border-[#F0E2DE] space-y-6">
              <h3 className="text-2xl font-bold font-serif text-gray-900">
                Featured In These Recipes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}

