"use client";

import Link from "next/link";

export default function WhatMakesIphone() {
  return (
    <section className="w-full bg-[#f5f5f7] pt-[60px] pb-12 px-4 sm:pt-[95px] sm:pb-20 sm:px-[30px] select-none border-b border-zinc-200">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[#1d1d1f] text-[28px] sm:text-[38px] md:text-[51px] font-bold tracking-tight md:tracking-[-0.28px] text-center mb-10 sm:mb-[70px] leading-tight sm:leading-[60px]">
          What makes an iPhone an iPhone?
        </h2>

        {/* Cards container - 30px gap in Figma between Cards */}
        <div className="w-full flex flex-col gap-[30px]">
          
          {/* Card 1: iOS 16 */}
          <div className="w-full bg-white flex flex-col items-center h-auto md:h-[600px] relative overflow-hidden pb-0">
            {/* Desktop Text Content (Absolute top-[80px] left-1/2 -translate-x-1/2 w-[750px]) */}
            <div className="w-full md:w-[750px] pt-6 px-6 pb-0 sm:pt-12 sm:px-12 sm:pb-0 md:p-0 md:absolute md:top-[80px] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center text-center z-10">
              <h3 className="text-[#1d1d1f] text-[26px] sm:text-[34px] md:text-[45px] font-bold tracking-tight md:tracking-[-0.144px] leading-tight md:leading-[52px]">
                iOS 16
              </h3>
              <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[19px] font-normal mt-3 leading-relaxed md:leading-[29px] tracking-[0.231px]">
                Personal is powerful.
              </p>
              <Link
                href="/ios-16"
                className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1 group/link"
              >
                Learn more
                <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] md:text-[18px]">❯</span>
              </Link>
            </div>

            {/* iOS 16 image - centered, bottom-flush on desktop */}
            <div className="w-full md:w-[63.04%] h-auto md:h-[71.33%] md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 overflow-hidden pointer-events-none mt-[24px] md:mt-auto flex items-end justify-center px-0">
              <img
                src="/assets/10f8ec3bc031a6e25c67e102a5c7e809c76bbf5c.png"
                alt="iOS 16 on iPhone"
                className="w-full h-auto md:h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Card 2: Switching to iPhone */}
          <div className="w-full md:w-[675px] mx-auto bg-white flex flex-col items-center h-auto md:h-[593px] relative overflow-hidden pb-0">
            {/* Desktop Text Content (Absolute top-[61px] w-full) */}
            <div className="w-full pt-6 px-6 pb-0 sm:pt-12 sm:px-12 sm:pb-0 md:p-0 md:absolute md:top-[61px] md:left-0 flex flex-col items-center text-center z-10">
              <h3 className="text-[#1d1d1f] text-[24px] sm:text-[32px] md:text-[44px] font-bold tracking-tight md:tracking-[-0.144px] leading-tight md:leading-[52px]">
                Switching to iPhone <br className="hidden sm:inline" /> is super simple.
              </h3>
              <Link
                href="/switch"
                className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1 group/link"
              >
                Learn more
                <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] md:text-[18px]">❯</span>
              </Link>
            </div>

            {/* Switching image - bottom-flush, fills card width on desktop */}
            <div className="w-full md:w-full h-auto md:h-[357px] md:absolute md:bottom-0 md:left-0 overflow-hidden pointer-events-none mt-[24px] md:mt-auto flex items-end justify-center px-0">
              <img
                src="/assets/1b65c9a46381e26a4324cf13bf0d19b0c8b7a598.png"
                alt="Switching to iPhone graphic"
                className="w-full h-auto md:h-full object-cover object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
