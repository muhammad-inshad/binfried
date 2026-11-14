import { Recipe } from '@/types';

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'crispy-fried-chicken',
    slug: 'crispy-fried-chicken',
    title: 'Ultra-Crispy Southern Style Fried Chicken',
    description: 'Master the iconic crispy Southern fried chicken with craggy golden ridges, juicy meat, and a double-dredged seasoned crust that stays crunchy for hours.',
    category: 'Classic Fried Chicken',
    prepTime: '25 mins',
    cookTime: '20 mins',
    totalTime: '45 mins',
    servings: '4 to 6 servings',
    difficulty: 'Medium',
    calories: '420 kcal / piece',
    image: '/images/crispy-fried-chicken.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-02-15',
    updatedAt: '2026-03-01',
    tags: ['Fried Chicken', 'Southern Recipe', 'Crispy', 'Comfort Food', 'Dinner'],
    isPopular: true,
    featured: true,
    ingredients: [
      { name: 'Bone-in, skin-on chicken pieces (thighs & drumsticks)', amount: '3 lbs' },
      { name: 'Whole buttermilk', amount: '2 cups', notes: 'room temperature' },
      { name: 'Pickle brine or apple cider vinegar', amount: '2 tbsp', notes: 'tenderizer' },
      { name: 'All-purpose flour', amount: '3 cups' },
      { name: 'Cornstarch', amount: '1/2 cup', notes: 'essential for glass-like crunch' },
      { name: 'Baking powder', amount: '1 tsp', notes: 'creates micro-blisters' },
      { name: 'Smoked paprika', amount: '1.5 tbsp' },
      { name: 'Garlic powder', amount: '1.5 tbsp' },
      { name: 'Onion powder', amount: '1 tbsp' },
      { name: 'Cayenne pepper', amount: '1 tsp', notes: 'adjust for mild heat' },
      { name: 'Kosher salt', amount: '2.5 tsp' },
      { name: 'Coarsely ground black pepper', amount: '1.5 tsp' },
      { name: 'Peanut oil or canola oil for deep frying', amount: '2 quarts' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Buttermilk Brining',
        description: 'Whisk together 2 cups of buttermilk, pickle brine, 1 tsp salt, and 1/2 tsp black pepper in a large bowl. Submerge chicken pieces completely. Cover and chill in the refrigerator for at least 4 hours, or ideally overnight (8 to 12 hours).',
        tip: 'Do not brine longer than 24 hours or the acid will turn the exterior chicken meat mushy.'
      },
      {
        step: 2,
        title: 'Season the Dredge Mix',
        description: 'In a wide shallow baking dish, whisk together all-purpose flour, cornstarch, baking powder, smoked paprika, garlic powder, onion powder, cayenne, remaining kosher salt, and black pepper until fully uniform.',
        tip: 'Cornstarch lowers gluten development, preventing the coating from turning leathery or chewy.'
      },
      {
        step: 3,
        title: 'Create the Crispy Flakes (Shaggy Bits)',
        description: 'Drizzle 3 to 4 tablespoons of the buttermilk marinade directly into the dry flour mixture. Work it with your fingers until tiny pebble-like clusters form throughout the flour.',
        tip: 'These flour clumps are the secret to that craggy, crunched-up restaurant texture.'
      },
      {
        step: 4,
        title: 'Double Dredging the Chicken',
        description: 'Take one piece of chicken from buttermilk, let excess liquid drip for 2 seconds, then press firmly into the flour mixture, packing flour onto every crevice. Dip quickly back into buttermilk for 1 second, then re-coat in flour with firm pressure. Place on a wire rack for 10 minutes before frying.',
        tip: 'Resting on the wire rack hydrates the starch and seals the crust to the chicken skin so it will not fall off in the oil.'
      },
      {
        step: 5,
        title: 'Oil Temperature & Frying',
        description: 'Heat 2 to 3 inches of peanut oil in a heavy Dutch oven or cast iron skillet to 350°F (175°C). Gently lower 3 pieces at a time into the oil (oil will drop to ~325°F). Fry drumsticks and thighs for 14 to 16 minutes, turning occasionally, until the deep golden crust registers an internal temperature of 165°F (74°C).',
        tip: 'Do not overcrowd the skillet or oil temperature will plummet, causing the coating to soak oil.'
      },
      {
        step: 6,
        title: 'Draining & Wire Rack Resting',
        description: 'Transfer hot fried chicken immediately onto an elevated wire cooling rack set over a baking sheet. Dust immediately with a pinch of flaky sea salt while hot. Let rest for 5 to 8 minutes before serving.',
        tip: 'Never drain fried chicken on paper towels—steam gets trapped underneath and makes the bottom soggy!'
      }
    ],
    cookingTips: [
      'Always bring cold marinated chicken out of the fridge 20 minutes before frying so the center cooks evenly without scorching the crust.',
      'Maintain frying oil between 325°F and 335°F while cooking. Use a reliable probe or candy thermometer.',
      'A pinch of baking powder in the dredge generates micro carbon-dioxide bubbles during frying, giving an airy, brittle crunch.'
    ],
    commonMistakes: [
      'Dropping chicken into cold oil (below 325°F), which causes greasy, limp crusts.',
      'Placing hot chicken directly on flat plates or paper towels where condensation ruins the crunch.',
      'Shaking off all the flour—leave the textured clusters attached to the skin.',
      'Frying too many pieces at once, dragging down oil temperature.'
    ],
    faqs: [
      {
        question: 'What is the best oil for Southern fried chicken?',
        answer: 'Peanut oil is the gold standard due to its high smoke point (450°F / 232°C) and clean, neutral nutty finish. Canola, sunflower, and peanut oil all perform exceptionally well.'
      },
      {
        question: 'Why does the breading fall off my fried chicken?',
        answer: 'Breading falls off when chicken is wet before frying or when it is not allowed to rest on a wire rack after dredging. Resting 10 minutes allows the buttermilk and flour to form a cohesive glue bond with the protein.'
      },
      {
        question: 'Can I fry chicken in an air fryer with this recipe?',
        answer: 'For air frying, spray the dredged chicken liberally with cooking oil spray until no dry flour spots remain, and air fry at 375°F (190°C) for 20-22 minutes, flipping halfway.'
      }
    ]
  },
  {
    id: 'kfc-style-fried-chicken',
    slug: 'kfc-style-fried-chicken',
    title: 'Secret 11-Herb & Spice KFC-Style Fried Chicken',
    description: 'Recreate the legendary secret blend at home with tender white pepper kick, aromatic herbs, savory garlic, and that nostalgic savory punch.',
    category: 'Classic Fried Chicken',
    prepTime: '30 mins',
    cookTime: '18 mins',
    totalTime: '48 mins',
    servings: '6 servings',
    difficulty: 'Medium',
    calories: '390 kcal / piece',
    image: '/images/kfc-style-fried-chicken.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-02-18',
    updatedAt: '2026-02-28',
    tags: ['KFC Copycat', 'Secret Spices', 'Classic', 'Finger Lickin', 'Herb Blend'],
    isPopular: true,
    featured: true,
    ingredients: [
      { name: 'Cut-up whole chicken or mixed drumsticks and thighs', amount: '3.5 lbs' },
      { name: 'Buttermilk mixed with 1 beaten egg', amount: '2 cups' },
      { name: 'All-purpose flour', amount: '2.5 cups' },
      { name: 'Cornstarch', amount: '1/3 cup' },
      { name: 'MSG (monosodium glutamate) or seasoned accent', amount: '1 tsp', notes: 'the authentic secret savory depth' },
      { name: 'Finely ground white pepper', amount: '1.5 tbsp', notes: 'the signature flavor driver' },
      { name: 'Black pepper', amount: '1 tsp' },
      { name: 'Paprika', amount: '1 tbsp' },
      { name: 'Garlic salt', amount: '2 tsp' },
      { name: 'Celery salt', amount: '1.5 tsp' },
      { name: 'Dried mustard powder', amount: '1 tbsp' },
      { name: 'Dried oregano', amount: '1/2 tsp', notes: 'finely crushed' },
      { name: 'Dried thyme', amount: '1/2 tsp', notes: 'finely crushed' },
      { name: 'Dried basil', amount: '1/2 tsp' },
      { name: 'Ground ginger', amount: '1 tsp' },
      { name: 'Canola oil or peanut oil', amount: 'For deep frying' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Grind & Blend Spices',
        description: 'Combine all 11 herbs and spices (white pepper, black pepper, paprika, garlic salt, celery salt, mustard powder, oregano, thyme, basil, ginger, MSG) in a spice grinder or mortar to make a silky fine powder.',
        tip: 'Fine powder adheres evenly across the entire surface of the flour particles.'
      },
      {
        step: 2,
        title: 'Buttermilk Egg Wash Soak',
        description: 'Soak chicken pieces in the buttermilk and egg mixture for 60 to 90 minutes in the refrigerator.',
        tip: 'The egg in the wash provides extra rich protein binding for that distinctive tender-crisp skin.'
      },
      {
        step: 3,
        title: 'Flour Seasoning & Dredge',
        description: 'Whisk all-purpose flour, cornstarch, and the pulverized 11-spice blend in a bowl. Dredge each chicken piece thoroughly, shake off light excess, and repeat for a light double coat.',
        tip: 'Keep the dredge slightly lighter than Southern style to mirror the classic pressure-fried coating.'
      },
      {
        step: 4,
        title: 'Frying to Golden Perfection',
        description: 'Heat oil to 350°F. Carefully lower chicken pieces and fry covered with a lid slightly cracked for the first 8 minutes to replicate pressure humidity, then uncover for the final 6 to 8 minutes until golden brown and 165°F inside.',
        tip: 'Covering with a lid cracked keeps steam inside the pot, tenderizing meat while crisping exterior.'
      },
      {
        step: 5,
        title: 'Cooling & Crisp Setting',
        description: 'Rest on a wire rack for 5 minutes before serving with buttery biscuits and gravy.',
        tip: 'Sprinkle a light dusting of white pepper right upon exit for intense aroma.'
      }
    ],
    cookingTips: [
      'White pepper is non-negotiable for authentic KFC flavor—it provides sharp earthy heat without the bitter specks of black pepper.',
      'Indian kitchen substitution: replace buttermilk with 1.5 cups fresh curd (dahi) whisked with 1/2 cup water and 1 tsp vinegar.',
      'Kadhai frying: fry in a heavy cast-iron or tri-ply kadhai in refined sunflower or groundnut oil at steady medium heat.',
      'A heavy lid slightly ajar mimics the internal steam pressure used in commercial broasters.'
    ],
    commonMistakes: [
      'Skipping the white pepper or substituting with cayenne alters the profile entirely.',
      'Leaving herbs coarse; they must be ground to prevent scorched black specks in the oil.',
      'Dropping too many pieces in a kadhai at once, which drops the oil temperature and produces oily chicken.'
    ],
    faqs: [
      {
        question: 'Can I make KFC-style chicken at home in an Indian kadhai?',
        answer: 'Yes! Use a heavy-bottomed kadhai filled halfway with refined sunflower or groundnut oil. Keep heat on medium, fry 2 to 3 pieces at a time for 12 to 14 minutes, and rest on a wire rack for craggy, crispy KFC texture.'
      },
      {
        question: 'What is the buttermilk substitute for this KFC recipe in India?',
        answer: 'Whisk 1.5 cups plain curd (dahi) with 1/2 cup water and 1 tablespoon lemon juice. It creates the exact acidity and thickness needed to tenderize the chicken and bind the 11-spice maida coating.'
      },
      {
        question: 'Can I use maida instead of all-purpose flour for KFC chicken?',
        answer: 'Yes, maida is refined wheat flour. Blending 2.5 cups maida with 1/3 cup cornflour creates the light, crispy crunch characteristic of KFC chicken.'
      }
    ]
  },
  {
    id: 'korean-fried-chicken-dakgangjeong',
    slug: 'korean-fried-chicken',
    title: 'Authentic Korean Fried Chicken (Yangnyeom)',
    description: 'Double-fried for the crunchiest bite in the world, coated in an irresistible sticky, sweet, spicy, and garlicky Gochujang glaze.',
    category: 'Korean Fried Chicken',
    prepTime: '20 mins',
    cookTime: '25 mins',
    totalTime: '45 mins',
    servings: '4 servings',
    difficulty: 'Medium',
    calories: '480 kcal / serving',
    image: '/images/korean-fried-chicken.jpg',
    author: {
      name: 'Chef Jin-Woo Park',
      role: 'Asian Culinary Specialist',
    },
    publishedAt: '2026-02-10',
    updatedAt: '2026-03-02',
    tags: ['Korean Food', 'Gochujang', 'Double Fried', 'Wings', 'Sweet and Spicy'],
    isPopular: true,
    featured: true,
    ingredients: [
      { name: 'Chicken wings or cut boneless thigh chunks', amount: '2 lbs' },
      { name: 'Minced fresh ginger', amount: '1 tbsp' },
      { name: 'Minced garlic', amount: '1 tbsp' },
      { name: 'Rice wine or mirin', amount: '2 tbsp' },
      { name: 'Potato starch or cornstarch', amount: '1 cup', notes: 'potato starch is best for glassy crunch' },
      { name: 'Baking powder', amount: '1/2 tsp' },
      { name: 'Gochujang (Korean chili paste)', amount: '3 tbsp' },
      { name: 'Honey or corn syrup', amount: '3 tbsp' },
      { name: 'Brown sugar', amount: '2 tbsp' },
      { name: 'Soy sauce', amount: '2 tbsp' },
      { name: 'Toasted sesame oil', amount: '1 tbsp' },
      { name: 'Toasted sesame seeds & scallions', amount: '2 tbsp', notes: 'for garnish' },
      { name: 'Vegetable oil for frying', amount: '2 quarts' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Ginger & Garlic Marinade',
        description: 'Toss chicken pieces with minced ginger, garlic, rice wine, 1/2 tsp salt, and 1/2 tsp black pepper. Let marinate for 20 minutes.',
        tip: 'Ginger cuts through chicken richness and tenderizes the meat fibers.'
      },
      {
        step: 2,
        title: 'Potato Starch Dredge',
        description: 'Coat each chicken piece generously in potato starch mixed with baking powder. Pat down firmly and let rest 5 minutes until starch turns matte.',
        tip: 'Potato starch creates an ultra-thin, crackly glass-like crust compared to wheat flour.'
      },
      {
        step: 3,
        title: 'First Fry (Render & Cook)',
        description: 'Heat oil to 325°F (160°C). Fry chicken for 8 to 10 minutes until pale blonde and cooked through. Remove to a wire rack and rest for 10 minutes.',
        tip: 'The resting time allows trapped steam to migrate from the meat to the crust, preparing it to crisp during the second fry.'
      },
      {
        step: 4,
        title: 'Simmer the Sticky Yangnyeom Glaze',
        description: 'In a large wok or skillet, combine Gochujang, honey, brown sugar, soy sauce, minced garlic, and sesame oil. Simmer over medium-low heat for 3 minutes until glossy and bubbly.',
        tip: 'Do not let the sauce boil too vigorously or the honey will scorch.'
      },
      {
        step: 5,
        title: 'Second Fry (Glass Shatter Crunch)',
        description: 'Raise oil temperature to 375°F (190°C). Fry the chicken pieces a second time for 2 to 3 minutes until deeply golden brown and audibly brittle.',
        tip: 'The high heat instant flash-fries away moisture, yielding an all-day crunch.'
      },
      {
        step: 6,
        title: 'Toss and Garnish',
        description: 'Toss hot chicken into the warm sauce wok for 15 seconds until evenly coated. Plate immediately and shower with toasted sesame seeds and chopped scallions.',
        tip: 'Serve immediately with pickled Korean white radish (chikin-mu).'
      }
    ],
    cookingTips: [
      'Double-frying is the undisputed law of Korean fried chicken: first fry cooks the meat, second fry dehydrates the crust.',
      'Use 100% potato starch or a 70/30 blend of potato starch and rice flour for maximum shatter.',
      'Toss sauce quickly—never simmer the chicken inside the sauce or the crust will soften.'
    ],
    commonMistakes: [
      'Using only wheat flour; wheat absorbs sauce quickly and turns soggy.',
      'Skipping the 10-minute rest between first and second fry.',
      'Second fry oil too cool (under 370°F).'
    ],
    faqs: [
      {
        question: 'Can Korean fried chicken stay crispy after being sauced?',
        answer: 'Yes! Because the potato starch crust is dehydrated during the 375°F second fry, it stays crunchy for over 30 minutes even after being glazed.'
      },
      {
        question: 'Can I make this non-spicy for kids?',
        answer: 'Yes! Replace Gochujang with a honey-soy-garlic glaze made from soy sauce, garlic, honey, butter, and brown sugar.'
      }
    ]
  },
  {
    id: 'nashville-hot-spicy-fried-chicken',
    slug: 'nashville-hot-fried-chicken',
    title: 'Fiery Nashville Hot Fried Chicken',
    description: 'Crispy fried chicken dipped in an authentic cayenne-infused spiced brown sugar hot lard oil, served atop white bread with crinkle-cut dill pickles.',
    category: 'Spicy Chicken',
    prepTime: '20 mins',
    cookTime: '20 mins',
    totalTime: '40 mins',
    servings: '4 servings',
    difficulty: 'Advanced',
    calories: '495 kcal / serving',
    image: '/images/nashville-hot-fried-chicken.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-02-05',
    updatedAt: '2026-02-24',
    tags: ['Nashville Hot', 'Spicy', 'Cayenne', 'Southern', 'Pickles'],
    isPopular: true,
    featured: false,
    ingredients: [
      { name: 'Bone-in chicken thighs and breasts', amount: '3 lbs' },
      { name: 'Buttermilk & 2 tbsp hot sauce', amount: '2 cups' },
      { name: 'All-purpose flour', amount: '2.5 cups' },
      { name: 'Cornstarch', amount: '1/4 cup' },
      { name: 'Cayenne pepper', amount: '3 to 5 tbsp', notes: 'the fiery heart of Nashville' },
      { name: 'Dark brown sugar', amount: '2 tbsp', notes: 'balances the sharp burn' },
      { name: 'Smoked paprika', amount: '1.5 tbsp' },
      { name: 'Garlic powder', amount: '1.5 tbsp' },
      { name: 'Chili powder', amount: '1 tsp' },
      { name: 'Hot frying oil or melted lard', amount: '1 cup', notes: 'ladled directly from the fry pot' },
      { name: 'Thick-cut white bread & sour pickles', amount: 'For serving' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Buttermilk Hot Sauce Marinade',
        description: 'Whisk buttermilk with Louisiana hot sauce, salt, and cayenne. Marinate chicken for at least 4 hours.',
        tip: 'The hot sauce in the buttermilk introduces initial acidity and subtle internal spice.'
      },
      {
        step: 2,
        title: 'Dredge & Rest',
        description: 'Toss chicken in flour, cornstarch, salt, and black pepper. Dip back into buttermilk and re-flour. Rest 10 minutes on a wire rack.',
        tip: 'A thick, craggy crust is essential to capture the hot spice oil paste.'
      },
      {
        step: 3,
        title: 'Golden Frying',
        description: 'Deep fry in 350°F oil for 15 to 18 minutes until cooked through and crunchy.',
        tip: 'Reserve 1 cup of hot oil directly from the pot for making the hot oil glaze.'
      },
      {
        step: 4,
        title: 'Mix Nashville Spice Paste',
        description: 'In a heatproof bowl, whisk cayenne, brown sugar, smoked paprika, garlic powder, and chili powder. Carefully ladle 1 cup of the boiling frying oil directly into the spices and whisk until emulsified.',
        tip: 'The sizzling oil blooms the spices instantly, releasing aromatic chili oils.'
      },
      {
        step: 5,
        title: 'Brush and Assemble',
        description: 'Immediately brush hot fried chicken generously on all sides with the spiced oil paste. Place atop sliced white bread and crown with pickles.',
        tip: 'The white bread absorbs excess spiced dripping—considered a delicacy in Tennessee.'
      }
    ],
    cookingTips: [
      'The heat is entirely in the cayenne oil wash; adjust from 1 tbsp (mild) up to 6 tbsp (shut-the-cluck-up hot).',
      'Brown sugar caramelizes slightly in the hot oil, imparting complex barbecue sweetness.',
      'Never substitute the hot oil bloom with cold oil—it will taste raw and gritty.'
    ],
    commonMistakes: [
      'Using cold oil to make the spice glaze.',
      'Omitting brown sugar; the sugar is critical to soften cayenne bitterness.',
      'Allowing chicken to cool before brushing.'
    ],
    faqs: [
      {
        question: 'How do you tone down Nashville Hot Chicken heat?',
        answer: 'Cut back the cayenne to 1 tablespoon and increase smoked paprika and brown sugar for a milder smokey-sweet glaze.'
      }
    ]
  },
  {
    id: 'buttermilk-fried-chicken-tenders',
    slug: 'buttermilk-fried-chicken',
    title: 'Crispy Golden Buttermilk Chicken Tenders',
    description: 'Juicy, tender chicken strips soaked in herbaceous seasoned buttermilk and fried to golden, flaky perfection in just 6 minutes.',
    category: 'Chicken Wings',
    prepTime: '15 mins',
    cookTime: '10 mins',
    totalTime: '25 mins',
    servings: '4 servings',
    difficulty: 'Easy',
    calories: '340 kcal / serving',
    image: '/images/buttermilk-fried-chicken.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-02-01',
    updatedAt: '2026-02-20',
    tags: ['Chicken Tenders', 'Kid Friendly', 'Quick & Easy', 'Game Day', 'Buttermilk'],
    isPopular: true,
    featured: false,
    ingredients: [
      { name: 'Fresh chicken tenderloins (tendon removed)', amount: '1.5 lbs' },
      { name: 'Cultured buttermilk', amount: '1.5 cups' },
      { name: 'All-purpose flour', amount: '2 cups' },
      { name: 'Cornstarch', amount: '1/4 cup' },
      { name: 'Garlic powder', amount: '1 tbsp' },
      { name: 'Onion powder', amount: '1 tbsp' },
      { name: 'Smoked paprika', amount: '1 tsp' },
      { name: 'Dried oregano', amount: '1/2 tsp' },
      { name: 'Salt & freshly cracked pepper', amount: 'To taste' },
      { name: 'Neutral high-heat oil for frying', amount: '4 cups' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Tenderize & Marinade',
        description: 'Remove tough white tendons from tenderloins with a paper towel. Submerge tenders in buttermilk with garlic powder and salt for 30 minutes.',
        tip: 'Removing the tendon ensures a soft, melt-in-your-mouth bite without stringy chew.'
      },
      {
        step: 2,
        title: 'Shaggy Flour Coating',
        description: 'Combine flour, cornstarch, paprika, onion powder, and spices. Drop buttermilk droplets into flour to form clusters, then thoroughly dredge each tender.',
        tip: 'Work in batches to avoid crowding.'
      },
      {
        step: 3,
        title: 'Flash Fry',
        description: 'Fry tenders at 350°F (175°C) for 5 to 6 minutes until crunchy and golden brown (165°F internal). Rest on wire rack and serve with honey mustard.',
        tip: 'Because tenders have no bones, they cook twice as fast as thighs or bone-in pieces.'
      }
    ],
    cookingTips: [
      'Do not overcook tenders; white meat dries out quickly once it passes 165°F.',
      'Pair with homemade honey mustard: combine equal parts Dijon mustard, mayonnaise, and pure honey.'
    ],
    commonMistakes: [
      'Frying tenders longer than 7 minutes.',
      'Skipping the tendon removal step.'
    ],
    faqs: [
      {
        question: 'Can I bake these buttermilk tenders instead?',
        answer: 'Yes! Bake at 425°F (220°C) on an elevated oiled wire rack for 14-16 minutes, turning once.'
      }
    ]
  },
  {
    id: 'crispy-garlic-parmesan-chicken-wings',
    slug: 'crispy-chicken-wings',
    title: 'Crispy Garlic Parmesan Butter Chicken Wings',
    description: 'Game-day restaurant style wings with an impossibly crunchy bite, tossed in rich roasted garlic butter, fresh parsley, and freshly grated aged Parmigiano.',
    category: 'Chicken Wings',
    prepTime: '15 mins',
    cookTime: '18 mins',
    totalTime: '33 mins',
    servings: '4 servings',
    difficulty: 'Easy',
    calories: '440 kcal / serving',
    image: '/images/crispy-chicken-wings.jpg',
    author: {
      name: 'Chef Jin-Woo Park',
      role: 'Asian Culinary Specialist',
    },
    publishedAt: '2026-01-28',
    updatedAt: '2026-02-14',
    tags: ['Wings', 'Garlic Parmesan', 'Party Food', 'Appetizer', 'Finger Food'],
    isPopular: true,
    featured: false,
    ingredients: [
      { name: 'Chicken wings (flats & drumettes split)', amount: '2.5 lbs' },
      { name: 'Cornstarch or potato starch', amount: '1/2 cup' },
      { name: 'Baking powder', amount: '1 tsp' },
      { name: 'Unsalted European butter', amount: '6 tbsp' },
      { name: 'Fresh garlic cloves, microplaned', amount: '6 cloves' },
      { name: 'Freshly grated Parmigiano-Reggiano', amount: '1/2 cup' },
      { name: 'Finely chopped Italian flat-leaf parsley', amount: '3 tbsp' },
      { name: 'Red pepper chili flakes', amount: '1/2 tsp' },
      { name: 'Kosher salt & black pepper', amount: '1 tsp each' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Dry & Starch Dust',
        description: 'Pat wings bone-dry with paper towels. Toss with baking powder, salt, black pepper, and cornstarch until very lightly dusted.',
        tip: 'Baking powder raises skin pH, helping proteins break down and crisp up exceptionally well.'
      },
      {
        step: 2,
        title: 'Deep Fry to Crunch',
        description: 'Fry wings at 360°F (180°C) for 12 to 14 minutes until golden blistered and deeply crisp. Transfer to a rack.',
        tip: 'Make sure oil is at least 360°F so wings do not absorb fat.'
      },
      {
        step: 3,
        title: 'Prepare Garlic Parmesan Glaze',
        description: 'Melt butter in a small pan over low heat. Add microplaned garlic and red pepper flakes; simmer gently for 2 minutes until fragrant without browning.',
        tip: 'Low heat prevents the garlic from turning bitter.'
      },
      {
        step: 4,
        title: 'Toss Hot Wings',
        description: 'Toss wings immediately in a large stainless steel bowl with the warm garlic butter, parmesan, and parsley. Serve steaming hot.',
        tip: 'Toss immediately while the wings are blazing hot so the cheese adheres to the crispy coating.'
      }
    ],
    cookingTips: [
      'Use freshly grated Parmigiano-Reggiano rather than shaker can cheese for silky coating melt.',
      'Drying wings thoroughly with paper towels before dusting is the #1 trick for shatter-crisp skin.'
    ],
    commonMistakes: [
      'Burning the garlic in high heat butter.',
      'Using wet wings straight out of the package.'
    ],
    faqs: [
      {
        question: 'Can I bake these wings instead of deep frying?',
        answer: 'Yes! Place dusted wings on an oven-safe wire rack at 425°F for 40-45 minutes, flipping halfway until deeply golden.'
      }
    ]
  },
  {
    id: 'ultimate-crispy-chicken-burger',
    slug: 'crispy-chicken-burger',
    title: 'The Ultimate Crispy Fried Chicken Burger',
    description: 'Juicy, marinated boneless chicken thigh fried to craggy perfection, stacked on toasted brioche with tangy slaw, spicy mayo, and pickles.',
    category: 'Chicken Burgers',
    prepTime: '20 mins',
    cookTime: '15 mins',
    totalTime: '35 mins',
    servings: '4 burgers',
    difficulty: 'Medium',
    calories: '620 kcal / burger',
    image: '/images/crispy-chicken-burger.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-01-20',
    updatedAt: '2026-02-18',
    tags: ['Chicken Burger', 'Brioche', 'Coleslaw', 'Sandwich', 'Street Food'],
    isPopular: true,
    featured: false,
    ingredients: [
      { name: 'Boneless, skinless chicken thighs', amount: '4 large pieces' },
      { name: 'Buttermilk with dill pickle juice', amount: '1.5 cups' },
      { name: 'All-purpose flour & cornstarch blend (80/20)', amount: '2 cups' },
      { name: 'Smoked paprika, garlic, onion, and cayenne powder', amount: '1 tbsp each' },
      { name: 'Brioche hamburger buns', amount: '4 buns, buttered' },
      { name: 'Crisp green cabbage coleslaw with apple cider dressing', amount: '2 cups' },
      { name: 'Chipotle or Sriracha mayonnaise', amount: '1/2 cup' },
      { name: 'Crinkle-cut dill pickles', amount: '12 slices' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Pound & Marinate Thighs',
        description: 'Gently pound the thicker end of chicken thighs so they fry evenly. Soak in buttermilk and pickle brine for 2 hours.',
        tip: 'Uniform thigh thickness guarantees the center cooks without overcooking the edges.'
      },
      {
        step: 2,
        title: 'Shaggy Dredge',
        description: 'Press wet thighs firmly into seasoned flour, dipping back into buttermilk, then re-dredging for maximum ruffled ridges.',
        tip: 'Ruffled ridges hold onto sauces and slaw without sliding off.'
      },
      {
        step: 3,
        title: 'Frying Thighs',
        description: 'Fry at 350°F (175°C) for 7 to 8 minutes until deep golden (170°F internal for tender thigh meat). Rest on wire rack.',
        tip: 'Thigh meat handles higher internal temps (170-175°F) better than breast meat, becoming exceptionally juicy.'
      },
      {
        step: 4,
        title: 'Toast Buns & Assemble',
        description: 'Toast buttered brioche buns until golden. Spread spicy mayo on top and bottom buns. Layer pickles, crispy chicken thigh, and a heaping mound of slaw.',
        tip: 'Place pickles on bottom bun under chicken to act as a moisture barrier.'
      }
    ],
    cookingTips: [
      'Chicken thighs are far juicier and forgiving for burgers than chicken breasts.',
      'Slaw provides crunchy contrast that balances the rich deep-fried crust.'
    ],
    commonMistakes: [
      'Using untrimmed, uneven thighs that cook unevenly.',
      'Soggy untenderized cabbage slaw that saturates the bun.'
    ],
    faqs: [
      {
        question: 'Can I substitute with chicken breast cutlets?',
        answer: 'Yes, slice chicken breasts horizontally into cutlets and fry for only 4-5 minutes to prevent drying out.'
      }
    ]
  },
  {
    id: 'kerala-style-fried-chicken',
    slug: 'kerala-style-fried-chicken',
    title: 'Kerala Style Fried Chicken (Crispy Kozhi Porichathu)',
    description: 'Master authentic Kerala style Kozhi Porichathu—marinated in crushed ginger-garlic, Kashmiri chili, fennel, and curry leaves, then deep fried in coconut oil with garlic cloves for an irresistible crunch.',
    category: 'Spicy Chicken',
    prepTime: '20 mins',
    cookTime: '15 mins',
    totalTime: '35 mins',
    servings: '4 servings',
    difficulty: 'Easy',
    calories: '380 kcal / serving',
    image: '/images/crispy-fried-chicken.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-05',
    tags: ['Kerala Fried Chicken', 'Kozhi Porichathu', 'Indian Style', 'Curry Leaves', 'Crispy Chicken'],
    isPopular: true,
    featured: true,
    ingredients: [
      { name: 'Bone-in chicken cuts (curry cut or drumsticks with deep slits)', amount: '1 kg (2.2 lbs)' },
      { name: 'Kashmiri red chilli powder', amount: '2 tbsp', notes: 'for vibrant red color and mild heat' },
      { name: 'Turmeric powder', amount: '1/2 tsp' },
      { name: 'Freshly crushed black pepper', amount: '1 tbsp' },
      { name: 'Fennel seed powder (perumjeerakam)', amount: '1 tsp', notes: 'signature Kerala aroma' },
      { name: 'Garam masala powder', amount: '1 tsp' },
      { name: 'Fresh ginger-garlic paste', amount: '2 tbsp' },
      { name: 'Lemon juice or thick curd (dahi)', amount: '2 tbsp', notes: 'tenderizer' },
      { name: 'Rice flour (arisi maavu)', amount: '2 tbsp', notes: 'for signature hard crunch' },
      { name: 'Cornflour', amount: '2 tbsp', notes: 'crisp binder' },
      { name: 'Egg white', amount: '1', notes: 'binds spice paste to skin' },
      { name: 'Curry leaves (kariveppila)', amount: '3 to 4 sprigs' },
      { name: 'Whole unpeeled garlic cloves', amount: '10 to 12 cloves', notes: 'crushed lightly' },
      { name: 'Slit green chillies', amount: '4 to 5' },
      { name: 'Coconut oil (or refined sunflower oil) for frying', amount: '2 to 3 cups' },
      { name: 'Salt', amount: 'To taste (approx 1.5 tsp)' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Score Chicken & Marinate',
        description: 'Make 2 to 3 deep diagonal slits across each chicken piece. Mix Kashmiri chilli powder, turmeric, black pepper, fennel powder, garam masala, ginger-garlic paste, lemon juice, and salt with 1 tablespoon water into a thick spice paste. Rub thoroughly into slits and crevices. Rest for at least 1 hour (ideally 4 hours in refrigerator).',
        tip: 'Deep slits allow the spices and lemon to penetrate to the bone, keeping the interior juicy and flavorful.'
      },
      {
        step: 2,
        title: 'Add Crispy Starch Coating',
        description: 'Just 10 minutes before frying, add rice flour, cornflour, and 1 egg white to the marinated chicken. Toss gently until every piece is coated in a sticky, spice-laden batter that clings firmly.',
        tip: 'Rice flour is the secret to Kerala Kozhi Porichathu—it resists moisture and creates an audible, long-lasting crunch.'
      },
      {
        step: 3,
        title: 'Heat Kadhai with Coconut Oil',
        description: 'Heat coconut oil (or sunflower oil) in a heavy cast-iron or tri-ply kadhai on medium-high heat until hot (around 340°F / 170°C). Slide chicken pieces gently into the oil, ensuring they are not crowded.',
        tip: 'Authentic Kerala street stalls fry exclusively in pure coconut oil for that intoxicating traditional aroma.'
      },
      {
        step: 4,
        title: 'Fry with Curry Leaves & Garlic',
        description: 'Fry chicken on medium heat for 6 to 8 minutes on one side, then flip. 3 minutes before removing the chicken, drop the crushed whole garlic cloves, slit green chillies, and fresh curry leaves directly into the hot oil around the chicken.',
        tip: 'The sizzling curry leaves and garlic infuse their volatile oils directly into the chicken crust while turning into crispy garnish.'
      },
      {
        step: 5,
        title: 'Drain on Wire Rack (Jali)',
        description: 'Once chicken turns deep mahogany red and reaches 165°F (74°C) internally, remove with a slotted spoon onto an elevated wire rack or stainless steel strainer. Garnish with the fried crispy curry leaves and garlic. Serve piping hot with onion rings and lemon wedges.',
        tip: 'Never drain on flat paper towels—steam from the piping hot meat gets trapped underneath and makes the crust soggy.'
      }
    ],
    cookingTips: [
      'Use bone-in curry cut pieces: the bones retain internal moisture, while the spice paste fries into a shatteringly crisp crust.',
      'Always add the rice flour and cornflour right before frying to prevent the starches from absorbing too much marinade moisture.',
      'Fennel powder (perumjeerakam) is the essential spice that separates authentic Kerala chicken from regular chili chicken.'
    ],
    commonMistakes: [
      'Frying in overly hot oil: Kashmiri chilli will scorch black and taste bitter before the meat cooks through.',
      'Overcrowding the kadhai: dropping too many pieces causes oil temperature to plummet, making the chicken oily and limp.',
      'Covering the bowl after frying: steam condenses on the lid and destroys the crispy rice flour shell.'
    ],
    faqs: [
      {
        question: 'What makes Kerala style fried chicken (Kozhi Porichathu) so crispy?',
        answer: 'The combination of fine rice flour, cornflour, and an egg white binder creates a thin, glass-like crust that seals in chicken juices while frying into an ultra-crispy shell in hot coconut oil.'
      },
      {
        question: 'Can I make Kozhi Porichathu without coconut oil?',
        answer: 'Yes! Refined sunflower oil or groundnut oil works perfectly. For a hint of authentic Kerala flavor, add 2 tablespoons of coconut oil to your sunflower oil before frying.'
      },
      {
        question: 'How do I prevent the chicken from turning black while frying?',
        answer: 'Use mild Kashmiri red chilli powder instead of hot chili powder with high sugar content, and maintain steady medium heat (approx 340°F / 170°C) without letting the oil smoke.'
      }
    ]
  },
  {
    id: 'chicken-65-crispy-fried',
    slug: 'chicken-65-crispy-fried',
    title: 'Restaurant Style Crispy Chicken 65',
    description: 'The ultimate South Indian restaurant-style crispy Chicken 65 recipe: crunchy boneless chicken bites double-fried with cornflour and rice flour, then tossed with curry leaves, garlic, and green chillies.',
    category: 'Spicy Chicken',
    prepTime: '15 mins',
    cookTime: '12 mins',
    totalTime: '27 mins',
    servings: '4 servings',
    difficulty: 'Easy',
    calories: '340 kcal / serving',
    image: '/images/crispy-chicken-wings.jpg',
    author: {
      name: 'Chef Marcus Vance',
      role: 'Culinary Director & Poultry Specialist',
    },
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-05',
    tags: ['Chicken 65', 'Crispy Chicken 65', 'South Indian', 'Appetizer', 'Street Food'],
    isPopular: true,
    featured: true,
    ingredients: [
      { name: 'Boneless chicken thighs (cut into 1-inch bite-sized cubes)', amount: '500g (1.1 lbs)' },
      { name: 'Fresh ginger-garlic paste', amount: '1.5 tbsp' },
      { name: 'Kashmiri red chilli powder', amount: '1.5 tbsp' },
      { name: 'Black pepper powder', amount: '1 tsp' },
      { name: 'Turmeric powder', amount: '1/4 tsp' },
      { name: 'Garam masala powder', amount: '1/2 tsp' },
      { name: 'Thick curd (dahi)', amount: '2 tbsp', notes: 'whisked smooth' },
      { name: 'Lemon juice', amount: '1 tbsp' },
      { name: 'Cornflour', amount: '3 tbsp', notes: 'for light airy crunch' },
      { name: 'Rice flour', amount: '1.5 tbsp', notes: 'for enduring crunch' },
      { name: 'Egg white', amount: '1' },
      { name: 'Fresh curry leaves', amount: '20 to 25 leaves' },
      { name: 'Green chillies (slit lengthwise)', amount: '4 to 5' },
      { name: 'Garlic cloves (finely chopped)', amount: '1 tbsp' },
      { name: 'Oil for deep frying', amount: '2 cups' },
      { name: 'Salt', amount: '1 tsp or to taste' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Marinate Chicken Bites',
        description: 'In a mixing bowl, toss chicken thigh cubes with ginger-garlic paste, Kashmiri red chilli powder, black pepper, turmeric, garam masala, thick curd, lemon juice, and salt. Marinate for 30 to 45 minutes.',
        tip: 'Boneless chicken thighs stay tender and juicy inside, whereas chicken breast can easily turn dry and stringy.'
      },
      {
        step: 2,
        title: 'Coat with Cornflour & Rice Flour Batter',
        description: 'Add cornflour, rice flour, and egg white to the marinated chicken. Mix thoroughly with your hands until each bite is evenly coated in a semi-thick batter that clings without dripping.',
        tip: 'Do not add water. The moisture from the curd and egg white creates the exact batter consistency needed for crispness.'
      },
      {
        step: 3,
        title: 'First Fry (Cook Through)',
        description: 'Heat oil in a kadhai on medium heat (330°F / 165°C). Drop chicken pieces one by one to prevent sticking together. Fry for 4 to 5 minutes until chicken is cooked through and lightly golden. Remove with a slotted spoon onto a wire rack and rest for 5 minutes.',
        tip: 'Double frying is the secret used by top Indian restaurants to achieve an unbreakable crispy exterior.'
      },
      {
        step: 4,
        title: 'Second Flash Fry (Maximum Crunch)',
        description: 'Increase kadhai heat to high (375°F / 190°C). Return all fried chicken pieces to the hot oil for 60 to 90 seconds. Fry until the crust turns intensely crisp and deep red. Remove immediately to drain.',
        tip: 'The second flash fry vaporizes residual surface moisture, creating a glass-like crunch.'
      },
      {
        step: 5,
        title: 'Aromatic Tempering',
        description: 'In a separate wide pan, heat 1 tablespoon of oil. Add chopped garlic, slit green chillies, and curry leaves. Sauté for 30 seconds until aromatic and crackling. Toss in the crispy fried chicken pieces and shake the pan vigorously for 20 seconds. Serve immediately.',
        tip: 'Never add wet sauce or water during tempering—keep it dry to preserve the shatteringly crisp coating.'
      }
    ],
    cookingTips: [
      'The 2:1 ratio of cornflour to rice flour provides both an airy puff and a durable crunch.',
      'Double frying is non-negotiable for restaurant-style Chicken 65 that stays crunchy when served.',
      'Boneless skinless chicken thighs make vastly superior Chicken 65 compared to dry chicken breasts.'
    ],
    commonMistakes: [
      'Adding watery curd which dilutes the batter and causes the coating to slide off in hot oil.',
      'Tossing with excessive wet gravy: Chicken 65 is traditionally a dry crispy appetizer, not a curry.',
      'Frying in cold oil which makes the cornflour coating absorb oil and turn mushy.'
    ],
    faqs: [
      {
        question: 'Why does my Chicken 65 become soft or soggy after frying?',
        answer: 'Chicken 65 becomes soggy if only plain flour or maida was used, if the pieces were fried only once at low heat, or if drained on flat paper towels. Use a cornflour-rice flour blend, double fry, and drain on a wire rack.'
      },
      {
        question: 'Can I make crispy Chicken 65 in a kadhai?',
        answer: 'Yes! A kadhai provides ideal heat concentration. Fry in small batches of 8 to 10 bites so the oil temperature remains stable.'
      },
      {
        question: 'Is food color necessary for Chicken 65?',
        answer: 'No. Authentic high-quality Kashmiri red chilli powder provides a gorgeous natural ruby-red hue without any artificial food coloring.'
      }
    ]
  }
];

export const RECIPE_CATEGORIES = [
  'All',
  'Classic Fried Chicken',
  'Spicy Chicken',
  'Korean Fried Chicken',
  'Chicken Wings',
  'Chicken Burgers',
  'Cooking Techniques'
] as const;

