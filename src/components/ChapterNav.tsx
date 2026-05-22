"use client";

import Link from "next/link";

const chapters = [
  {
    name: "iPhone 14 Pro",
    svg: "/assets/334a8ac5e5783f4a0c8d95ecc086a223c3d14f87.svg",
    path: "/iphone-14-pro",
    width: 40,
    isNew: true,
  },
  {
    name: "iPhone 14",
    svg: "/assets/ab0b29a80c3d4d20cbc6255ae191a208af2fb34c.svg",
    path: "/iphone-14",
    width: 38,
    isNew: true,
  },
  {
    name: "iPhone 13",
    svg: "/assets/d601e8da2a8e6453334110032632c860e23d112d.svg",
    path: "/iphone-13",
    width: 36,
  },
  {
    name: "iPhone SE",
    svg: "/assets/19aa4d8c71a229a3fc4afabd890ceb76bba5f8fe.svg",
    path: "/iphone-se",
    width: 19,
  },
  {
    name: "iPhone 12",
    svg: "/assets/c686cc8b75d1004e4d503ea93d1084984347495c.svg",
    path: "/iphone-12",
    width: 22,
  },
  {
    name: "Compare",
    svg: "/assets/70fdf84adbeb53833f6318bb09b515e367edd2b4.svg",
    path: "/compare",
    width: 45,
  },
  {
    name: "AirPods",
    svg: "/assets/c27d44ad290886a3e634baf775cebfb61438f2e8.svg",
    path: "/airpods",
    width: 39,
  },
  {
    name: "AirTag",
    svg: "/assets/f3c2dec24f1122278edd3cdeb84154a9d1dc43f4.svg",
    path: "/airtag",
    width: 29,
  },
  {
    name: "Accessories",
    svg: "/assets/2caac88b037d5c2780fd47d5877ea8903a223757.svg",
    path: "/accessories",
    width: 40,
  },
  {
    name: "Apple Card",
    svg: "/assets/0e7befe83387d0e88596e04fa8402f2d6e3dedb7.svg",
    path: "/apple-card",
    width: 36,
  },
  {
    name: "iOS 16",
    svg: "/assets/a392e89e28ac037104f789abbed0c777f201c232.svg",
    path: "/ios-16",
    width: 32,
  },
  {
    name: "Shop iPhone",
    svg: "/assets/4f0aef287837c2e9a46de5bcca933330d67fd6c2.svg",
    path: "/shop",
    width: 58,
  },
];

export default function ChapterNav() {
  return (
    <nav className="relative w-full glass-nav border-b border-[#d2d2d7]/50 select-none z-40 overflow-x-auto min-[833px]:overflow-x-visible scrollbar-none mt-11">
      <div className="w-full max-w-[1120px] mx-auto flex items-start justify-start min-[833px]:justify-between px-6 xl:px-0 py-4 min-[833px]:py-3 gap-10 min-[833px]:gap-0 min-w-max min-[833px]:min-w-0">
        {chapters.map((chapter) => (
          <Link
            key={chapter.name}
            href={chapter.path}
            className="flex flex-col items-center group relative cursor-pointer shrink-0"
          >
            {/* SVG Icon Figure */}
            <div
              style={{ width: `${chapter.width}px` }}
              className="h-[54px] flex items-end justify-center relative transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-[1px]"
            >
              <img
                src={chapter.svg}
                alt={chapter.name}
                className="h-full w-full object-contain transition-all duration-300"
              />
            </div>
            {/* Name */}
            <span className="text-[#1d1d1f] text-[12px] font-normal tracking-[-0.01em] mt-[7px] text-center font-sans leading-[16px] group-hover:text-[#0071e3] transition-colors duration-300">
              {chapter.name}
            </span>
            {/* New badge */}
            {chapter.isNew && (
              <span className="text-[#bf4800] text-[10px] font-normal tracking-tight mt-[2px] block leading-[12px] text-center">
                New
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}

