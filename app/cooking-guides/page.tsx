import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { COOKING_GUIDES } from '@/data/guides';
import { GuideCard } from '@/components/common/GuideCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Fried Chicken Cooking Guides & Culinary Tutorials',
  description: 'Master the art of crispy fried chicken with in-depth culinary guides covering oil temperatures, starch science, buttermilk brining, and equipment setup.',
  canonicalUrl: '/cooking-guides',
});

export default function CookingGuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
      <Breadcrumbs items={[{ name: 'Cooking Guides', url: '/cooking-guides' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Culinary Science & Knowledge</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          Fried Chicken Cooking Guides
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Step beyond simple recipes. Understand the thermodynamics, starch chemistry, and moisture barrier science required to produce shatter-crisp fried chicken every single time.
        </p>
      </div>

      {/* Featured Master Guide Banner */}
      <div className="bg-gradient-to-r from-[#A80F17] to-[#D71920] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase inline-block">
            Featured Masterclass
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif leading-tight">
            How to Make Fried Chicken Extra Crispy: The Ultimate Culinary Science Guide
          </h2>
          <p className="text-red-100 text-sm leading-relaxed">
            Discover why 100% flour creates leathery crusts, how cornstarch crystallizes into a glass-like crunch, and why resting on a wire rack is non-negotiable.
          </p>
          <div className="pt-2">
            <Link
              href="/cooking-guides/how-to-make-chicken-extra-crispy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#D71920] font-bold text-sm shadow-md hover:bg-gray-100 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Read The Complete Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid of all Guides */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif border-b border-[#F0E2DE] pb-3">
          All Guides & Tutorials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COOKING_GUIDES.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </div>
  );
}

