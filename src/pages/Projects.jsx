import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="section-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            className="bordered"
          />
        ))}
      </div>

      {/* Go Back Button */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/" className="btn secondary">
          ← Go Back
        </Link>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built using React and modern CSS.",
    tech: ["React", "CSS", "Vite"],
    github: "#"
  },
  {
    id: 2,
    title: "Mission Dashboard",
    description:
      "A dynamic dashboard UI for managing missions with clean layout structure.",
    tech: ["React", "Routing"],
    github: "#"
  },
  {
    id: 3,
    title: "Mobile Expense Tracker",
    description:
      "Cross-platform mobile expense tracking application concept.",
    tech: ["React Native", "Expo"],
    github: "#"
  }
];

export default Projects;