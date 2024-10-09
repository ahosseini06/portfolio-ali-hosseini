import React from "react";

import "./Hero.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import { IoIosArrowDown } from "react-icons/io";
import Link from "../components/link/Link";

const Hero = ({ handleClick }) => {
  const links = [
    {
      name: "Github",
      link: "https://github.com/ahosseini06",
      icon: <FaGithub className="icon" />,
    },
    {
      name: "Linked-In",
      link: "https://www.linkedin.com/in/01-ali-hosseini/",
      icon: <FaLinkedin className="icon" />,
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1UIQnvIhF2E7CeZ91ml3wgSDgdD68g0Up/view?usp=sharing",
      icon: <IoDocumentText className="icon" />,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@AliHosseini-CandyMedia-fy1dn/videos",
      icon: <FaYoutube className="icon" />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/cxndymedia/",
      icon: <FaSquareInstagram className="icon" />,
    },
    {
      name: "Media",
      link: "https://www.cxndy.ca",
      icon: <IoCamera className="icon" />,
    },
  ];
  return (
    <div className="hero">
      <div className="hero-container">
        <h1>ALI HOSSEINI</h1>
        <div className="link-container">
          {links.map((link) => {
            return (
              <Link name={link.name} link={link.link} icon={link.icon}></Link>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*<button className="view-btn" href="#projects" onClick={handleClick}>
          View my work
          <IoIosArrowDown className="arrow" />
        </button>*/}
      </div>
    </div>
  );
};

export default Hero;
