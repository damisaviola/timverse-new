import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { NATIONAL_NEWS } from '../../data/mockNews';

export function NationalNewsSection() {
  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-midnight-darker to-midnight-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-4">
          <div className="flex flex-col">
            <span className="text-accent-blue text-sm font-bold tracking-widest uppercase mb-1">
              Kabar Nusantara
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              Berita Nasional
            </h2>
          </div>
          <button className="flex items-center text-sm font-medium text-slate-400 hover:text-accent-blue transition-colors w-fit">
            Jelajahi Berita Nasional <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NATIONAL_NEWS.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col rounded-2xl glass overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-accent-blue/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-white/10 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent-blue" />
                  {item.category}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-white text-base md:text-lg leading-snug group-hover:text-accent-blue transition-colors mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-3 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center gap-2 mt-auto text-[10px] sm:text-xs font-medium uppercase tracking-wider text-slate-500 pt-4 border-t border-white/5">
                  <Clock className="w-3.5 h-3.5" />
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
