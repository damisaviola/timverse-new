import React from 'react';
import { TRENDING_NEWS } from '../../data/mockNews';

export function TrendingTicker() {
  return (
    <div className="bg-accent text-midnight-blue py-2 overflow-hidden mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="font-bold text-sm uppercase tracking-wider pr-4 border-r border-midnight-blue/20 whitespace-nowrap hidden sm:block">
          Trending
        </div>
        <div className="relative flex-grow overflow-hidden h-6 ml-0 sm:ml-4 flex items-center">
          <div className="absolute whitespace-nowrap animate-marquee flex gap-8">
            {TRENDING_NEWS.map((text, idx) => (
              <span key={idx} className="text-sm font-medium">
                • {text}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {TRENDING_NEWS.map((text, idx) => (
              <span key={`dup-${idx}`} className="text-sm font-medium">
                • {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
