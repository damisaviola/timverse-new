import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  BookmarkPlus, 
  MessageCircle, 
  Link as LinkIcon, 
  ChevronRight, 
  ExternalLink, 
  Info
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <article className="min-h-screen bg-midnight-darker pt-24 sm:pt-32 pb-10 overflow-x-hidden selection:bg-accent-blue/30 text-slate-300">
      
      {/* --- Article Header Section --- */}
      <header className="relative w-full">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Link to="/" className="group text-slate-500 hover:text-white transition-all flex items-center text-[10px] font-bold uppercase tracking-[0.2em]">
              <ArrowLeft className="w-3.5 h-3.5 mr-2 transition-transform group-hover:-translate-x-1" /> 
              Beranda
            </Link>
            <span className="text-slate-800">/</span>
            <span className="text-accent-blue text-[10px] font-bold uppercase tracking-[0.2em]">Teknologi</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-center mb-10 tracking-tighter">
            Era Baru AI: Model Bahasa Generasi Berikutnya Resmi Diluncurkan
          </h1>
          
          <p className="text-base sm:text-xl text-slate-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Perusahaan raksasa teknologi baru saja merilis model buatan terbaru yang diklaim mampu menyamai kemampuan penalaran deduktif logis manusia."
          </p>

          {/* Metadata: Garis bawah dihilangkan, diganti padding saja */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-12">
             <div className="flex items-center gap-3">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" alt="Author" className="w-10 h-10 rounded-full ring-1 ring-white/10 p-0.5 bg-midnight-card" />
               <div className="text-left">
                 <div className="font-bold text-white text-sm tracking-wide">Budi Santoso</div>
                 <div className="text-[10px] text-slate-500 uppercase tracking-widest">Senior Tech Editor</div>
               </div>
             </div>
             <div className="hidden sm:block w-px h-8 bg-white/10"></div>
             <div className="flex items-center gap-5 text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-widest">
               <div className="flex items-center gap-2">
                 <Clock className="w-4 h-4 text-accent-blue" />
                 <span>7 April 2026</span>
               </div>
               <div className="flex items-center gap-2">
                 <MessageCircle className="w-4 h-4 text-accent-blue" />
                 <span>124 Komentar</span>
               </div>
             </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80" 
              alt="Artikel Cover" 
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </header>

      {/* --- Article Body Section --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 relative">
          <aside className="lg:w-12 shrink-0">
            <div className="sticky top-32 flex lg:flex-col gap-4 justify-center items-center mb-8 lg:mb-0">
              <button title="Salin Link" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent-blue transition-all">
                <LinkIcon className="w-4 h-4" />
              </button>
              <button title="Simpan Artikel" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent-blue transition-all">
                <BookmarkPlus className="w-4 h-4" />
              </button>
            </div>
          </aside>

          <div className="prose prose-invert prose-slate max-w-none flex-1 min-w-0
            prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:text-[15px] sm:prose-p:text-[16px] prose-p:mb-6
            prose-blockquote:border-l-2 prose-blockquote:border-l-accent-blue prose-blockquote:bg-white/[0.03] prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
          ">
            <p className="text-white/90 font-medium text-[17px] sm:text-[18px] leading-relaxed mb-8">
              Jakarta, Midnight News &mdash; Industri kecerdasan buatan baru saja terguncang usai peluncuran platform model bahasa generasi terbaru. Tidak sekadar memproses kata, sistem ini mengklaim mampu memahami penalaran multi-step setajam peneliti ilmiah profesional.
            </p>
            <p>
              Dengan bermodalkan dataset terkurasi yang lebih minim bias serta optimisasi di level infrastruktur perangkat keras, efisiensi yang dicapai digadang-gadang 10 kali lipat lebih cepat daripada pendahulunya.
            </p>
            
            <h2>Melampaui Batas Tes Turing</h2>
            <p>
              Hingga tahun lalu, parameter kesuksesan AI paling populer kerap merujuk ke kemampuannya mengelabui seorang manusia agar percaya bahwa ia sedang berbincang dengan manusia lain.
            </p>

            {/* --- Source Section: Garis diubah menjadi background subtle --- */}
            <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight">
                  <Info className="w-4 h-4 text-accent-blue" />
                  Sumber Berita & Referensi:
                </div>
                <ul className="list-none p-0 m-0 space-y-3">
                  <li>
                    <a href="https://reuters.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-accent-blue transition-colors group">
                      <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Reuters - Global AI Development Report 2026
                    </a>
                  </li>
                  <li>
                    <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-accent-blue transition-colors group">
                      <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      TechCrunch - Next-Gen Language Models Launch Event
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Berita Terbaru */}
          <aside className="w-full lg:w-[300px] xl:w-[340px] shrink-0 mt-12 lg:mt-0">
            <div className="sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-5 bg-accent-blue rounded-full"></div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Berita Terbaru</h3>
                </div>
              </div>
              
              <div className="flex flex-col gap-5">
                {LATEST_NEWS.map((news) => (
                  <Link to={`/news/${news.id}`} key={news.id} className="group flex gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all">
                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl bg-midnight-blue">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col py-0.5">
                      <span className="text-accent-blue text-[9px] font-bold uppercase tracking-widest mb-1.5">{news.category}</span>
                      <h4 className="text-white font-bold text-sm leading-[1.4] group-hover:text-accent-blue transition-colors line-clamp-3 mb-2">{news.title}</h4>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[9px] font-medium uppercase tracking-wider mt-auto">
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

      {/* --- Section Rekomendasi Berita --- */}
      {/* PERUBAHAN: Background sedikit berbeda untuk memisahkan section tanpa garis keras */}
      <section className="w-full bg-white/[0.015] py-20 mt-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Rekomendasi Untuk Anda</h2>
            </div>
            <Link to="/" className="text-accent-blue text-xs font-bold uppercase tracking-widest flex items-center hover:gap-2 transition-all">
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECOMMENDATIONS.map((news) => (
              <div key={news.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-lg">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  {news.category}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-accent-blue transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-slate-500 text-[10px] font-medium uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Meta & Tags */}
      <footer className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {['#AI', '#Tech', '#Future'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-accent-blue/10 hover:text-accent-blue transition-all">
                {tag}
              </span>
            ))}
          </div>
          <button className="text-slate-600 hover:text-accent-blue font-bold text-[10px] uppercase tracking-[0.2em] transition-colors">
            Laporkan Masalah
          </button>
        </div>
      </footer>
    </article>
  );
}