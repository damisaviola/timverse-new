import React from 'react';
import { TrendingUp } from 'lucide-react';
import { POPULAR_NEWS } from '../../data/mockNews';

export function PopularNewsSection() {
  return (
    <div className="py-12 md:py-16 bg-midnight-blue border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
            <TrendingUp className="w-5 h-5 text-accent-blue" />
          </div>
          <div>
            <span className="text-accent-blue text-xs font-bold tracking-widest uppercase mb-1 block">
              Trending Saat Ini
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Berita Terpopuler
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_NEWS.map((news, index) => (
            <div 
              key={news.id} 
              className="group cursor-pointer flex flex-col relative glass p-4 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-accent-blue/30 overflow-hidden"
            >
              {/* Gambar Area */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/90 to-transparent"></div>
                
                {/* Ranking Tag on Image */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl font-black text-white drop-shadow-md">0{index + 1}</span>
                  <div className="w-1 h-4 bg-accent-blue rounded-full"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 drop-shadow-md">
                    {news.category}
                  </span>
                </div>
              </div>
              
              {/* Giant Background Number (Disembunyikan sedikit atau dikecilkan karena sudah ada gambar) */}
              <div className="absolute top-4 right-4 text-[60px] leading-none font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors duration-500 user-select-none pointer-events-none z-0">
                {index + 1}
              </div>

              <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-accent-blue transition-colors line-clamp-3 mb-4 relative z-10">
                {news.title}
              </h3>

              <div className="mt-auto flex items-center justify-between text-xs font-medium text-slate-500 relative z-10 pt-4 border-t border-white/10">
                <span>{news.time}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-blue underline underline-offset-4">Baca detail</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
