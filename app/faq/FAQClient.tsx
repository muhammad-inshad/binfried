'use client';

import React, { useState, useMemo } from 'react';
import { Search, HelpCircle, ChevronDown, Sparkles, ChefHat } from 'lucide-react';
import { FAQItem } from '@/types';

interface Props {
  initialFaqs: FAQItem[];
}

export const FAQClient: React.FC<Props> = ({ initialFaqs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return initialFaqs;
    const q = searchQuery.toLowerCase();
    return initialFaqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [initialFaqs, searchQuery]);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Frying Troubleshooting</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Clear, direct, and scientifically backed answers to every question about making crispy fried chicken at home.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type your question (e.g. soggy crust, oil temp, eggs)..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#F0E2DE] rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] shadow-xs"
        />
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndices[idx];
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#F0E2DE] shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-gray-900 text-base sm:text-lg font-serif flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#D71920] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 text-[#D71920]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100/60 bg-[#FFFDFD]">
                  <div className="pt-4 pl-9">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#F0E2DE]">
            <p className="text-gray-500 text-sm">No answers found matching "{searchQuery}". Try a different keyword!</p>
          </div>
        )}
      </div>
    </div>
  );
};

