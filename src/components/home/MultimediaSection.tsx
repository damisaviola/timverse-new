import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { MULTIMEDIA_NEWS } from '../../data/mockNews';

export function MultimediaSection() {
  return (
    <div className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            Sorotan Multimedia
            <div className="h-px bg-white/20 flex-grow ml-4 max-w-xs hidden sm:block"></div>
          </h2>
          <button className="flex items-center text-sm font-medium text-accent hover:text-white transition-colors">
            Lihat semua <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MULTIMEDIA_NEWS.map((item, index) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer relative rounded-2xl overflow-hidden glass ${index === 0 ? 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[450px]' : 'aspect-video md:aspect-auto min-h-[220px]'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PlayCircle className={`text-white/80 group-hover:text-accent transition-colors ${index === 0 ? 'w-16 h-16 md:w-20 md:h-20' : 'w-12 h-12'}`} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black bg-accent px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-[10px] md:text-xs text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-md font-medium border border-white/10">
                    {item.duration}
                  </span>
                </div>
                <h3 className={`font-bold text-white leading-snug group-hover:text-accent transition-colors ${index === 0 ? 'text-xl md:text-3xl line-clamp-2' : 'text-base md:text-lg line-clamp-2'}`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
