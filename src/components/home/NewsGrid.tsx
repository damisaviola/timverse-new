import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { POPULAR_NEWS } from '../../data/mockNews';

export function NewsGrid() {
  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-deep-blue/20 to-midnight-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            Rekomendasi Berita
            <div className="h-px bg-white/10 flex-grow ml-4 max-w-xs hidden sm:block"></div>
          </h2>
          <button className="flex items-center text-sm font-medium text-accent hover:text-white transition-colors">
            Lihat semua <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_NEWS.map((news) => (
            <div key={news.id} className="group cursor-pointer flex flex-col glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded">
                  {news.category}
                </div>
              </div>
              
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <div className="flex items-center text-[10px] md:text-xs text-slate-400 mb-3 gap-2">
                  <Clock className="w-3 h-3" />
                  {news.time}
                  <span className="w-1 h-1 rounded-full bg-slate-600 mx-1"></span>
                  {news.author}
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-white leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-xs md:text-sm text-slate-400 line-clamp-2 mt-auto">
                  {news.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
