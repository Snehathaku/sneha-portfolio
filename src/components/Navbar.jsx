
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar container">
      <a href="#home" className="logo" onClick={closeMenu}>
        sneha<span>.</span>
      </a>

      <div
        id="mobile-navigation"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#certifications" onClick={closeMenu}>Certifications</a>

        <a href="#contact" onClick={closeMenu} className="mobile-contact">
          Let's Talk ↗
        </a>
      </div>

      <a href="#contact" className="nav-contact">
        Let's Talk <span>↗</span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
