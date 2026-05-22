"use client";

import Link from "next/link";

export default function FeaturedAccessories() {
  return (
    <section className="w-full bg-[#f5f5f7] pt-[60px] pb-12 px-4 sm:pt-[95px] sm:pb-20 sm:px-[30px] select-none border-b border-zinc-200">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[#1d1d1f] text-[30px] sm:text-[44px] md:text-[51px] font-bold tracking-tight md:tracking-[-0.28px] text-center mb-10 sm:mb-[70px] leading-tight sm:leading-[60px]">
          Featured accessories
        </h2>

        {/* List of Cards - Spaced with the exact 20px gap from Figma */}
        <div className="w-full flex flex-col gap-[20px]">
          {/* Card 1: MagSafe */}
          <div className="w-full bg-white flex flex-col md:flex-row items-center h-auto md:h-[540px] relative overflow-hidden pb-0 md:pb-0">
            {/* Desktop Text Content (Absolute w-[400px] left-[145px] top-1/2) */}
            <div className="w-full md:w-[400px] pt-6 px-6 pb-0 sm:pt-12 sm:px-12 sm:pb-0 md:p-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[145px] flex flex-col items-center text-center z-10">
              <h3 className="text-[#1d1d1f] text-[28px] sm:text-[38px] md:text-[44px] font-bold tracking-tight md:tracking-[-0.144px] leading-tight md:leading-[52px]">
                MagSafe
              </h3>
              <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[21px] font-normal mt-3 leading-relaxed md:leading-[29px] tracking-[0.231px] max-w-[290px] mx-auto">
                Snap on a magnetic case, wallet, or both. And get faster wireless charging.
              </p>
              <Link
                href="/magsafe"
                className="text-[#06c] hover:underline text-[17px] md:text-[20px] font-normal mt-4 flex items-center gap-1 group/link"
              >
                Shop MagSafe accessories
                <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] md:text-[18px]">❯</span>
              </Link>
            </div>

            {/* Image container - bottom-flush, right-aligned in Figma */}
            <div className="w-full md:w-[633px] h-auto md:h-[463px] md:absolute md:bottom-0 md:right-[98px] overflow-hidden pointer-events-none mt-[24px] md:mt-0 flex items-end justify-center px-0 md:px-0">
              <img
                src="/assets/cbedabd4f747349397f7a53472a6c0965f68e9d6.png"
                alt="MagSafe Case and Charger"
                className="w-full h-auto md:h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Card 2: AirTag */}
          <div className="w-full bg-white flex flex-col md:flex-row-reverse items-center h-auto md:h-[540px] relative overflow-hidden pb-0 md:pb-0">
            {/* Desktop Text Content (Absolute w-[400px] right-[145px] top-1/2) */}
            <div className="w-full md:w-[400px] pt-6 px-6 pb-0 sm:pt-12 sm:px-12 sm:pb-0 md:p-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[145px] flex flex-col items-center text-center z-10">
              <h3 className="text-[#1d1d1f] text-[28px] sm:text-[38px] md:text-[43px] font-bold tracking-tight md:tracking-[-0.144px] leading-tight md:leading-[52px]">
                AirTag
              </h3>
              <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[21px] font-normal mt-3 leading-relaxed md:leading-[29px] tracking-[0.231px] max-w-[385px] mx-auto">
                Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.
              </p>
              <div className="flex items-center gap-6 mt-4">
                <Link
                  href="/buy-airtag"
                  className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal flex items-center gap-0.5 group/link"
                >
                  Buy
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] md:text-[18px]">❯</span>
                </Link>
                <Link
                  href="/airtag"
                  className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal flex items-center gap-0.5 group/link"
                >
                  Learn more
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] md:text-[18px]">❯</span>
                </Link>
              </div>
            </div>

            {/* Image container - bottom-flush, left-aligned in Figma */}
            <div className="w-full md:w-[806px] h-auto md:h-[531px] md:absolute md:bottom-[-1px] md:left-[-5.6px] overflow-hidden pointer-events-none mt-[24px] md:mt-0 flex items-end justify-center px-0 md:px-0">
              <img
                src="/assets/b48df60e23ab588bc475fca741351b9d1dda255e.png"
                alt="AirTag Loop and Keyring"
                className="w-full h-auto md:h-full object-contain object-bottom md:object-left-bottom"
              />
            </div>
          </div>

          {/* Card 3: AirPods */}
          <div className="w-full bg-white flex flex-col items-center h-auto md:h-[707.6px] relative overflow-hidden pb-0 md:pb-0">
            {/* Desktop Text Content (Absolute w-[295px] top-[157px]) */}
            <div className="w-full md:w-[295px] pt-6 px-6 pb-0 sm:pt-12 sm:px-12 sm:pb-0 md:p-0 md:absolute md:top-[157px] md:left-1/2 md:-translate-x-1/2 flex flex-col items-center text-center z-10">
              <h3 className="text-[#1d1d1f] text-[24px] sm:text-[32px] md:text-[46px] font-bold tracking-tight md:tracking-[-0.144px] leading-tight md:leading-[52px]">
                Magic runs in the family.
              </h3>
              <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[19px] font-normal mt-3 leading-relaxed md:leading-[29px] tracking-[0.231px] max-w-[275px] mx-auto">
                Explore all AirPods models and find the best ones for you.
              </p>
              <Link
                href="/airpods"
                className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1 group/link"
              >
                Learn more
                <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] md:text-[18px]">❯</span>
              </Link>
            </div>

            {/* AirPods family image - bottom-flush, centered */}
            <div className="w-full md:w-[1063px] h-auto md:h-[498px] md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 overflow-hidden pointer-events-none mt-[24px] md:mt-auto flex items-end justify-center px-0 md:px-0">
              <img
                src="/assets/e594b598c2d7636d25f1d4639e8ded3358ec1082.png"
                alt="AirPods Family"
                className="w-full h-auto md:h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Global Shop Accessories Link */}
        <Link
          href="/shop-accessories"
          className="text-[#06c] hover:underline text-[20px] md:text-[23px] font-normal mt-16 flex items-center gap-1.5 group/shop leading-[32px] tracking-[0.216px]"
        >
          Shop all iPhone accessories
          <span className="transition-transform duration-200 group-hover/shop:translate-x-0.5">❯</span>
        </Link>
      </div>
    </section>
  );
}

