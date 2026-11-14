import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CookingGuide } from '@/types';

interface GuideCardProps {
  guide: CookingGuide;
}

export const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#F0E2DE] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <Link href={`/cooking-guides/${guide.slug}`} className="relative block aspect-16/9 overflow-hidden bg-gray-100">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 bg-[#D71920] text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
          {guide.category}
        </span>
      </Link>

      <div className="p-5 flex flex-col grow justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span className="font-semibold text-[#D71920]">{guide.readTime}</span>
            <span>•</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
              {guide.difficulty}
            </span>
          </div>

          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#D71920] transition-colors line-clamp-2 mb-2 font-serif leading-snug">
            <Link href={`/cooking-guides/${guide.slug}`}>
              {guide.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {guide.summary}
          </p>

          {/* Quick takeaway snippet for AEO */}
          <div className="bg-orange-50/70 border border-orange-100 rounded-xl p-3 text-xs text-gray-700 mb-4">
            <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Key Takeaway</span>
            </div>
            <p className="line-clamp-2">{guide.keyTakeaways[0]}</p>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-400">Step-by-Step Guide</span>
          <Link
            href={`/cooking-guides/${guide.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
          >
            <span>Learn Technique</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

