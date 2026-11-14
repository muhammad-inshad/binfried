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
      'Celery salt provides that recognizable nostalgic savory undertone.',
      'A heavy cast-iron Dutch oven with the lid slightly ajar mimics the internal steam pressure used in commercial broasters.'
    ],
    commonMistakes: [
      'Skipping the white pepper or substituting with cayenne alters the profile entirely.',
      'Leaving herbs coarse; they must be ground to prevent scorched black specks in the oil.',
      'Over-frying chicken breasts—remove white meat when it reaches 160°F.'
    ],
    faqs: [
      {
        question: 'Is MSG necessary for KFC-style chicken?',
        answer: 'While optional, authentic commercial recipes use MSG to enhance the umami profile of the spice blend. You can omit it or substitute with mushroom powder.'
      },
      {
        question: 'Can I use boneless chicken tenders with this spice mix?',
        answer: 'Yes! Tenders fry in just 5 to 7 minutes at 350°F and make exceptional sliders.'
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

