import React, { useEffect } from 'react';

// Local asset imports
import logoImage from './assets/logo.png';
import heroBgImage from './assets/hero-bg.jpg';
import wiredImage from './assets/wired.jpg';
import paddedImage from './assets/padded.jpg';
import nonPaddedImage from './assets/non-padded.jpg';
import fullFigureImage from './assets/full-figure.jpg';
import sportsWearImage from './assets/sports-wear.jpg';
import yogaFlowImage from './assets/yoga-flow.jpg';
import highImpactImage from './assets/high-impact.jpg';

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1269 8.24994H0V6.74998H12.1269L6.43076 1.05382L7.49996 0L14.9999 7.49996L7.49996 14.9999L6.43076 13.9461L12.1269 8.24994Z" fill="#75574E"/>
  </svg>
);

const Navbar = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 max-w-[1440px] mx-auto w-full">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img
        src={logoImage}
        alt="Lumi logo mark"
        className="w-[52px] h-[42px] object-contain"
      />
      <span
        className="text-lumi-brown tracking-[0.1em] text-2xl"
        style={{ fontFamily: "Noto Serif, serif" }}
      >
        Lumi
      </span>
    </div>

    {/* Center Nav Links */}
    <div className="hidden md:flex items-center gap-12 bg-white/10 backdrop-blur-md shadow-md rounded-full px-6 py-2.5">
      <a
        href="/collections"
        className="text-lumi-muted-nav font-serif text-lg leading-7 tracking-[-0.025em] hover:text-lumi-brown transition-colors"
      >
        Collections
      </a>
      <a
        href="/lumi-ai"
        className="text-[rgba(28,27,26,0.6)] font-serif text-lg leading-7 tracking-[-0.025em] hover:text-lumi-brown transition-colors"
      >
        Lumi AI
      </a>
      <a
        href="/journal"
        className="text-[rgba(28,27,26,0.6)] font-serif text-lg leading-7 tracking-[-0.025em] hover:text-lumi-brown transition-colors"
      >
        Journal
      </a>
    </div>

    {/* Right Icons */}
    <div className="flex items-center gap-5">
      {/* Bag icon */}
      <button className="text-lumi-brown hover:opacity-70 transition-opacity" aria-label="Shopping bag">
        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.98845 20.8999C1.43281 20.8999 0.962492 20.7074 0.577495 20.3224C0.192498 19.9374 0 19.4671 0 18.9115V6.38845C0 5.83281 0.192498 5.36249 0.577495 4.97749C0.962492 4.5925 1.43281 4.4 1.98845 4.4H4.12498V4.12498C4.12498 2.9855 4.52761 2.01313 5.33286 1.20788C6.13811 0.402626 7.11048 0 8.24996 0C9.38944 0 10.3618 0.402626 11.1671 1.20788C11.9723 2.01313 12.3749 2.9855 12.3749 4.12498V4.4H14.5115C15.0671 4.4 15.5374 4.5925 15.9224 4.97749C16.3074 5.36249 16.4999 5.83281 16.4999 6.38845V18.9115C16.4999 19.4671 16.3074 19.9374 15.9224 20.3224C15.5374 20.7074 15.0671 20.8999 14.5115 20.8999H1.98845ZM1.98845 19.25H14.5115C14.5961 19.25 14.6737 19.2147 14.7442 19.1442C14.8147 19.0737 14.85 18.9961 14.85 18.9115V6.38845C14.85 6.30382 14.8147 6.22625 14.7442 6.15574C14.6737 6.08522 14.5961 6.04996 14.5115 6.04996H12.3749V8.52498C12.3749 8.75908 12.296 8.9551 12.138 9.11304C11.9801 9.27099 11.7841 9.34996 11.55 9.34996C11.3159 9.34996 11.1198 9.27099 10.9619 9.11304C10.804 8.9551 10.725 8.75908 10.725 8.52498V6.04996H5.77494V8.52498C5.77494 8.75908 5.69597 8.9551 5.53802 9.11304C5.38008 9.27099 5.18406 9.34996 4.94996 9.34996C4.71586 9.34996 4.51984 9.27099 4.3619 9.11304C4.20395 8.9551 4.12498 8.75908 4.12498 8.52498V6.04996H1.98845C1.90382 6.04996 1.82625 6.08522 1.75574 6.15574C1.68522 6.22625 1.64996 6.30382 1.64996 6.38845V18.9115C1.64996 18.9961 1.68522 19.0737 1.75574 19.1442C1.82625 19.2147 1.90382 19.25 1.98845 19.25ZM5.77494 4.4H10.725V4.12498C10.725 3.43536 10.4849 2.85045 10.0047 2.37025C9.52449 1.89006 8.93958 1.64996 8.24996 1.64996C7.56034 1.64996 6.97543 1.89006 6.49523 2.37025C6.01504 2.85045 5.77494 3.43536 5.77494 4.12498V4.4Z" fill="#75574E"/>
        </svg>
      </button>

      {/* Profile icon */}
      <button className="text-lumi-brown hover:opacity-70 transition-opacity" aria-label="Account">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.24996 7.69992C7.18805 7.69992 6.28091 7.32374 5.52855 6.57137C4.77618 5.81901 4.4 4.91187 4.4 3.84996C4.4 2.78805 4.77618 1.88091 5.52855 1.12855C6.28091 0.376182 7.18805 0 8.24996 0C9.31187 0 10.219 0.376182 10.9714 1.12855C11.7237 1.88091 12.0999 2.78805 12.0999 3.84996C12.0999 4.91187 11.7237 5.81901 10.9714 6.57137C10.219 7.32374 9.31187 7.69992 8.24996 7.69992ZM0 16.0768V13.6315C0 13.0928 0.146313 12.5939 0.438939 12.1349C0.731565 11.6758 1.12256 11.3229 1.61191 11.0761C2.69922 10.543 3.79604 10.1432 4.90238 9.8767C6.00872 9.61016 7.12458 9.47689 8.24996 9.47689C9.37534 9.47689 10.4912 9.61016 11.5975 9.8767C12.7039 10.1432 13.8007 10.543 14.888 11.0761C15.3774 11.3229 15.7684 11.6758 16.061 12.1349C16.3536 12.5939 16.4999 13.0928 16.4999 13.6315V16.0768H0ZM1.64996 14.4269H14.85V13.6315C14.85 13.4087 14.7854 13.2024 14.6564 13.0127C14.5274 12.823 14.3521 12.6683 14.1307 12.5484C13.183 12.0816 12.2167 11.728 11.2317 11.4875C10.2468 11.2471 9.25284 11.1269 8.24996 11.1269C7.24708 11.1269 6.25316 11.2471 5.26819 11.4875C4.28322 11.728 3.31689 12.0816 2.3692 12.5484C2.14779 12.6683 1.97256 12.823 1.84352 13.0127C1.71448 13.2024 1.64996 13.4087 1.64996 13.6315V14.4269ZM8.24996 6.04996C8.85496 6.04996 9.37288 5.83454 9.80371 5.40371C10.2345 4.97288 10.45 4.45496 10.45 3.84996C10.45 3.24496 10.2345 2.72704 9.80371 2.29621C9.37288 1.86538 8.85496 1.64996 8.24996 1.64996C7.64496 1.64996 7.12704 1.86538 6.69621 2.29621C6.26538 2.72704 6.04996 3.24496 6.04996 3.84996C6.04996 4.45496 6.26538 4.97288 6.69621 5.40371C7.12704 5.83454 7.64496 6.04996 8.24996 6.04996Z" fill="#75574E"/>
        </svg>
      </button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(480px, 55vw, 784px)" }}>
    {/* Background image */}
    <img
      src={heroBgImage}
      alt="Lumi hero background"
      className="absolute inset-0 w-full h-full object-cover object-top"
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-20 pt-32 pb-16 max-w-[1440px] mx-auto" style={{ minHeight: "clamp(480px, 55vw, 784px)" }}>
      <div className="max-w-[406px]">
        {/* Heading */}
        <h1 className="text-lumi-dark leading-tight mb-6" style={{ letterSpacing: "-0.05em" }}>
          <span
            className="block text-5xl md:text-6xl lg:text-[73px]"
            style={{ fontFamily: "Noto Serif, serif", fontWeight: 400 }}
          >
            Lumi: Your
          </span>
          <span
            className="block text-5xl md:text-6xl lg:text-[73px] italic"
            style={{ fontFamily: "Philosopher, serif", fontWeight: 400 }}
          >
            Second Skin.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lumi-text text-sm md:text-[15px] leading-[1.4] font-light mb-8 max-w-[388px]"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Experience the ultimate fusion of trend and comfort.
          Meticulously crafted silhouettes designed to
          disappear beneath your wardrobe.
        </p>

        {/* CTA Button */}
        <a
          href="/collections"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-lumi-brown text-white text-[10.5px] font-medium tracking-[0.1em] uppercase hover:bg-opacity-90 transition-all shadow-lg cursor-pointer"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          SHOP THE COLLECTION
        </a>
      </div>
    </div>
  </section>
);

