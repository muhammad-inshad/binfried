'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, Flame, ChefHat, BookOpen, Layers, HelpCircle, Info, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Cooking Guides', href: '/cooking-guides' },
    { name: 'Blog', href: '/blog' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recipes?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0E2DE] shadow-xs transition-all">
        {/* Top announcement bar */}
        <div className="bg-[#D71920] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>The Home of Crispy Fried Chicken – Secrets, Exact Frying Temps & Tested Recipes</span>
          <span className="hidden md:inline bg-[#A80F17] px-2 py-0.5 rounded text-[11px] font-bold">100% Free Culinary Science</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-md shadow-red-200 group-hover:scale-105 transition-transform bg-[#A80F17]">
                <Image
                  src="/images/logo.png"
                  alt="BINFried Logo"
                  width={44}
                  height={44}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#222222] font-serif leading-none">
                  BIN<span className="text-[#D71920]">Fried</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#777777] mt-0.5">
                  Crispy Cooking Guide
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-[#222222]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg transition-colors duration-150 ${
                      isActive
                        ? 'text-[#D71920] bg-red-50/80 font-bold'
                        : 'text-[#333333] hover:text-[#D71920] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-full hover:bg-red-50 text-gray-700 hover:text-[#D71920] transition-colors"
                aria-label="Search recipes and guides"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/recipes"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D71920] text-white text-sm font-semibold hover:bg-[#A80F17] transition-all shadow-sm shadow-red-200"
              >
                <ChefHat className="w-4 h-4" />
                <span>Explore Recipes</span>
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="bg-[#FFF8F6] border-t border-[#F0E2DE] px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search recipes, crispy techniques, ingredients (e.g. Buttermilk, Wings, Temperature)..."
                  className="w-full pl-11 pr-24 py-3 bg-white rounded-xl border border-red-200 focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-sm text-gray-800 shadow-xs"
                  autoFocus
                />
                <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1.5 px-4 py-1.5 rounded-lg bg-[#D71920] text-white text-xs font-bold hover:bg-[#A80F17] transition-colors"
                >
                  Search
                </button>
              </form>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Quick Searches:</span>
                {['Korean', 'Wings', 'Buttermilk', 'Cast Iron', '11 Spices'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      router.push(`/recipes?search=${encodeURIComponent(tag)}`);
                      setSearchOpen(false);
                    }}
                    className="hover:text-[#D71920] underline decoration-dotted"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-red-50 text-[#D71920] font-bold'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#D71920]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/recipes"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D71920] text-white font-bold text-center shadow-md shadow-red-200"
              >
                <ChefHat className="w-5 h-5" />
                Browse All Recipes
              </Link>
              <Link
                href="/cooking-guides/how-to-make-chicken-extra-crispy"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-50 text-[#D71920] font-semibold text-sm border border-orange-200"
              >
                <Sparkles className="w-4 h-4" />
                Read The Extra-Crispy Guide
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

