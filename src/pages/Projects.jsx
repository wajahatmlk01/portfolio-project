function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>
            Tech: {project.tech.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with React",
    tech: ["React", "CSS", "Vite"]
  },
  {
    id: 2,
    title: "Mission Dashboard",
    description: "Dashboard UI for managing missions",
    tech: ["React", "Routing"]
  }
];

export default Projects;
