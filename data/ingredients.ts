import { IngredientKnowledge } from '@/types';

export const INGREDIENTS_DATA: IngredientKnowledge[] = [
  {
    id: 'chicken-cuts',
    slug: 'chicken-cuts-for-frying',
    name: 'Chicken Cuts: Thighs, Drumsticks, Wings & Breasts',
    roleInFrying: 'The core protein base defining cooking times, juiciness, and bone conductivity.',
    summary: 'Different chicken cuts behave drastically different in 350°F oil. Bone-in thighs offer maximum tolerance against overcooking, while white breast meat requires precision timing.',
    bestUses: ['Thighs & Drumsticks for classic Southern chicken', 'Wings for fast appetizers', 'Breasts & Tenders for hot chicken sandwiches'],
    flavorProfile: 'Thighs: Rich, succulent, high collagen; Breasts: Lean, clean, mild protein flavor.',
    image: '/images/ingredient-chicken-cuts.jpg',
    scienceExplanation: 'Dark meat contains higher myoglobin and connective tissue (collagen). In the fry pot, collagen slowly melts into gelatin around 160°F to 175°F, keeping dark meat juicy even if slightly overcooked. In contrast, white breast meat contains minimal collagen and seizes tightly above 165°F, quickly expelling moisture.',
    proTips: [
      'Score thick drumsticks down to the bone with 1 small slit so oil heat penetrates evenly without raw pink centers.',
      'Always brine chicken breasts in salt water or buttermilk before frying to lock in moisture.'
    ],
    substitutes: ['Boneless, skinless thighs cut into 2-inch chunks make superior tenders compared to breast strips.'],
    relatedRecipes: ['crispy-fried-chicken', 'crispy-chicken-burger']
  },
  {
    id: 'all-purpose-flour',
    slug: 'all-purpose-flour',
    name: 'All-Purpose Flour',
    roleInFrying: 'Primary structural foundation and Maillard browning agent of the breading crust.',
    summary: 'The backbone of Western fried chicken breading. It provides wheat proteins that bind to liquids and carbohydrates that brown into golden, savory goodness.',
    bestUses: ['Southern style double dredge', 'KFC copycat flour mixes', 'Pan-fried cutlets'],
    flavorProfile: 'Toasty, wheaty, deeply savory when browned in hot fat.',
    image: '/images/ingredient-flour.jpg',
    scienceExplanation: 'When flour is heated in oil above 300°F, sugars and amino acids undergo the Maillard reaction, generating hundreds of new aromatic flavor compounds that give fried chicken its classic roasted aroma. However, its gluten content (10-12%) must be balanced with starches to prevent chewiness.',
    proTips: [
      'Never pack flour tightly in cups; fluff with a fork before measuring or weigh by grams.',
      'Blend with 20-30% cornstarch for a much lighter, crispier bite.'
    ],
    substitutes: ['Cake flour (lower gluten for lighter crunch)', 'Gluten-free 1:1 baking flour blend'],
    relatedRecipes: ['crispy-fried-chicken', 'kfc-style-fried-chicken', 'nashville-hot-fried-chicken']
  },
  {
    id: 'cornstarch',
    slug: 'cornstarch',
    name: 'Cornstarch (Maize Starch)',
    roleInFrying: 'Gluten inhibitor and crystalline crunch amplifier.',
    summary: 'The secret weapon for shatteringly crisp fried chicken. Contains 100% pure starch and zero gluten protein.',
    bestUses: ['Southern dredge blends (25%)', 'Korean and Chinese fried chicken batters', 'Wing dustings'],
    flavorProfile: 'Completely neutral; allows seasonings and natural chicken taste to shine.',
    image: '/images/ingredient-cornstarch.jpg',
    scienceExplanation: 'When cornstarch encounters 350°F frying oil, it rapidly absorbs surface moisture and gelatinizes, then dehydrates into a rigid crystalline matrix. Unlike flour, it cannot develop gluten, resulting in a brittle crumb that snaps rather than bends.',
    proTips: [
      'For the crunchiest chicken wings, toss them in 2 tablespoons of cornstarch with baking powder before frying or baking.',
      'Never use cornstarch alone for Southern fried chicken or it will turn out chalky pale.'
    ],
    substitutes: ['Potato starch (even crisper)', 'Rice flour', 'Tapioca starch'],
    relatedRecipes: ['crispy-fried-chicken', 'korean-fried-chicken', 'crispy-chicken-wings']
  },
  {
    id: 'buttermilk',
    slug: 'buttermilk',
    name: 'Cultured Whole Buttermilk',
    roleInFrying: 'Gentle lactic acid tenderizer, natural brine carrier, and thick breading adhesive.',
    summary: 'The quintessential Southern marinade liquid. It softens poultry fibers without turning them mushy and acts as the perfect glue for flour dredges.',
    bestUses: ['Overnight chicken marinating', 'Double-dredge dipping baths', 'Shaggy cluster creation'],
    flavorProfile: 'Pleasantly tangy, creamy, subtle acidic kick.',
    image: '/images/ingredient-buttermilk.jpg',
    scienceExplanation: 'Cultured buttermilk has a pH of approximately 4.5. This mild lactic acid gently loosens muscle proteins and allows salt and water to penetrate deep into the meat fibers. Milk proteins and lactose sugar also caramelize in hot oil, aiding rich golden coloration.',
    proTips: [
      'Always use full-fat or whole buttermilk rather than skim versions for richer coating adhesion.',
      'Drizzle 3 tablespoons of buttermilk into your dry flour bowl to create instant craggy flakes.'
    ],
    substitutes: ['Whole milk mixed with 1 tablespoon lemon juice or vinegar per cup', 'Plain whole milk Greek yogurt thinned 50/50 with milk'],
    relatedRecipes: ['crispy-fried-chicken', 'buttermilk-fried-chicken', 'crispy-chicken-burger']
  },
  {
    id: 'cooking-oil',
    slug: 'cooking-oil-peanut-canola',
    name: 'Frying Oil (Peanut, Canola & Tallow)',
    roleInFrying: 'High-temperature heat transfer medium and texture creator.',
    summary: 'The cooking medium that makes frying possible. Oil transfers heat hundreds of times faster than air, rapidly flash-boiling surface moisture into crisp crust.',
    bestUses: ['Deep-pot submerged frying', 'Cast iron shallow pan frying'],
    flavorProfile: 'Peanut: Subtly nutty; Canola: Totally neutral; Tallow: Hearty, savory, classic fast-food nostalgia.',
    image: '/images/ingredient-oil.jpg',
    scienceExplanation: 'Frying is thermodynamic moisture removal. When water vaporizes and exits the batter as bubbles, oil seals the pore boundaries. Oils with smoke points above 400°F (such as peanut oil at 450°F) resist thermal cracking and acrolein smoke formation.',
    proTips: [
      'Strain oil through cheesecloth or a coffee filter after cooling to reuse 2-3 times safely.',
      'Discard oil when it turns dark brown, smells fishy, or foams excessively when heated.'
    ],
    substitutes: ['Refined peanut oil', 'Corn oil', 'High-oleic sunflower oil', 'Canola oil'],
    relatedRecipes: ['crispy-fried-chicken', 'nashville-hot-fried-chicken']
  },
  {
    id: 'smoked-paprika',
    slug: 'paprika-smoked-sweet',
    name: 'Paprika (Smoked & Sweet)',
    roleInFrying: 'Signature red-golden color driver and rich warm pepper aromatics.',
    summary: 'Ground from dried sweet capsicum peppers, paprika gives fried chicken its appetizing reddish-golden hue and earthy aroma without overwhelming heat.',
    bestUses: ['Seasoned flour dredges', 'Nashville hot chicken spice washes', 'Seasoning salts'],
    flavorProfile: 'Sweet, earthy, woody smoke, mild warmth.',
    image: '/images/ingredient-paprika.jpg',
    scienceExplanation: 'Paprika is oil-soluble. When the flour coating contacts 350°F oil, carotenoid pigments (capsanthin and capsorubin) dissolve into the fat, dyeing the crust a rich mahogany gold.',
    proTips: [
      'Combine sweet Hungarian paprika for bright red color with Spanish smoked pimentón for wood-smoked aroma.'
    ],
    substitutes: ['Ancho chili powder', 'Mild cayenne mixed with tomato powder'],
    relatedRecipes: ['crispy-fried-chicken', 'kfc-style-fried-chicken', 'nashville-hot-fried-chicken']
  },
  {
    id: 'garlic-powder',
    slug: 'garlic-powder',
    name: 'Granulated Garlic & Garlic Powder',
    roleInFrying: 'Concentrated savory allium aroma that dissolves uniformly into flour.',
    summary: 'Unlike fresh garlic, which burns into bitter black specks at 350°F, garlic powder blends seamlessly into dry flour and blooms in hot oil.',
    bestUses: ['All fried chicken flour dredges', 'Marinades and dry brines', 'Garlic parmesan wing glazes'],
    flavorProfile: 'Pungent, sweet, roasted savory allium depth.',
    image: '/images/ingredient-garlic.jpg',
    scienceExplanation: 'Dehydrated garlic concentrates sulfur-based allicin derivatives without containing the high moisture that causes fresh garlic to pop and spit violently in hot oil.',
    proTips: [
      'Prefer granulated garlic over super-fine powder to prevent caking in humid kitchen environments.'
    ],
    substitutes: ['Garlic salt (reduce regular salt in recipe)', 'Shallot powder'],
    relatedRecipes: ['crispy-fried-chicken', 'crispy-chicken-wings', 'kfc-style-fried-chicken']
  },
  {
    id: 'black-and-white-pepper',
    slug: 'black-and-white-pepper',
    name: 'Coarse Black Pepper & Ground White Pepper',
    roleInFrying: 'Piquant warmth, background sting, and authentic fast-food spice profile.',
    summary: 'The dynamic pepper duo. Black pepper gives visual rustic specks and citrusy bite, while white pepper provides clean, intense earthy heat without dark flecks.',
    bestUses: ['White pepper for KFC copycats and Asian batters', 'Coarse black pepper for Southern craggy chicken'],
    flavorProfile: 'Black: Piney, citrusy, sharp; White: Earthy, fermented, punchy direct heat.',
    image: '/images/ingredient-pepper.jpg',
    scienceExplanation: 'Piperine is the alkaloid responsible for pungency in both peppers. White pepper undergoes fermentation during processing which converts specific volatile terpenes, creating its distinctive pungent aroma loved in fast food recipes.',
    proTips: [
      'Use white pepper for chicken intended to have a clean golden aesthetic without burnt-looking black flecks.'
    ],
    substitutes: ['Green peppercorns', 'Szechuan pepper for tingling heat'],
    relatedRecipes: ['kfc-style-fried-chicken', 'crispy-fried-chicken']
  }
];
