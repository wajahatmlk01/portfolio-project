function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Wade</h1>
        <h2>Full Stack & Mobile App Developer</h2>
        <p>
          I build modern web applications using React and cross-platform
          mobile apps using React Native.
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="btn primary">
            View Projects
          </a>
          <a href="/contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;