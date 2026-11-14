import { Recipe, BlogArticle, CookingGuide, IngredientKnowledge } from '@/types';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://binfried.store';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'BINFried';
export const SITE_TAGLINE = process.env.NEXT_PUBLIC_SITE_TAGLINE || 'The Home of Crispy Fried Chicken';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: 'BINFried is an educational culinary platform dedicated to fried chicken recipes, cooking tutorials, ingredient chemistry, and crispy frying science.',
    sameAs: [
      'https://twitter.com/binfried_store',
      'https://pinterest.com/binfried_store',
      'https://youtube.com/@binfried_store'
    ]
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/recipes?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function getRecipeSchema(recipe: Recipe) {
  // ISO 8601 duration converter approx helper
  const formatDuration = (minsStr: string) => {
    const num = parseInt(minsStr, 10) || 30;
    return `PT${num}M`;
  };

  const imageUrl = recipe.image.startsWith('http')
    ? recipe.image
    : `${SITE_URL}${recipe.image.startsWith('/') ? recipe.image : `/${recipe.image}`}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    image: [imageUrl],
    description: recipe.description,
    keywords: recipe.tags.join(', '),
    author: {
      '@type': 'Person',
      name: recipe.author.name,
      url: `${SITE_URL}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/recipes/${recipe.slug}`
    },
    datePublished: recipe.publishedAt,
    dateModified: recipe.updatedAt,
    prepTime: formatDuration(recipe.prepTime),
    cookTime: formatDuration(recipe.cookTime),
    totalTime: formatDuration(recipe.totalTime),
    recipeYield: recipe.servings,
    recipeCategory: recipe.category,
    recipeCuisine: 'American / International',
    recipeIngredient: recipe.ingredients.map(ing => `${ing.amount} ${ing.name}${ing.notes ? ` (${ing.notes})` : ''}`),
    recipeInstructions: recipe.instructions.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
      position: step.step
    }))
  };
}

export function getArticleSchema(article: BlogArticle) {
  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${SITE_URL}${article.image.startsWith('/') ? article.image : `/${article.image}`}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`
    },
    headline: article.title,
    description: article.summary,
    image: [imageUrl],
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: `${SITE_URL}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`
      }
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

