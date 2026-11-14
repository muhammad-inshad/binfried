import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy – BINFried',
  description: 'BINFried privacy policy and data practices for our recipe and cooking website.',
  canonicalUrl: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400">Last updated: February 2026</p>
      </header>

      <div className="bg-white rounded-3xl p-8 border border-[#F0E2DE] text-sm text-gray-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-serif">1. Overview</h2>
          <p>
            At BINFried (binfried.store), we respect your privacy. This website is an educational food content platform. We do not sell user data, collect payment details, or operate e-commerce transactions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-serif">2. Newsletter Subscriptions</h2>
          <p>
            If you subscribe to our email newsletter, your email address is used solely to deliver fried chicken recipes, cooking tips, and culinary guides. You may unsubscribe at any time via the unsubscribe link present in each email.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-serif">3. Cookies & Analytics</h2>
          <p>
            We may use standard analytics cookies to measure page traffic, reader engagement, and site performance to improve our recipes and guides. You can disable cookies in your browser settings.
          </p>
        </section>
      </div>
    </div>
  );
}

