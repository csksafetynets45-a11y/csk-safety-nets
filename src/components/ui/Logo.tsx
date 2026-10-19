"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

/**
 * Fallback Vector SVG Monogram & Dual-Color Typography Layout
 * Uses official CSK Crimson Red (#A61E22) & Metallic Gold (#D4AF37)
 */
export function VectorBadge({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      {/* Monogram Badge */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoCrimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C0272D" />
              <stop offset="100%" stopColor="#A61E22" />
            </linearGradient>
            <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8C84A" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="28" fill="url(#logoCrimsonGrad)" />
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            fill="none"
            stroke="url(#logoGoldGrad)"
            strokeWidth="3"
            opacity="0.85"
          />
          <path
            d="M 67 34 A 26 26 0 1 0 67 66"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle cx="67" cy="50" r="4.5" fill="url(#logoGoldGrad)" />
        </svg>
      </div>

      {/* Clean Dual-Color Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`text-base sm:text-lg font-extrabold tracking-tight ${
              light ? "text-white" : "text-[#A61E22]"
            }`}
          >
            CSK
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#D4AF37]">
            SAFETY
          </span>
        </div>
        <span
          className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5 ${
            light ? "text-slate-300" : "text-[#4A4A4A]"
          }`}
        >
          Nets &amp; Grills · Chennai
        </span>
      </div>
    </div>
  );
}

/**
 * Premium Capsule Badge Navbar Logo
 * - Wrapped in a clean white rounded card with brand primary/accent subtle glow
 * - Next.js <Image> with priority, object-contain, and responsive breakpoints
 * - Seamless fallback to VectorBadge if image fails to load
 */
export function NavLogo({ className = "" }: { className?: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Link
        href="/"
        className="flex items-center rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
        aria-label="CSK Safety Nets & Invisible Grills Home"
      >
        {!imageError ? (
          <Image
            src="/images/logo/csksafetynets-logo.webp"
            alt="CSK Safety Nets & Invisible Grills Chennai"
            width={2172}
            height={724}
            priority
            onError={() => setImageError(true)}
            className="h-10 sm:h-12 md:h-[50px] w-auto object-contain transition-transform duration-200"
          />
        ) : (
          <VectorBadge light={false} />
        )}
      </Link>
    </div>
  );
}

/**
 * Standard / Footer Logo Component
 */
export default function Logo({
  className = "",
  iconOnly = false,
  light = false,
  stacked = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="CSK Safety Nets & Invisible Grills Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoIconCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C0272D" />
                <stop offset="100%" stopColor="#A61E22" />
              </linearGradient>
              <linearGradient id="logoIconGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8C84A" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="28" fill="url(#logoIconCrimson)" />
            <rect
              x="4"
              y="4"
              width="92"
              height="92"
              rx="24"
              fill="none"
              stroke="url(#logoIconGold)"
              strokeWidth="3"
              opacity="0.85"
            />
            <path
              d="M 67 34 A 26 26 0 1 0 67 66"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <circle cx="67" cy="50" r="4.5" fill="url(#logoIconGold)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 select-none group ${className}`}
      aria-label="CSK Safety Nets & Invisible Grills Home"
    >
      <VectorBadge light={light} />
    </Link>
  );
}
