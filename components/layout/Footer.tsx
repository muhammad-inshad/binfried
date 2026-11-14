'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flame, Mail, Send, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1C1717] text-[#EDE7E5] border-t-4 border-[#D71920] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Callout in Footer Top */}
        <div className="bg-gradient-to-r from-[#A80F17] to-[#D71920] rounded-2xl p-8 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold tracking-wider uppercase mb-3">
                Join 24,000+ Fried Chicken Enthusiasts
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif leading-tight">
                Unlock The Secret Science Of The Crunchiest Chicken
              </h3>
              <p className="text-red-100 text-sm mt-2 max-w-xl">
                Get our weekly fried chicken breakdown: exact frying temperatures, secret dredge formulas, and crisping guides straight to your inbox. No spam. Ever.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-white/10 border border-white/30 rounded-xl p-4 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">You are on the list!</p>
                    <p className="text-xs text-red-100">Check your inbox for our Crispy Fried Chicken Chemistry Cheat Sheet.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative grow">
                    <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 rounded-xl text-sm placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1C1717] hover:bg-black text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-md bg-[#A80F17]">
                <Image
                  src="/images/logo.png"
                  alt="BINFried Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-serif">
                BIN<span className="text-[#D71920]">Fried</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              BINFried is an independent food science and cooking resource dedicated to the pursuit of the world's crunchiest, juiciest fried chicken. Tested recipes, calibrated frying temperatures, and step-by-step culinary guides.
            </p>
            <div className="text-xs text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300">Culinary Mission:</p>
              <p>Education, starch science, and repeatable crispy perfection at home.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Popular Recipes
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/recipes/crispy-fried-chicken" className="hover:text-white transition-colors">
                  Southern Fried Chicken
                </Link>
              </li>
              <li>
                <Link href="/recipes/kfc-style-fried-chicken" className="hover:text-white transition-colors">
                  11 Herbs KFC-Style Chicken
                </Link>
              </li>
              <li>
                <Link href="/recipes/korean-fried-chicken" className="hover:text-white transition-colors">
                  Korean Double-Fried Wings
                </Link>
              </li>
              <li>
                <Link href="/recipes/nashville-hot-fried-chicken" className="hover:text-white transition-colors">
                  Fiery Nashville Hot Chicken
                </Link>
              </li>
              <li>
                <Link href="/recipes/buttermilk-fried-chicken" className="hover:text-white transition-colors">
                  Buttermilk Chicken Tenders
                </Link>
              </li>
              <li>
                <Link href="/recipes/crispy-chicken-burger" className="hover:text-white transition-colors">
                  Crispy Chicken Burgers
                </Link>
              </li>
            </ul>
          </div>

          {/* Cooking Guides */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Cooking Science
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/cooking-guides/how-to-make-chicken-extra-crispy" className="hover:text-white transition-colors">
                  Make Chicken Extra Crispy
                </Link>
              </li>
              <li>
                <Link href="/cooking-guides/best-temperature-for-frying-chicken" className="hover:text-white transition-colors">
                  Best Frying Temperatures
                </Link>
              </li>
              <li>
                <Link href="/cooking-guides/how-to-marinate-chicken" className="hover:text-white transition-colors">
                  Buttermilk Brine Secrets
                </Link>
              </li>
              <li>
                <Link href="/cooking-guides/how-to-fry-chicken-without-a-deep-fryer" className="hover:text-white transition-colors">
                  Fry Without a Deep Fryer
                </Link>
              </li>
              <li>
                <Link href="/cooking-guides/how-to-keep-fried-chicken-crispy" className="hover:text-white transition-colors">
                  Keep Chicken Crispy
                </Link>
              </li>
              <li>
                <Link href="/blog/cornstarch-vs-flour-fried-chicken-science" className="hover:text-white transition-colors">
                  Cornstarch vs Flour Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Knowledge */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Platform & Guides
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/ingredients" className="hover:text-white transition-colors">
                  Ingredient Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Fried Chicken FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About BINFried
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Editorial
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 BINFried.store. All rights reserved. The Home of Crispy Fried Chicken.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            <span className="flex items-center gap-1 text-gray-400">
              Crafted for fried chicken lovers <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

