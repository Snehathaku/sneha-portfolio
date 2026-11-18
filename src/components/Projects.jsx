
import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    name: "PhaseTracker",
    category: "TASK MANAGEMENT PLATFORM",
    description:
      "A student progress and task management platform focused on organizing tasks, tracking progress and working with REST APIs.",
    technologies: ["Task Management", "Student Progress", "REST APIs"],
    type: "Application",
    link: "https://phase-tracker.vercel.app/"
  },
  {
    number: "02",
    name: "MediBook Pro",
    category: "HEALTHCARE APPLICATION",
    description:
      "A healthcare appointment platform designed to support appointment-related workflows and make healthcare service access more organized.",
    technologies: ["Healthcare", "Appointments", "Application Development"],
    type: "Healthcare",
    link: "https://medibook-pro-three.vercel.app/login"
  },
  {
    number: "03",
    name: "Wishlist & E-Commerce",
    category: "E-COMMERCE DEVELOPMENT",
    description:
      "An e-commerce project focused on wishlist functionality, product experiences and database integration.",
    technologies: ["E-Commerce", "Wishlist", "Database Integration"],
    type: "Full Stack",
    link: "https://wishlist-project-inky.vercel.app/register"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <p className="section-label">SELECTED WORK</p>

        <div className="projects-heading">
          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A selection of projects showcasing my work
            in application development, backend systems
            and e-commerce.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <span>{project.number}</span>
                <div className="project-symbol">✳</div>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                  <span>{project.number}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
