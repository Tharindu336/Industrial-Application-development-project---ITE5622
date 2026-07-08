import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/Collection.css';

function Collection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="collection-page">
      <NavBar />

      <main className="collection-main">
        {/* Hero Section */}
        <header className="collection-hero">
          <h1 className="collection-title">The Complete Archive</h1>
          <p className="collection-subtitle">
            A study in form and freedom. Every silhouette is crafted to honor the architectural grace of the body, merging technical precision with the softest embrace of ethereal fabrics.
          </p>
        </header>

        <div className="collection-layout">
          {/* SideNavBar (Filter & Refine) */}
          <aside className="collection-sidebar">
            <div className="sidebar-header">
              <h2 className="sidebar-title">Filter &amp; Refine</h2>
              <p className="sidebar-subtitle">Tailor your fit</p>
            </div>

            <div className="sidebar-scroll-area">
              {/* Filter Group: Cup Type */}
              <div>
                <h3 className="filter-group-title">
                  <span className="material-symbols-outlined filter-icon">filter_vintage</span> Cup Type
                </h3>
                <div className="filter-options">
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Molded cup</span>
                  </label>
                  <label className="filter-checkbox-label">
                    <input defaultChecked className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text" style={{ color: 'var(--color-on-surface)' }}>Padded</span>
                  </label>
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Removable cup</span>
                  </label>
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Non-padded</span>
                  </label>
                </div>
              </div>

              {/* Filter Group: Activity */}
              <div>
                <h3 className="filter-group-title">
                  <span className="material-symbols-outlined filter-icon">fitness_center</span> Activity
                </h3>
                <div className="filter-pills">
                  <button className="filter-pill active">Gym</button>
                  <button className="filter-pill">Yoga</button>
                  <button className="filter-pill">Jogging</button>
                  <button className="filter-pill">Edge</button>
                </div>
              </div>

              {/* Filter Group: Impact Level */}
              <div>
                <h3 className="filter-group-title">
                  <span className="material-symbols-outlined filter-icon">speed</span> Impact Level
                </h3>
                <div className="filter-radios">
                  <label className="filter-radio-label">
                    <span className="filter-radio-text">Extreme</span>
                    <input className="filter-radio" name="impact" type="radio" />
                  </label>
                  <label className="filter-radio-label active">
                    <span className="filter-radio-text active">High</span>
                    <input defaultChecked className="filter-radio" name="impact" type="radio" />
                  </label>
                  <label className="filter-radio-label">
                    <span className="filter-radio-text">Medium</span>
                    <input className="filter-radio" name="impact" type="radio" />
                  </label>
                </div>
              </div>

              {/* Filter Group: Back Type */}
              <div>
                <h3 className="filter-group-title">
                  <span className="material-symbols-outlined filter-icon">accessibility</span> Back Type
                </h3>
                <div className="filter-options">
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Racerback</span>
                  </label>
                </div>
              </div>

              {/* Filter Group: Fastening Type */}
              <div>
                <h3 className="filter-group-title">
                  <span className="material-symbols-outlined filter-icon">lock</span> Fastening Type
                </h3>
                <div className="filter-options">
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Back</span>
                  </label>
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Front</span>
                  </label>
                </div>
              </div>

              {/* Filter Group: Wire Type */}
              <div>
                <h3 className="filter-group-title">
                  <span className="material-symbols-outlined filter-icon">unfold_more</span> Wire Type
                </h3>
                <div className="filter-options">
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Wire Free</span>
                  </label>
                  <label className="filter-checkbox-label">
                    <input className="filter-checkbox" type="checkbox" />
                    <span className="filter-checkbox-text">Under Wire</span>
                  </label>
                </div>
              </div>

            </div>

            {/* <div className="sidebar-footer">
              <button className="sidebar-clear-btn">
                Clear All Filters
              </button>
            </div> */}
          </aside>

          {/* Main Content Grid */}
          <div className="collection-content">
            {/* Sorting & View Controls */}
            <div className="collection-controls">
              <p className="collection-count">Showing 48 exquisite pieces</p>
              <div className="collection-sort">
                <button className="collection-sort-btn">
                  Sort By: Newest
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
              </div>
            </div>

            {/* Product Grid (Asymmetric Bento-ish) */}
            <div className="collection-grid">

              {/* Product Card 1 */}
              <div className="collection-item">
                <div className="collection-item-image-wrapper">
                  <img className="collection-item-image" alt="Close-up of a high-end cream silk wireless bra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFDG2trjWTArfuFqQhHSgonzzP_u0SAQfxP5U3n3MFOckG3n4TAckk7tg_31rohcTis86WFhsIl0HQPweIhSwKtMxrQyO6zbYPJaSWaqxCEpKcAwP2aX8igNZVXWPhoOF8n1glCXdR8VphMOGbZwC93JJZqp6WpSE6GjgJ-UOdDxy_8K2ivLHXMsOEwb7YkSYOMWBSckVGFgMyDcdaom94_gUFj4wK7GtTNnco0Nhs6QP78pwwHcRlMDfqcl6qMZ9Auulico1pROBe" />
                  <div className="collection-item-overlay"></div>
                  <span className="collection-item-badge">New Arrival</span>
                </div>
                <div className="collection-item-info">
                  <div>
                    <h3 className="collection-item-title">Silk-Stone Wireless</h3>
                    <p className="collection-item-category">Daily Essential</p>
                  </div>
                  <span className="collection-item-price">$118</span>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="collection-item">
                <div className="collection-item-image-wrapper">
                  <img className="collection-item-image" alt="Editorial shot of a woman in a structured black compression sports bra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyOQkCiFeIXeqjN-04HKXP_zyrODUqKdkYYQhVfJijeTzy5EIecoVDlA9KoayqCcrqWmXgrmjjOeh7AoiOgEx96VsLWDs9hdeP8pc6_b7XxU5nTA7w-M9oYKylww1_pcGzMdG1iBaDKuVX49U2EizT_ElxDgrJzAaS846e9yNgCsnadAZamYZg8eH8nvjC67srYg9RH03Fxy6QvldzNAuWO2XM7xltRvjCse4jz6gmAjNLWjRUdmdoPVIAJ4152AnhLTURkpHaUG49" />
                  <div className="collection-item-overlay"></div>
                </div>
                <div className="collection-item-info">
                  <div>
                    <h3 className="collection-item-title">Apex Kinetic</h3>
                    <p className="collection-item-category">High Impact Sport</p>
                  </div>
                  <span className="collection-item-price">$145</span>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="collection-item">
                <div className="collection-item-image-wrapper">
                  <img className="collection-item-image" alt="Detail shot of delicate rose-gold lace bralette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeCEvKgbPYWLybTSXKos5f6GmXhgyM0BL0QHRADLlHAnIymhhU_r8Q_Ko0wSxsJYJEF-2jertF_kuAccUTcK8mWpaRygYCn6vYwuXW84SeF8fOClpp0BGTVYhTfbokj6cfvCZfo7WOCTTHqdE70sM_a8Zgiq0bPaqik1CfCAR_qQ_2GP_DnC4rXZDwuC1fY2b5ZpSteuOOE6g0AS8_K2wf-4U4OcUej26Sq71ogcUusFnr3-RV877T3z2juA9bDFBLBiAAQMVP4jDT" />
                  <div className="collection-item-overlay"></div>
                </div>
                <div className="collection-item-info">
                  <div>
                    <h3 className="collection-item-title">Ethereal Lace</h3>
                    <p className="collection-item-category">Soft Bralette</p>
                  </div>
                  <span className="collection-item-price">$95</span>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="collection-item">
                <div className="collection-item-image-wrapper">
                  <img className="collection-item-image" alt="Minimalist lavender underwire bra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsXn5dqUBQhNLxFyFbF2lxfp5o5Fab-VL0iw5ftJAEJHnKIKSRC6hZSAa3TN6i4oaN1pTW10LI8hQyGKdWCz154-8oZNUQhGiIRwE4FYiNcmEKKwp92ydKCbgwl_zVqLpxeQ2o2A6CEmzH3HzXvN5AsPcLUBzPsT0ywceKp6-78E9Cra8EAtM2hDvSk8WtupPCTNSDX93TWNj0RqOAv8mhsTLyXtwjypMrC-vGa6y6UJdfsKvOj1t4FnK-XiAOnxiLOxib_oqkkWlj" />
                  <div className="collection-item-overlay"></div>
                </div>
                <div className="collection-item-info">
                  <div>
                    <h3 className="collection-item-title">Satin Drift</h3>
                    <p className="collection-item-category">Underwire Sculpt</p>
                  </div>
                  <span className="collection-item-price">$132</span>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="collection-item">
                <div className="collection-item-image-wrapper">
                  <img className="collection-item-image" alt="Deep forest green racerback sports bra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG383TzTh45DpRWr40Ykg8HZ-LEDM4YM2nGWbqAX3dxImJach8tOB4pZpfNNB0rjDjRrROXHAB9H8a1MRwlxmXu3zAiJb11MZzzvil6j4b6MjiCZlgcZdCp2QpwkaGjpM_uEaNWWKU4NekPd5dFJB1fW4q3wbXqgyODTOovDF7uKJVNO-NoTogim8TQOhtqmVYeVyZdFfvU0b4HZWbo1G47K2l4QDqshQzSjaFZgYUHqXpuIm0elerIaG-lHYuph394521LxeqCW70" />
                  <div className="collection-item-overlay"></div>
                </div>
                <div className="collection-item-info">
                  <div>
                    <h3 className="collection-item-title">Mantra Yoga</h3>
                    <p className="collection-item-category">Medium Impact</p>
                  </div>
                  <span className="collection-item-price">$88</span>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="collection-item">
                <div className="collection-item-image-wrapper">
                  <img className="collection-item-image" alt="Avant-garde black sheer panelled bra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChYDzcMDZMDBqTT-7FPXI61GvGZuN1YLRiJm0Khv_rFpU26xMJ2NhNYHg0yT6IqNWUhcTJkKcrNydHpKAEk2txZgzZ1GUzp9IGZGlrnY6RsISUdVMtjBUKU_w1qsNPVpQgahT6M-lqDZSygcg3nCXhWQ6unroZ-aWX7KWQGTM9dHdp7Oo3-9QxMTzN7Ladk5e_U4Oof0VJX7nxwWa4kAAlq1z0LYWjF7nruOxJX8iPzqH4elAC9C355m6cMiCUycRvyFc9iHCpR84M" />
                  <div className="collection-item-overlay"></div>
                  <span className="collection-item-badge dark">Avant-Garde</span>
                </div>
                <div className="collection-item-info">
                  <div>
                    <h3 className="collection-item-title">Edge Fragment</h3>
                    <p className="collection-item-category">Atelier Series</p>
                  </div>
                  <span className="collection-item-price">$190</span>
                </div>
              </div>

            </div>

            {/* Load More */}
            <div className="collection-load-more">
              <button className="collection-load-btn">
                View More Designs
              </button>
              <div className="collection-loader-dots">
                <span className="collection-loader-dot active"></span>
                <span className="collection-loader-dot"></span>
                <span className="collection-loader-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Collection;
