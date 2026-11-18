
import "../styles/Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Shopify & E-commerce",
    description: "Building and customising online stores.",
    skills: [
      "Shopify",
      "Liquid",
      "Theme Customisation",
      "Store Management",
      "Product Management"
    ]
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Design"
    ]
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Building server-side applications and APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs"
    ]
  },
  {
    number: "04",
    title: "Databases",
    description: "Working with databases and application data.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase"
    ]
  },
  {
    number: "05",
    title: "AI & Emerging Technologies",
    description: "Exploring AI-powered tools and application features.",
    skills: [
      "AI Development",
      "Claude",
      "Prompt Engineering",
      "Generative AI",
      "AI Integration"
    ]
  },
  {
    number: "06",
    title: "Developer Tools",
    description: "Tools and platforms for development and deployment.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel"
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <p className="section-label">WHAT I WORK WITH</p>

        <div className="skills-heading">
          <h2>
            My technical
            <span> toolkit.</span>
          </h2>

          <p>
            Technologies and tools I use to build
            digital products, develop applications
            and solve technical problems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.number}>
              <span className="skill-number">
                {group.number}
              </span>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
