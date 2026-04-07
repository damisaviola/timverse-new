import React from 'react';
import { MAIN_HEADLINE, SIDE_STORIES } from '../../data/mockNews';
import { Clock } from 'lucide-react';

export function MainHeadline() {
  return (
    <div className="py-4 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Main Headline */}
        {/* PERBAIKAN: Gunakan h-[500px] pada mobile agar teks tidak menumpuk, aspect-video pada tablet, dan h-full pada desktop */}
        <div className="lg:col-span-2 group cursor-pointer relative rounded-2xl overflow-hidden glass h-[450px] sm:h-[500px] lg:h-full lg:min-h-[550px]">
          <img 
            src={MAIN_HEADLINE.image} 
            alt={MAIN_HEADLINE.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* PERBAIKAN: Gradient lebih gelap di bawah untuk readability teks di HP */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-bg via-midnight-bg/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
             <span className="inline-block px-3 py-1 mb-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-midnight-darker bg-accent-blue rounded">
               Sorotan Utama
             </span>
             {/* PERBAIKAN: Ukuran font lebih proporsional di HP (text-2xl) */}
             <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 group-hover:text-accent-blue transition-colors line-clamp-3 sm:line-clamp-none">
               {MAIN_HEADLINE.title}
             </h1>
             <p className="hidden sm:block text-slate-300 text-sm md:text-lg mb-6 line-clamp-2 md:line-clamp-3 max-w-3xl">
               {MAIN_HEADLINE.excerpt}
             </p>
             <div className="flex items-center text-[10px] sm:text-xs text-slate-400 gap-3">
               <Clock className="w-3.5 h-3.5 sm:w-4 h-4" />
               {MAIN_HEADLINE.time}
               <span className="w-1 h-1 sm:w-1.5 h-1.5 rounded-full bg-slate-600"></span>
               {MAIN_HEADLINE.author}
             </div>
          </div>
        </div>

        {/* Side Stories */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {SIDE_STORIES.map((story) => (
            // PERBAIKAN: min-h lebih kecil di mobile agar tidak terlalu panjang saat di-scroll
            <div key={story.id} className="group cursor-pointer relative rounded-2xl overflow-hidden glass flex-1 min-h-[180px] sm:min-h-[250px]">
               <img 
                 src={story.image} 
                 alt={story.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-midnight-bg/90 via-midnight-bg/40 to-transparent"></div>
               
               <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                 <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent-blue mb-1 sm:mb-2 block">
                   {story.category}
                 </span>
                 <h2 className="text-base sm:text-xl font-bold text-white leading-snug mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                   {story.title}
                 </h2>
                 <div className="flex items-center text-[10px] sm:text-xs text-slate-400 gap-2">
                   <Clock className="w-3 h-3" />
                   {story.time}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}