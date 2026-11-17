import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Flame, 
  ChefHat, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Thermometer, 
  BookOpen, 
  Scale, 
  HelpCircle,
  TrendingUp,
  Layers
} from 'lucide-react';
import { RECIPES_DATA } from '@/data/recipes';
import { COOKING_GUIDES } from '@/data/guides';
import { BLOG_ARTICLES } from '@/data/blogs';
import { FAQ_DATA } from '@/data/faq';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import { GuideCard } from '@/components/common/GuideCard';
import { BlogCard } from '@/components/blog/BlogCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { getFAQSchema } from '@/lib/schema';

import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Crispy Fried Chicken Recipes, KFC Style at Home & Frying Guides',
  description: 'Master ultra-crispy fried chicken at home: KFC-style copycats, Kerala Kozhi Porichathu, Chicken 65, kadhai frying tips, and curd-buttermilk substitutions.',
  canonicalUrl: '/',
});

export default function HomePage() {
  const popularRecipes = RECIPES_DATA.filter(r => r.isPopular).slice(0, 6);
  const featuredGuides = COOKING_GUIDES.slice(0, 4);
  const recentArticles = BLOG_ARTICLES.slice(0, 3);
  const homeFaqs = FAQ_DATA.slice(0, 5);

  const categories = [
    {
      title: 'Classic Fried Chicken',
      description: 'Traditional Southern-style craggy ridges and buttermilk brine.',
      count: '4 Recipes',
      href: '/recipes?category=Classic+Fried+Chicken',
      icon: Flame,
      color: 'from-amber-500 to-red-600',
      image: '/images/crispy-fried-chicken.jpg'
    },
    {
      title: 'Spicy Chicken',
      description: 'Nashville hot chicken, cayenne glazes, and pepper rubs.',
      count: '3 Recipes',
      href: '/recipes?category=Spicy+Chicken',
      icon: Sparkles,
      color: 'from-red-600 to-rose-700',
      image: '/images/nashville-hot-fried-chicken.jpg'
    },
    {
      title: 'Korean Fried Chicken',
      description: 'Double-fried potato starch crust with sticky sweet-spicy glaze.',
      count: '2 Recipes',
      href: '/recipes?category=Korean+Fried+Chicken',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      image: '/images/korean-fried-chicken.jpg'
    },
    {
      title: 'Chicken Wings',
      description: 'Ultra-crispy game day wings: garlic parmesan, dry rub, & buffalo.',
      count: '3 Recipes',
      href: '/recipes?category=Chicken+Wings',
      icon: ChefHat,
      color: 'from-red-500 to-amber-600',
      image: '/images/crispy-chicken-wings.jpg'
    },
    {
      title: 'Chicken Burgers',
      description: 'Juicy fried thigh burgers with brioche buns, pickles, and slaws.',
      count: '2 Recipes',
      href: '/recipes?category=Chicken+Burgers',
      icon: Layers,
      color: 'from-amber-600 to-red-700',
      image: '/images/crispy-chicken-burger.jpg'
    },
    {
      title: 'Cooking Techniques',
      description: 'Master oil temps, double dredging, starch chemistry, and brining.',
      count: '6 Guides',
      href: '/cooking-guides',
      icon: BookOpen,
      color: 'from-stone-700 to-stone-900',
      image: '/images/guide-extra-crispy.jpg'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={getFAQSchema(homeFaqs)} />

      {/* 1. HERO SECTION (RED FAST-CASUAL BUCKET BANNER STYLE) */}
      <section className="relative overflow-hidden bg-[#88080E] text-white">
        {/* Background photo + dark gradient overlays for maximum contrast and vibe */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bucket-banner.jpg"
            alt="Crispy golden fried chicken in a striped bucket with drumsticks and sides"
            width={1376}
            height={768}
            priority
            fetchPriority="high"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="w-full h-full object-cover object-center md:object-right opacity-90"
          />
          {/* Vignette & Left Gradient Overlay for readable white text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6e050a] via-[#88080E]/90 to-transparent w-full md:w-3/4 z-10" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative z-20">
          <div className="max-w-xl space-y-6">
            
            {/* Pill Tag: HOT & CRISPY */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
              <span>HOT & CRISPY</span>
            </div>

            {/* Headline matching user reference */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-sans leading-[1.08] tracking-tight drop-shadow-md">
              Crave the <br />
              <span className="text-white">Crispy Perfection!</span>
            </h1>

            {/* Short Tagline / Description */}
            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed drop-shadow-xs max-w-lg">
              Make Every Bite Crispy & Delicious. Discover secret double-dredged recipes, exact oil temperatures, and home cooking techniques for perfectly crunchy chicken every time.
            </p>

            {/* Orange Pill Action Button with Arrow */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/recipes"
                className="group px-7 py-3.5 rounded-full bg-[#E63900] hover:bg-[#FF4500] text-white font-extrabold text-base transition-all shadow-xl shadow-black/40 hover:scale-105 flex items-center gap-3"
              >
                <span>Explore Recipes</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#E63900] flex items-center justify-center font-black group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </span>
              </Link>

              <Link
                href="/cooking-guides/how-to-make-chicken-extra-crispy"
                className="px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white font-bold text-sm transition-all hover:border-white"
              >
                Discover Cooking Tips
              </Link>
            </div>

          

          </div>
        </div>
      </section>

      {/* 2. POPULAR RECIPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D71920] uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 fill-[#D71920]" />
              <span>Tested By Poultry Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif">
              Popular Fried Chicken Recipes
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-xl">
              From craggy Southern drumsticks to glass-crunch Korean wings, explore our most popular step-by-step fried chicken recipes.
            </p>
          </div>
          <Link
            href="/recipes"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#D71920] hover:text-[#A80F17]"
          >
            <span>View All Recipes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} priority={index < 2} />
          ))}
        </div>
      </section>

      {/* 3. EXPLORE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
            Curated Collections
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif mt-1">
            Explore Chicken Categories
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Find the exact style of fried chicken you crave, paired with proven cooking tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative rounded-2xl overflow-hidden border border-[#F0E2DE] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-16/10 flex flex-col justify-end p-6 bg-gray-900"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={480}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="relative z-10 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block p-2 rounded-lg bg-white/20 backdrop-blur-md text-white">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold text-red-200 bg-red-950/60 px-2.5 py-1 rounded-full border border-red-500/30">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-red-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. COOKING TIPS / GUIDES SECTION */}
      <section className="bg-[#FFF5F2] border-y border-[#F0E2DE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
                Culinary Science & Secrets
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif mt-1">
                Essential Frying Guides & Tips
              </h2>
              <p className="text-gray-600 text-sm mt-2 max-w-xl">
                Master the physics of fried chicken: starch ratios, heat management, and foolproof brining secrets.
              </p>
            </div>
            <Link
              href="/cooking-guides"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#D71920] hover:text-[#A80F17]"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE BINFried? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
            Culinary Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif mt-1">
            Why Choose BINFried?
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            We are not a fast food restaurant or food delivery service. We are an educational culinary platform dedicated solely to perfecting the art and science of crispy fried chicken at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              title: 'Easy-to-Follow Recipes',
              desc: 'Structured ingredient weights, clear times, and foolproof step checklists.',
              icon: ChefHat,
            },
            {
              title: 'Step-by-Step Instructions',
              desc: 'Detailed chronological stages from brining to dredge hydration and frying.',
              icon: CheckCircle2,
            },
            {
              title: 'Helpful Cooking Tips',
              desc: 'Pro kitchen techniques: shaggy clusters, micro-blisters, and dual-fry science.',
              icon: Sparkles,
            },
            {
              title: 'Ingredient Chemistry',
              desc: 'Deep dives on how cornstarch, buttermilk acids, and oil smoke points interact.',
              icon: Scale,
            },
            {
              title: 'Practical Kitchen Guides',
              desc: 'How to achieve restaurant crunch using regular cast-iron skillets and Dutch ovens.',
              icon: ShieldCheck,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs hover:shadow-md hover:border-red-200 transition-all text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FEATURED BLOG ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
              From The Test Kitchen
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif mt-1">
              Featured Blog Articles
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-xl">
              Deep dives, food chemistry breakdowns, and insider secrets written by passionate fried chicken specialists.
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#D71920] hover:text-[#A80F17]"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 7. FAQ SECTION (AEO Priority) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
            Quick Answers
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif mt-1">
            Frequently Asked Frying Questions
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Clear, direct answers to help you troubleshoot and perfect your fried chicken.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs"
            >
              <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 flex items-start gap-2.5 font-serif">
                <HelpCircle className="w-5 h-5 text-[#D71920] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pl-7.5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#D71920] hover:underline"
          >
            <span>Have more questions? Browse our complete FAQ library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
