import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export interface BreadcrumbStep {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbStep[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center text-xs md:text-sm text-gray-500 font-medium">
      <JsonLd data={getBreadcrumbSchema(allItems)} />
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        return (
          <div key={item.url} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400 shrink-0" />}
            {isLast ? (
              <span className="text-[#D71920] font-semibold truncate max-w-[200px] md:max-w-xs" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-[#D71920] transition-colors flex items-center"
              >
                {index === 0 && <Home className="w-3.5 h-3.5 mr-1" />}
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

