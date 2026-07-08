import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Lumi</span>
          <p className="footer-copyright">© 2024 Lumi Lingerie. Crafted for the Ethereal.</p>
        </div>
        <div className="footer-links">
          <a className="footer-link" href="#">Sustainability</a>
          <a className="footer-link" href="#">Size Guide</a>
          <a className="footer-link" href="#">Shipping</a>
          <a className="footer-link" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
