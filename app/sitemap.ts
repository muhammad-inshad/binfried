import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/schema';
import { RECIPES_DATA } from '@/data/recipes';
import { BLOG_ARTICLES } from '@/data/blogs';
import { COOKING_GUIDES } from '@/data/guides';
import { INGREDIENTS_DATA } from '@/data/ingredients';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static Routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/recipes`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cooking-guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ingredients`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic Recipe Routes
  const recipeRoutes = RECIPES_DATA.map((recipe) => ({
    url: `${SITE_URL}/recipes/${recipe.slug}`,
    lastModified: new Date(recipe.updatedAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog Routes
  const blogRoutes = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic Cooking Guide Routes
  const guideRoutes = COOKING_GUIDES.map((guide) => ({
    url: `${SITE_URL}/cooking-guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic Ingredient Routes
  const ingredientRoutes = INGREDIENTS_DATA.map((ingredient) => ({
    url: `${SITE_URL}/ingredients/${ingredient.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...recipeRoutes, ...blogRoutes, ...guideRoutes, ...ingredientRoutes];
}

