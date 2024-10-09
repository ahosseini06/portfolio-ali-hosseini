import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ p }) => {
  const handleClick = () => {
    window.open(p.href, "_blank");
  };
  return (
    <button className="project-card" onClick={handleClick}>
      <div className="header">{p.name}</div>
      <div className="bg-img" style={{ backgroundImage: p.bg }}>
        <div className="overlay">
          <div className="description">
            <div style={{ width: "80%" }}>{p.description}</div>
          </div>
        </div>
      </div>
      <div className="tags">
        {p.tags.map((tag) => (
          <div
            className="tag"
            style={{
              backgroundColor: tag.bgc,
              color: tag.fgc,
            }}
          >
            ● {tag.name}
          </div>
        ))}
      </div>
    </button>
  );
};

export default ProjectCard;
