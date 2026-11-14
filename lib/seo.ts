import { Metadata } from 'next';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from './schema';

const PRODUCTION_DOMAIN = 'https://www.binfried.store';

export function constructMetadata({
  title,
  description,
  image = '/images/hero-fried-chicken.jpg',
  canonicalUrl = '',
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
  
  // Format canonical clean path: avoid trailing slashes except for root
  let cleanPath = canonicalUrl.trim();
  if (cleanPath && !cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  if (cleanPath !== '/' && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Always use production domain with www to avoid canonical mismatches and 308 redirect loops
  const baseOrigin = PRODUCTION_DOMAIN;
  const url = cleanPath && cleanPath !== '/' ? `${baseOrigin}${cleanPath}` : baseOrigin;
  const ogImage = image.startsWith('http') ? image : `${baseOrigin}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: fullTitle,
    description: fullDesc,
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(PRODUCTION_DOMAIN),
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
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
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
