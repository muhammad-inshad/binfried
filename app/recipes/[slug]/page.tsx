import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { RECIPES_DATA } from '@/data/recipes';
import { constructMetadata } from '@/lib/seo';
import { RecipeDetailView } from './RecipeDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RECIPES_DATA.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = RECIPES_DATA.find((r) => r.slug === slug);

  if (!recipe) {
    return constructMetadata({ title: 'Recipe Not Found' });
  }

  return constructMetadata({
    title: `${recipe.title} (Exact Frying Guide)`,
    description: recipe.description,
    image: recipe.image,
    canonicalUrl: `/recipes/${recipe.slug}`,
    type: 'article',
  });
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = RECIPES_DATA.find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetailView recipe={recipe} />;
}

