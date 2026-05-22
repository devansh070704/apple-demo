"use client";

import Link from "next/link";

const compareItems = [
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    tagline: "The ultimate iPhone.",
    price: "From $999",
    image: "/assets/c0dd0fbc1b071022107c5715400387b3d5178716.png",
    colorsImage: "/assets/c04586825952ff4fc115a0171e17a1683c3f3dec.png",
    buyPath: "/buy-iphone-14-pro",
    learnPath: "/iphone-14-pro",
    isNew: true,
    specs: {
      screenSize: "6.7″ or 6.1″",
      screenType: "Super Retina XDR display³",
      screenFeatures: "ProMotion technology\nAlways-On display",
      feature1Icon: "/assets/abeae99695b370d3e803356907353041d4d6a0f9.png",
      feature1Title: "Dynamic Island",
      feature1Desc: "A new way to interact with iPhone",
      sosIcon: "/assets/939b80397faa3be99d16eed517e41ac384b29ce4.png",
      sosDesc: "Emergency SOS via satellite⁴\nEmergency SOS\nCrash Detection⁵",
      cameraIcon: "/assets/90ac6d2a196fb41216786136740ff0de82bd21b1.png",
      cameraDesc: "Pro camera system\n48MP Main | Ultra Wide | Telephoto\nPhotonic Engine for incredible detail and color\nAutofocus on TrueDepth front camera",
      actionIcon: "/assets/e5d4c15f415b1c0da827e127bfb71f09d71c6876.png",
      actionDesc: "Action mode smooths out shaky handheld videos",
      batteryIcon: "/assets/4d93b5e837d88ad44bd3fd5aa22a6eb7f3e65c06.png",
      batteryDesc: "Up to 29 hours video playback⁶",
      chipIcon: "/assets/539dd31bd1d73ed3d3086cc93bcb782b2601ada2.png",
      chipDesc: "A16 Bionic chip",
      securityIcon: "/assets/54c87ba23b30cb0bb302fda812bd3c67c668438e.png",
      securityDesc: "Face ID",
      networkIcon: "/assets/22ee739670f97f4b3e8cc9baed1c09e25268dc8d.png",
      networkDesc: "Superfast 5G cellular⁷",
    },
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    tagline: "A total powerhouse.",
    price: "From $799*",
    image: "/assets/6abb3607939687ba3de407ade23f187b19c0cc98.png",
    colorsImage: "/assets/3b13a11a0e93f89747d7f4634d14ac4fcab11b9b.png",
    buyPath: "/buy-iphone-14",
    learnPath: "/iphone-14",
    isNew: true,
    specs: {
      screenSize: "6.7″ or 6.1″",
      screenType: "Super Retina XDR display³",
      screenFeatures: "—\n—",
      feature1Icon: null,
      feature1Title: "—",
      feature1Desc: "",
      sosIcon: "/assets/939b80397faa3be99d16eed517e41ac384b29ce4.png",
      sosDesc: "Emergency SOS via satellite⁴\nEmergency SOS\nCrash Detection⁵",
      cameraIcon: "/assets/90ac6d2a196fb41216786136740ff0de82bd21b1.png",
      cameraDesc: "Advanced dual-camera system\n12MP Main | Ultra Wide\nPhotonic Engine for incredible detail and color\nAutofocus on TrueDepth front camera",
      actionIcon: "/assets/e5d4c15f415b1c0da827e127bfb71f09d71c6876.png",
      actionDesc: "Action mode smooths out shaky handheld videos",
      batteryIcon: "/assets/4d93b5e837d88ad44bd3fd5aa22a6eb7f3e65c06.png",
      batteryDesc: "Up to 26 hours video playback⁶",
      chipIcon: "/assets/c684db9355f7fb39a0f035c26737be45799209f5.png", // Looked up A15 icon
      chipDesc: "A15 Bionic chip with 5-core GPU",
      securityIcon: "/assets/54c87ba23b30cb0bb302fda812bd3c67c668438e.png",
      securityDesc: "Face ID",
      networkIcon: "/assets/22ee739670f97f4b3e8cc9baed1c09e25268dc8d.png",
      networkDesc: "Superfast 5G cellular⁷",
    },
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    tagline: "As amazing as ever.",
    price: "From $599*",
    image: "/assets/400b808dd5f2d2265f340f21c561695f3a41267f.png",
    colorsImage: "/assets/a842fc354717a29956a24329b27c22bb6eea44a9.png",
    buyPath: "/buy-iphone-13",
    learnPath: "/iphone-13",
    isNew: false,
    specs: {
      screenSize: "6.1″ or 5.4″",
      screenType: "Super Retina XDR display³",
      screenFeatures: "—\n—",
      feature1Icon: null,
      feature1Title: "—",
      feature1Desc: "",
      sosIcon: "/assets/939b80397faa3be99d16eed517e41ac384b29ce4.png",
      sosDesc: "—\nEmergency SOS\n—",
      cameraIcon: "/assets/90ac6d2a196fb41216786136740ff0de82bd21b1.png",
      cameraDesc: "Dual-camera system\n12MP Main | Ultra Wide\n—\n—",
      actionIcon: null,
      actionDesc: "—",
      batteryIcon: "/assets/4d93b5e837d88ad44bd3fd5aa22a6eb7f3e65c06.png",
      batteryDesc: "Up to 19 hours video playback⁶",
      chipIcon: "/assets/c684db9355f7fb39a0f035c26737be45799209f5.png",
      chipDesc: "A15 Bionic chip with 4-core GPU",
      securityIcon: "/assets/54c87ba23b30cb0bb302fda812bd3c67c668438e.png",
      securityDesc: "Face ID",
      networkIcon: "/assets/22ee739670f97f4b3e8cc9baed1c09e25268dc8d.png",
      networkDesc: "Superfast 5G cellular⁷",
    },
  },
  {
    id: "iphone-se",
    name: "iPhone SE",
    tagline: "Serious power. Serious value.",
    price: "From $429",
    image: "/assets/9de91a0faf3ee7aea4ec5ffb8eb518ab0a88c85b.png",
    colorsImage: "/assets/21c3e934f31488a3538269e3deac574595f0c73b.png",
    buyPath: "/buy-iphone-se",
    learnPath: "/iphone-se",
    isNew: false,
    specs: {
      screenSize: "4.7″",
      screenType: "Retina HD display",
      screenFeatures: "—\n—",
      feature1Icon: null,
      feature1Title: "—",
      feature1Desc: "",
      sosIcon: "/assets/939b80397faa3be99d16eed517e41ac384b29ce4.png",
      sosDesc: "—\nEmergency SOS\n—",
      cameraIcon: "/assets/90ac6d2a196fb41216786136740ff0de82bd21b1.png",
      cameraDesc: "Single-camera system\n12MP Main\n—\n—",
      actionIcon: null,
      actionDesc: "—",
      batteryIcon: "/assets/4d93b5e837d88ad44bd3fd5aa22a6eb7f3e65c06.png",
      batteryDesc: "Up to 15 hours video playback⁶",
      chipIcon: "/assets/c684db9355f7fb39a0f035c26737be45799209f5.png",
      chipDesc: "A15 Bionic chip with 4-core GPU",
      securityIcon: "/assets/3e36eadc032882aa3aa9dd0d927fb40572d303ff.png", // Touch ID icon
      securityDesc: "Touch ID",
      networkIcon: "/assets/22ee739670f97f4b3e8cc9baed1c09e25268dc8d.png",
      networkDesc: "5G cellular⁷",
    },
  },
];

