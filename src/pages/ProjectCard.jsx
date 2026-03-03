function ProjectCard(props) {
  return (
    <div className="project-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Tech: {props.tech.join(", ")}</p>
    </div>
  );
}

export default ProjectCard;