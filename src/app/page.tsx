"use client";

import GlobalNav from "@/components/GlobalNav";
import ChapterNav from "@/components/ChapterNav";
import HeroSections from "@/components/HeroSections";
import GuidedTour from "@/components/GuidedTour";
import WhichIphone from "@/components/WhichIphone";
import WaysToSave from "@/components/WaysToSave";
import FeaturedAccessories from "@/components/FeaturedAccessories";
import ServiceBanners from "@/components/ServiceBanners";
import GetMore from "@/components/GetMore";
import WhatMakesIphone from "@/components/WhatMakesIphone";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans flex flex-col antialiased">
      {/* 1. Global Navigation (Black glassy bar, 44px) */}
      <GlobalNav />

      {/* 2. Chapter Navigation (Active/New iPhone models horizontal swiper) */}
      <ChapterNav />

      {/* 3. Promo Announcement Bar */}
      <div className="w-full bg-[#f5f5f7] border-b border-[#d2d2d7] py-3.5 text-center px-4 select-none">
        <p className="text-[12px] md:text-[14px] text-[#1d1d1f] font-normal tracking-wide inline-flex flex-wrap items-center justify-center gap-1">
          <span>
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.<sup>1</sup>
          </span>
          <Link
            href="/trade-in"
            className="text-[#06c] hover:underline inline-flex items-center font-normal group"
          >
            Shop iPhone
            <span className="inline-block transform group-hover:translate-x-0.5 transition-transform ml-0.5 text-[10px]">→</span>
          </Link>
        </p>
      </div>

      {/* Main Structural Page Flow */}
      <main className="flex-1">
        {/* 4. Hero Sections (iPhone 14, 14 Pro, SE Segmented Heros) */}
        <HeroSections />

        {/* 5. Guided Tour Segment */}
        <GuidedTour />

        {/* 6. Which iPhone is right for you? (Feature Matrix & Comparison Cards) */}
        <WhichIphone />

        {/* 7. Ways to save on iPhone (Carrier Deals, Apple Card Daily Cash, Trade-in) */}
        <WaysToSave />

        {/* 8. Featured Accessories (MagSafe, AirTag, AirPods) */}
        <FeaturedAccessories />

        {/* Service Banners Section */}
        <ServiceBanners />

        {/* What makes an iPhone an iPhone? (iOS 16 & Switching showcases) */}
        <WhatMakesIphone />

        {/* 9. Get More (Apple One, TV+, Music, Fitness+, Gift Card, Research App) */}
        <GetMore />
      </main>

      {/* 11. Footer (Banners, Disclaimers, Sitemap Accordions, Legal Links) */}
      <Footer />
    </div>
  );
}
