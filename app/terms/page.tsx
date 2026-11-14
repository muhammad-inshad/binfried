import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Terms and Conditions – BINFried',
  description: 'Terms and Conditions of use for BINFried.store, our recipes and culinary materials.',
  canonicalUrl: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      <Breadcrumbs items={[{ name: 'Terms and Conditions', url: '/terms' }]} />

      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif">
          Terms and Conditions
        </h1>
        <p className="text-xs text-gray-400">Last updated: February 2026</p>
      </header>

      <div className="bg-white rounded-3xl p-8 border border-[#F0E2DE] text-sm text-gray-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-serif">1. Content Usage</h2>
          <p>
            All original recipes, photography, guides, and food science explanations on BINFried.store are provided for personal, non-commercial culinary use.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-serif">2. Kitchen Safety & Disclaimer</h2>
          <p>
            Frying with hot cooking oil (325°F - 375°F) requires caution. Always use appropriate cookware, monitor temperatures with thermometers, keep moisture away from boiling oil, and ensure chicken reaches an internal food safety temperature of 165°F (74°C). BINFried is not liable for kitchen mishaps or improper food handling.
          </p>
        </section>
      </div>
    </div>
  );
}

