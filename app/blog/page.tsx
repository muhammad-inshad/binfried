import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BlogClient } from './BlogClient';

export const metadata: Metadata = constructMetadata({
  title: 'Fried Chicken Blog & Food Science Articles',
  description: 'Explore in-depth articles on fried chicken techniques, oil smoke point comparisons, starch molecular science, and secret 11 herbs and spices blends.',
  canonicalUrl: '/blog',
});

export default function BlogPage() {
  return <BlogClient />;
}

