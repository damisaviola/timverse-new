import React from 'react';
import { Link } from 'react-router-dom';
import { LATEST_NEWS } from '../../data/mockNews';
import { Clock } from 'lucide-react';

export function LatestNewsList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6 border-b border-light-blue pb-4">
        <h2 className="text-2xl font-bold text-white">Berita Terbaru</h2>
      </div>

      <div className="flex flex-col gap-6">
        {LATEST_NEWS.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id} className="group cursor-pointer flex flex-col sm:flex-row gap-4 glass p-4 rounded-2xl hover:bg-light-blue/20 transition-colors">
            <div className="relative w-full sm:w-48 md:w-64 aspect-video sm:aspect-[4/3] flex-shrink-0 overflow-hidden rounded-xl">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col flex-grow py-1">
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-2 group-hover:text-accent transition-colors">
                {news.title}
              </h3>
              <p className="text-sm text-slate-400 line-clamp-2 md:line-clamp-3 mb-4 flex-grow">
                {news.excerpt}
              </p>
              
              <div className="flex items-center text-xs text-slate-500 gap-2 mt-auto">
                <Clock className="w-3 h-3" />
                {news.time}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
        Muat Lebih Banyak
      </button>
    </div>
  );
}
