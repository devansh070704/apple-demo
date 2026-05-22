"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Store", path: "/store" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "AirPods", path: "/airpods" },
  { name: "TV & Home", path: "/tv-home" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Accessories", path: "/accessories" },
  { name: "Support", path: "/support" },
];

export default function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-11 glass-nav border-b border-[#d2d2d7]/50 select-none">
      
      {/* Desktop Layout - Visible on viewports >= 833px */}
      <div className="hidden min-[833px]:flex w-full max-w-[998px] mx-auto px-4 lg:px-0 h-full items-center justify-between">
        
        {/* 1. Apple Logo */}
        <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[32px] h-11">
          <img
            src="/assets/22220f64432c7a11ed349f4ea7609c84277a174f.svg"
            alt="Apple"
            className="h-11 w-[14px]"
          />
        </Link>

        {/* 2. Store */}
        <Link href="/store" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[48px] h-11">
          <img
            src="/assets/23aadb8c2116c636c0c366cd4a574b967f2187d6.svg"
            alt="Store"
            className="h-11 w-[30px]"
          />
        </Link>

        {/* 3. Mac */}
        <Link href="/mac" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[41px] h-11">
          <img
            src="/assets/021786d8d2d4a6f117757e0fbe843c39d7735041.svg"
            alt="Mac"
            className="h-11 w-[23px]"
          />
        </Link>

        {/* 4. iPad */}
        <Link href="/ipad" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[42px] h-11">
          <img
            src="/assets/a53aaf2c80d8f704f377b0ad096c1cdf3ab5e569.svg"
            alt="iPad"
            className="h-11 w-[24px]"
          />
        </Link>

        {/* 5. iPhone */}
        <Link href="/iphone" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[56px] h-11">
          <img
            src="/assets/ee574a8f68f9cd3fed555e400db8c9043b10da57.svg"
            alt="iPhone"
            className="h-11 w-[38px]"
          />
        </Link>

        {/* 6. Watch */}
        <Link href="/watch" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[53px] h-11">
          <img
            src="/assets/646a1dc676e1dc9b116cfc8b01944a88caa848b8.svg"
            alt="Watch"
            className="h-11 w-[35px]"
          />
        </Link>

        {/* 7. AirPods */}
        <Link href="/airpods" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[61px] h-11">
          <img
            src="/assets/348397f37dcd951b2ce585972e8c5f10ac7150c7.svg"
            alt="AirPods"
            className="h-11 w-[43px]"
          />
        </Link>

        {/* 8. TV & Home */}
        <Link href="/tv-home" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[83px] h-11">
          <img
            src="/assets/f4a9a0ea42a5b3c7b192b0147729ccca7e01ae87.svg"
            alt="TV & Home"
            className="h-11 w-[65px]"
          />
        </Link>

        {/* 9. Entertainment */}
        <Link href="/entertainment" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[95px] h-11">
          <img
            src="/assets/d97c2161377953e5b124fa1e1168f900b6d3f7e2.svg"
            alt="Entertainment"
            className="h-11 w-[77px]"
          />
        </Link>

        {/* 10. Accessories */}
        <Link href="/accessories" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[85px] h-11">
          <img
            src="/assets/65f3de3c1613aa457e0cd205aa717dd42c27ba62.svg"
            alt="Accessories"
            className="h-11 w-[67px]"
          />
        </Link>

        {/* 11. Support */}
        <Link href="/support" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[62px] h-11">
          <img
            src="/assets/7b44c8ee6e21a26d035853c1375aff3c06eeb898.svg"
            alt="Support"
            className="h-11 w-[44px]"
          />
        </Link>

        {/* 12. Search */}
        <button className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[33px] h-11 cursor-pointer">
          <img
            src="/assets/40ae630e0664751fea0f1156826c1bef59c9c4cb.svg"
            alt="Search"
            className="h-11 w-[15px]"
          />
        </button>

        {/* 13. Bag */}
        <Link href="/bag" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[32px] h-11">
          <img
            src="/assets/b6c5413a29239545b05024a8d0dd8d725f8c3374.svg"
            alt="Shopping Bag"
            className="h-11 w-[14px]"
          />
        </Link>

      </div>

      {/* Mobile Layout - Visible on viewports < 833px */}
      <div className="flex min-[833px]:hidden h-full items-center justify-between px-4">
        
        {/* Apple Logo */}
        <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[32px] h-11">
          <img
            src="/assets/22220f64432c7a11ed349f4ea7609c84277a174f.svg"
            alt="Apple"
            className="h-11 w-[14px]"
          />
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Search Icon */}
          <button className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[33px] h-11 cursor-pointer">
            <img
              src="/assets/40ae630e0664751fea0f1156826c1bef59c9c4cb.svg"
              alt="Search"
              className="h-11 w-[15px]"
            />
          </button>

          {/* Bag Icon */}
          <Link href="/bag" className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 w-[32px] h-11">
            <img
              src="/assets/b6c5413a29239545b05024a8d0dd8d725f8c3374.svg"
              alt="Shopping Bag"
              className="h-11 w-[14px]"
            />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-11 relative focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-[16px] h-[1.2px] bg-black/80 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isOpen ? "rotate-45 translate-y-[0.6px]" : "-translate-y-[4px]"
              }`}
            ></span>
            <span
              className={`block w-[16px] h-[1.2px] bg-black/80 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isOpen ? "-rotate-45 -translate-y-[0.6px]" : "translate-y-[4px]"
              }`}
            ></span>
          </button>
        </div>

      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed inset-0 top-11 bg-[#f5f5f7]/95 backdrop-blur-[20px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] min-[833px]:hidden ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-10 pt-8 pb-12 overflow-y-auto h-full space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="text-[#1d1d1f] text-2xl font-semibold opacity-90 hover:opacity-100 hover:text-[#0071e3] transition-all duration-300 border-b border-black/5 pb-4 block"
              style={{
                transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                transform: isOpen ? "none" : "translateY(-10px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {item.name}
            </Link>
          ))}
          <div 
            className="pt-4 flex items-center gap-4 text-zinc-500 text-sm transition-all duration-300"
            style={{
              transitionDelay: isOpen ? `${navItems.length * 40}ms` : "0ms",
              transform: isOpen ? "none" : "translateY(-10px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <Link href="/support" onClick={() => setIsOpen(false)} className="hover:text-[#0071e3] transition-colors">
              Support
            </Link>
            <span>•</span>
            <Link href="/store" onClick={() => setIsOpen(false)} className="hover:text-[#0071e3] transition-colors">
              Find a Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
