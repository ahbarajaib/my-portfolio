import logo from "../assets/ahbarAjaibLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import socialData from "../../content/social.json";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={socialData.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={socialData.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href={socialData.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
