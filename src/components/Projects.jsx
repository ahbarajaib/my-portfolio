import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`${
              index === 0 || index === 4 || index === 7
                ? "md:col-span-2 lg:col-span-2"
                : ""
            }`}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="h-full"
            >
              <div className="group relative h-full backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-pink-900/50 to-transparent flex items-center justify-center gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        aria-label="View Demo"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        aria-label="View Code"
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-neutral-400 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 hover:border-purple-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse delay-150"></div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
