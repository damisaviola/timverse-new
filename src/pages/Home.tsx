import React from 'react';
import { TrendingTicker } from '../components/common/TrendingTicker';
import { MainHeadline } from '../components/home/MainHeadline';
import { LatestNewsList } from '../components/home/LatestNewsList';
import { EditorsPicks } from '../components/home/EditorsPicks';
import { NewsGrid } from '../components/home/NewsGrid';
import { NationalNewsSection } from '../components/home/NationalNewsSection';
import { CategoryHighlight } from '../components/home/CategoryHighlight';
import { PopularNewsSection } from '../components/home/PopularNewsSection';
import { ExploreCategories } from '../components/home/ExploreCategories';

export function Home() {
  return (
    <main>
      <TrendingTicker />
      <MainHeadline />
      
      {/* Bagian Berita Populer (Trending) Pindah Ke Atas */}
      <PopularNewsSection />

      <ExploreCategories />
      
      {/* Spesial Kategori Topik (Inovasi Teknologi) */}
      <CategoryHighlight />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <LatestNewsList />
          </div>
          
          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <EditorsPicks />
          </div>
        </div>
      </div>

      {/* Bagian Berita Nasional (Menggantikan Opini) */}
      <NationalNewsSection />

      {/* Rekomendasi Berita Tambahan di Bawah */}
      <NewsGrid />
    </main>
  );
}
