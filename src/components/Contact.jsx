
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <p className="section-label">LET'S CONNECT</p>

        <div className="contact-content">
          <h2>
            Have a project
            <span> in mind?</span>
            <br />
            Let's talk.
          </h2>

          <p>
            I'm open to developer opportunities, collaborations
            and interesting projects. Feel free to reach out.
          </p>

          <a
            href="mailto:snehathakur2520@gmail.com"
            className="contact-email"
          >
            snehathakur2520@gmail.com ↗
          </a>

          <div className="contact-links">
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

            <a href="tel:+919289830717">
              +91 9289830717
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
