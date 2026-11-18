
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <p className="section-label">GET TO KNOW ME</p>

        <div className="about-grid">
          <div className="about-heading">
            <h2>
              A little about
              <span> my journey.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-intro">
              I'm Sneha Thakur, a developer who enjoys
              transforming ideas into meaningful digital
              products and practical technology solutions.
            </p>

            <p>
              My development journey spans Shopify and
              e-commerce development, frontend engineering,
              backend systems and AI-powered applications.
              I enjoy working across different parts of
              the development process.
            </p>

            <p>
              From customising Shopify themes with Liquid
              to building REST APIs, integrating databases
              and exploring AI-driven functionality, I focus
              on creating solutions that are functional,
              responsive and user-friendly.
            </p>

            <p>
              I'm continuously learning, experimenting with
              new technologies and looking for opportunities
              to grow as a developer while contributing to
              meaningful products.
            </p>

            <div className="about-stats">
              <div>
                <h3>03</h3>
                <span>Core Development Areas</span>
              </div>

              <div>
                <h3>03</h3>
                <span>Live Development Projects</span>
              </div>

              <div>
                <h3>05</h3>
                <span>Certifications & Achievements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
