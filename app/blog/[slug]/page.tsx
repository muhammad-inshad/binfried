import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/data/blogs';
import { RECIPES_DATA } from '@/data/recipes';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema } from '@/lib/schema';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import { 
  Calendar, 
  Clock, 
  User, 
  Sparkles, 
  ArrowRight, 
  ListTree, 
  BookOpen 
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return constructMetadata({ title: 'Article Not Found' });
  }

  return constructMetadata({
    title: article.title,
    description: article.summary,
    image: article.image,
    canonicalUrl: `/blog/${article.slug}`,
    type: 'article',
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedRecipes = RECIPES_DATA.filter((r) =>
    article.relatedRecipeSlugs?.includes(r.slug)
  );

  const relatedArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="pb-20">
      <JsonLd data={getArticleSchema(article)} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { name: 'Blog', url: '/blog' },
            { name: article.title, url: `/blog/${article.slug}` },
          ]}
        />

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-red-100 text-[#D71920] font-bold text-xs uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-serif leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-[#F0E2DE] py-3 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#D71920]" />
              <span className="font-bold text-gray-900">{article.author.name}</span>
              <span className="text-gray-400">({article.author.role})</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-lg border border-[#F0E2DE] mb-10 bg-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Table of Contents & AEO Direct Answer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Table of Contents (md:col-span-4) */}
          <div className="md:col-span-4">
            <div className="bg-white rounded-2xl p-5 border border-[#F0E2DE] shadow-xs sticky top-24">
              <h3 className="font-bold text-gray-900 text-sm font-serif mb-3 flex items-center gap-2">
                <ListTree className="w-4 h-4 text-[#D71920]" />
                <span>Table of Contents</span>
              </h3>
              <ul className="space-y-2 text-xs text-gray-600">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="hover:text-[#D71920] hover:underline block leading-tight transition-colors"
                    >
                      {toc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Answer Box (md:col-span-8) for AEO */}
          <div className="md:col-span-8">
            <div id="direct-answer" className="bg-[#FFF5F2] border-2 border-red-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920]">
                <Sparkles className="w-4 h-4" />
                <span>Culinary Direct Answer (AEO Summary)</span>
              </div>
              <p className="text-base font-bold text-gray-900 leading-relaxed font-serif">
                {article.content.directAnswer}
              </p>
            </div>
          </div>

        </div>

        {/* Article Body Content */}
        <div className="space-y-12 text-gray-800">
          {article.content.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
              {section.level === 2 ? (
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif border-b border-[#F0E2DE] pb-2">
                  {section.title}
                </h2>
              ) : (
                <h3 className="text-xl font-bold text-gray-900 font-serif">
                  {section.title}
                </h3>
              )}

              <div className="space-y-3">
                {section.body.map((p, idx) => (
                  <p key={idx} className="text-base text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Related Recipes Mentioned */}
        {relatedRecipes.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[#F0E2DE] space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 font-serif">
              Try This In Tested Recipes:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        )}

        {/* Related Articles */}
        <section className="mt-16 pt-10 border-t border-[#F0E2DE] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900 font-serif">
              Related Frying Articles
            </h3>
            <Link href="/blog" className="text-xs font-bold text-[#D71920] hover:underline flex items-center gap-1">
              <span>All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#D71920] uppercase">{rel.category}</span>
                  <h4 className="font-bold text-base text-gray-900 font-serif mt-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">{rel.summary}</p>
                </div>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#D71920] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

