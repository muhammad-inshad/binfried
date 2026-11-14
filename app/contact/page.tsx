import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = constructMetadata({
  title: 'Contact BINFried – Questions, Recipe Feedback & Suggestions',
  description: 'Reach out to the BINFried culinary team with recipe questions, culinary science inquiries, or article suggestions.',
  canonicalUrl: '/contact',
});

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />
      <ContactClient />
    </div>
  );
}

