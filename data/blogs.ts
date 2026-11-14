import { BlogArticle } from '@/types';

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'cornstarch-vs-flour-for-fried-chicken',
    slug: 'cornstarch-vs-flour-fried-chicken-science',
    title: 'Cornstarch vs. Flour in Fried Chicken: The Science of Maximum Crunch',
    summary: 'Why does adding cornstarch to your flour dredge transform ordinary fried chicken into a shatteringly crisp masterpiece? We analyze the molecular starch chemistry.',
    category: 'Food Knowledge',
    readTime: '6 min read',
    image: '/images/blog-cornstarch.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-02-14',
    updatedAt: '2026-03-01',
    tags: ['Food Science', 'Cornstarch', 'Crispy Technique', 'Culinary Secrets'],
    relatedRecipeSlugs: ['crispy-fried-chicken', 'korean-fried-chicken'],
    tableOfContents: [
      { id: 'direct-answer', title: 'Direct Culinary Summary' },
      { id: 'the-problem-with-flour', title: 'Why 100% Flour Creates a Leathery Crust' },
      { id: 'how-cornstarch-works', title: 'How Cornstarch Creates a Glass-Like Matrix' },
      { id: 'optimal-ratios', title: 'The Optimal Ratios for Every Style' },
      { id: 'potato-vs-tapioca', title: 'What About Potato and Rice Starch?' }
    ],
    content: {
      directAnswer: 'Cornstarch contains 100% starch and zero gluten protein, whereas all-purpose flour has 10-12% gluten. Mixing 25% cornstarch with 75% flour weakens gluten networks, prevents chewiness, and forms a brittle, shatter-crisp crust that repels moisture and stays crunchy longer.',
      sections: [
        {
          id: 'the-problem-with-flour',
          title: 'Why 100% All-Purpose Flour Creates a Leathery Crust',
          level: 2,
          body: [
            'Wheat flour is formulated primarily to bake bread and pastries, where gluten elasticity and structure are desirable. In all-purpose flour, gliadin and glutenin proteins bond when mixed with buttermilk or egg washes.',
            'When dipped directly into oil, these gluten chains form a tough, chewy barrier. As the chicken cools down, steam escaping from the interior dissolves into this gluten mesh, turning what was momentarily crisp into a tough, leathery skin.'
          ]
        },
        {
          id: 'how-cornstarch-works',
          title: 'How Cornstarch Creates a Glass-Like Matrix',
          level: 2,
          body: [
            'Cornstarch contains purely amylose and amylopectin molecules. It possesses zero gluten. When dropped into 350°F fat, cornstarch granulates gelatinize and rapidly lose their bound water, creating an instantaneous rigid lattice structure.',
            'Because this rigid structure lacks elasticity, it fractures cleanly upon biting—producing the audible snap that food scientists describe as high acoustic amplitude crunch.'
          ]
        },
        {
          id: 'optimal-ratios',
          title: 'The Optimal Ratios for Every Style of Fried Chicken',
          level: 2,
          body: [
            '• Classic Southern Style: 75% All-Purpose Flour, 25% Cornstarch. This offers the ideal balance: the flour provides golden brown Maillard browning and body, while cornstarch delivers crispness.',
            '• Indian Kitchen Blend (Maida + Cornflour): 70% Maida, 20% Cornflour (cornstarch), 10% Rice Flour (arisi maavu). This blend counteracts Indian humidity and prevents maida from turning into a chewy or rubbery crust.',
            '• Extra Craggy Ridge Style: 70% Flour, 20% Cornstarch, 10% Rice Flour.',
            '• Ultra-Thin Asian Glass Style: 100% Potato Starch or Cornstarch with a light egg white slurry.'
          ]
        },
        {
          id: 'potato-vs-tapioca',
          title: 'What About Potato and Rice Starch?',
          level: 2,
          body: [
            'Potato starch has larger granules and swells at lower temperatures than cornstarch, giving an ultra-delicate crackly skin synonymous with Korean double-fried wings.',
            'Rice flour yields a remarkably dry, pale, and ultra-crisp shell that resists fat absorption, which is why it is preferred in Japanese Karaage and Taiwanese chicken chops.'
          ]
        }
      ]
    }
  },
  {
    id: 'common-fried-chicken-mistakes',
    slug: 'common-fried-chicken-cooking-mistakes',
    title: '7 Common Fried Chicken Mistakes That Ruin Your Crust (And How to Fix Them)',
    summary: 'From dropping into cold oil to using paper towels, avoid these critical culinary mistakes that cause greasy, soggy, or burnt fried chicken.',
    category: 'Cooking Tips',
    readTime: '7 min read',
    image: '/images/blog-mistakes.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-02-10',
    updatedAt: '2026-02-28',
    tags: ['Troubleshooting', 'Kitchen Mistakes', 'Cooking Tips', 'Crispy Crust'],
    relatedRecipeSlugs: ['crispy-fried-chicken', 'buttermilk-fried-chicken'],
    tableOfContents: [
      { id: 'direct-answer', title: 'Quick Troubleshooting Summary' },
      { id: 'mistake-1', title: '1. Draining on Paper Towels Instead of a Wire Rack' },
      { id: 'mistake-2', title: '2. Frying Cold Chicken Straight From the Fridge' },
      { id: 'mistake-3', title: '3. Overcrowding the Frying Skillet' },
      { id: 'mistake-4', title: '4. Neglecting Oil Temperature Recovery' },
      { id: 'mistake-5', title: '5. Skipping the Post-Dredge Rest' }
    ],
    content: {
      directAnswer: 'The 7 biggest fried chicken mistakes are: draining on paper towels, dropping straight from the fridge, overcrowding the pan, guessing oil temperature without a thermometer, skipping the 10-minute flour rest, using 100% wheat flour, and piercing meat with a fork during frying.',
      sections: [
        {
          id: 'mistake-1',
          title: '1. Draining on Paper Towels Instead of a Wire Rack',
          level: 2,
          body: [
            'Paper towels seem logical for soaking up grease, but they create a fatal culinary flaw. When steaming hot chicken is placed on a flat surface, the rising steam cannot escape.',
            'Instead, it condenses under the bottom of the chicken, turning that hard-earned crispy crust into a soggy paste in under two minutes. Always place chicken on an elevated wire cooling rack set over a rimmed baking sheet.'
          ]
        },
        {
          id: 'mistake-2',
          title: '2. Frying Cold Chicken Straight From the Fridge',
          level: 2,
          body: [
            'If the interior meat is 38°F when it hits hot oil, the outside will burn black before the center reaches 165°F. Remove chicken from the refrigerator 20-30 minutes before frying to knock off the refrigerator chill.'
          ]
        },
        {
          id: 'mistake-3',
          title: '3. Overcrowding the Frying Skillet',
          level: 2,
          body: [
            'Adding too many pieces at once plummets oil temperature below 300°F. When temperature collapses, the breading acts as a sponge and drinks the oil instead of crisping. Fry in batches with plenty of space between pieces.'
          ]
        },
        {
          id: 'mistake-5',
          title: '5. Skipping the Post-Dredge Rest',
          level: 2,
          body: [
            'Never drop freshly dredged chicken straight into oil. Resting the floured chicken on a wire rack for 10 minutes allows liquid from the marinade to hydrate the inner flour, forming a glue-like starch bond that prevents breading from slipping off during cooking.'
          ]
        }
      ]
    }
  },
  {
    id: 'best-oils-for-deep-frying-chicken',
    slug: 'best-oils-for-deep-frying-chicken',
    title: 'Best Oils for Frying Chicken: Smoke Points, Flavor Profiles, and Health Factors',
    summary: 'Compare Peanut, Canola, Corn, Tallow, and Lard. Learn which oils yield the cleanest flavor, longest fry life, and crunchiest texture.',
    category: 'Ingredients & Spices',
    readTime: '5 min read',
    image: '/images/blog-oils.jpg',
    author: {
      name: 'Chef Jin-Woo Park',
      role: 'Asian Culinary Specialist',
    },
    publishedAt: '2026-02-02',
    updatedAt: '2026-02-19',
    tags: ['Cooking Oil', 'Smoke Points', 'Peanut Oil', 'Frying Science'],
    relatedRecipeSlugs: ['kfc-style-fried-chicken', 'nashville-hot-fried-chicken'],
    tableOfContents: [
      { id: 'direct-answer', title: 'Top Oil Recommendations' },
      { id: 'peanut-oil', title: '1. Peanut Oil (The Gold Standard)' },
      { id: 'canola-oil', title: '2. Canola & Vegetable Oil (Affordable & Neutral)' },
      { id: 'lard-tallow', title: '3. Lard and Beef Tallow (Old-School Savory Richness)' },
      { id: 'smoke-point-chart', title: 'Smoke Point Comparison Chart' }
    ],
    content: {
      directAnswer: 'Peanut oil is the best overall oil for frying chicken due to its high 450°F smoke point, resistance to thermal breakdown, and subtle nutty profile. Canola oil is the best budget-friendly neutral option, while lard delivers unmatched nostalgic savory richness.',
      sections: [
        {
          id: 'peanut-oil',
          title: '1. Peanut Oil: The Industry Standard',
          level: 2,
          body: [
            'Refined peanut oil has a smoke point of 450°F (232°C). It is exceptionally thermally stable, meaning it does not oxidize easily or generate acrid burnt off-flavors even after several hours of continuous frying.',
            'Because refined peanut oil has allergen proteins removed during refining, it is commonly considered non-allergenic by the FDA, though always check with severe nut allergy diners.'
          ]
        },
        {
          id: 'canola-oil',
          title: '2. Canola & Corn Oil: Clean Canvas',
          level: 2,
          body: [
            'Canola oil (smoke point 400°F) has an almost completely neutral flavor profile. It allows the intricate spices and seasonings of your dredge to shine through without imposing heavy cooking fat flavors.'
          ]
        },
        {
          id: 'smoke-point-chart',
          title: 'Smoke Point Comparison Table',
          level: 2,
          body: [
            '• Peanut Oil: 450°F (232°C) – Rating: Exceptional',
            '• Beef Tallow: 420°F (215°C) – Rating: Ultra Savory',
            '• Corn Oil: 450°F (232°C) – Rating: Great Crisp',
            '• Canola Oil: 400°F (204°C) – Rating: Great All-Rounder',
            '• Extra Virgin Olive Oil: 375°F (190°C) – Rating: Not recommended for deep chicken frying'
          ]
        }
      ]
    }
  },
  {
    id: 'secrets-of-the-11-herbs-and-spices',
    slug: 'secrets-of-11-herbs-and-spices-blend',
    title: 'The Secret Chemistry Behind Iconic 11 Herbs and Spices Chicken Blends',
    summary: 'Unpack the culinary chemistry of the famous 11 herbs and spices blend: why white pepper is king, the role of celery salt, and how MSG amplifies savory umami.',
    category: 'Ingredients & Spices',
    readTime: '6 min read',
    image: '/images/blog-11-spices.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-01-25',
    updatedAt: '2026-02-12',
    tags: ['Spices', 'Seasoning', 'Secret Blend', 'White Pepper', 'Umami'],
    relatedRecipeSlugs: ['kfc-style-fried-chicken'],
    tableOfContents: [
      { id: 'direct-answer', title: 'Spice Blend Blueprint' },
      { id: 'white-pepper', title: 'Why White Pepper Dominates Over Black Pepper' },
      { id: 'celery-salt', title: 'The Subtle Magic of Celery Salt' },
      { id: 'msg-role', title: 'Glutamate Synergy: The Flavor Accelerator' }
    ],
    content: {
      directAnswer: 'The iconic secret blend relies on ground white pepper as its primary pungent note, backed by garlic salt, celery salt, dry mustard, smoked paprika, dried thyme, oregano, basil, ginger, and monosodium glutamate (MSG) for intense umami.',
      sections: [
        {
          id: 'white-pepper',
          title: 'Why White Pepper Dominates Over Black Pepper',
          level: 2,
          body: [
            'While black pepper includes the outer berry hull, white pepper has the outer pericarp removed before drying. This leaves pure piperine heat with an earthy, fermented aroma and no black specks that look burnt in golden crusts.'
          ]
        },
        {
          id: 'celery-salt',
          title: 'The Subtle Magic of Celery Salt',
          level: 2,
          body: [
            'Celery seed contains natural phthalides that provide herbal aromatic sweetness and make chicken taste more deeply savory and broth-like.'
          ]
        }
      ]
    }
  }
];

export const BLOG_CATEGORIES = [
  'All',
  'Cooking Tips',
  'Chicken Recipes',
  'Ingredients & Spices',
  'Food Knowledge',
  'Cooking Techniques'
] as const;
