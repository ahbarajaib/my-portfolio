import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>
      <div className="max-w-6xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative"
          >
            <div className="flex flex-wrap lg:flex-nowrap gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full lg:w-1/4 backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 text-center lg:text-left hover:shadow-xl hover:shadow-purple-500/20 transition-all"
              >
                <p className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {experience.year}
                </p>
              </motion.div>
              <div className="w-full lg:w-3/4 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                <h6 className="mb-3 text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {experience.role}
                  {experience.company && (
                    <span className="text-base text-neutral-400 ml-2">
                      @ {experience.company}
                    </span>
                  )}
                </h6>
                <div className="mb-4 text-neutral-300">{experience.description}</div>
                {experience.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 hover:border-purple-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {index < EXPERIENCES.length - 1 && (
              <div className="hidden lg:block absolute left-[calc(25%-1px)] top-full h-8 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
