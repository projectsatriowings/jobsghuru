import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BrandLogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
  variant?: "horizontal" | "icon-only" | "full-image" | "banner";
  subtitle?: string;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  href = "/",
  onClick,
  size = "md",
  theme = "light",
  variant = "horizontal",
  subtitle,
  className = "",
  priority = false,
}: BrandLogoProps) {
  // Enhanced dimensions for bigger, more impactful brand presence
  const sizeConfig = {
    sm: {
      iconBox: "h-10 w-10 sm:h-11 sm:w-11 rounded-xl p-0.5",
      iconDim: 36,
      titleText: "text-xl sm:text-2xl",
      subText: "text-[10px]",
      fullImgHeight: 40,
      bannerWidth: 160,
      bannerHeight: 36,
    },
    md: {
      iconBox: "h-12 w-12 sm:h-14 sm:w-14 rounded-2xl p-1",
      iconDim: 48,
      titleText: "text-2xl sm:text-[28px]",
      subText: "text-[11px]",
      fullImgHeight: 52,
      bannerWidth: 200,
      bannerHeight: 45,
    },
    lg: {
      iconBox: "h-14 w-14 sm:h-[62px] sm:w-[62px] md:h-[68px] md:w-[68px] rounded-2xl p-1",
      iconDim: 60,
      titleText: "text-2xl sm:text-3xl md:text-[34px]",
      subText: "text-xs font-bold",
      fullImgHeight: 64,
      bannerWidth: 245,
      bannerHeight: 56,
    },
    xl: {
      iconBox: "h-18 w-18 sm:h-22 sm:w-22 md:h-26 md:w-26 rounded-3xl p-1.5",
      iconDim: 84,
      titleText: "text-3xl sm:text-4xl md:text-5xl",
      subText: "text-sm font-bold",
      fullImgHeight: 88,
      bannerWidth: 310,
      bannerHeight: 70,
    },
  }[size];

  const isDark = theme === "dark";
  const mainTextColor = isDark ? "text-white" : "text-slate-900";
  const accentColor = isDark ? "text-blue-400" : "text-blue-600";
  const subTextColor = isDark ? "text-slate-400" : "text-blue-700";

  const content = (
    <div className={`group inline-flex items-center gap-3 sm:gap-3.5 transition shrink-0 select-none ${className}`}>
      {variant === "banner" ? (
        <div className="relative flex items-center">
          <Image
            src="/images/logo-horizontal-transparent.png"
            alt="JobsGhuru"
            width={sizeConfig.bannerWidth}
            height={sizeConfig.bannerHeight}
            className="h-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority={priority}
          />
        </div>
      ) : variant === "full-image" ? (
        <div className="relative flex items-center">
          <Image
            src="/images/logo-transparent.png"
            alt="JobsGhuru"
            width={sizeConfig.fullImgHeight * 2.8}
            height={sizeConfig.fullImgHeight}
            className="h-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority={priority}
          />
        </div>
      ) : (
        <>
          {/* Emblem Icon Badge */}
          <span
            className={`relative flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg ${
              sizeConfig.iconBox
            } ${
              isDark
                ? "bg-slate-900 border-2 border-slate-700/80 shadow-md shadow-black/50"
                : "bg-white border-2 border-blue-100 shadow-md shadow-blue-600/10"
            }`}
          >
            <Image
              src="/images/logo-icon-transparent.png"
              alt="JobsGhuru"
              width={sizeConfig.iconDim}
              height={sizeConfig.iconDim}
              className="object-contain transition-transform duration-200"
              priority={priority}
            />
          </span>

          {/* Typography Section (if not icon-only) */}
          {variant !== "icon-only" && (
            <div className="flex flex-col">
              <span
                className={`font-display font-black tracking-tight leading-tight ${sizeConfig.titleText} ${mainTextColor}`}
              >
                Jobs<span className={accentColor}>Ghuru</span>
              </span>
              {subtitle && (
                <span
                  className={`font-extrabold uppercase tracking-wider leading-none mt-1 ${sizeConfig.subText} ${subTextColor}`}
                >
                  {subtitle}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        title="JobsGhuru - Home"
        aria-label="JobsGhuru Homepage"
        className="inline-flex items-center"
      >
        {content}
      </Link>
    );
  }

  return content;
}
