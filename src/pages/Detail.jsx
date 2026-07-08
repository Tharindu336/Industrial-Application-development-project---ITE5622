import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/Detail.css';

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="detail-page">
      <NavBar />
      
      <main className="detail-main">
        <div className="detail-container">
          {/* Product Detail Section: Asymmetric Layout */}
          <div className="detail-layout">
            
            {/* Left: Editorial Imagery */}
            <div className="detail-image-section">
              <div className="detail-image-wrapper">
                <img 
                  alt="Premium silk bralette" 
                  className="detail-image" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6dz-R2BFZtyQ0rLCzVexCwsyJy01Eg3xx42AyN-ItjDI-PCpxGH2ZEh15MktfL4CmrK2hjS9TNHciqeraYVtPfU6fJwl8sQbSnbcFX1vjSE7_mTH2D7Xlvju7ykOlQbbyAXS-Dw7Rr35wdMA4nAspdN4yGHgJAaUkkldx0zPZ-9oci5U-8sEwtiWpNcI-rgpOIuyT_od2o9bz2OwjIqR3gSohw3Zpd8mMNRoszhD8tE1NPwZ6xX9aQXhjl9_8K_bE7riZ_daf5lvJ" 
                />
                <div className="detail-image-dots">
                  <div className="detail-dot-active"></div>
                  <div className="detail-dot"></div>
                  <div className="detail-dot"></div>
                </div>
              </div>
            </div>

            {/* Right: Content & Detail Selection */}
            <div className="detail-info-section">
              <header className="detail-header">
                <span className="detail-collection">The Elements Collection</span>
                <h1 className="detail-title">The Silk-Stone Bralette</h1>
                <p className="detail-price">$185.00</p>
              </header>

              <div className="detail-options">
                {/* Color Selection */}
                <div className="detail-option-group">
                  <span className="detail-option-label">Shade: Sandstone</span>
                  <div className="detail-colors">
                    <button className="detail-color-btn sandstone"></button>
                    <button className="detail-color-btn earth"></button>
                    <button className="detail-color-btn obsidian"></button>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="detail-option-group">
                  <div className="detail-size-header">
                    <span className="detail-option-label">Select Size</span>
                    <button className="detail-guide-link">Fitting Guide</button>
                  </div>
                  <div className="detail-sizes">
                    <button className="detail-size-btn">XS</button>
                    <button className="detail-size-btn active">S</button>
                    <button className="detail-size-btn">M</button>
                    <button className="detail-size-btn">L</button>
                    <button className="detail-size-btn">XL</button>
                  </div>
                </div>

                {/* CTA */}
                <div className="detail-cta-section">
                  <button className="detail-add-btn primary-gradient-cta">
                    Add to Sanctuary Bag
                  </button>
                  <p className="detail-shipping-note">Complementary ritual shipping on orders over $250</p>
                </div>
              </div>

              {/* Fabric/Tech Accordion */}
              <div className="detail-accordions">
                <details className="detail-accordion" open>
                  <summary className="detail-accordion-summary">
                    <h3 className="detail-accordion-title">Ethereal Fabric Technology</h3>
                    <span className="material-symbols-outlined detail-accordion-icon">expand_more</span>
                  </summary>
                  <div className="detail-accordion-content">
                    <p>Crafted from our proprietary Silk-Stone weave, combining 100% organic mulberry silk with ultra-fine mineral-infused threads for a naturally cooling sensation against the skin.</p>
                    <ul className="detail-accordion-list">
                      <li>Zero-hardware design for seamless layering</li>
                      <li>Breathable, moisture-wicking core</li>
                      <li>Anti-microbial silver infusion</li>
                    </ul>
                  </div>
                </details>

                <details className="detail-accordion">
                  <summary className="detail-accordion-summary">
                    <h3 className="detail-accordion-title">Care Rituals</h3>
                    <span className="material-symbols-outlined detail-accordion-icon">expand_more</span>
                  </summary>
                  <div className="detail-accordion-content simple">
                    <p>To preserve the delicate Silk-Stone fibers, hand wash in cool water with our Signature Lumi Cleanser. Lay flat to dry in a shaded area.</p>
                  </div>
                </details>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Detail;
