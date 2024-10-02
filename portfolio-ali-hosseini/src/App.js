import logo from './logo.svg';
import './App.css';

import Background from './components/background/Background';
import Link from './components/link/Link';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";







function App() {
  const links = [
    {name: "Github", link: "https://github.com/ahosseini06", icon:<FaGithub className='icon'/>},
    {name: "Linked-In", link: "https://www.linkedin.com/in/01-ali-hosseini/", icon:<FaLinkedin className='icon'/>},
    {name: "Instagram", link: "https://www.instagram.com/cxndymedia/", icon:<FaSquareInstagram className='icon'/>},
    {name: "Media", link: "https://www.cxndy.ca", icon:<IoCamera className='icon'/>},
  ]
  return (
    <div className="App">
      
        <div className="hero-container">
          <h1>ALI HOSSEINI</h1>
          <div className="link-container">
            {links.map(link => {
              return (
                <Link name={link.name} link={link.link} icon={link.icon}>
                </Link>
              );
            })}
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="view-btn">
            View my work
            <IoIosArrowDown className='arrow'/>
          </div>
        </div>
          

    </div>
  );
}

export default App;