const products = [
  {
    name: "Wired",
    description: "Sculpted architecture for perfect lift.",
    image: wiredImage,
    alt: "Wired bra",
    href: "/collections",
  },
  {
    name: "Padded",
    description: "Seamless volume and contoured comfort.",
    image: paddedImage,
    alt: "Padded bra",
    href: "/collections",
  },
  {
    name: "Non-Padded",
    description: "Unstructured freedom in fine mesh.",
    image: nonPaddedImage,
    alt: "Non-padded bra",
    href: "/collections",
  },
  {
    name: "Full Figure",
    description: "The everyday essential, redefined.",
    image: fullFigureImage,
    alt: "Full figure bra",
    href: "/collections",
  },
];

const FundamentalsSection = () => (
  <section className="bg-lumi-cream px-5 md:px-10 py-16 md:py-20">
    <div className="max-w-[1440px] mx-auto">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12 md:mb-16">
        <div className="flex flex-col gap-4">
          <span
            className="text-[rgba(117,87,78,0.6)] text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            ESSENTIAL WARDROBE
          </span>
          <h2
            className="text-lumi-dark text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "Noto Serif, serif", fontWeight: 400 }}
          >
            The Fundamentals
          </h2>
        </div>
        <p
          className="text-lumi-text text-base font-light leading-6 max-w-[384px]"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Elevated basics that define the foundation of every
          modern ensemble. Designed for invisible support.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <a key={product.name} href={product.href} className="group flex flex-col gap-1 cursor-pointer">
            {/* Image container */}
            <div className="bg-lumi-warm rounded-lg overflow-hidden flex items-center justify-center" style={{ aspectRatio: "4/5" }}>
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Product info */}
            <div className="pt-4">
              <h3
                className="text-lumi-dark text-lg md:text-xl leading-7"
                style={{ fontFamily: "Noto Serif, serif", fontWeight: 400 }}
              >
                {product.name}
              </h3>
              <p
                className="text-lumi-text text-sm leading-5"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {product.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const movementCards = [
  {
    title: "Sports Wear",
    description: "Maximum support for peak performance.",
    image: sportsWearImage,
    tag: "HIGH IMPACT",
    href: "/collections",
  },
  {
    title: "Yoga Flow",
    description: "Buttery soft fabrics that move with you.",
    image: yogaFlowImage,
    tag: "SEAMLESS FLOW",
    href: "/collections",
  },
  {
    title: "High Impact for Hiking",
    description: "Advanced wicking to handle the toughest inclines.",
    image: highImpactImage,
    tag: "HIGH IMPACT",
    href: "/collections",
  },
];

const MovementSection = () => (
  <section className="bg-lumi-warm py-16 md:py-20 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-5 md:px-10">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12 md:mb-16">
        <span
          className="text-[rgba(117,87,78,0.6)] text-xs font-bold tracking-[0.3em] uppercase"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          ACTIVE LIFESTYLE
        </span>
        <h2
          className="text-lumi-dark text-4xl md:text-5xl leading-tight"
          style={{ fontFamily: "Noto Serif, serif", fontWeight: 400 }}
        >
          Designed for Movement
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {movementCards.map((card) => (
          <a key={card.title} href={card.href} className="group flex flex-col gap-5 cursor-pointer">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Tag */}
              <div className="absolute bottom-6 left-8">
                <div className="flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
                  <span
                    className="text-white text-[9.5px] font-semibold tracking-[0.1em] uppercase"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Info row */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <h3
                  className="text-lumi-dark text-xl md:text-2xl leading-8"
                  style={{ fontFamily: "Noto Serif, serif", fontWeight: 400 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-lumi-text text-sm md:text-[15px] leading-6"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
              <div className="mt-1 flex-shrink-0">
                <ArrowIcon />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-lumi-footer px-6 md:px-12 py-16 md:py-20">
    <div className="max-w-[1440px] mx-auto">
      {/* Main footer content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 md:mb-20">
        {/* Brand */}
        <div className="flex flex-col">
          <h3
            className="text-lumi-brown text-3xl leading-9"
            style={{ fontFamily: "Noto Serif, serif", fontWeight: 400 }}
          >
            Lumi Atelier
          </h3>
          <p
            className="text-[rgba(28,27,26,0.4)] text-sm leading-5 tracking-[0.025em] mt-6 max-w-[320px]"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Curating the intersection of intimate comfort
            and avant-garde silhouette.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-12">
          {/* Explore column */}
          <div className="flex flex-col">
            <span
              className="text-[rgba(117,87,78,0.6)] text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              EXPLORE
            </span>
            <a
              href="/sustainability"
              className="text-[rgba(28,27,26,0.4)] text-sm leading-5 tracking-[0.025em] hover:text-lumi-brown transition-colors mb-4"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Sustainability
            </a>
            <a
              href="/fitting-guide"
              className="text-[rgba(28,27,26,0.4)] text-sm leading-5 tracking-[0.025em] hover:text-lumi-brown transition-colors"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Fitting Guide
            </a>
          </div>

          {/* Company column */}
          <div className="flex flex-col">
            <span
              className="text-[rgba(117,87,78,0.6)] text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              COMPANY
            </span>
            <a
              href="/privacy"
              className="text-[rgba(28,27,26,0.4)] text-sm leading-5 tracking-[0.025em] hover:text-lumi-brown transition-colors mb-4"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Privacy
            </a>
            <a
              href="/care-instructions"
              className="text-[rgba(28,27,26,0.4)] text-sm leading-5 tracking-[0.025em] hover:text-lumi-brown transition-colors"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Care Instructions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border + copyright */}
      <div className="border-t border-[rgba(117,87,78,0.1)] pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p
          className="text-[rgba(28,27,26,0.4)] text-xs"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          © 2024 Lumi Atelier. Designed for the Ethereal.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {/* Globe icon */}
          <button className="text-[rgba(117,87,78,0.4)] hover:text-lumi-brown transition-colors" aria-label="Website">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.50164 18.9999C8.18771 18.9999 6.95267 18.7506 5.79653 18.2519C4.64039 17.7533 3.63471 17.0765 2.77948 16.2217C1.92426 15.3668 1.2472 14.3616 0.748323 13.206C0.249441 12.0503 0 10.8156 0 9.50164C0 8.18771 0.24933 6.95267 0.74799 5.79653C1.24665 4.64039 1.9234 3.63471 2.77825 2.77948C3.6331 1.92426 4.63833 1.24721 5.79396 0.748323C6.94958 0.249441 8.18436 0 9.49829 0C10.8122 0 12.0473 0.24933 13.2034 0.74799C14.3595 1.24665 15.3652 1.9234 16.2204 2.77825C17.0757 3.6331 17.7527 4.63833 18.2516 5.79396C18.7505 6.94958 18.9999 8.18436 18.9999 9.49829C18.9999 10.8122 18.7506 12.0473 18.2519 13.2034C17.7533 14.3595 17.0765 15.3652 16.2217 16.2204C15.3668 17.0757 14.3616 17.7527 13.206 18.2516C12.0503 18.7505 10.8156 18.9999 9.50164 18.9999ZM8.49996 17.45V15.5C7.94996 15.5 7.47913 15.3041 7.08746 14.9125C6.6958 14.5208 6.49996 14.05 6.49996 13.5V12.5L1.69996 7.69996C1.64996 7.99996 1.60413 8.29996 1.56246 8.59996C1.5208 8.89996 1.49996 9.19996 1.49996 9.49996C1.49996 11.5166 2.16246 13.2833 3.48746 14.8C4.81246 16.3166 6.4833 17.2 8.49996 17.45ZM15.4 14.9C16.0833 14.15 16.6041 13.3125 16.9625 12.3875C17.3208 11.4625 17.5 10.4988 17.5 9.49636C17.5 7.8591 17.0474 6.36384 16.1423 5.0106C15.2371 3.65735 14.023 2.68073 12.5 2.08073V2.49996C12.5 3.04996 12.3041 3.5208 11.9125 3.91246C11.5208 4.30413 11.05 4.49996 10.5 4.49996H8.49996V6.49996C8.49996 6.7833 8.40413 7.0208 8.21246 7.21246C8.0208 7.40413 7.7833 7.49996 7.49996 7.49996H5.49996V9.49996H11.5C11.7833 9.49996 12.0208 9.5958 12.2125 9.78746C12.4041 9.97913 12.5 10.2166 12.5 10.5V13.5H13.5C13.9333 13.5 14.325 13.6291 14.675 13.8875C15.025 14.1458 15.2666 14.4833 15.4 14.9Z" fill="#75574E" fillOpacity="0.4"/>
            </svg>
          </button>

          {/* Share icon */}
          <button className="text-[rgba(117,87,78,0.4)] hover:text-lumi-brown transition-colors" aria-label="Share">
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3054 18.9999C13.5569 18.9999 12.9214 18.7382 12.399 18.2147C11.8766 17.6912 11.6154 17.0555 11.6154 16.3076C11.6154 16.2076 11.65 15.9647 11.7192 15.5788L4.60766 11.3922C4.36664 11.6422 4.0803 11.8381 3.74866 11.9797C3.41702 12.1214 3.06169 12.1922 2.68267 12.1922C1.93748 12.1922 1.30408 11.9294 0.782445 11.4038C0.260815 10.8782 0 10.2435 0 9.49996C0 8.75638 0.260815 8.12177 0.782445 7.59613C1.30408 7.0705 1.93748 6.80768 2.68267 6.80768C3.06169 6.80768 3.41702 6.87851 3.74866 7.02018C4.0803 7.16185 4.36664 7.35768 4.60766 7.60768L11.7192 3.43075C11.6795 3.30767 11.6522 3.18716 11.6375 3.06921C11.6227 2.95126 11.6154 2.82562 11.6154 2.69229C11.6154 1.94443 11.8773 1.30875 12.4013 0.785251C12.9252 0.26175 13.5614 0 14.3099 0C15.0584 0 15.6938 0.26197 16.2163 0.78591C16.7387 1.30985 16.9999 1.94606 16.9999 2.69455C16.9999 3.44303 16.7382 4.07849 16.2147 4.60092C15.6912 5.12335 15.0555 5.38457 14.3076 5.38457C13.9269 5.38457 13.5727 5.31213 13.2451 5.16726C12.9176 5.02239 12.6333 4.82495 12.3923 4.57495L5.28072 8.7615C5.32047 8.88458 5.34771 9.00509 5.36245 9.12304C5.3772 9.24099 5.38457 9.36663 5.38457 9.49996C5.38457 9.6333 5.3772 9.75894 5.36245 9.87689C5.34771 9.99484 5.32047 10.1154 5.28072 10.2384L12.3923 14.425C12.6333 14.175 12.9176 13.9775 13.2451 13.8327C13.5727 13.6878 13.9269 13.6154 14.3076 13.6154C15.0555 13.6154 15.6912 13.8773 16.2147 14.4013C16.7382 14.9252 16.9999 15.5614 16.9999 16.3099C16.9999 17.0584 16.738 17.6938 16.214 18.2163C15.6901 18.7387 15.0539 18.9999 14.3054 18.9999Z" fill="#75574E" fillOpacity="0.4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default function LumiLandingPage() {
  useEffect(() => {
    // Add Tailwind CDN if not already added to ensure it works standalone
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      script.onload = () => {
        window.tailwind.config = {
          theme: {
            extend: {
              colors: {
                lumi: {
                  cream: "#FDF9F6",
                  warm: "#F7F3F0",
                  footer: "#F2E8E5",
                  brown: "#75574E",
                  dark: "#1C1B1A",
                  text: "#504441",
                  "muted-nav": "#443A32",
                },
              },
            }
          }
        };
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap");
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
      {/* We use inline styles for the base background so it looks good before Tailwind CDN loads */}
      <div className="min-h-screen font-sans bg-lumi-cream" style={{ backgroundColor: '#FDF9F6' }}>
        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
        <FundamentalsSection />
        <MovementSection />
        <Footer />
      </div>
    </>
  );
}
