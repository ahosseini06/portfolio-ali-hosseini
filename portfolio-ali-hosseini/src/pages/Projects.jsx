import React from "react";
import "./Projects.css";
import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../portfolio/projectThumbnails";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="title">PROJECTS</h1>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectCard p={p}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
