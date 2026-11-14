export interface IngredientItem {
  name: string;
  amount: string;
  notes?: string;
}

export interface InstructionStep {
  step: number;
  title: string;
  description: string;
  tip?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Classic Fried Chicken' | 'Spicy Chicken' | 'Korean Fried Chicken' | 'Chicken Wings' | 'Chicken Burgers' | 'Cooking Techniques';
  prepTime: string; // e.g. "20 mins"
  cookTime: string; // e.g. "25 mins"
  totalTime: string; // e.g. "45 mins"
  servings: string; // e.g. "4 servings"
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  calories?: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  ingredients: IngredientItem[];
  instructions: InstructionStep[];
  cookingTips: string[];
  commonMistakes: string[];
  faqs: FAQItem[];
  tags: string[];
  isPopular?: boolean;
  featured?: boolean;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Cooking Tips' | 'Chicken Recipes' | 'Ingredients & Spices' | 'Food Knowledge' | 'Cooking Techniques';
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  updatedAt: string;
  tableOfContents: { id: string; title: string }[];
  content: {
    directAnswer: string;
    sections: {
      id: string;
      title: string;
      level: 2 | 3;
      body: string[];
    }[];
  };
  relatedRecipeSlugs?: string[];
  tags: string[];
}

export interface CookingGuide {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Essential';
  readTime: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  keyTakeaways: string[];
  directAnswer: string;
  sections: {
    title: string;
    content: string[];
    proTip?: string;
  }[];
  faqs: FAQItem[];
  relatedGuideSlugs?: string[];
}

export interface IngredientKnowledge {
  id: string;
  slug: string;
  name: string;
  roleInFrying: string;
  summary: string;
  bestUses: string[];
  flavorProfile: string;
  image: string;
  scienceExplanation: string;
  proTips: string[];
  substitutes: string[];
  relatedRecipes: string[];
}

