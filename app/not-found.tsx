import Link from 'next/link';
import { ChefHat, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#F0E2DE] shadow-lg text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-100 text-[#D71920] flex items-center justify-center mx-auto">
          <ChefHat className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-[#D71920] font-serif">404</span>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Page Not Found</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            The crispy fried chicken recipe or guide you're looking for seems to have moved or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3 rounded-xl bg-[#D71920] text-white font-bold text-sm hover:bg-[#A80F17] transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/recipes"
            className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-800 font-semibold text-xs hover:bg-gray-200 transition-all"
          >
            Browse Popular Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

