import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Auto reset scroll ke posisi paling atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. Tampilkan tombol "Scroll ke atas" jika sudah scroll cukup jauh ke bawah
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] p-3 md:p-3.5 bg-accent-blue text-midnight-darker rounded-full shadow-[0_4px_20px_-4px_rgba(58,134,255,0.6)] transition-all duration-300 transform hover:scale-110 focus:outline-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        title="Scroll ke atas"
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </button>
    </>
  );
}
