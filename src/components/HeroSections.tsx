"use client";

import Link from "next/link";

export default function HeroSections() {
  return (
    <section className="w-full flex flex-col gap-3 bg-[#f5f5f7] select-none">
      {/* 1. iPhone 14 Hero (White background, yellow phone) */}
      <div className="w-full min-h-[600px] md:min-h-[750px] bg-white flex flex-col items-center justify-between pt-12 md:pt-16 pb-0 overflow-hidden relative border-b border-zinc-100">
        <div className="flex flex-col items-center text-center max-w-[800px] px-6 z-10">
          <p className="text-[#6e6e73] text-[16px] md:text-[18px] font-semibold mb-1">New</p>
          <div className="h-5 md:h-6 relative w-24 mb-4 flex items-center justify-center">
            <img
              src="/assets/43ef441f4d116f959149c7317e3f44ed2c2f0650.png"
              alt="iPhone 14 logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h2 className="text-[#1d1d1f] text-[30px] sm:text-[36px] md:text-[56px] font-bold tracking-tight leading-tight">
            Two great sizes.<br className="hidden sm:inline" /> Now with a splash of yellow.
          </h2>
          <p className="text-[#6e6e73] text-[17px] md:text-[21px] font-normal tracking-wide mt-3">
            From $799 or $33.29/mo. for 24 mo. before trade‑in²
          </p>

          <div className="flex items-center gap-6 mt-4">
            <Link
              href="/buy-iphone-14"
              className="bg-[#0071e3] text-white text-[15px] md:text-[17px] font-medium px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>
            <Link
              href="/iphone-14"
              className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal flex items-center gap-1 group"
            >
              Learn more
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">❯</span>
            </Link>
          </div>
        </div>

        {/* Large phone image */}
        <div className="w-full max-w-[1000px] mt-8 md:mt-12 flex justify-center shrink-0">
          <img
            src="/assets/86358f524b6abd6780ed1a840407586dd05bb756.png"
            alt="iPhone 14 in Yellow"
            className="w-[90%] md:w-full max-w-[980px] h-auto object-contain transform hover:scale-[1.01] transition-transform duration-700"
          />
        </div>
      </div>

      {/* 2. iPhone 14 Pro Hero (Sleek Black theme) */}
      <div className="w-full h-[580px] md:h-[696px] bg-black flex flex-col items-center overflow-hidden relative select-none">
        {/* Text Container: 0:1859 */}
        <div className="flex flex-col items-center text-center px-6 z-10 mt-[60px] md:mt-[102px] h-auto min-h-[190px] md:h-[205px]">
          {/* Logo: 0:1860 */}
          <div className="h-[18px] md:h-[20px] relative w-[120px] md:w-[140px] flex items-center justify-center">
            <img
              src="/assets/6928f503e10b973ffcbb381fafb6997caebd3e4d.png"
              alt="iPhone 14 Pro logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Title: 0:1861 */}
          <h2 className="text-[#f5f5f7] text-[32px] md:text-[42px] font-bold text-center mt-[8px] md:mt-[13px] h-auto min-h-[44px] md:h-[58px] leading-tight md:leading-[52px] tracking-[-0.144px]">
            Pro. Beyond.
          </h2>

          {/* Price / Subtitle: 0:1862 */}
          <p className="text-[#f5f5f7] text-[16px] md:text-[19px] font-normal text-center mt-[12px] md:mt-[23px] h-auto md:h-[29px] leading-normal md:leading-[29px] tracking-[0.231px]">
            From $999 or $41.62/mo. for 24 mo. before trade‑in²
          </p>

          {/* Buttons: 0:1864 */}
          <div className="flex items-center gap-[28px] mt-[8px] md:mt-[6.5px] h-auto min-h-[50px] md:h-[59px]">
            <Link
              href="/buy-iphone-14-pro"
              className="bg-[#0071e3] text-white font-normal hover:bg-[#0077ed] transition-colors flex items-center justify-center shrink-0 min-w-[61.2px] h-[32px] md:h-[36px] px-[16px] py-[8px] rounded-full text-[15px] md:text-[17px] leading-[20px] tracking-[-0.374px]"
            >
              Buy
            </Link>
            <Link
              href="/iphone-14-pro"
              className="text-[#2997ff] hover:underline font-normal flex items-center gap-1 group text-[18px] md:text-[21px] leading-[29px] tracking-[0.231px]"
            >
              Learn more
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">❯</span>
            </Link>
          </div>
        </div>

        {/* Large phone image: 0:1869 */}
        <div className="w-full flex justify-center shrink-0 absolute bottom-0 z-0 h-[280px] sm:h-[340px] md:h-[393px]">
          <img
            src="/assets/6c27133b8d89f36564dcafa8c8b3c0a44b4d00ca.png"
            alt="iPhone 14 Pro"
            className="w-[90%] md:w-full max-w-[961px] h-full object-contain object-bottom transform hover:scale-[1.01] transition-transform duration-700"
          />
        </div>
      </div>

      {/* 3. iPhone SE Hero (Split-screen theme on desktop, stacked on mobile) */}
      <div className="w-full min-h-[500px] md:h-[650px] bg-[#fbfbfd] grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden border-b border-zinc-200">
        {/* Left Side: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center px-12 md:pl-28 py-16 md:py-0">
          <div className="h-5 md:h-6 relative w-24 mb-4 flex items-center md:justify-start justify-center">
            <img
              src="/assets/cca6c62e94b7061f85af8ecdee5145b3ed3d9f93.png"
              alt="iPhone SE logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h2
            className="text-[30px] sm:text-[36px] md:text-[48px] font-bold tracking-tight leading-tight bg-clip-text text-transparent font-sans"
            style={{
              backgroundImage: "linear-gradient(90deg, rgb(30, 55, 145) 0%, rgb(41, 72, 177) 40%, rgb(49, 83, 198) 55%, rgb(56, 95, 218) 60%)",
            }}
          >
            Love the power.<br />Love the price.
          </h2>
          <p className="text-[#1d1d1f] text-[17px] md:text-[20px] font-normal tracking-wide mt-4">
            From $429 or $17.87/mo. for 24 mo. before trade‑in²
          </p>

          <div className="flex items-center gap-6 mt-6">
            <Link
              href="/buy-iphone-se"
              className="bg-[#0071e3] text-white text-[15px] md:text-[17px] font-medium px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>
            <Link
              href="/iphone-se"
              className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal flex items-center gap-1 group"
            >
              Learn more
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">❯</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full h-full flex items-center justify-center md:justify-start overflow-hidden relative shrink-0">
          <img
            src="/assets/34a44a3b32d2a405a75848544694712418b2f6f1.png"
            alt="iPhone SE"
            className="w-[85%] md:w-full max-w-[490px] h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
