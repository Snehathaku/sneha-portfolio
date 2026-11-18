
import "../styles/Certifications.css";

const certificates = [
  {
    number: "01",
    name: "Microsoft Student Ambassador",
    issuer: "Microsoft",
    date: "Jan 2026",
    id: "1yooNS1UDESGphfjesCcut35yrrAXb_N4",
    link: "https://drive.google.com/file/d/1yooNS1UDESGphfjesCcut35yrrAXb_N4/view"
  },
  {
    number: "02",
    name: "Prompt Engineering for ChatGPT",
    issuer: "Coursera",
    date: "Aug 2024",
    id: "1l7FfaOjk2pI8Eo9TRT6TfBGDcb2df0NK",
    link: "https://drive.google.com/file/d/1l7FfaOjk2pI8Eo9TRT6TfBGDcb2df0NK/view"
  },
  {
    number: "03",
    name: "Version Control",
    issuer: "Coursera",
    date: "Jan 2025",
    id: "1z62loDRAlBsTikrOQP-wMyVBXu106Zeg",
    link: "https://drive.google.com/file/d/1z62loDRAlBsTikrOQP-wMyVBXu106Zeg/view"
  },
  {
    number: "04",
    name: "Introduction to Git and GitHub",
    issuer: "Coursera",
    date: "Feb 2025",
    id: "1bLpKWOcF1Gm9eNuahvlsnSPAA7zp2bJR",
    link: "https://drive.google.com/file/d/1bLpKWOcF1Gm9eNuahvlsnSPAA7zp2bJR/view"
  },
  {
    number: "05",
    name: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    date: "Aug 2025",
    id: "1eY3x9OlD4FVJ4aJ9zJj4kuhRjQ0VFJiE",
    link: "https://drive.google.com/file/d/1eY3x9OlD4FVJ4aJ9zJj4kuhRjQ0VFJiE/view"
  }
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <p className="section-label">LEARNING & ACHIEVEMENTS</p>

        <div className="certifications-heading">
          <h2>
            Certifications &
            <span> achievements.</span>
          </h2>
          <p>
            Professional learning and certifications
            that support my development journey.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-preview"
                aria-label={`View ${certificate.name} certificate`}
              >
                <img
                  src={`https://drive.google.com/thumbnail?id=${certificate.id}&sz=w1000`}
                  alt={`${certificate.name} certificate preview`}
                  loading="lazy"
                />
                <span className="preview-overlay">
                  View Certificate ↗
                </span>
              </a>

              <div className="certificate-info">
                <span className="certificate-number">
                  {certificate.number}
                </span>
                <div>
                  <h3>{certificate.name}</h3>
                  <p>{certificate.issuer} · {certificate.date}</p>
                </div>
              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
