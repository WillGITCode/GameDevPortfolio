import { projects } from "../../dataFile";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
import "./Projects.css";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
}

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectContainer
            key={`${project.name}-${project.description}-${index}`}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
