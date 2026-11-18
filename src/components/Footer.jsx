
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-logo">
          sneha<span>.</span>
        </a>

        <p>Designed & built with care by Sneha Thakur.</p>

        <div className="footer-links">
          <a
            href="https://github.com/Snehathaku"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-thakur-9536a3338/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:snehathakur2520@gmail.com">
            Email ↗
          </a>
        </div>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Sneha Thakur</span>
        <span>Shopify · Backend · AI</span>
      </div>
    </footer>
  );
}

export default Footer;
