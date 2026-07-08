import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/LumiAI.css';
import bralogo from '../assets/bra-wireframe.jpg';

function LumiAI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lumi-page">
      <NavBar />

      <main className="lumi-main">

        {/* AI Stylist Sidebar */}
        <aside className="chat-sidebar glass-panel soft-glow">
          <div className="chat-header">
            <div className="chat-title-group">
              <div className="chat-icon ethereal-gradient">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
              </div>
              <div>
                <h2 className="chat-title">Lumi AI Stylist</h2>
                <span className="chat-subtitle">Powered by Rasa</span>
              </div>
            </div>
            <div className="chat-actions">
              <button className="chat-action-btn">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>

          <div className="chat-body">
            <div className="chat-msg-left">
              <div className="chat-bubble-ai">
                <p className="chat-text-ai">
                  Welcome to the Atelier. I am here to curate a wardrobe that mirrors your essence.
                </p>
              </div>
              <span className="chat-time">10:42 AM</span>
            </div>

            <div className="chat-msg-left-options">
              <div className="chat-bubble-ai-2">
                <p className="chat-text-ai-2">
                  Tell me about your typical day. Are we looking for <span className="highlight">active support</span> or <span className="highlight">effortless comfort</span>?
                </p>
              </div>
              <div className="chat-options">
                <button className="chat-option-btn">
                  Active Support
                </button>
                <button className="chat-option-btn">
                  Effortless Comfort
                </button>
                <button className="chat-option-btn">
                  Transitioning Both
                </button>
              </div>
            </div>

            <div className="chat-msg-right">
              <div className="chat-bubble-user ethereal-gradient">
                <p className="chat-text-user">
                  I'm looking for something for my morning yoga and then back-to-back studio meetings.
                </p>
              </div>
              <span className="chat-time">10:45 AM</span>
            </div>
          </div>

          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <input className="chat-input" placeholder="Describe your aesthetic..." type="text" />
              <button className="chat-submit-btn">
                <span className="material-symbols-outlined">north</span>
              </button>
            </div>
            <p className="chat-disclaimer">Consult with AI for a Bespoke Experience</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="content-area">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              Elevate Your <br /><span>Daily Ritual</span>
            </h1>
            <p className="hero-subtitle">
              Discover silhouettes that transcend the ordinary. Our curation pairs technical precision with the softest fabrics in the world.
            </p>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            <button className="product-card soft-glow">
              <div className="product-image-wrapper">
                <div className="product-image-inner">
                  <img alt="Wireless Bra Technical Drawing" className="product-image" src={bralogo} />
                </div>
              </div>
              <span className="product-label">Bra One</span>
            </button>
            <button className="product-card-highlight soft-glow">
              <div className="product-image-wrapper">
                <div className="product-image-inner">
                  <img alt="Lace Plunge Bra Technical Drawing" className="product-image" src={bralogo} />
                </div>
              </div>
              <span className="product-label-highlight">Bra Two</span>
            </button>
            <button className="product-card soft-glow">
              <div className="product-image-wrapper">
                <div className="product-image-inner">
                  <img alt="Balconette Bra Technical Drawing" className="product-image" src={bralogo} />
                </div>
              </div>
              <span className="product-label">Bra Three</span>
            </button>
            <button className="product-card soft-glow">
              <div className="product-image-wrapper">
                <div className="product-image-inner">
                  <img alt="Sports Bra Technical Drawing" className="product-image" src={bralogo} />
                </div>
              </div>
              <span className="product-label">Bra Four</span>
            </button>
          </div>

          {/* Dashboard-style Bespoke Profile Card */}
          <div className="profile-dashboard stationery-texture soft-glow">
            <div className="profile-header">
              <div className="profile-title-group">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
                <h3 className="profile-title">Your Bespoke Profile</h3>
              </div>
              <div className="profile-note-group">
                <p className="profile-note">"Your curated essence, refined in real-time." — Atelier Note</p>
              </div>
            </div>

            <div className="profile-grid-area">
              <div className="profile-grid">
                <div className="profile-item">
                  <span className="profile-item-label">Cup Style</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Demi Cup</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Padding</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Removable</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Wire preference</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">No Wire</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Mesh Style</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Stretch Mesh</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Strap Design</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Adjustable</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Primary Material</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Spandex + Cotton</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Closure</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Hook and Eye</span>
                  </div>
                </div>
                <div className="profile-item">
                  <span className="profile-item-label">Activity Level</span>
                  <div className="profile-item-value-box">
                    <span className="profile-item-value">Studio / Yoga</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-footer">
              <p className="profile-footer-status">Updating as we talk ✦</p>
              <span className="profile-footer-tag">AI Generated Analysis</span>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default LumiAI;
