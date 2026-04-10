import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  BookmarkPlus, 
  MessageCircle, 
  Share2, 
  ChevronRight, 
  ExternalLink, 
  Info,
  Volume2,
  VolumeX,
  Minus,
  Plus
} from 'lucide-react';

const RECOMMENDATIONS = [
  {
    id: 2,
    title: "Robot Humanoid Kini Mulai Mengambil Alih Pekerjaan Gudang di Jerman",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    category: "Robotik",
    time: "3 Jam Lalu"
  },
  {
    id: 3,
    title: "Apple Rilis Headset Mixed Reality Versi Murah untuk Pasar Asia",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
    category: "Gadget",
    time: "5 Jam Lalu"
  },
  {
    id: 4,
    title: "Starlink Resmi Masuk Pelosok Papua, Internet Cepat Kini Merata",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    category: "Telekomunikasi",
    time: "1 Hari Lalu"
  }
];

const LATEST_NEWS = [
  {
    id: 101,
    title: "Startup Lokal Tembus Pasar Eropa dengan Solusi Energi Terbarukan",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=400&q=80",
    category: "Bisnis",
    time: "45 Menit Lalu"
  },
  {
    id: 102,
    title: "Update Keamanan Kritis: Segera Perbarui OS Smartphone Anda",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=400&q=80",
    category: "Keamanan",
    time: "2 Jam Lalu"
  },
  {
    id: 103,
    title: "Eksplorasi Mars: Robot Penjelajah Temukan Bukti Aliran Air Kuno",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b5609ce?auto=format&fit=crop&w=400&q=80",
    category: "Sains",
    time: "4 Jam Lalu"
  },
  {
    id: 104,
    title: "Mesin Quantum Pertama di Asia Tenggara Resmi Beroperasi",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
    category: "Teknologi",
    time: "6 Jam Lalu"
  }
];

