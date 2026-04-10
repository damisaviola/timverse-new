import React, { useEffect } from 'react';
import { Mail, CheckCircle, PenTool, Image as ImageIcon } from 'lucide-react';

export function Contribute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-midnight-darker pt-32 lg:pt-40 pb-16 px-4 md:px-8 text-slate-300 selection:bg-accent-blue/30 overflow-x-hidden relative">
      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="text-center mb-16">
           <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent-blue shadow-2xl">
             <PenTool className="w-8 h-8" />
           </div>
           <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Mulai Menulis di TIMVERSE<span className="text-accent-blue">.</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
             Punya gagasan menarik, opini teknologi, atau liputan mendalam? Kirimkan karya tulismu dan jadilah bagian dari revolusi informasi kami.
           </p>
        </div>

        <div className="bg-midnight-card border border-white/5 rounded-3xl p-6 md:p-10 mb-10 shadow-xl relative overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-blue blur-[100px] opacity-10 rounded-full pointer-events-none"></div>

           <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Syarat & Ketentuan Penulisan</h2>
           <div className="space-y-3 md:space-y-4 relative z-10">
             {[
               "Artikel sepenuhnya orisinal, tidak menyalin tulisan pihak lain (plagiarisme) dan belum pernah dipublikasikan di media mana pun.",
               "Topik relevan dengan fokus utama kami (Teknologi, Sains, Industri Kreatif, Ekonomi, Olahraga, atau Gaya Hidup).",
               "Panjang artikel minimal 500 kata hingga maksimal 1500 kata.",
               "Ditulis menggunakan tata Bahasa Indonesia yang baik, lugas, dan sesuai EYD.",
               "Hindari tulisan yang mengandung ujaran kebencian, hoaks, serta SARA.",
               "Sertakan sumber referensi (link) jika menyajikan data, angka, atau klaim ilmiah."
             ].map((req, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                   <div className="mt-0.5 text-accent-blue shrink-0">
                     <CheckCircle className="w-5 h-5 bg-midnight-blue rounded-full" />
                   </div>
                   <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{req}</p>
                </div>
             ))}
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-midnight-card border border-white/5 rounded-3xl p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute -bottom-8 -right-8 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <ImageIcon className="w-48 h-48" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Ketentuan Visual</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 relative z-10">
                Sangat disarankan untuk melampirkan gambar ilustrasi pendukung resolusi tinggi (minimal HD) yang sifatnya bebas hak cipta (royalty-free), atau sertakan nama beserta link fotografer aslinya.
              </p>
           </div>
           
           <div className="bg-gradient-to-br from-accent-blue/10 to-transparent border border-accent-blue/20 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Cara Mengirimkan Artikel</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Kemas artikel Anda dalam bentuk dokumen <strong className="text-white">(.doc / .docx)</strong> atau teks langsung di badan email. Sertakan profil singkat, link media sosial, dan pas foto di badan email.
                </p>
              </div>
              
              <a href="mailto:redaksi@timverse.id?subject=[KONTRIBUSI] - Judul Artikel Anda" className="flex items-center justify-center gap-3 w-full bg-accent-blue text-midnight-darker font-bold py-4 px-6 rounded-xl hover:bg-blue-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-blue/20 mt-auto">
                <Mail className="w-5 h-5" />
                <span className="tracking-wide">Kirim ke redaksi@timverse.id</span>
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
