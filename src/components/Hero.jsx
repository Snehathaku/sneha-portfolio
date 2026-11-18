
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="section-label">
          HELLO, I'M SNEHA THAKUR
        </p>

        <h1>
          I build digital
          <br />
          experiences &{" "}
          <span>intelligent solutions.</span>
        </h1>

        <p className="hero-description">
          I'm a Developer specialising in Shopify development,
          backend engineering and AI-powered applications.
          I turn ideas into meaningful digital products.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            Explore My Work ↗
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>

          <a
            href="/resume.pdf"
            download="Sneha_Thakur_CV.pdf"
            className="secondary-btn"
          >
            Download CV ↓
          </a>
        </div>

        <div className="hero-meta">
          <span>SHOPIFY DEVELOPMENT</span>
          <span>BACKEND ENGINEERING</span>
          <span>AI DEVELOPMENT</span>
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-decoration">
          <span>ST</span>
        </div>
        <p>Creating with purpose.</p>
        <span className="side-line"></span>
      </div>
    </section>
  );
}

export default Hero;
