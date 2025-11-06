import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

const technologies = [
  { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", level: 95, delay: 2.5 },
  { name: "Next.js", Icon: TbBrandNextjs, color: "text-white", level: 85, delay: 3 },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500", level: 90, delay: 5 },
  { name: "Redis", Icon: DiRedis, color: "text-red-700", level: 75, delay: 2 },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500", level: 92, delay: 6 },
  { name: "PostgreSQL", Icon: BiLogoPostgresql, color: "text-sky-700", level: 80, delay: 4 },
  { name: "Firebase", Icon: RiFirebaseFill, color: "text-yellow-500", level: 88, delay: 1.5 },
  { name: "Git", Icon: FaGitAlt, color: "text-orange-700", level: 93, delay: 4.5 },
  { name: "Tailwind", Icon: RiTailwindCssFill, color: "text-blue-400", level: 97, delay: 4.5 },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-800", level: 87, delay: 5.5 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="border-b border-neutral-800 pb-24" ref={ref}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Technologies & Skills
      </motion.h2>

      {/* Icon Display */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 mb-16"
      >
        {technologies.map((tech, index) => (
          <Tilt key={index} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1}>
            <motion.div
              variants={iconVariants(tech.delay)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.15 }}
              className="group relative rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <tech.Icon className={`text-6xl ${tech.color}`} />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                {tech.name} - {tech.level}%
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>

      {/* Skill Bars */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-6 mt-20"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold flex items-center gap-2">
                <tech.Icon className={`text-2xl ${tech.color}`} />
                {tech.name}
              </span>
              <span className="text-purple-400 font-bold">{tech.level}%</span>
            </div>
            <div className="w-full bg-neutral-800 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${tech.level}%` } : {}}
                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
