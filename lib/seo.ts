import { Metadata } from 'next';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from './schema';

export function constructMetadata({
  title,
  description,
  image = '/images/hero-fried-chicken.jpg',
  canonicalUrl,
  type = 'website'
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – ${SITE_TAGLINE}`;
  const fullDesc = description || 'Master the art of crispy fried chicken with tested recipes, exact oil temperatures, secret spice blends, and food science cooking tutorials.';
  const url = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description: fullDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDesc,
      images: [ogImage],
      creator: '@binfried_store',
    },
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: '/icon.png', sizes: 'any' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
