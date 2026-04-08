import React, { useState, useMemo, useEffect } from 'react';
import { Menu, Search, X, Clock } from 'lucide-react';
import { LATEST_NEWS, POPULAR_NEWS, TECH_NEWS, MAIN_HEADLINE, SIDE_STORIES } from '../../data/mockNews';

// Menggabungkan semua dummy data untuk pencarian yang ringan di sisi client
const ALL_NEWS = [MAIN_HEADLINE, ...SIDE_STORIES, ...LATEST_NEWS, ...POPULAR_NEWS, ...TECH_NEWS].filter((item, index, self) => 
  item && item.title && index === self.findIndex((t) => t.id === item.id)
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menus = ['Berita Utama', 'Teknologi', 'Olahraga', 'Ekonomi', 'Gaya Hidup', 'Otomotif'];

  // Fungsi pencarian ringan (hanya run jika query berubah)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return ALL_NEWS.filter(news => 
      news.title?.toLowerCase().includes(query) || 
      news.category?.toLowerCase().includes(query) ||
      (news as any).author?.toLowerCase().includes(query)
    ).slice(0, 10); // Batasi hasil pencarian agar tetap ringan
  }, [searchQuery]);

  // Lock body scroll saat overlay terbuka
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/5 bg-midnight-blue/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Left: Mobile Menu Button & Brand */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 lg:hidden hover:bg-white/10 rounded-full transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-slate-300" />
              </button>
              
              <div className="text-xl md:text-2xl font-black tracking-tighter text-white cursor-pointer">
                TIMVERSE<span className="text-accent-blue">.</span>
              </div>
            </div>
            
            {/* Center: Desktop Menus */}
            <div className="hidden lg:flex items-center space-x-8">
              {menus.map((item) => (
                <a key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 md:gap-5">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Search"
              >
                <Search className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-accent-blue to-purple-500 p-[2px] cursor-pointer hover:scale-105 transition-transform">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="User Profile" 
                  className="w-full h-full rounded-full bg-midnight-blue object-cover ring-2 ring-deep-blue"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-midnight-blue/95 backdrop-blur-md lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Drawer Sidebar */}
          <div 
            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-deep-blue shadow-2xl p-6 transform transition-transform duration-300 border-r border-white/5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-black text-white tracking-tighter">TIMVERSE<span className="text-accent-blue">.</span></div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Search Input on Mobile Drawer triggers Search Overlay */}
            <div 
              className="relative mb-8 cursor-text group"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
            >
               <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent-blue transition-colors" />
               <div className="w-full bg-white/5 border border-white/10 text-slate-400 rounded-2xl pl-12 pr-4 py-3.5 font-medium flex items-center hover:bg-white/10 transition-colors">
                  Cari berita, topik...
               </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-2 mb-2">Kategori</span>
              {menus.map((item) => (
                <a key={item} href="#" className="text-base font-bold text-slate-300 hover:text-white hover:bg-white/5 px-2 py-3 rounded-xl transition-all flex items-center justify-between group">
                  {item}
                  <span className="w-6 h-px bg-white/10 group-hover:bg-accent-blue group-hover:w-8 transition-all"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightweight Fullscreen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-midnight-blue/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="max-w-4xl mx-auto w-full h-full flex flex-col pt-4 sm:pt-10 px-4 sm:px-6">
            
            {/* Search Header Area */}
            <div className="flex items-center gap-3 sm:gap-4 border-b border-white/10 pb-4 sm:pb-6 relative mt-4 sm:mt-0">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-accent-blue shrink-0" />
              <input 
                autoFocus
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berita, topik, atau penulis..." 
                className="flex-1 bg-transparent text-lg sm:text-3xl lg:text-4xl font-bold text-white focus:outline-none placeholder:text-slate-600 w-full"
              />
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                className="p-2 sm:p-3 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all bg-white/5 shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Results Area (Scrollable) */}
            <div className="flex-1 overflow-y-auto py-6 sm:py-10 custom-scrollbar">
              {searchResults.length > 0 ? (
                <div className="flex flex-col gap-4 sm:gap-6">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 sm:mb-4 px-2">
                    Hasil Pencarian ({searchResults.length})
                  </span>
                  {searchResults.map((news) => (
                    <a href={`/news/${news.id}`} key={news.id} onClick={() => setIsSearchOpen(false)} className="group flex items-start gap-4 sm:gap-6 p-3 sm:p-4 hover:bg-white/5 rounded-3xl transition-all border border-transparent hover:border-white/10">
                       <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden bg-white/10">
                         {news.image ? (
                           <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center bg-midnight-blue text-slate-600">
                             <Search className="w-8 h-8 opacity-50" />
                           </div>
                         )}
                       </div>
                       <div className="flex flex-col py-1 overflow-hidden">
                         <span className="text-accent-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2 truncate">
                           {news.category} {(news as any).author && `• by ${(news as any).author}`}
                         </span>
                         <h4 className="text-white font-bold text-sm sm:text-lg leading-snug sm:leading-tight group-hover:text-accent-blue transition-colors line-clamp-2 md:line-clamp-3 mb-2">
                           {news.title}
                         </h4>
                         <div className="flex items-center gap-2 mt-auto">
                           <Clock className="w-3.5 h-3.5 text-slate-500" />
                           <span className="text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">{news.time}</span>
                         </div>
                       </div>
                    </a>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="text-center text-slate-500 pt-20 sm:pt-32 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 sm:w-10 sm:h-10 text-slate-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-300 mb-2">Data Tidak Ditemukan</h3>
                  <p className="text-sm max-w-sm leading-relaxed">Maaf, kami tidak dapat menemukan hasil untuk "{searchQuery}". Coba gunakan kata kunci lain.</p>
                </div>
              ) : (
                <div className="text-center text-slate-600 pt-20 sm:pt-32 flex flex-col items-center">
                   <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6">
                     <Search className="w-8 h-8 text-accent-blue/50" />
                   </div>
                   <h3 className="text-base sm:text-lg font-medium text-slate-400 mb-2">Mulai Pencarian</h3>
                   <p className="text-sm">Ketik topik, judul berita, atau nama penulis</p>
                   
                   {/* Quick Suggestions */}
                   <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
                     {['AI', 'Sains', 'Ekonomi', 'Olahraga'].map(tag => (
                       <button 
                         key={tag}
                         onClick={() => setSearchQuery(tag)}
                         className="px-4 py-2 rounded-full border border-white/10 text-sm hover:border-accent-blue hover:text-accent-blue transition-colors text-slate-400"
                       >
                         {tag}
                       </button>
                     ))}
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
