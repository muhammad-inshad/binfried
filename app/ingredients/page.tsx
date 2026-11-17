import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { INGREDIENTS_DATA } from '@/data/ingredients';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Layers, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Fried Chicken Ingredient Guides & Kitchen Science',
  description: 'Understand every ingredient used in crispy fried chicken: chicken cuts, all-purpose flour, cornstarch, buttermilk, peanut oil, garlic powder, and paprika.',
  canonicalUrl: '/ingredients',
});

export default function IngredientsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
      <Breadcrumbs items={[{ name: 'Ingredients', url: '/ingredients' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>The Chemistry of Flavor & Crunch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          Fried Chicken Ingredients Knowledge
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Learn how each ingredient functions at 350°F: why cornstarch prevents leathery gluten, how lactic acid brines tenderize, and which oils offer the highest smoke points.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INGREDIENTS_DATA.map((item) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden border border-[#F0E2DE] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <Link href={`/ingredients/${item.slug}`} className="relative block aspect-16/10 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={480}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-6 space-y-3">
                <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
                  Role: {item.roleInFrying.split(' ')[0]} {item.roleInFrying.split(' ')[1]}
                </div>

                <h2 className="text-xl font-bold text-gray-900 font-serif group-hover:text-[#D71920] transition-colors">
                  <Link href={`/ingredients/${item.slug}`}>
                    {item.name}
                  </Link>
                </h2>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                <div className="bg-orange-50/70 p-3 rounded-xl border border-orange-100 text-xs text-gray-700">
                  <strong className="text-gray-900">Flavor: </strong>
                  <span>{item.flavorProfile}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-400">Ingredient Deep Dive</span>
              <Link
                href={`/ingredients/${item.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

