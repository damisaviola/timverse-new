import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { TECH_NEWS } from '../../data/mockNews';

export function CategoryHighlight() {
  return (
    <div className="py-12 bg-light-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Section Info */}
          <div className="w-full md:w-1/4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">
               Topik Khusus
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Inovasi <br className="hidden md:block" />
              Teknologi
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Perkembangan ekosistem digital, ulasan gawai terkini, hingga tren kecerdasan buatan.
            </p>
            <button className="flex items-center text-sm font-bold text-white hover:text-accent transition-colors mt-auto w-fit">
              Semua Artikel Tech <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Cards */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {TECH_NEWS.map((news) => (
              <div key={news.id} className="group flex gap-4 bg-midnight-blue/40 hover:bg-light-blue/30 p-3 rounded-2xl transition-colors cursor-pointer border border-white/5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-xl">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-slate-500 mb-1 block">
                    {news.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-accent transition-colors line-clamp-3 mb-2">
                    {news.title}
                  </h3>
                  <div className="text-[10px] text-slate-500 mt-auto flex items-center">
                    {news.time} 
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all transform -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
