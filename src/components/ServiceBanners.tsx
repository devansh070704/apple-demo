"use client";

import Link from "next/link";

export default function ServiceBanners() {
  const banners = [
    {
      img: "/assets/98a596673de162fd64bce211f62871183d42883e.png",
      imgWidth: 51,
      imgHeight: 75,
      title: "Fast, free delivery",
      text: "Or pick up available items at an Apple Store.",
      linkText: "Learn more",
      href: "/delivery",
    },
    {
      img: "/assets/59fdaf25262a1ee96b22af2fc786e8acee16dbef.png",
      imgWidth: 55,
      imgHeight: 75,
      title: "Pay monthly at 0% APR",
      text: "You can pay over time when you choose to check out with Apple Card Monthly Installments.**",
      linkText: "Learn more",
      href: "/payment-plans",
    },
    {
      img: "/assets/361f50c84f94ebb422cb02d8ad5c29b2c1b2a64c.png",
      imgWidth: 71,
      imgHeight: 75,
      title: "Get help buying",
      text: "Have a question? Call a Specialist or chat online. Call 1‑800‑MY‑APPLE.",
      linkText: "Learn more",
      href: "/personal-sessions",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f7] pt-10 pb-16 px-4 sm:px-[30px] select-none border-b border-zinc-200">
      <div className="w-full max-w-[1440px] mx-auto relative min-h-[780px] md:min-h-0 md:h-[280.8px] flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
        {banners.map((b, idx) => {
          // Align columns horizontally on desktop matching Figma offsets center-to-center
          // Col 0: left-[calc(50%-370px)] -translate-x-1/2
          // Col 1: left-1/2 -translate-x-1/2
          // Col 2: left-[calc(50%+370px)] -translate-x-1/2
          const positionClass =
            idx === 0
              ? "md:absolute md:left-[calc(50%-370px)] md:-translate-x-1/2 md:top-0"
              : idx === 1
              ? "md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0"
              : "md:absolute md:left-[calc(50%+370px)] md:-translate-x-1/2 md:top-0";

          return (
            <div
              key={idx}
              className={`${positionClass} w-full max-w-[370px] md:w-[370px] h-auto md:h-[280.8px] flex flex-col items-center text-center`}
            >
              {/* Icon Frame */}
              <div className="h-[75px] flex items-center justify-center mb-6">
                <img
                  src={b.img}
                  alt={b.title}
                  style={{ width: `${b.imgWidth}px`, height: `${b.imgHeight}px` }}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#1d1d1f] text-[19px] font-bold tracking-[0.231px] leading-[29px] mb-1">
                {b.title}
              </h3>

              {/* Description & Link Container */}
              <div className="flex flex-col items-center text-center px-4">
                <p className="text-[#1d1d1f] text-[17px] sm:text-[19px] tracking-[0.231px] leading-[29px] mb-3 max-w-[290px]">
                  {b.text}
                </p>
                <Link
                  href={b.href}
                  className="text-[#06c] hover:underline text-[17px] sm:text-[21px] tracking-[0.231px] leading-[29px] font-normal flex items-center gap-1 group/link"
                >
                  {b.linkText}
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 text-[15px] sm:text-[18px]">❯</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
