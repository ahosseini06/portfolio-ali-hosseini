import React from "react";
import "./Projects.css";

const Projects = () => {
  /* tag definitions */
  /* tag is {name: String, fgc: Color, bgc: Color } */
  /* tags: Cloud, Active Users, Full-Stack, Cross-Platform, Node, React, 0-100 */
  /* each defined as a constant */

  const CLOUD = { name: "Cloud", fgc: "#000000", bgc: "#FFD700" };
  const ACTIVE_USERS = { name: "Active Users", fgc: "#FFFFFF", bgc: "#007BFF" };
  const FULL_STACK = { name: "Full-Stack", fgc: "#FFFFFF", bgc: "#28A745" };
  const CROSS_PLATFORM = {
    name: "Cross-Platform",
    fgc: "#FFFFFF",
    bgc: "#FFC107",
  };
  const NODE = { name: "Node", fgc: "#FFFFFF", bgc: "#6DAF30" };
  const REACT = { name: "React", fgc: "#FFFFFF", bgc: "#61DAFB" };
  const ZERO_TO_HUNDRED = { name: "0-100", fgc: "#FFFFFF", bgc: "#FF5733" };
  const IN_PROGRESS = { name: "In Progress", fgc: "#FFFFFF", bgc: "#FF5733" };

  const projects = [
    {
      name: "PlaySync",
      description:
        "Cross-platform scheduling and payment software to manage sport tournaments",
      tags: [
        ACTIVE_USERS,
        REACT,
        CLOUD,
        FULL_STACK,
        CROSS_PLATFORM,
        NODE,
        ZERO_TO_HUNDRED,
      ],
    },
    {
      name: "ORDR",
      description: "A restaurant management system",
      tags: [REACT, NODE, FULL_STACK, CROSS_PLATFORM],
    },
    {
      name: "PlaySync",
      description: "A music sharing app",
      tags: [REACT, NODE, FULL_STACK, CROSS_PLATFORM, IN_PROGRESS],
    },
  ];
  return <div className="projects">Projects</div>;
};

export default Projects;
