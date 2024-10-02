import React from "react";
import "./Link.css";

const Link = ({ name, link, icon }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="link" href={link} onClick={handleClick}>
      {icon}
      {name}
    </div>
  );
};

export default Link;
