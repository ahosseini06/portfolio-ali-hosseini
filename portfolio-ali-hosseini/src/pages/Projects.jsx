import React from "react";
import "./Projects.css";
import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../portfolio/projectThumbnails";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((p) => (
        <ProjectCard p={p}></ProjectCard>
      ))}
    </div>
  );
};

export default Projects;
