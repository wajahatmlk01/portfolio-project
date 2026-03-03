function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <a href={github} className="project-link">
        View Code →
      </a>
    </div>
  );
}

export default ProjectCard;