"use client";

import Link from "next/link";

export default function GetMore() {
  const tvPlusShows = [
    "/assets/3a1f6a8401836a7325b3547ae03aa16dfdfad542.png",
    "/assets/ff4d0fab56ddd3fc4a31c2d650f03286a0c0466e.png",
    "/assets/4eba44008d87e252d7a87e5c7265847809f62366.png",
    "/assets/df2c3c8c22a5265cd200e49951b25ebba1f016ed.png",
    "/assets/07c9a909ae4d3d23ebad8576b719e22724c0f222.png",
    "/assets/4fe91f36e0c4caa61622f6a25b377aeb33528f97.png",
    "/assets/021116dfc8587710cdc0661c4238cf905be2d344.png",
  ];

  return (
    <section className="w-full bg-[#f5f5f7] py-12 px-4 sm:py-20 sm:px-10 overflow-clip select-none">
      <div className="max-w-[1380px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-[#1d1d1f] text-[28px] sm:text-[40px] md:text-[50px] font-bold tracking-tight text-center mb-8 sm:mb-12">
          Get more out of your iPhone.
        </h2>

        {/* Grid Container */}
        <div className="w-full flex flex-col gap-6 lg:gap-[30px]">
          {/* Row 1: Apple One - Full Width */}
          <div className="w-full bg-white rounded-none overflow-hidden min-h-[500px] lg:h-[609px] flex flex-col lg:flex-row items-center justify-between p-6 sm:p-12 md:p-16 gap-8 shadow-none">
            {/* Left: Graphic */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/assets/91c87fe42ecec24f969d2cc1d6248d21ac30e8c4.png"
                alt="Apple One Services"
                className="max-h-[220px] sm:max-h-[329px] object-contain hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            {/* Right: Info */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center max-w-[420px]">
              <img
                src="/assets/6679f144ab40f1339d61e7138214bea439ce693e.png"
                alt="Apple One"
                className="h-[100px] object-contain mb-6 invert-0"
              />
              <p className="text-[#1d1d1f] text-[20px] md:text-[25px] font-bold leading-tight mb-8">
                Bundle up to six Apple services. And enjoy more for less.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <Link
                  href="/apple-one/try"
                  className="bg-[#0071e3] text-white px-5 py-2 rounded-full text-[14px] md:text-[17px] font-medium hover:bg-[#0077ed] transition-colors"
                >
                  Try it free<sup>9</sup>
                </Link>
                <Link
                  href="/apple-one"
                  className="text-[#06c] hover:underline text-[17px] md:text-[21px] flex items-center group font-normal"
                >
                  Learn more
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-1 text-sm">
                    {"\u203A"}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: 2 Column (Apple TV+ and Apple Music) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px]">
            {/* Block 2: Apple TV+ (Left) */}
            <div className="bg-[#090a0e] text-white rounded-none overflow-hidden h-auto lg:h-[630.42px] flex flex-col pt-12 lg:pt-16 pb-6 lg:pb-8 relative group shadow-none">
              {/* Top Text & Logo */}
              <div className="flex flex-col items-center text-center px-6">
                <img
                  src="/assets/40888763717d889c8f32fac042c3d6cdda51b248.png"
                  alt="Apple TV+"
                  className="h-[39px] object-contain mb-6 brightness-200"
                />
                <p className="text-[#f5f5f7] text-[18px] md:text-[21px] leading-snug max-w-[380px] mb-4 md:mb-6">
                  Get 3 months of Apple TV+ free when you buy an iPhone.<sup>10</sup>
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 mb-0">
                  <Link
                    href="/apple-tv/try"
                    className="text-[#2997ff] hover:underline text-[17px] md:text-[21px] flex items-center group font-normal"
                  >
                    Try it free
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-1 text-sm">
                      {"\u203A"}
                    </span>
                  </Link>
                  <Link
                    href="/apple-tv"
                    className="text-[#2997ff] hover:underline text-[17px] md:text-[21px] flex items-center group font-normal"
                  >
                    Learn more
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-1 text-sm">
                      {"\u203A"}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom: Double-Row Offset Horizontal Shows Gallery — Figma node 0:2048 */}
              <div className="w-full flex flex-col gap-3 pb-8 mt-2 lg:mt-auto overflow-hidden relative">
                {/* Row 1: Shifted left by -210px on desktop, swipeable */}
                <div className="w-full overflow-x-auto scrollbar-none whitespace-nowrap">
                  <div className="flex gap-[12px] pl-[6px] lg:-ml-[210px] w-max">
                    {tvPlusShows.slice(0, 4).map((src, index) => (
                      <div
                        key={index}
                        className="shrink-0 w-[238px] h-[135px] rounded-[10px] overflow-hidden relative group/item shadow-sm"
                      >
                        <img src={src} alt="Show Thumbnail" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1 hover:scale-105 transition-transform">
                            Stream now
                            <span className="text-xs">▶</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Aligned to left edge (0px) on desktop, swipeable */}
                <div className="w-full overflow-x-auto scrollbar-none whitespace-nowrap">
                  <div className="flex gap-[12px] pl-[6px] lg:ml-0 w-max">
                    {tvPlusShows.slice(4).map((src, index) => (
                      <div
                        key={index}
                        className="shrink-0 w-[238px] h-[135px] rounded-[10px] overflow-hidden relative group/item shadow-sm"
                      >
                        <img src={src} alt="Show Thumbnail" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1 hover:scale-105 transition-transform">
                            Stream now
                            <span className="text-xs">▶</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3: Apple Music (Right) — Figma node 0:2082 */}
            <div className="bg-white rounded-none overflow-hidden h-auto lg:h-[630.42px] flex flex-col pt-12 lg:pt-[69px] pb-6 lg:pb-0 shadow-none">
              {/* Top: Logo + Text + Links — centered block, 450px wide in Figma */}
              <div className="flex flex-col items-center text-center px-6">
                {/* Apple Music Logo — w-[154px] h-[36.9px] per Figma, no invert */}
                <img
                  src="/assets/a9f21355108eff74e59aa9cb64f7543733de0a4a.svg"
                  alt="Apple Music"
                  className="w-[154px] h-[36.9px] object-contain mb-[52.42px]"
                />
                {/* Description text: 19px, tracking-[0.231px], line-height 29px — two separate lines */}
                <div className="text-[#1d1d1f] text-[19px] leading-[29px] tracking-[0.231px] text-center mb-[28px] font-normal">
                  <p>Over 100 million songs.</p>
                  <p>Start listening for free today.<sup className="text-[12px]">11</sup></p>
                </div>
                {/* Links row: Try it free (17px) + Learn more (21px) */}
                <div className="flex items-center justify-center gap-8">
                  <Link
                    href="/apple-music/try"
                    className="text-[#06c] hover:underline text-[17px] tracking-[0.231px] font-normal"
                  >
                    Try it free<sup className="text-[11px]">11</sup>
                  </Link>
                  <Link
                    href="/apple-music"
                    className="text-[#06c] hover:underline text-[21px] tracking-[0.231px] font-normal flex items-center gap-0.5"
                  >
                    Learn more <span className="text-[17px]">›</span>
                  </Link>
                </div>
              </div>

              {/* Bottom: 3 Album covers — exact Figma sizes: 250 | 283 | 250, gap-[16px], items-center */}
              <div className="flex items-center justify-center gap-[16px] mt-2 lg:mt-auto px-4 overflow-hidden">
                {/* Left album: 250×250 */}
                <div className="shrink-0 w-[90px] h-[90px] sm:w-[168px] sm:h-[168px] lg:w-[250px] lg:h-[250px] rounded-[8px] overflow-hidden">
                  <img
                    src="/assets/0ea66082dcefc640c11493fa355dbaf18746a16a.png"
                    alt="Album Left"
                    className="size-full object-cover"
                  />
                </div>
                {/* Middle album: 283×283 (larger) */}
                <div className="shrink-0 w-[110px] h-[110px] sm:w-[190px] sm:h-[190px] lg:w-[283px] lg:h-[283px] rounded-[8px] overflow-hidden">
                  <img
                    src="/assets/fa071259f525ce31bd213591b7b522ba3ed92dc9.png"
                    alt="Album Middle"
                    className="size-full object-cover"
                  />
                </div>
                {/* Right album: 250×250 */}
                <div className="shrink-0 w-[90px] h-[90px] sm:w-[168px] sm:h-[168px] lg:w-[250px] lg:h-[250px] rounded-[8px] overflow-hidden">
                  <img
                    src="/assets/c397857552ee44a8a8a117918c1c1bd181df7f66.png"
                    alt="Album Right"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: 2 Column (Apple News+ and Apple Arcade) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px]">
            {/* Block 4: Apple News+ (Left) — Figma node 0:2105 */}
            <div className="bg-[#f9f9f9] rounded-none overflow-hidden h-auto min-h-0 lg:h-[616px] flex flex-col pt-12 lg:pt-[69px] pb-0 lg:pb-0 relative shadow-none">
              {/* Top Text & Logo */}
              <div className="flex flex-col items-center text-center px-6 relative z-10">
                <img
                  src="/assets/0a7ec7d7f62f7bd0896927c69971a2ce88170118.png"
                  alt="Apple News+"
                  className="w-[184px] h-[39px] object-contain mb-[15px]"
                />
                <div className="text-[#1d1d1f] text-[19px] leading-[29.001px] tracking-[0.231px] font-normal mb-[12px] max-w-[380px]">
                  <p>Get 3 months of Apple News+ free</p>
                  <p>when you buy an iPhone.<sup className="text-[12px]">12</sup></p>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    href="/apple-news"
                    className="text-[#06c] hover:underline text-[21px] tracking-[0.231px] font-normal flex items-center gap-0.5"
                  >
                    Learn more <span className="text-[17px]">›</span>
                  </Link>
                </div>
              </div>

              {/* Graphic background */}
              <div className="w-full max-w-[400px] h-auto relative mt-[24px] mx-auto px-0 flex justify-center z-0 md:absolute md:inset-x-0 md:bottom-0 md:top-[16px] md:w-full md:max-w-none md:mt-0 md:px-0 md:h-auto pointer-events-none">
                <img
                  src="/assets/d1d4db0a6824d46873edeca3c9902fb8777b8b1c.png"
                  alt="Apple News+ Feed"
                  className="w-full h-auto object-contain md:h-full md:object-cover md:object-bottom"
                />
              </div>
            </div>

            {/* Block 5: Apple Arcade (Right) — Figma node 0:2113 */}
            <div className="bg-white rounded-none overflow-hidden h-auto min-h-0 lg:h-[616px] flex flex-col pt-12 lg:pt-[69px] pb-0 lg:pb-0 relative shadow-none">
              {/* Top Text & Logo */}
              <div className="flex flex-col items-center text-center px-6 relative z-10">
                <img
                  src="/assets/20d2bed2e8a5950ee3420d7658c346d71ca87982.png"
                  alt="Apple Arcade"
                  className="w-[180px] h-[39px] object-contain mb-[44px]"
                />
                <p className="text-[#1d1d1f] text-[21px] leading-[29.001px] tracking-[0.231px] font-normal mb-[12px] max-w-[310px]">
                  Get 3 months of Apple Arcade free when you buy an iPhone.<sup className="text-[12px]">13</sup>
                </p>
                <div className="flex items-center justify-center gap-[30px]">
                  <Link
                    href="/apple-arcade/try"
                    className="text-[#06c] hover:underline text-[17px] tracking-[0.231px] font-normal"
                  >
                    Try it free<sup className="text-[11px]">13</sup>
                  </Link>
                  <Link
                    href="/apple-arcade"
                    className="text-[#06c] hover:underline text-[21px] tracking-[0.231px] font-normal flex items-center gap-0.5"
                  >
                    Learn more <span className="text-[17px]">›</span>
                  </Link>
                </div>
              </div>

              {/* Graphic background character centered at bottom */}
              <div className="w-full max-w-[320px] h-auto relative mt-[24px] mx-auto px-0 flex justify-center z-0 md:absolute md:inset-x-0 md:bottom-[40px] md:top-[220px] md:sm:top-[260px] md:max-w-none md:mt-0 md:px-0 md:h-auto">
                <img
                  src="/assets/7c0405ac6089597b68b38d94eee705c02458fe0c.png"
                  alt="Apple Arcade Character"
                  className="w-full h-auto object-contain md:max-h-full md:w-auto"
                />
              </div>
            </div>
          </div>

          {/* Row 4: 2 Column (Apple Fitness+ and Apple Gift Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px]">
            {/* Block 6: Apple Fitness+ (Left) — Figma node 0:2126 */}
            <div className="bg-[#f9f9f9] rounded-none overflow-hidden h-auto lg:h-[613px] flex flex-col pt-12 lg:pt-[68px] pb-0 lg:pb-0 relative shadow-none">
              {/* Top Text & Logo */}
              <div className="flex flex-col items-center text-center px-6 relative z-10">
                <img
                  src="/assets/85885c1ef8311ae86b137e31eb5c0666d2151b75.png"
                  alt="Apple Fitness+"
                  className="w-[214px] h-[40px] object-contain mb-[14px]"
                />
                <div className="text-[#1d1d1f] text-[19px] leading-[29.001px] tracking-[0.231px] font-normal mb-[12px] max-w-[340px]">
                  <p>Fitness for everyone.</p>
                  <p>Now all you need is iPhone.<sup className="text-[12px]">14</sup></p>
                </div>
                <div className="flex items-center justify-center gap-[30px]">
                  <Link
                    href="/apple-fitness"
                    className="text-[#06c] hover:underline text-[21px] tracking-[0.231px] font-normal flex items-center gap-0.5"
                  >
                    Learn more <span className="text-[17px]">›</span>
                  </Link>
                  <Link
                    href="/apple-fitness/try"
                    className="text-[#06c] hover:underline text-[17px] tracking-[0.231px] font-normal"
                  >
                    Try it free<sup className="text-[11px]">14</sup>
                  </Link>
                </div>
              </div>

              {/* Graphic background at bottom */}
              <div className="w-full max-w-[602px] h-auto relative mt-[24px] mx-auto px-0 flex justify-center z-0 md:absolute md:bottom-[40px] md:left-1/2 md:-translate-x-1/2 md:mt-0 md:px-0 md:w-[602px] md:aspect-[602/299]">
                <img
                  src="/assets/0d1544722be06cb35b6a66fa89347b2a2686a99d.png"
                  alt="Fitness+ Graphic"
                  className="w-full h-auto md:size-full object-contain"
                />
              </div>
            </div>

            {/* Block 7: Apple Gift Card (Right) — Figma node 0:2140 */}
            <div className="bg-[#f9f9f9] rounded-none overflow-hidden h-auto lg:h-[613px] flex flex-col pt-12 lg:pt-[68px] pb-0 lg:pb-0 relative shadow-none">
              {/* Top Text & Logo */}
              <div className="flex flex-col items-center text-center px-6 relative z-10">
                <img
                  src="/assets/8e4e9bef9ee9baed9822373b28d23bbfced2f4f0.png"
                  alt="Apple Gift Card Logo"
                  className="w-[213px] h-[40px] object-contain mb-[28.5px]"
                />
                <p className="text-[#1d1d1f] text-[19px] leading-[29.001px] tracking-[0.231px] font-normal mb-[12px]">
                  For everything and everyone.
                </p>
                <div className="flex items-center justify-center gap-[30px]">
                  <Link
                    href="/apple-gift-card"
                    className="text-[#06c] hover:underline text-[21px] tracking-[0.231px] font-normal flex items-center gap-0.5"
                  >
                    Learn more <span className="text-[17px]">›</span>
                  </Link>
                  <Link
                    href="/apple-gift-card/buy"
                    className="text-[#06c] hover:underline text-[21px] tracking-[0.231px] font-normal flex items-center gap-0.5"
                  >
                    Buy <span className="text-[17px]">›</span>
                  </Link>
                </div>
              </div>

              {/* Graphic background */}
              <div className="w-full max-w-[675px] h-auto relative mt-[24px] mx-auto px-0 flex justify-center z-0 md:absolute md:bottom-[40px] md:left-1/2 md:-translate-x-1/2 md:mt-0 md:px-0 md:w-[675px] md:aspect-[675/319]">
                <img
                  src="/assets/9eb52780c100aaac4316b8b1495f731650ee6bf0.png"
                  alt="Apple Gift Card Graphic"
                  className="w-full h-auto md:size-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Row 5: Apple Research App - Full Width */}
          <div className="w-full bg-[#fafafa] rounded-none overflow-hidden min-h-[400px] lg:h-[476px] flex flex-col lg:flex-row items-center justify-between p-6 sm:p-12 md:p-16 gap-2 lg:gap-8 relative shadow-none">
            {/* Left: Info */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center max-w-[500px] relative z-10">
              <h3 className="text-[#1d1d1f] text-[26px] sm:text-[34px] md:text-[43px] font-bold leading-tight mb-4">
                Introducing the Apple Research app.
              </h3>
              <p className="text-[#1d1d1f] text-[16px] sm:text-[19px] md:text-[21px] leading-normal mb-8">
                The future of health research is you.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <Link
                  href="/apple-research"
                  className="text-[#06c] hover:underline text-[17px] md:text-[21px] flex items-center group font-normal"
                >
                  Learn more
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-1 text-sm">
                    {"\u203A"}
                  </span>
                </Link>
              </div>
            </div>
            {/* Right: Graphic */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end h-[220px] sm:h-[300px] lg:h-[388px] relative z-0 px-4 lg:px-0">
              <img
                src="/assets/fab7152acdaa7688fd620214062ad88f07192f78.png"
                alt="Apple Research App Hand Holding Device"
                className="max-h-full object-contain hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
