import { CookingGuide } from '@/types';

export const COOKING_GUIDES: CookingGuide[] = [
  {
    id: 'how-to-make-chicken-extra-crispy',
    slug: 'how-to-make-chicken-extra-crispy',
    title: 'How to Make Fried Chicken Extra Crispy: The Ultimate Culinary Science Guide',
    summary: 'Discover the exact food science behind shatteringly crisp fried chicken—from cornstarch ratios and baking powder micro-blisters to double dredging and wire rack drying.',
    category: 'Frying Science',
    difficulty: 'Essential',
    readTime: '7 min read',
    image: '/images/guide-extra-crispy.jpg',
    publishedAt: '2026-02-12',
    updatedAt: '2026-03-01',
    keyTakeaways: [
      'Replace 20-30% of all-purpose flour with cornstarch or potato starch to weaken gluten.',
      'Drizzle marinade into dry flour to create shaggy flakes for deep craggy ridges.',
      'Rest dredged chicken on a wire rack for 10-15 minutes before dropping into oil.',
      'Maintain frying oil between 325°F and 350°F to repel excess oil absorption.',
      'Never drain on paper towels; use an elevated cooling wire rack to avoid trapped steam.'
    ],
    directAnswer: 'To make fried chicken extra crispy, replace 25% of all-purpose flour with cornstarch or potato starch, add 1 teaspoon of baking powder to create micro-blisters, create shaggy flakes by drizzling liquid into the dredge, rest the coated chicken for 10 minutes on a wire rack before frying, and maintain oil at 350°F.',
    sections: [
      {
        title: '1. The Starch Ratio: Why 100% Flour Fails',
        content: [
          'All-purpose flour contains around 10% to 12% protein. When mixed with liquid (like buttermilk or eggs), these proteins link together to create gluten networks. While some gluten is needed for structure, too much gluten yields a chewy, bread-like, leathery crust rather than a crisp, brittle crunch.',
          'By cutting all-purpose flour with pure starches—specifically cornstarch, potato starch, or rice flour—you dilute gluten formation. Pure starches contain no gluten-forming proteins. When fried, starches absorb oil, expand, and set into glass-like crystalline structures that produce an audible crunch with every bite.'
        ],
        proTip: 'The golden ratio for Western-style crispy chicken is 75% all-purpose flour and 25% cornstarch. For Asian-style paper-thin glass crunch, use 100% potato starch.'
      },
      {
        title: '2. The Baking Powder Secret: Microscopic Air Pockets',
        content: [
          'Commercial fried chicken chains often achieve an airy, brittle crumb that fractures effortlessly. The secret kitchen hack is baking powder (sodium bicarbonate plus acid salts).',
          'When cold dredged chicken hits 350°F oil, the extreme heat activates the baking powder, releasing microscopic bubbles of carbon dioxide gas throughout the batter. These tiny expanding bubbles push outward, creating thousands of micro-cavities across the crust. This transforms what would have been a dense shell into a fragile, shatteringly crisp honeycomb texture.'
        ],
        proTip: 'Use 1 level teaspoon of aluminum-free baking powder for every 2 cups of flour. Do not confuse with baking soda, which tastes metallic in large amounts.'
      },
      {
        title: '3. Shaggy Clusters: How to Engineer Craggy Ridges',
        content: [
          'Flat, smooth fried chicken tastes boring. The craggy, jagged, coral-like edges hold the most crunch and soak up maximum seasoning. How do restaurants create them without mess?',
          'The technique is simple: before coating your chicken, take 3 to 4 tablespoons of your buttermilk marinade or egg wash and drizzle it directly into the dry seasoned flour bowl. Rub the flour between your palms until pea-sized wet clusters form throughout the dry powder. When you roll your chicken in this mixture, the clusters weld to the exterior, turning into golden crunchy nuggets during frying.'
        ]
      },
      {
        title: '4. The 10-Minute Wire Rack Rest (Hydration Phase)',
        content: [
          'A very common beginner mistake is dropping chicken straight into hot oil immediately after flouring. When you do this, loose powdery flour falls off into the oil, burns, and leaves patchy bald spots on the chicken.',
          'Instead, place dredged chicken on an elevated wire rack for 10 to 15 minutes. During this rest, moisture from the buttermilk migrates into the inner flour layer, hydrating the starches and converting them into a pasty protein glue. When fried, the coating stays bonded to the skin and never slides off.'
        ]
      },
      {
        title: '5. Temperature Physics: Avoiding Oil-Logged Chicken',
        content: [
          'Deep frying is essentially an efficient dehydration process. The moisture inside the chicken turns to steam, which forces its way outward through the batter. This positive steam pressure pushes oil away, preventing it from soaking into the meat.',
          'However, if your oil temperature drops below 300°F (due to overcrowding the pot), the internal steam pressure collapses. The batter then acts like a sponge, absorbing frying grease and becoming soggy. Keep a candy or infrared thermometer in the pot and adjust your stove flame to hold 325°F-335°F throughout the fry.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why does my fried chicken get soggy after cooling?',
        answer: 'Fried chicken becomes soggy when cooling on flat surfaces or paper towels because escaping internal steam gets trapped underneath the crust, converting crisp starches back into soggy dough. Cool exclusively on an elevated wire rack or stainless steel sieve (jali).'
      },
      {
        question: 'Can I use maida with cornflour or rice flour for extra crispy chicken?',
        answer: 'Yes! Indian maida (all-purpose flour) is protein-rich. Mixing 70% maida with 20% cornflour and 10% fine rice flour (arisi maavu) dilutes gluten and creates an ultra-crispy, crunch-retaining crust perfect for Indian climates.'
      },
      {
        question: 'How to make crispy fried chicken in a kadhai at home?',
        answer: 'Use a heavy cast-iron or tri-ply kadhai, fill halfway with refined sunflower or groundnut oil, fry only 2-3 pieces at a time so the oil heat does not drop, and rest on a wire rack.'
      }
    ]
  },
  {
    id: 'best-temperature-for-frying-chicken',
    slug: 'best-temperature-for-frying-chicken',
    title: 'The Best Oil Temperature for Frying Chicken: Complete Heat Guide',
    summary: 'Master the thermal rules of frying chicken: starting oil temperatures, drop recovery, bone-in vs boneless cuts, and internal safety temperatures.',
    category: 'Cooking Technique',
    difficulty: 'Essential',
    readTime: '6 min read',
    image: '/images/guide-oil-temperature.jpg',
    publishedAt: '2026-02-08',
    updatedAt: '2026-02-27',
    keyTakeaways: [
      'Preheat oil to 350°F - 365°F (175°C - 185°C) before adding chicken.',
      'Expect a 25°F to 35°F drop upon dropping chicken; maintain 325°F during cooking.',
      'Boneless tenders cook best at 360°F for quick flash frying.',
      'Bone-in dark meat requires a lower steady 325°F to cook through without burning the crust.',
      'Internal safe doneness is 165°F (74°C) measured in the thickest part without touching bone.'
    ],
    directAnswer: 'The ideal oil temperature for frying bone-in chicken is 350°F (175°C) initial drop, leveling out to 325°F–330°F during frying. Boneless chicken tenders and wings fry best slightly hotter at 360°F to 375°F.',
    sections: [
      {
        title: 'Thermal Drop & Cast Iron Heat Retention',
        content: [
          'When you drop 3 to 4 pieces of cold marinated chicken into 2 quarts of hot oil, the cold mass acts as a thermal sink, instantly dropping oil temperature by 25°F to 40°F.',
          'To counteract this, heat your oil 15°F above your target cooking temperature (preheat to 350°F–360°F). Using heavy cast iron or enameled cast iron cookware helps retain thermal mass much better than thin stainless steel or aluminum pots.'
        ]
      },
      {
        title: 'Temperature Chart by Cut',
        content: [
          '• Bone-in thighs & drumsticks: 325°F - 330°F (Fry time: 14-16 mins)',
          '• Bone-in chicken breasts: 325°F (Fry time: 12-15 mins)',
          '• Chicken wings: 350°F - 365°F (Fry time: 10-12 mins)',
          '• Boneless tenders & cutlets: 360°F - 375°F (Fry time: 5-7 mins)'
        ]
      }
    ],
    faqs: [
      {
        question: 'What happens if the oil is too hot (above 375°F)?',
        answer: 'The flour dredge will burn and turn dark brown or bitter before the chicken meat has reached safe internal doneness, leaving raw pink meat near the bone.'
      }
    ]
  },
  {
    id: 'how-to-prepare-perfect-chicken-marinade',
    slug: 'how-to-marinate-chicken',
    title: 'How to Marinate Chicken for Maximum Juiciness and Flavor',
    summary: 'The culinary science of buttermilk, salt brines, pickle juice, and aromatics. Learn why marinating makes fried chicken impossibly succulent.',
    category: 'Preparation & Flavor',
    difficulty: 'Beginner',
    readTime: '5 min read',
    image: '/images/guide-marinade.jpg',
    publishedAt: '2026-02-04',
    updatedAt: '2026-02-22',
    keyTakeaways: [
      'Lactic acid in buttermilk breaks down collagen gently without turning meat mushy.',
      'Salt acts as an osmotic pump, drawing moisture and seasoning deep into muscle tissues.',
      'Optimal marinating time is between 4 and 12 hours for bone-in cuts.',
      'Adding pickle brine introduces vinegar acidity, dill, and garlic undertones.'
    ],
    directAnswer: 'To properly marinate chicken for frying, submerge pieces in cultured buttermilk seasoned with 1% kosher salt, garlic powder, black pepper, and 2 tablespoons of dill pickle brine for 4 to 12 hours refrigerated.',
    sections: [
      {
        title: 'Why Buttermilk Outperforms Citrus or Vinegar',
        content: [
          'Strong acids like raw distilled vinegar have low pH levels that can denature and "cook" meat proteins quickly, squeezing out moisture and creating a chalky, stringy exterior.',
          'Buttermilk contains mild lactic acid. Lactic acid works gently, tenderizing protein fibers and softening collagen connective tissue without breaking down the cellular structure. Furthermore, milk sugars (lactose) caramelize during frying, producing an appetizing golden hue.'
        ]
      },
      {
        title: 'Indian Kitchen Buttermilk Substitute (Curd / Dahi Brine)',
        content: [
          'In India, cultured Western buttermilk is often hard to find in local dairy booths. You can make an identical, high-performance buttermilk substitute in 30 seconds at home.',
          'Formula: Whisk 3/4 cup fresh unflavored curd (dahi) with 1/4 cup room-temperature water and 1 teaspoon lemon juice or white vinegar until silky and drinkable. This provides the exact lactic acid concentration, milk proteins, and cling factor required for KFC-style or Southern crispy fried chicken.'
        ],
        proTip: 'Avoid using sour dahi (khatta dahi) that has fermented for days, as overly sharp acidity can overpower delicate seasonings.'
      }
    ],
    faqs: [
      {
        question: 'What is the best buttermilk substitute for fried chicken in India?',
        answer: 'Whisk 3 parts fresh curd (dahi) with 1 part water and a splash of lemon juice. This replicates the acidity and viscosity of cultured buttermilk perfectly.'
      },
      {
        question: 'Can you marinate fried chicken for too long?',
        answer: 'Yes. Marinating bone-in chicken for more than 24 hours in acidic buttermilk or curd can cause the exterior meat to become unpleasantly soft or mealy. Stick to 4 to 12 hours for ideal texture.'
      }
    ]
  },
  {
    id: 'how-to-fry-chicken-without-deep-fryer',
    slug: 'how-to-fry-chicken-without-a-deep-fryer',
    title: 'How to Fry Chicken Without a Deep Fryer: Skillet & Dutch Oven Methods',
    summary: 'You do not need a commercial deep fryer to make crispy fried chicken. Learn the skillet shallow fry and heavy Dutch oven immersion techniques at home.',
    category: 'Kitchen Equipment',
    difficulty: 'Beginner',
    readTime: '6 min read',
    image: '/images/guide-no-fryer.jpg',
    publishedAt: '2026-01-29',
    updatedAt: '2026-02-18',
    keyTakeaways: [
      'A deep cast iron skillet or 6-quart enameled Dutch oven is ideal.',
      'Maintain at least 3 inches of pot clearance above oil level to prevent boil-over.',
      'Use a clip-on candy or probe thermometer for continuous temperature monitoring.',
      'Turn pieces gently with metal tongs instead of forks to avoid puncturing the protective crust.'
    ],
    directAnswer: 'You can easily fry chicken at home using a heavy cast iron skillet or Dutch oven filled with 1.5 to 2.5 inches of high-smoke-point oil (peanut or canola), monitoring temperature with a candy thermometer held between 325°F and 350°F.',
    sections: [
      {
        title: 'The Cast-Iron & Kadhai Advantage',
        content: [
          'Heavy pans like cast iron skillets, Dutch ovens, and Indian cast-iron or tri-ply kadhais have high thermal mass. Once hot, they provide steady, radiant conduction heat that cooks through thick chicken bones while keeping oil temperature stable.',
          'In an Indian kitchen, a round-bottom kadhai acts as a natural conical fryer. It concentrates the deepest oil pool in the center for submersing drumsticks and thighs, requiring 30% less oil than flat Western pots.'
        ]
      },
      {
        title: 'How to Fry Chicken in a Kadhai Without a Thermometer',
        content: [
          'If you don’t own a digital kitchen thermometer, use the wooden skewer or chopstick test. Dip a dry wooden skewer into the oil center. If steady, vigorous bubbling erupts immediately around the wood, oil is around 340°F–350°F (170°C–175°C) and ready for chicken.',
          'Always fry in small batches of 2 to 3 pieces. Keep stove on medium flame to prevent darkening before the bone cooks through.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How to make crispy fried chicken in a kadhai at home?',
        answer: 'Fill a heavy kadhai halfway with refined sunflower or groundnut oil. Heat on medium until a wooden skewer bubbles vigorously. Fry 2 to 3 pieces at a time for 12 to 14 minutes, turning periodically, and drain on a wire rack.'
      },
      {
        question: 'Is shallow frying as crispy as deep frying?',
        answer: 'Yes! When turned once or twice during cooking, shallow pan-frying creates an authentic homestyle blistered crust that many Southern cooks prefer over deep-fat immersion.'
      }
    ]
  },
  {
    id: 'how-to-make-fried-chicken-without-eggs',
    slug: 'how-to-make-fried-chicken-without-eggs',
    title: 'How to Make Fried Chicken Without Eggs: 4 Tested Binders That Work',
    summary: 'Egg allergies or out of eggs? Discover 4 proven binders including buttermilk, pickle brine slurry, cornstarch wash, and condensed milk that hold breading securely.',
    category: 'Dietary & Substitutions',
    difficulty: 'Beginner',
    readTime: '5 min read',
    image: '/images/guide-no-eggs.jpg',
    publishedAt: '2026-01-22',
    updatedAt: '2026-02-15',
    keyTakeaways: [
      'Buttermilk alone is the traditional Southern binder and requires zero eggs.',
      'A light cornstarch and water slurry creates a super-crispy gluten-free eggless binder.',
      'Plain yogurt thinned with milk acts as an ultra-rich cling agent.',
      'Pickle juice combined with a splash of milk creates great acidity and breading hold.'
    ],
    directAnswer: 'You do not need eggs to make crispy fried chicken. Cultured buttermilk is the standard Southern binder; when dipped in buttermilk and pressed into seasoned flour with cornstarch, the starches gelatinize in oil to form a sturdy, crunchy crust without eggs.',
    sections: [
      {
        title: 'Why Classic Southern Fried Chicken Rarely Uses Eggs',
        content: [
          'Many home cooks are surprised to learn that classic Southern recipes do not use whole eggs at all. Buttermilk is naturally thick and high in dairy proteins and lactic acid. When rolled into flour, buttermilk binds directly to the starches, producing a lighter, more brittle crunch than whole egg batters.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Will breading stay on without eggs?',
        answer: 'Yes, as long as you press the flour mixture firmly onto the chicken and let it rest 10 minutes on a wire rack before frying so starches can hydrate.'
      }
    ]
  },
  {
    id: 'how-to-keep-fried-chicken-crispy',
    slug: 'how-to-keep-fried-chicken-crispy',
    title: 'How to Keep Fried Chicken Crispy for Hours (And How to Reheat)',
    summary: 'Keep fried chicken crispy for parties, picnics, and meal prep with low-heat oven holding and the air fryer reheating technique.',
    category: 'Kitchen Guide',
    difficulty: 'Beginner',
    readTime: '5 min read',
    image: '/images/guide-keep-crispy.jpg',
    publishedAt: '2026-01-15',
    updatedAt: '2026-02-10',
    keyTakeaways: [
      'Hold in a 200°F (95°C) oven on an elevated wire rack for up to 1 hour.',
      'Never cover warm fried chicken with aluminum foil or plastic wrap.',
      'Reheat leftover chicken in an air fryer at 375°F for 4 to 5 minutes for renewed crispiness.',
      'Microwaving destroys crust structure by forcing interior water vapor outward.'
    ],
    directAnswer: 'To keep fried chicken crispy while cooking in batches, place cooked pieces on an elevated wire cooling rack inside a baking sheet in an oven preheated to 200°F (95°C). Never cover with foil or place on flat paper towels.',
    sections: [
      {
        title: 'The Foil Mistake',
        content: [
          'Many cooks tent warm chicken with aluminum foil to keep it hot. This turns the dish into a mini steam chamber: hot vapor condensates on the foil and rains down upon the delicate crunchy crust, rendering it limp within minutes.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can you reheat fried chicken in an air fryer?',
        answer: 'Air frying is the absolute best reheating method: 375°F for 4-5 minutes crisps the outer starch while heating the juicy interior without drying out the meat.'
      }
    ]
  }
];
