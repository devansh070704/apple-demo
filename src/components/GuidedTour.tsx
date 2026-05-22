"use client";

import Link from "next/link";

export default function GuidedTour() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8 select-none">
      <div className="max-w-[1410px] mx-auto h-[460px] sm:h-[600px] md:h-[814px] rounded-[28px] md:rounded-[34px] overflow-hidden relative shadow-lg group">
        {/* Background Image */}
        <img
          src="/assets/de10401ca4014506c428a1f45002d44ea199786e.png"
          alt="A Guided Tour of iPhone 14"
          className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-[1.01] transition-transform duration-[1500ms]"
        />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent md:from-black/50"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 sm:pl-16 md:pl-36 lg:pl-52 pr-6 text-white z-10">
          <p className="text-[18px] md:text-[21px] font-bold tracking-tight text-zinc-200">
            A Guided Tour of
          </p>
          <h2 className="text-[28px] sm:text-[44px] md:text-[56px] font-bold tracking-tight leading-tight mt-2 max-w-[500px]">
            iPhone 14 &<br />iPhone 14 Pro
          </h2>
          <Link
            href="/guided-tour"
            className="mt-6 md:mt-8 bg-white text-black text-[15px] md:text-[17px] font-medium px-6 py-2.5 rounded-full hover:bg-zinc-100 transition-colors shadow-sm"
          >
            Watch the film
          </Link>
        </div>
      </div>
    </section>
  );
}
