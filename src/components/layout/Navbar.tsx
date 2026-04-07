import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menus = ['Berita Utama', 'Teknologi', 'Olahraga', 'Ekonomi', 'Gaya Hidup', 'Otomotif'];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
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
              
              <div className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                MIDNIGHT<span className="text-accent">.</span>
              </div>
            </div>
            
            {/* Center: Desktop Menus */}
            <div className="hidden lg:flex items-center space-x-6">
              {menus.map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-slate-400 hover:text-accent transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block mt-1">
                <Search className="w-5 h-5 text-slate-300" />
              </button>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-accent to-blue-500 p-[2px] cursor-pointer">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="User" 
                  className="w-full h-full rounded-full bg-midnight-blue object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Drawer Sidebar */}
          <div 
            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-midnight-blue shadow-2xl p-6 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold text-white">MIDNIGHT<span className="text-accent">.</span></div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-slate-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative mb-6">
               <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
               <input 
                 type="text" 
                 placeholder="Cari berita..." 
                 className="w-full bg-light-blue/50 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent"
               />
            </div>
            
            <div className="flex flex-col gap-4">
              {menus.map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-slate-300 hover:text-accent border-b border-white/5 pb-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
