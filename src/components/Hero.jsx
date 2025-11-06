import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ahbarAjaibProfile.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 relative">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt:16 lg:text-8xl relative"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Ahbar Ajaib
              </span>
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight mb-4"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Expert",
                  2000,
                  "React Specialist",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="bg-gradient-to-r from-pink-300 via-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <span className="relative z-10 font-semibold">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                <span className="font-semibold">View Projects</span>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="rounded-2xl border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50"
                src={profilePic}
                alt="Ahbar Ajaib"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
