import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Flame, ChefHat, Sparkles, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About BINFried – The Home of Crispy Fried Chicken',
  description: 'Learn about BINFried, our culinary mission, testing standards, and dedication to sharing honest, tested fried chicken recipes and food knowledge.',
  canonicalUrl: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-20">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <Flame className="w-4 h-4 fill-[#D71920]" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          About BINFried
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          The educational culinary platform dedicated to the pursuit of the world's crunchiest, juiciest, most flavorful fried chicken.
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F0E2DE] shadow-xs space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
          Why We Started BINFried.store
        </h2>

        <p className="text-gray-700 leading-relaxed text-base">
          Great fried chicken is not an accident—it is applied food science. For decades, home cooks have struggled with soggy crusts, undercooked bone centers, and breading that slides right off the chicken meat. Most internet recipes skip the critical physics of frying: gluten formation, starch gelatinization, oil thermal drop, and post-fry moisture migration.
        </p>

        <p className="text-gray-700 leading-relaxed text-base">
          <strong>BINFried</strong> was created as an educational culinary resource to demystify every step of frying chicken. We believe everyone deserves to make restaurant-quality, audibly crunchy fried chicken on their own home stove without commercial broasters or industrial machinery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 font-serif flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#D71920]" />
              <span>Tested Ratios</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every flour, starch, buttermilk, and spice measurement is tested to ensure repeatable perfection.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 font-serif flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D71920]" />
              <span>Culinary Science</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We explain *why* ingredients work, from lactic acid tenderization to baking powder micro-blisters.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 font-serif flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D71920]" />
              <span>100% Educational</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We do not sell fast food or take online orders. We exist purely to educate cooks and home enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Standards */}
      <div className="bg-[#FFF5F2] rounded-3xl p-8 border border-red-100 space-y-4">
        <h2 className="text-xl font-bold font-serif text-gray-900">
          Our Editorial & Content Standards
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0 mt-2" />
            <span><strong>Zero Fake Reviews:</strong> We do not fabricate user testimonials or invent fake star ratings.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0 mt-2" />
            <span><strong>Food Safety First:</strong> All recipes emphasize internal temperature safety (165°F / 74°C) and safe hot oil handling.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0 mt-2" />
            <span><strong>Clear Internal Links:</strong> Every recipe links back to relevant ingredient science and frying technique guides.</span>
          </li>
        </ul>
      </div>

      {/* Navigation CTA */}
      <div className="text-center pt-4">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D71920] text-white font-bold text-base hover:bg-[#A80F17] transition-all shadow-md shadow-red-200"
        >
          <span>Explore Our Fried Chicken Recipes</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

