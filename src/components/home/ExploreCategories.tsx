import React from 'react';
import { Cpu, Trophy, TrendingUp, Coffee, Film, FlaskConical, Flag, Landmark, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { name: 'Teknologi', icon: Cpu, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Olahraga', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { name: 'Ekonomi', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { name: 'Gaya Hidup', icon: Coffee, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { name: 'Hiburan', icon: Film, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { name: 'Sains', icon: FlaskConical, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { name: 'Nasional', icon: Flag, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
  { name: 'Politik', icon: Landmark, color: 'text-red-400', bg: 'bg-red-400/10' },
];

export function ExploreCategories() {
  return (
    <div className="py-12 border-t border-b border-light-blue/30 bg-midnight-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">
              Eksplorasi
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Jelajahi Berbagai Topik
            </h2>
          </div>
          <button className="flex items-center text-sm font-medium text-slate-400 hover:text-accent transition-colors w-fit">
            Lihat Indeks Lengkap <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="group cursor-pointer glass p-4 md:p-6 rounded-2xl flex items-center gap-4 hover:bg-light-blue/20 transition-all border border-white/5 hover:border-white/10 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${cat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <span className="font-bold text-white group-hover:text-accent transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
