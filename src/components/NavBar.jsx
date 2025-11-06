import logo from "../assets/ahbarAjaibLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const NavBar = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/ahbarajaib/", icon: FaLinkedin, color: "hover:text-blue-500" },
    { href: "https://github.com/ahbarajaib", icon: FaGithub, color: "hover:text-purple-400" },
    { href: "https://x.com/ahbarajaib", icon: FaXTwitter, color: "hover:text-cyan-400" },
    { href: "https://www.instagram.com/ahbarajaib/", icon: FaInstagram, color: "hover:text-pink-500" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 mb-20 backdrop-blur-xl bg-neutral-950/80 border-b border-white/10"
    >
      <div className="flex items-center justify-between py-6 px-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex flex-shrink-0 items-center"
        >
          <img className="mx-2 w-20 drop-shadow-2xl" src={logo} alt="logo" />
        </motion.div>
        <div className="flex items-center justify-center gap-6 text-2xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors ${link.color} hover:drop-shadow-lg`}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
