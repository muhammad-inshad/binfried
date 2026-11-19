import { COOKING_GUIDES } from '@/data/guides';

export interface TechniqueLink {
  title: string;
  slug: string;
  category: string;
}

export const TECHNIQUE_GUIDES: TechniqueLink[] = [
  {
    title: 'How to Make Chicken Extra Crispy',
    slug: 'how-to-make-chicken-extra-crispy',
    category: 'Frying Science',
  },
  {
    title: 'Best Temperature for Frying Chicken',
    slug: 'best-temperature-for-frying-chicken',
    category: 'Temperature Control',
  },
  {
    title: 'How to Marinate Chicken (Buttermilk Brine)',
    slug: 'how-to-marinate-chicken',
    category: 'Marinade Chemistry',
  },
  {
    title: 'How to Keep Fried Chicken Crispy',
    slug: 'how-to-keep-fried-chicken-crispy',
    category: 'Holding & Serving',
  },
  {
    title: 'How to Fry Without a Deep Fryer',
    slug: 'how-to-fry-chicken-without-a-deep-fryer',
    category: 'Equipment',
  },
];

export interface IngredientLink {
  keyword: string;
  slug: string;
  label: string;
}

export const INGREDIENT_LINKS: IngredientLink[] = [
  { keyword: 'cornstarch', slug: 'cornstarch', label: 'Cornstarch' },
  { keyword: 'all-purpose flour', slug: 'all-purpose-flour', label: 'All-Purpose Flour' },
  { keyword: 'flour', slug: 'all-purpose-flour', label: 'Flour' },
  { keyword: 'buttermilk', slug: 'buttermilk', label: 'Buttermilk' },
  { keyword: 'peanut oil', slug: 'cooking-oil-peanut-canola', label: 'Frying Oil' },
  { keyword: 'canola oil', slug: 'cooking-oil-peanut-canola', label: 'Frying Oil' },
  { keyword: 'frying oil', slug: 'cooking-oil-peanut-canola', label: 'Frying Oil' },
  { keyword: 'oil for deep frying', slug: 'cooking-oil-peanut-canola', label: 'Frying Oil' },
  { keyword: 'smoked paprika', slug: 'paprika-smoked-sweet', label: 'Paprika' },
  { keyword: 'paprika', slug: 'paprika-smoked-sweet', label: 'Paprika' },
  { keyword: 'garlic powder', slug: 'garlic-powder', label: 'Garlic Powder' },
  { keyword: 'black pepper', slug: 'black-and-white-pepper', label: 'Black & White Pepper' },
  { keyword: 'white pepper', slug: 'black-and-white-pepper', label: 'Black & White Pepper' },
  { keyword: 'chicken pieces', slug: 'chicken-cuts-for-frying', label: 'Chicken Cuts' },
  { keyword: 'drumsticks', slug: 'chicken-cuts-for-frying', label: 'Chicken Cuts' },
  { keyword: 'thighs', slug: 'chicken-cuts-for-frying', label: 'Chicken Cuts' },
  { keyword: 'chicken breasts', slug: 'chicken-cuts-for-frying', label: 'Chicken Cuts' },
  { keyword: 'chicken wings', slug: 'chicken-cuts-for-frying', label: 'Chicken Cuts' },
];

export function getIngredientSlug(ingredientName: string): string | null {
  const lower = ingredientName.toLowerCase();
  for (const item of INGREDIENT_LINKS) {
    if (lower.includes(item.keyword)) {
      return item.slug;
    }
  }
  return null;
}
