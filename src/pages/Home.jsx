import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Footer from '../components/Footer';

// Local asset imports (now in src/assets)
import logoImage from '../assets/logo.png';
import heroBgVideo from '../assets/bg-video.mp4';
import wiredImage from '../assets/wired.jpg';
import paddedImage from '../assets/padded.jpeg';
import nonPaddedImage from '../assets/non padded.png';
import fullFigureImage from '../assets/full-figure.png';
import yogaFlowImage from '../assets/yoga-flow.jpg';
import highImpactImage from '../assets/hiking.png';
import sportsWearImage from '../assets/sport.png';

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1269 8.24994H0V6.74998H12.1269L6.43076 1.05382L7.49996 0L14.9999 7.49996L7.49996 14.9999L6.43076 13.9461L12.1269 8.24994Z" fill="#75574E" />
  </svg>
);

const HomeNavbar = () => (
  <nav className="home-navbar">
    {/* Logo */}
    <Link to="/" className="home-nav-logo" style={{ textDecoration: 'none' }}>
      <img src={logoImage} alt="Lumi logo mark" />
      <span className="home-nav-logo-text">Lumi</span>
    </Link>

    {/* Center Nav Links */}
    <div className="home-nav-links">
      <Link to="/collections" className="home-nav-link">Collections</Link>
      <Link to="/lumi-ai" className="home-nav-link faded">Lumi AI</Link>
      <Link to="/" className="home-nav-link faded">Journal</Link>
    </div>

    {/* Right Icons */}
    <div className="home-nav-icons">
      {/* Bag icon */}
      <button className="home-nav-icon-btn" aria-label="Shopping bag">
        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.98845 20.8999C1.43281 20.8999 0.962492 20.7074 0.577495 20.3224C0.192498 19.9374 0 19.4671 0 18.9115V6.38845C0 5.83281 0.192498 5.36249 0.577495 4.97749C0.962492 4.5925 1.43281 4.4 1.98845 4.4H4.12498V4.12498C4.12498 2.9855 4.52761 2.01313 5.33286 1.20788C6.13811 0.402626 7.11048 0 8.24996 0C9.38944 0 10.3618 0.402626 11.1671 1.20788C11.9723 2.01313 12.3749 2.9855 12.3749 4.12498V4.4H14.5115C15.0671 4.4 15.5374 4.5925 15.9224 4.97749C16.3074 5.36249 16.4999 5.83281 16.4999 6.38845V18.9115C16.4999 19.4671 16.3074 19.9374 15.9224 20.3224C15.5374 20.7074 15.0671 20.8999 14.5115 20.8999H1.98845ZM1.98845 19.25H14.5115C14.5961 19.25 14.6737 19.2147 14.7442 19.1442C14.8147 19.0737 14.85 18.9961 14.85 18.9115V6.38845C14.85 6.30382 14.8147 6.22625 14.7442 6.15574C14.6737 6.08522 14.5961 6.04996 14.5115 6.04996H12.3749V8.52498C12.3749 8.75908 12.296 8.9551 12.138 9.11304C11.9801 9.27099 11.7841 9.34996 11.55 9.34996C11.3159 9.34996 11.1198 9.27099 10.9619 9.11304C10.804 8.9551 10.725 8.75908 10.725 8.52498V6.04996H5.77494V8.52498C5.77494 8.75908 5.69597 8.9551 5.53802 9.11304C5.38008 9.27099 5.18406 9.34996 4.94996 9.34996C4.71586 9.34996 4.51984 9.27099 4.3619 9.11304C4.20395 8.9551 4.12498 8.75908 4.12498 8.52498V6.04996H1.98845C1.90382 6.04996 1.82625 6.08522 1.75574 6.15574C1.68522 6.22625 1.64996 6.30382 1.64996 6.38845V18.9115C1.64996 18.9961 1.68522 19.0737 1.75574 19.1442C1.82625 19.2147 1.90382 19.25 1.98845 19.25ZM5.77494 4.4H10.725V4.12498C10.725 3.43536 10.4849 2.85045 10.0047 2.37025C9.52449 1.89006 8.93958 1.64996 8.24996 1.64996C7.56034 1.64996 6.97543 1.89006 6.49523 2.37025C6.01504 2.85045 5.77494 3.43536 5.77494 4.12498V4.4Z" fill="currentColor" />
        </svg>
      </button>

      {/* Profile icon */}
      <button className="home-nav-icon-btn" aria-label="Account">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.24996 7.69992C7.18805 7.69992 6.28091 7.32374 5.52855 6.57137C4.77618 5.81901 4.4 4.91187 4.4 3.84996C4.4 2.78805 4.77618 1.88091 5.52855 1.12855C6.28091 0.376182 7.18805 0 8.24996 0C9.31187 0 10.219 0.376182 10.9714 1.12855C11.7237 1.88091 12.0999 2.78805 12.0999 3.84996C12.0999 4.91187 11.7237 5.81901 10.9714 6.57137C10.219 7.32374 9.31187 7.69992 8.24996 7.69992ZM0 16.0768V13.6315C0 13.0928 0.146313 12.5939 0.438939 12.1349C0.731565 11.6758 1.12256 11.3229 1.61191 11.0761C2.69922 10.543 3.79604 10.1432 4.90238 9.8767C6.00872 9.61016 7.12458 9.47689 8.24996 9.47689C9.37534 9.47689 10.4912 9.61016 11.5975 9.8767C12.7039 10.1432 13.8007 10.543 14.888 11.0761C15.3774 11.3229 15.7684 11.6758 16.061 12.1349C16.3536 12.5939 16.4999 13.0928 16.4999 13.6315V16.0768H0ZM1.64996 14.4269H14.85V13.6315C14.85 13.4087 14.7854 13.2024 14.6564 13.0127C14.5274 12.823 14.3521 12.6683 14.1307 12.5484C13.183 12.0816 12.2167 11.728 11.2317 11.4875C10.2468 11.2471 9.25284 11.1269 8.24996 11.1269C7.24708 11.1269 6.25316 11.2471 5.26819 11.4875C4.28322 11.728 3.31689 12.0816 2.3692 12.5484C2.14779 12.6683 1.97256 12.823 1.84352 13.0127C1.71448 13.2024 1.64996 13.4087 1.64996 13.6315V14.4269ZM8.24996 6.04996C8.85496 6.04996 9.37288 5.83454 9.80371 5.40371C10.2345 4.97288 10.45 4.45496 10.45 3.84996C10.45 3.24496 10.2345 2.72704 9.80371 2.29621C9.37288 1.86538 8.85496 1.64996 8.24996 1.64996C7.64496 1.64996 7.12704 1.86538 6.69621 2.29621C6.26538 2.72704 6.04996 3.24496 6.04996 3.84996C6.04996 4.45496 6.26538 4.97288 6.69621 5.40371C7.12704 5.83454 7.64496 6.04996 8.24996 6.04996Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="home-hero-section">
    <video autoPlay loop muted playsInline className="home-hero-bg">
      <source src={heroBgVideo} type="video/mp4" />
    </video>
    <div className="home-hero-content">
      <div className="home-hero-text-wrapper">
        <h1 className="home-hero-title">
          <span className="home-hero-title-part1">Lumi: Your</span>
          <span className="home-hero-title-part2">Second Skin.</span>
        </h1>
        <p className="home-hero-subtitle">
          Experience the ultimate fusion of trend and comfort.
          Meticulously crafted silhouettes designed to
          disappear beneath your wardrobe.
        </p>
        <Link to="/collections" className="home-hero-btn">
          SHOP THE COLLECTION
        </Link>
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
  <section className="home-fundamentals-section">
    <div className="home-section-container">
      <div className="home-section-header">
        <div className="home-section-title-wrapper">
          <span className="home-section-label">ESSENTIAL WARDROBE</span>
          <h2 className="home-section-title">The Fundamentals</h2>
        </div>
        <p className="home-section-desc">
          Elevated basics that define the foundation of every
          modern ensemble. Designed for invisible support.
        </p>
      </div>

      <div className="fundamentals-grid">
        {products.map((product) => (
          <Link key={product.name} to={product.href} className="fundamentals-card">
            <div className="fundamentals-img-wrapper">
              <img src={product.image} alt={product.alt} className="fundamentals-img" />
            </div>
            <div className="fundamentals-info">
              <h3 className="fundamentals-title">{product.name}</h3>
              <p className="fundamentals-desc">{product.description}</p>
            </div>
          </Link>
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
  <section className="home-movement-section">
    <div className="home-movement-container">
      <div className="home-movement-header">
        <span className="home-section-label">ACTIVE LIFESTYLE</span>
        <h2 className="home-section-title">Designed for Movement</h2>
      </div>

      <div className="movement-grid">
        {movementCards.map((card) => (
          <Link key={card.title} to={card.href} className="movement-card">
            <div className="movement-img-wrapper">
              <img src={card.image} alt={card.title} className="movement-img" />
              <div className="movement-tag">
                <span className="movement-tag-text">{card.tag}</span>
              </div>
            </div>
            <div className="movement-info">
              <div className="movement-text-wrap">
                <h3 className="movement-title">{card.title}</h3>
                <p className="movement-desc">{card.description}</p>
              </div>
              <div className="movement-icon">
                <ArrowIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <HomeNavbar />
      <HeroSection />
      <FundamentalsSection />
      <MovementSection />
      <Footer />
    </div>
  );
}
