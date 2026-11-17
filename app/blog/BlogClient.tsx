'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '@/data/blogs';
import { BlogCard } from '@/components/blog/BlogCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const BlogClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = BLOG_ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
      <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>The BINFried Journal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          Food Knowledge & Frying Science
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Culinary essays, molecular starch chemistry, spice formulation breakdowns, and troubleshooting guides from our kitchen specialists.
        </p>
      </div>

      {/* Featured Big Hero Article */}
      {featuredArticle && selectedCategory === 'All' && !searchQuery && (
        <article className="group bg-white rounded-3xl overflow-hidden border border-[#F0E2DE] shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <Link href={`/blog/${featuredArticle.slug}`} className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-gray-100">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                width={800}
                height={500}
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#D71920] text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md">
                Featured Article
              </span>
            </Link>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-bold text-[#D71920] uppercase">{featuredArticle.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-serif leading-tight group-hover:text-[#D71920] transition-colors">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="bg-red-50/80 p-3.5 rounded-xl border border-red-100 text-xs text-gray-700">
                  <strong className="text-[#D71920]">Direct Answer: </strong>
                  {featuredArticle.content.directAnswer}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-6">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold">{featuredArticle.author.name}</span>
                </div>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D71920] text-white text-xs font-bold hover:bg-[#A80F17] transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl p-6 border border-[#F0E2DE] shadow-xs space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, techniques, and ingredients..."
            className="w-full pl-12 pr-4 py-3 bg-[#FFF8F6] border border-[#F0E2DE] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D71920] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif border-b border-[#F0E2DE] pb-3">
          Latest Articles ({filteredArticles.length})
        </h2>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">No articles found matching your query.</p>
          </div>
        )}
      </div>
    </div>
  );
};

