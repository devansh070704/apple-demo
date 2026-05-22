"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  // Track open accordions on mobile
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionTitle: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };


  const footnotes = [
    "* Pricing includes a $30 connectivity discount that requires activation with AT&T, T‑Mobile, or Verizon.",
    "** Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. to select at checkout for certain Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE and is subject to credit approval and credit limit. Variable APRs range from 15.49% to 26.49% based on creditworthiness. Rates as of March 1, 2023. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Verizon, or T‑Mobile.",
    "1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card.",
    "2. Pricing for iPhone 14 and iPhone 14 Plus includes a $30 connectivity discount that requires activation with AT&T, T‑Mobile, or Verizon. Available to qualified customers and requires 24‑month installment loan when you select Citizens One or Apple Card Monthly Installments.",
    "3. The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. Measured diagonally, the screen is 6.12 inches (iPhone 14 Pro) or 6.69 inches (iPhone 14 Pro Max) diagonally. Actual viewable area is less.",
    "4. Service is included for free for two years with the activation of any iPhone 14 model. Connection and response times vary based on location, site conditions, and other factors. See apple.com/iphone-14 for more details.",
    "5. iPhone 14 and iPhone 14 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi‑Fi calling.",
    "6. All battery claims depend on network configuration and many other factors; actual results will vary. Battery life and charge cycles vary by use and settings.",
    "7. Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier.",
    "8. Special Carrier Deals: Offers vary by carrier. Requires upgrade of eligible line or activation of new line on qualifying installment plan. Subject to carrier credit qualification. Terms and limits apply.",
    "9. The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled.",
    "10. $6.99/month after free trial. Only one offer per Apple ID and only one offer per family if you're part of a Family Sharing group. Offer good for 3 months after eligible device activation.",
    "11. New subscribers only. $10.99/month after free trial. Plan automatically renews after trial until cancelled.",
    "12. Offer available to new subscribers who purchase an eligible device on or after September 7, 2022. $9.99/month after trial. Plan automatically renews until cancelled.",
    "13. $4.99/month after free trial. Plan automatically renews until cancelled. Offer good for 3 months after device activation.",
    "14. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled.",
  ];

  const directoryColumns = [
    {
      title: "Shop and Learn",
      links: [
        { text: "Store", href: "/store" },
        { text: "Mac", href: "/mac" },
        { text: "iPad", href: "/ipad" },
        { text: "iPhone", href: "/iphone" },
        { text: "Watch", href: "/watch" },
        { text: "AirPods", href: "/airpods" },
        { text: "TV & Home", href: "/tv-home" },
        { text: "AirTag", href: "/airtag" },
        { text: "Accessories", href: "/accessories" },
        { text: "Gift Cards", href: "/gift-cards" },
      ],
      secondary: {
        title: "Apple Wallet",
        links: [
          { text: "Wallet", href: "/wallet" },
          { text: "Apple Card", href: "/apple-card" },
          { text: "Apple Pay", href: "/apple-pay" },
          { text: "Apple Cash", href: "/apple-cash" },
        ],
      },
    },
    {
      title: "Account",
      links: [
        { text: "Manage Your Apple ID", href: "/appleid" },
        { text: "Apple Store Account", href: "/account" },
        { text: "iCloud.com", href: "https://icloud.com" },
      ],
      secondary: {
        title: "Entertainment",
        links: [
          { text: "Apple One", href: "/apple-one" },
          { text: "Apple TV+", href: "/apple-tv-plus" },
          { text: "Apple Music", href: "/apple-music" },
          { text: "Apple Arcade", href: "/apple-arcade" },
          { text: "Apple Fitness+", href: "/apple-fitness-plus" },
          { text: "Apple News+", href: "/apple-news-plus" },
          { text: "Apple Podcasts", href: "/apple-podcasts" },
          { text: "Apple Books", href: "/apple-books" },
          { text: "App Store", href: "/app-store" },
        ],
      },
    },
    {
      title: "Apple Store",
      links: [
        { text: "Find a Store", href: "/retail" },
        { text: "Genius Bar", href: "/retail/geniusbar" },
        { text: "Today at Apple", href: "/today" },
        { text: "Apple Camp", href: "/today/camp" },
        { text: "Apple Store App", href: "/store-app" },
        { text: "Certified Refurbished", href: "/refurbished" },
        { text: "Apple Trade In", href: "/trade-in" },
        { text: "Financing", href: "/financing" },
        { text: "Carrier Deals at Apple", href: "/carrier-deals" },
        { text: "Order Status", href: "/order-status" },
        { text: "Shopping Help", href: "/shop-help" },
      ],
    },
    {
      title: "For Business",
      links: [
        { text: "Apple and Business", href: "/business" },
        { text: "Shop for Business", href: "/retail/business" },
      ],
      education: {
        title: "For Education",
        links: [
          { text: "Apple and Education", href: "/education" },
          { text: "Shop for K-12", href: "/retail/k12" },
          { text: "Shop for College", href: "/retail/college" },
        ],
      },
      healthcare: {
        title: "For Healthcare",
        links: [
          { text: "Apple in Healthcare", href: "/healthcare" },
          { text: "Health on Apple Watch", href: "/healthcare/apple-watch" },
          { text: "Health Records on iPhone", href: "/healthcare/iphone" },
        ],
      },
      government: {
        title: "For Government",
        links: [
          { text: "Shop for Government", href: "/retail/government" },
          { text: "Shop for Veterans and Military", href: "/retail/military" },
        ],
      },
    },
    {
      title: "Apple Values",
      links: [
        { text: "Accessibility", href: "/accessibility" },
        { text: "Education", href: "/education-values" },
        { text: "Environment", href: "/environment" },
        { text: "Inclusion and Diversity", href: "/diversity" },
        { text: "Privacy", href: "/privacy" },
        { text: "Racial Equity and Justice", href: "/racial-equity" },
        { text: "Supplier Responsibility", href: "/supplier-responsibility" },
      ],
      secondary: {
        title: "About Apple",
        links: [
          { text: "Newsroom", href: "/newsroom" },
          { text: "Apple Leadership", href: "/leadership" },
          { text: "Career Opportunities", href: "/careers" },
          { text: "Investors", href: "/investors" },
          { text: "Ethics & Compliance", href: "/compliance" },
          { text: "Events", href: "/events" },
          { text: "Contact Apple", href: "/contact" },
        ],
      },
    },
  ];

  // Helper to render accordion on mobile or static list on desktop
  const renderLinkSection = (title: string, links: { text: string; href: string }[]) => {
    const isOpen = !!openSections[title];
    return (
      <div className="border-b border-[#d2d2d7] md:border-0 py-3 md:py-0">
        <button
          onClick={() => toggleSection(title)}
          className="w-full flex justify-between items-center text-left md:pointer-events-none md:cursor-default"
        >
          <h4 className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider md:normal-case md:text-[12px] md:font-bold md:mb-2.5">
            {title}
          </h4>
          <span className="text-[#86868b] text-[18px] md:hidden block font-light leading-none">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <ul
          className={`mt-2 md:mt-0 space-y-2 md:block overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 md:max-h-none opacity-0 md:opacity-100"
          }`}
        >
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="text-[12px] text-[#515154] hover:text-[#1d1d1f] hover:underline transition-colors block py-0.5"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="w-full bg-[#f5f5f7] border-t border-[#d2d2d7] text-[#86868b] py-16 px-4 md:px-8 select-none font-sans">
      <div className="max-w-[1024px] mx-auto">
        

        {/* Footnotes Section */}
        <div className="text-[11px] leading-[1.6] space-y-3.5 border-b border-[#d2d2d7] pb-8 mb-8 text-[#86868b]">
          {footnotes.map((fn, idx) => (
            <p key={idx} className="pl-0 select-text">
              {fn}
            </p>
          ))}
        </div>

        {/* Breadcrumb section */}
        <div className="flex items-center gap-2 text-[11px] text-[#515154] mb-8 pb-4 border-b border-[#d2d2d7] md:border-0 md:pb-0 md:mb-6">
          <Link href="/" className="hover:text-[#1d1d1f] transition-colors">
            
          </Link>
          <span className="text-[#86868b] font-light">›</span>
          <span className="text-[#86868b]">iPhone</span>
        </div>

        {/* Sitemap Directory */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-6 border-b border-[#d2d2d7] md:border-0 pb-4 md:pb-0 mb-8 md:mb-6">
          {/* Column 1 */}
          <div className="flex flex-col md:gap-6">
            {renderLinkSection(directoryColumns[0].title, directoryColumns[0].links)}
            {directoryColumns[0].secondary &&
              renderLinkSection(directoryColumns[0].secondary.title, directoryColumns[0].secondary.links)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col md:gap-6">
            {renderLinkSection(directoryColumns[1].title, directoryColumns[1].links)}
            {directoryColumns[1].secondary &&
              renderLinkSection(directoryColumns[1].secondary.title, directoryColumns[1].secondary.links)}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            {renderLinkSection(directoryColumns[2].title, directoryColumns[2].links)}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col md:gap-6">
            {renderLinkSection(directoryColumns[3].title, directoryColumns[3].links)}
            {directoryColumns[3].education &&
              renderLinkSection(directoryColumns[3].education.title, directoryColumns[3].education.links)}
            {directoryColumns[3].healthcare &&
              renderLinkSection(directoryColumns[3].healthcare.title, directoryColumns[3].healthcare.links)}
            {directoryColumns[3].government &&
              renderLinkSection(directoryColumns[3].government.title, directoryColumns[3].government.links)}
          </div>

          {/* Column 5 */}
          <div className="flex flex-col md:gap-6">
            {renderLinkSection(directoryColumns[4].title, directoryColumns[4].links)}
            {directoryColumns[4].secondary &&
              renderLinkSection(directoryColumns[4].secondary.title, directoryColumns[4].secondary.links)}
          </div>
        </div>

        {/* Retail info and Copyright details */}
        <div className="pt-6 md:pt-4 text-[11px] leading-[1.6]">
          <div className="text-[#515154] pb-4 mb-4 border-b border-[#d2d2d7]">
            More ways to shop:{" "}
            <Link href="/retail" className="text-[#06c] hover:underline">
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link href="/retailer" className="text-[#06c] hover:underline">
              other retailer
            </Link>{" "}
            near you. Or call 1-800-MY-APPLE.
          </div>

          <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 md:gap-0 items-start md:items-center text-[#515154]">
            <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4">
              <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1">
                <Link href="/privacy" className="hover:text-[#1d1d1f] hover:underline transition-colors border-r border-[#d2d2d7] pr-2.5 last:border-0 last:pr-0">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="hover:text-[#1d1d1f] hover:underline transition-colors border-r border-[#d2d2d7] pr-2.5 last:border-0 last:pr-0">
                  Terms of Use
                </Link>
                <Link href="/shop/refunds" className="hover:text-[#1d1d1f] hover:underline transition-colors border-r border-[#d2d2d7] pr-2.5 last:border-0 last:pr-0">
                  Sales and Refunds
                </Link>
                <Link href="/legal" className="hover:text-[#1d1d1f] hover:underline transition-colors border-r border-[#d2d2d7] pr-2.5 last:border-0 last:pr-0">
                  Legal
                </Link>
                <Link href="/sitemap" className="hover:text-[#1d1d1f] hover:underline transition-colors last:border-0 last:pr-0">
                  Site Map
                </Link>
              </div>
            </div>
            
            <Link href="/choose-country-region" className="hover:text-[#1d1d1f] hover:underline transition-colors">
              United States
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
