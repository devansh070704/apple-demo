"use client";

import Link from "next/link";

export default function WaysToSave() {
  return (
    <section className="w-full bg-[#f5f5f7] py-12 px-4 sm:py-20 sm:px-[30px] select-none border-b border-zinc-200">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[#1d1d1f] text-[28px] sm:text-[44px] md:text-[51px] font-bold tracking-tight md:tracking-[-0.28px] text-center mb-8 sm:mb-12">
          Ways to save on iPhone
        </h2>

        {/* Grid/Flex of Cards */}
        <div className="w-full flex flex-col gap-6">
          {/* Card 1: Trade In - Full Width Card */}
          <div className="w-full bg-white overflow-hidden flex flex-col items-center h-auto min-h-0 md:min-h-[717px] relative group pb-0">
            <div className="flex flex-col items-center text-center max-w-[650px] pt-12 md:pt-16 px-6 z-10">
              <h3 className="text-[#1d1d1f] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-tight leading-tight md:leading-[52px] md:tracking-[-0.144px]">
                Trade in your current phone for credit toward a new one.
              </h3>
              <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[19px] font-normal mt-4 leading-relaxed md:leading-[29px] tracking-[0.231px]">
                Get $200-$600 in credit when you trade in iPhone 11 or higher and upgrade to iPhone 14 or iPhone 14 Pro.<sup>1</sup>
              </p>
              <Link
                href="/trade-in"
                className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1"
              >
                Learn more
                <span className="transition-transform duration-200">❯</span>
              </Link>
            </div>

            {/* Hand holding phone image at the bottom, flush 0px padding with aspect-ratio to prevent top clipping */}
            <div className="w-full aspect-[1380/410] overflow-hidden pointer-events-none mt-[24px] md:mt-auto px-0 md:px-0">
              <img
                src="/assets/a8d961ac68cb37779870950c43076fe7b842e4d2.png"
                alt="Trade-in iPhone"
                className="w-full h-auto object-cover object-bottom"
              />
            </div>
          </div>

          {/* Card 2 & 3: Carrier Deals & Apple Card (2-column on desktop, stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 2: Carrier Deals */}
            <div className="bg-white p-6 sm:p-12 overflow-hidden flex flex-col justify-between items-center min-h-[600px] md:min-h-[717px] relative group">
              <div className="flex flex-col items-center text-center w-full z-10">
                <h3 className="text-[#1d1d1f] text-[24px] sm:text-[34px] md:text-[45px] font-bold tracking-tight leading-tight md:leading-[52px] md:tracking-[-0.144px]">
                  Save up to $800 with select carrier deals at Apple.<sup>8</sup>
                </h3>
                <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[21px] font-normal mt-4 leading-relaxed md:leading-[29px] tracking-[0.231px] max-w-[420px] mx-auto">
                  Get the carrier deals you love and save on a new iPhone when you trade in and purchase right here at Apple.
                </p>
                <Link
                  href="/carrier-deals"
                  className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1"
                >
                  Find your deal
                  <span className="transition-transform duration-200">❯</span>
                </Link>
              </div>

              {/* Carrier Deals Badges layout (matching Figma) */}
              <div className="relative w-full max-w-[500px] mx-auto mt-10 mb-2 flex flex-col items-center gap-8 md:gap-10">
                {/* Row 1: AT&T & T-Mobile */}
                <div className="flex flex-col sm:flex-row justify-between w-full gap-8 sm:gap-4 items-center">
                  {/* AT&T */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="h-[60px] md:h-[76px] w-[130px] md:w-[165px] flex items-center justify-center mb-3">
                      <img
                        src="/assets/3c61358573f930baba16fd3270b7f6ef84cb3b85.png"
                        alt="AT&T"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="text-[#1d1d1f] text-[13px] md:text-[17px] font-normal leading-snug whitespace-pre-line tracking-[-0.374px]">
                      Get up to $800{"\n"}credit after trade-in
                    </p>
                  </div>

                  {/* T-Mobile */}
                  <div className="flex flex-col items-center text-center flex-1 mt-4 sm:mt-0">
                    <div className="h-[60px] md:h-[76px] w-[130px] md:w-[165px] flex items-center justify-center mb-3">
                      <img
                        src="/assets/bec3ce015e6f62ab6d767a31170fb896e42d31c0.png"
                        alt="T-Mobile"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="text-[#1d1d1f] text-[13px] md:text-[17px] font-normal leading-snug whitespace-pre-line tracking-[-0.374px]">
                      Get up to $400{"\n"}credit after trade-in
                    </p>
                  </div>
                </div>

                {/* Row 2: Verizon centered */}
                <div className="flex flex-col items-center text-center w-full mt-4 sm:mt-0">
                  <div className="h-[60px] md:h-[76px] w-[130px] md:w-[165px] flex items-center justify-center mb-3">
                    <img
                      src="/assets/0eb6b80d80bf789729e9fe0e82beb1cc17662d5e.png"
                      alt="Verizon"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-[#1d1d1f] text-[13px] md:text-[17px] font-normal leading-snug whitespace-pre-line tracking-[-0.374px]">
                    Get up to $800{"\n"}credit after trade-in
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Apple Card */}
            <div className="bg-white pt-6 sm:pt-12 overflow-hidden flex flex-col justify-between items-center h-auto min-h-0 md:min-h-[717px] relative group pb-0 md:pb-0">
              <div className="flex flex-col items-center text-center w-full z-10 px-8">
                <h3 className="text-[#1d1d1f] text-[24px] sm:text-[34px] md:text-[43px] font-bold tracking-tight leading-tight md:leading-[52px] md:tracking-[-0.144px]">
                  Get 3% Daily Cash back with Apple Card.
                </h3>
                <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[20px] font-normal mt-4 leading-relaxed md:leading-[29px] tracking-[0.231px] max-w-[440px] mx-auto">
                  And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.<sup>**</sup>
                </p>
                <Link
                  href="/apple-card"
                  className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1"
                >
                  Learn more
                  <span className="transition-transform duration-200">❯</span>
                </Link>
              </div>

              {/* Apple Card image at the bottom flush with aspect-ratio to prevent padding and cropping */}
              <div className="w-full aspect-[675/357] overflow-hidden pointer-events-none mt-[24px] md:mt-auto px-0 md:px-0">
                <img
                  src="/assets/3249852cf2a76e52262b3bbb9e3b1e55e5d7c93f.png"
                  alt="Apple Card Offer"
                  className="w-full h-auto object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* Card 4: Why Apple - Full Width Card with background image */}
          <div className="w-full overflow-hidden flex flex-col items-center justify-center min-h-[460px] md:min-h-[560px] relative group">
            {/* Background Image */}
            <img
              src="/assets/ba8b5575dc19e54a58774d200aef30b2f89eb562.png"
              alt="Why Apple background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Transparent white overlay */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Content overlay */}
            <div className="flex flex-col items-center text-center max-w-[750px] p-6 sm:p-12 z-10 text-[#1d1d1f]">
              <h3 className="text-[#1d1d1f] text-[22px] sm:text-[32px] md:text-[44px] font-bold tracking-tight leading-tight md:leading-[52px]">
                Why Apple is the best place to buy iPhone.
              </h3>
              <p className="text-[#1d1d1f] text-[15px] sm:text-[18px] md:text-[19px] font-normal mt-4 leading-relaxed md:leading-[29px] tracking-[0.231px] max-w-[650px]">
                You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly. You can also chat with a Specialist anytime.
              </p>
              <Link
                href="/why-apple"
                className="text-[#06c] hover:underline text-[17px] md:text-[21px] font-normal mt-4 flex items-center gap-1"
              >
                Learn more
                <span className="transition-transform duration-200">❯</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