export function NewsDetail() {
  const { id } = useParams();
  
  const [fontSize, setFontSize] = useState(16);
  const [isPlaying, setIsPlaying] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Cleanup speech synthesis on unmount to avoid ghost reading
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const textToRead = contentRef.current?.innerText || "";
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'id-ID'; // Set language to Indonesian
      utterance.rate = 0.95; // Slightly slower for better pacing
      
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      window.speechSynthesis.cancel(); // Stop any pending speech
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <article className="min-h-screen bg-midnight-darker pb-20 overflow-x-hidden selection:bg-accent-blue/30 text-slate-300">
      {/* Top App Bar Mobile & Desktop */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 flex flex-row items-center justify-between bg-midnight-darker/80 backdrop-blur-xl border-b border-white/5 transition-all">
         <Link to="/" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/5">
           <ArrowLeft className="w-5 h-5" />
         </Link>
         <div className="flex items-center gap-2 sm:gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/5" title="Simpan">
              <BookmarkPlus className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/5" title="Bagikan">
              <Share2 className="w-5 h-5" />
            </button>
         </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative w-full pt-[64px] sm:pt-[76px]">
        {/* Featured Image */}
        <div className="w-full h-[40vh] sm:h-[50vh] xl:h-[60vh] max-h-[600px] relative group">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80" 
            alt="Artikel Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker via-transparent to-transparent"></div>
        </div>

        {/* Header Content */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative -mt-16 sm:-mt-24 z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md border border-accent-blue/20">
              Teknologi
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-accent-blue" /> 7 April 2026
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8">
            Era Baru AI: Model Bahasa Generasi Berikutnya Resmi Diluncurkan
          </h1>

          <div className="flex flex-wrap items-center justify-between border-y border-white/10 py-4 gap-4">
             <div className="flex items-center gap-3">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" alt="Author" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-midnight-card border border-white/10" />
               <div>
                 <div className="font-bold text-white text-sm">Budi Santoso</div>
                 <div className="text-[11px] text-slate-400">Senior Tech Editor</div>
               </div>
             </div>
             
             <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>124 Komentar</span>
             </div>
          </div>
        </div>
      </header>

      {/* --- Article Body Section --- */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Content */}
          <div className="flex-1 lg:max-w-3xl">
            
            {/* Accessibility Tool Bar */}
            <div className="flex items-center flex-wrap gap-4 mb-8 py-3 border-b border-white/5">
              <button 
                onClick={toggleAudio} 
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg ${isPlaying ? 'bg-accent-blue text-midnight-darker shadow-accent-blue/20' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}`}
              >
                {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {isPlaying ? 'Hentikan Audio' : 'Dengarkan Artikel'}
              </button>
              
              <div className="flex items-center gap-1 bg-white/5 border border-white/5 rounded-xl px-2 py-1.5 sm:ml-auto">
                <button onClick={() => setFontSize(f => Math.max(12, f - 2))} className="p-1.5 text-slate-400 hover:text-white transition-colors" title="Perkecil Teks">
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-3 text-slate-300 font-bold text-xs uppercase tracking-widest">Ukuran {fontSize}px</div>
                <button onClick={() => setFontSize(f => Math.min(28, f + 2))} className="p-1.5 text-slate-400 hover:text-white transition-colors" title="Perbesar Teks">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div 
              ref={contentRef}
              className="prose prose-invert prose-slate max-w-none break-words
                prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:mb-6
                prose-h2:font-bold prose-h2:text-white prose-h2:mt-10 prose-h2:mb-4 transition-all duration-300"
              style={{ fontSize: `${fontSize}px` }}
            >
            <p className="text-white/90 font-medium leading-relaxed mb-8" style={{ fontSize: '1.1em' }}>
              Jakarta, Timverse News &mdash; Industri kecerdasan buatan baru saja terguncang usai peluncuran platform model bahasa generasi terbaru. Tidak sekadar memproses kata, sistem ini mengklaim mampu memahami penalaran multi-step setajam peneliti ilmiah profesional.
            </p>
            
            <p>
              Dengan bermodalkan dataset terkurasi yang lebih minim bias serta optimisasi di level infrastruktur perangkat keras, efisiensi yang dicapai digadang-gadang 10 kali lipat lebih cepat daripada pendahulunya. Perubahan ini membawa dampak signifikan bagi pengembangan aplikasi di masa depan yang bergantung pada pemrosesan bahasa alami.
            </p>
            
            <h2>Melampaui Batas Tes Turing</h2>
            <p>
              Hingga tahun lalu, parameter kesuksesan AI paling populer kerap merujuk ke kemampuannya mengelabui seorang manusia agar percaya bahwa ia sedang berbincang dengan manusia lain. Namun, standar tes turing kini dinilai tidak lagi cukup mengukur kemampuan model baru. Kecepatan dan akurasinya dalam memecahkan masalah matematis kompleks membuktikan loncatan evolusi teknologi yang nyata.
            </p>

            {/* Source Box */}
            <div className="mt-10 p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-4">
                <Info className="w-4 h-4 text-accent-blue" />
                Referensi Jurnalistik:
              </div>
              <ul className="space-y-3 p-0 m-0 list-none">
                <li>
                  <a href="https://reuters.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent-blue transition-colors group">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Reuters - Global AI Development Report 2026
                  </a>
                </li>
                <li>
                  <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent-blue transition-colors group">
                    <ExternalLink className="w-3.5 h-3.5" />
                    TechCrunch - Next-Gen Language Models Launch Event
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
          <aside className="w-full lg:w-[320px] shrink-0 mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-[90px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-5 bg-accent-blue rounded-full"></div>
                <h3 className="text-lg font-bold text-white">Berita Terbaru</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {LATEST_NEWS.map((news) => (
                  <Link to={`/news/${news.id}`} key={news.id} className="group flex gap-4 p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl hover:bg-white/[0.06] transition-colors">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-midnight-card">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col flex-1 py-0.5">
                      <span className="text-accent-blue text-[10px] font-bold uppercase tracking-wider mb-1.5">{news.category}</span>
                      <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-accent-blue transition-colors line-clamp-2 mb-2">{news.title}</h4>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-medium mt-auto">
                        <Clock className="w-3 h-3" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* --- Section Rekomendasi --- */}
      <section className="w-full border-t border-white/5 bg-midnight-darker/50 pt-16 pb-12 mt-4">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Rekomendasi Untuk Anda</h2>
            <Link to="/" className="text-accent-blue text-xs font-bold uppercase tracking-wider flex items-center hover:opacity-80 transition-opacity">
              Lainnya <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECOMMENDATIONS.map((news) => (
              <div key={news.id} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-white/5 bg-midnight-card">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <span className="text-accent-blue text-[10px] font-bold uppercase tracking-wider mb-2 block">
                  {news.category}
                </span>
                <h3 className="text-white font-semibold text-base leading-tight group-hover:text-accent-blue transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Meta & Tags */}
      <footer className="max-w-5xl mx-auto px-5 sm:px-8 pt-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {['#AI', '#Tech', '#Future', '#Inovasi'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-md text-[11px] font-medium text-slate-400 cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <button className="text-slate-500 hover:text-accent-blue text-[11px] uppercase tracking-widest font-semibold transition-colors">
            Laporkan Kendala
          </button>
        </div>
      </footer>

    </article>
  );
}