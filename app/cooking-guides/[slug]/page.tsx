import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COOKING_GUIDES } from '@/data/guides';
import { constructMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { getFAQSchema, getGuideArticleSchema } from '@/lib/schema';
import { 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  BookOpen, 
  ChefHat 
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COOKING_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = COOKING_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return constructMetadata({ title: 'Guide Not Found' });
  }

  return constructMetadata({
    title: guide.title,
    description: guide.summary,
    image: guide.image,
    canonicalUrl: `/cooking-guides/${guide.slug}`,
    type: 'article',
  });
}

export default async function CookingGuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = COOKING_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = COOKING_GUIDES
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  return (
    <div className="pb-20">
      <JsonLd data={getGuideArticleSchema(guide)} />
      {guide.faqs.length > 0 && <JsonLd data={getFAQSchema(guide.faqs)} />}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { name: 'Cooking Guides', url: '/cooking-guides' },
            { name: guide.title, url: `/cooking-guides/${guide.slug}` },
          ]}
        />

        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-red-100 text-[#D71920] font-bold text-xs uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              {guide.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-serif leading-tight">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {guide.summary}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-lg border border-[#F0E2DE] mb-10 bg-gray-100">
          <Image
            src={guide.image}
            alt={guide.title}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* AEO / GEO Direct Answer Callout Box */}
        <div className="bg-[#FFF5F2] border-2 border-red-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D71920] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Direct Culinary Answer (AEO Summary)</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-gray-900 leading-relaxed font-serif">
            {guide.directAnswer}
          </p>

          <div className="mt-6 pt-6 border-t border-red-200/60">
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-800 mb-3">
              Key Culinary Rules:
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {guide.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guide Content Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          {guide.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif border-b border-[#F0E2DE] pb-2">
                {section.title}
              </h2>
              
              <div className="space-y-3">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {section.proTip && (
                <div className="bg-orange-50 border-l-4 border-[#D71920] p-4 rounded-r-xl text-xs sm:text-sm text-gray-800">
                  <strong className="text-[#D71920] font-bold">Pro Tip: </strong>
                  {section.proTip}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQs */}
        {guide.faqs.length > 0 && (
          <section className="mt-14 pt-8 border-t border-[#F0E2DE] space-y-4">
            <h3 className="text-2xl font-black text-gray-900 font-serif">
              Common Questions About This Technique
            </h3>
            <div className="space-y-3">
              {guide.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#F0E2DE]">
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides */}
        <section className="mt-16 pt-12 border-t border-[#F0E2DE] space-y-6">
          <h2 className="text-2xl font-extrabold text-gray-900 font-serif">
            More Cooking Guides & Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGuides.map((rel) => (
              <div key={rel.id} className="bg-white rounded-2xl p-5 border border-[#F0E2DE] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#D71920]">{rel.category}</span>
                  <h3 className="font-bold text-base text-gray-900 font-serif mt-1 line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">{rel.summary}</p>
                </div>
                <Link
                  href={`/cooking-guides/${rel.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#D71920] hover:underline"
                >
                  <span>Read Guide</span>
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

