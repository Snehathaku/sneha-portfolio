
import "../styles/Experience.css";

const experiences = [
  {
    role: "AI Developer",
    company: "Crowned Concept",
    type: "Full-Time",
    description:
      "Worked on AI and product development, including backend development, API integration, database connectivity and AI-powered application features."
  },
  {
    role: "Shopify & E-commerce Developer",
    company: "Freelance, Personal Projects & Self-Learning",
    type: "Independent Development",
    description:
      "Developed and explored e-commerce solutions through independent projects and client work. Worked with Shopify store setup, Liquid theme customization, responsive layouts, product pages and store management."
  },
  {
    role: "UI/UX Developer & Social Media Manager",
    company: "Spikitech",
    type: "Internship",
    description:
      "Contributed to UI/UX development, digital content creation and social media activities for technology-focused projects."
  },
  {
    role: "Management Intern",
    company: "Sparkel & Shine",
    type: "Internship",
    description:
      "Gained practical experience in management, coordination and day-to-day workplace operations."
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <p className="section-label">MY JOURNEY</p>

        <div className="experience-heading">
          <h2>
            Where I've
            <span> worked.</span>
          </h2>

          <p>
            My professional journey, development experience
            and opportunities to learn and grow.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience-item" key={index}>
              <div className="timeline-marker">
                <span></span>
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <span>{item.type}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3>{item.role}</h3>
                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