export default function WhichIphone() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-20 sm:px-6 select-none border-b border-zinc-100">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="text-[#1d1d1f] text-[28px] sm:text-[44px] font-bold tracking-tight text-center mb-10 sm:mb-16">
          Which iPhone is right for you?
        </h2>

        {/* 4-column layout wrapper - responsive scrolling on mobile, full grid on desktop */}
        <div className="overflow-x-auto scrollbar-none pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6">
          <div className="min-w-[880px] lg:min-w-0 grid grid-cols-4 gap-6">
            {compareItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center">
                {/* 1. Header Area (Image, Colors, Name, Price, CTAs) */}
                <div className="h-[270px] w-full flex flex-col justify-end items-center relative mb-4">
                  {item.isNew && (
                    <span className="text-[#bf4800] text-[11px] font-semibold tracking-wider uppercase absolute top-0">
                      New
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-[190px] object-contain mb-4 transform hover:scale-105 transition-transform duration-500"
                  />
                  {item.colorsImage && (
                    <img
                      src={item.colorsImage}
                      alt="colors"
                      className="h-3.5 object-contain mb-2"
                    />
                  )}
                </div>

                <h3 className="text-[#1d1d1f] text-[20px] md:text-[22px] font-bold tracking-tight">
                  {item.name}
                </h3>
                <p className="text-[#1d1d1f] text-[14px] font-normal min-h-[40px] px-2 mt-2 leading-relaxed">
                  {item.tagline}
                </p>
                <p className="text-[#1d1d1f] text-[14px] font-semibold mt-1">
                  {item.price}
                </p>

                {/* Buy / Learn CTA buttons */}
                <div className="flex flex-col items-center gap-2 mt-4 w-full px-4">
                  <Link
                    href={item.buyPath}
                    className="bg-[#0071e3] text-white text-[12px] font-medium px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-colors w-16"
                  >
                    Buy
                  </Link>
                  <Link
                    href={item.learnPath}
                    className="text-[#06c] hover:underline text-[14px] font-normal flex items-center gap-0.5"
                  >
                    Learn more ❯
                  </Link>
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-[1px] bg-zinc-200 my-10" />

                {/* 2. Specs Area */}
                <div className="flex flex-col items-center gap-8 w-full">
                  {/* Screen Size & Type */}
                  <div className="min-h-[100px] flex flex-col items-center justify-center">
                    <p className="text-[#1d1d1f] text-[17px] font-bold">{item.specs.screenSize}</p>
                    <p className="text-[#1d1d1f] text-[13px] font-normal mt-1 max-w-[160px] leading-snug">
                      {item.specs.screenType}
                    </p>
                    <p className="text-[#86868b] text-[12px] font-normal mt-1 whitespace-pre-line leading-relaxed">
                      {item.specs.screenFeatures}
                    </p>
                  </div>

                  {/* Feature 1 (Dynamic Island vs Dot) */}
                  <div className="min-h-[100px] flex flex-col items-center justify-center">
                    {item.specs.feature1Icon ? (
                      <>
                        <img
                          src={item.specs.feature1Icon}
                          alt="Dynamic Island Icon"
                          className="h-8 object-contain mb-2"
                        />
                        <p className="text-[#1d1d1f] text-[14px] font-bold">{item.specs.feature1Title}</p>
                        <p className="text-[#86868b] text-[12px] font-normal mt-1 max-w-[150px] leading-snug">
                          {item.specs.feature1Desc}
                        </p>
                      </>
                    ) : (
                      <span className="text-zinc-300 font-bold">—</span>
                    )}
                  </div>

                  {/* Safety Features */}
                  <div className="min-h-[120px] flex flex-col items-center justify-center">
                    <img
                      src={item.specs.sosIcon}
                      alt="SOS Icon"
                      className="h-8 object-contain mb-2"
                    />
                    <p className="text-[#1d1d1f] text-[13px] font-normal max-w-[170px] leading-snug whitespace-pre-line">
                      {item.specs.sosDesc}
                    </p>
                  </div>

                  {/* Camera System */}
                  <div className="min-h-[180px] flex flex-col items-center justify-center">
                    <img
                      src={item.specs.cameraIcon}
                      alt="Camera Icon"
                      className="h-8 object-contain mb-2"
                    />
                    <p className="text-[#1d1d1f] text-[13px] font-semibold max-w-[170px] leading-snug">
                      {item.specs.cameraDesc.split("\n")[0]}
                    </p>
                    <p className="text-[#86868b] text-[12px] font-normal mt-1 max-w-[170px] leading-relaxed whitespace-pre-line">
                      {item.specs.cameraDesc.split("\n").slice(1).join("\n")}
                    </p>
                  </div>

                  {/* Action Mode */}
                  <div className="min-h-[80px] flex flex-col items-center justify-center">
                    {item.specs.actionIcon ? (
                      <>
                        <img
                          src={item.specs.actionIcon}
                          alt="Action Mode Icon"
                          className="h-8 object-contain mb-2"
                        />
                        <p className="text-[#86868b] text-[12px] font-normal max-w-[160px] leading-snug">
                          {item.specs.actionDesc}
                        </p>
                      </>
                    ) : (
                      <span className="text-zinc-300 font-bold">—</span>
                    )}
                  </div>

                  {/* Battery */}
                  <div className="min-h-[80px] flex flex-col items-center justify-center">
                    <img
                      src={item.specs.batteryIcon}
                      alt="Battery Icon"
                      className="h-6 object-contain mb-2"
                    />
                    <p className="text-[#1d1d1f] text-[13px] font-normal max-w-[160px] leading-snug">
                      {item.specs.batteryDesc}
                    </p>
                  </div>

                  {/* Chip */}
                  <div className="min-h-[80px] flex flex-col items-center justify-center">
                    <img
                      src={item.specs.chipIcon}
                      alt="Chip Icon"
                      className="h-8 object-contain mb-2"
                    />
                    <p className="text-[#1d1d1f] text-[13px] font-semibold max-w-[160px] leading-snug">
                      {item.specs.chipDesc}
                    </p>
                  </div>

                  {/* Security */}
                  <div className="min-h-[70px] flex flex-col items-center justify-center">
                    <img
                      src={item.specs.securityIcon}
                      alt="Security Icon"
                      className="h-8 object-contain mb-2"
                    />
                    <p className="text-[#1d1d1f] text-[13px] font-semibold">
                      {item.specs.securityDesc}
                    </p>
                  </div>

                  {/* Network */}
                  <div className="min-h-[70px] flex flex-col items-center justify-center">
                    <img
                      src={item.specs.networkIcon}
                      alt="5G Icon"
                      className="h-6 object-contain mb-2"
                    />
                    <p className="text-[#1d1d1f] text-[13px] font-semibold max-w-[160px] leading-snug">
                      {item.specs.networkDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
