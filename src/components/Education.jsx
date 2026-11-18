
import "../styles/Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <p className="section-label">MY BACKGROUND</p>

        <h2 className="education-heading">
          Education &
          <span> learning.</span>
        </h2>

        <div className="education-card">
          <span className="education-label">EDUCATION</span>
          <h3>Bachelor of Computer Applications</h3>
          <h4>Eternal University</h4>
          <p>Computer Science</p>
          <span className="education-year">
            Expected Graduation: 2027
          </span>
        </div>
      </div>
    </section>
  );
}

export default Education;
