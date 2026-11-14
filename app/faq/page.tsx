import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { FAQ_DATA } from '@/data/faq';
import { JsonLd } from '@/components/seo/JsonLd';
import { getFAQSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { FAQClient } from './FAQClient';

export const metadata: Metadata = constructMetadata({
  title: 'Fried Chicken FAQ – Answers to Common Frying Questions',
  description: 'Instant answers to all your fried chicken questions: oil temperatures, breading falling off, soggy crusts, egg substitutes, and reheating secrets.',
  canonicalUrl: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(FAQ_DATA)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
        <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />
        <FAQClient initialFaqs={FAQ_DATA} />
      </div>
    </>
  );
}

