import React from 'react';
import { Trophy, ArrowRight } from 'lucide-react';
import { SPORTS_NEWS } from '../../data/mockNews';

export function SportsSection() {
  const mainArticle = SPORTS_NEWS[0];
  const sideArticles = SPORTS_NEWS.slice(1);

  return (
    <div className="py-12 md:py-16 bg-midnight-blue border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
              <Trophy className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block">
                Gelanggang
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Arena Olahraga
              </h2>
            </div>
          </div>
          <button className="flex items-center text-sm font-medium text-slate-400 hover:text-orange-500 transition-colors w-fit">
            Indeks Olahraga <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Headline for Sports */}
          <div className="lg:col-span-7 group cursor-pointer flex flex-col relative rounded-3xl glass overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-orange-500/30">
            <div className="relative aspect-video lg:aspect-auto lg:h-[450px] overflow-hidden">
              <img 
                src={mainArticle.image} 
                alt={mainArticle.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold uppercase tracking-wider text-black bg-orange-500 rounded">
                {mainArticle.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3 group-hover:text-orange-500 transition-colors line-clamp-3">
                {mainArticle.title}
              </h3>
              <p className="hidden md:block text-slate-300 text-sm mb-4 line-clamp-2">
                {mainArticle.excerpt}
              </p>
              <div className="flex items-center text-[10px] md:text-xs text-slate-400 gap-3">
                {mainArticle.time}
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer flex gap-4 p-4 rounded-2xl glass hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/10"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex flex-col py-1 justify-center">
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-orange-500 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-auto">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
