import React from 'react';
import { EDITORS_PICKS } from '../../data/mockNews';

export function EditorsPicks() {
  return (
    <div className="glass p-6 rounded-2xl sticky top-24">
      <h2 className="text-xl font-bold text-white mb-6 flex flex-col after:content-[''] after:w-12 after:h-1 after:bg-accent after:mt-3">
        Pilihan Editor
      </h2>
      
      <div className="flex flex-col gap-5">
        {EDITORS_PICKS.map((story, index) => (
          <div key={story.id} className="group cursor-pointer flex items-start gap-4 border-b border-light-blue pb-5 last:border-0 last:pb-0">
            <div className="text-3xl font-black text-light-blue group-hover:text-accent transition-colors">
              0{index + 1}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                {story.category}
              </span>
              <h3 className="text-sm md:text-base font-bold text-white leading-snug group-hover:text-accent transition-colors mb-2">
                {story.title}
              </h3>
              <div className="text-xs text-slate-500">
                {story.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-gradient-to-br from-light-blue to-midnight-blue p-5 rounded-xl border border-white/5">
         <h4 className="font-bold text-white mb-2">Berlangganan Newsletter</h4>
         <p className="text-xs text-slate-400 mb-4">Dapatkan update berita pilihan langsung ke inbox Anda.</p>
         <div className="flex">
           <input type="email" placeholder="Email Anda" className="w-full bg-midnight-blue text-white text-sm px-3 py-2 rounded-l-lg focus:outline-none" />
           <button className="bg-accent text-midnight-blue px-3 py-2 text-sm font-bold rounded-r-lg">Kirim</button>
         </div>
      </div>
    </div>
  );
}
