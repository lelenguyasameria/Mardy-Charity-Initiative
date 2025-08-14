// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>Mardy Charity Initiative</h1>

          {/* Hamburger menu button */}
          <button
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation */}
          <nav style={{ ...styles.nav, ...(menuOpen ? styles.navOpen : {}) }}>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#programs" style={styles.navLink}>Programs</a>
            <a href="#donate" style={styles.navLink}>Donate</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.heroOverlay}>
          <h2 style={styles.heroTitle}>Together, We Can Make a Difference</h2>
          <p style={styles.heroText}>
            Empowering communities through education, healthcare, and hope.
          </p>
          <a href="#donate" style={styles.heroButton}>Donate Now</a>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Us</h2>
          <p>
            Mardy Charity Initiative is dedicated to supporting underprivileged communities
            through education, healthcare, and empowerment programs. Our mission is to create
            lasting change by inspiring hope and building opportunities.
          </p>
        </motion.section>

        <motion.section
          id="programs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Our Programs</h2>
          <p>
            We run community outreach, scholarship initiatives, food drives, and healthcare
            support programs to improve lives and foster a better future.
          </p>
        </motion.section>

        <motion.section
          id="donate"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Support Our Work</h2>
          <p>
            Your donations help us continue our mission. Every contribution, big or small,
            makes a difference.
          </p>
          <a href="#donate" style={styles.ctaButton}>Donate Now</a>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Email: <a href="mailto:info@mardycharity.org">info@mardycharity.org</a></p>
          <p>Phone: +254 700 000 000</p>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Mardy Charity Initiative. All rights reserved.</p>
      </footer>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: "#2e7d32",
    color: "white",
    padding: "1rem",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "auto",
  },
  logo: {
    fontSize: "1.5rem",
    margin: 0,
  },
  menuButton: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "none",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "10px",
    background: "#2e7d32",
    padding: "10px",
    borderRadius: "5px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  /* HERO STYLES */
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    maxWidth: "600px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  heroText: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  heroButton: {
    backgroundColor: "#ff9800",
    padding: "0.75rem 1.5rem",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background 0.3s",
  },

  main: {
    padding: "2rem",
    maxWidth: "900px",
    margin: "auto",
    textAlign: "center",
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "#2e7d32",
    color: "white",
    padding: "0.75rem 1.5rem",
    marginTop: "1rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  footer: {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  },
};
