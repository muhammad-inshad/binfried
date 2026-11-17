import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BlogArticle } from '@/types';

interface BlogCardProps {
  article: BlogArticle;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#F0E2DE] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <Link href={`/blog/${article.slug}`} className="relative block aspect-16/9 overflow-hidden bg-stone-100">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={225}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#D71920] font-bold text-xs px-3 py-1 rounded-full shadow-xs">
          {article.category}
        </span>
      </Link>

      <div className="p-5 flex flex-col grow justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {article.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#D71920] transition-colors line-clamp-2 mb-2 font-serif leading-snug">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {article.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <User className="w-3.5 h-3.5 text-gray-400" />
            <span>{article.author.name}</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

