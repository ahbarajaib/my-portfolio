import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full">
                <FaMapMarkerAlt className="text-3xl text-purple-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Location</h3>
            <p className="text-neutral-400 text-sm">{CONTACT.address}</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full">
                <FaPhone className="text-3xl text-pink-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-pink-300">Phone</h3>
            <p className="text-neutral-400 text-sm">{CONTACT.phoneNo}</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full">
                <FaEnvelope className="text-3xl text-cyan-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-300">Email</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-neutral-400 text-sm hover:text-purple-400 transition-colors"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            href={`mailto:${CONTACT.email}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            animate={{
              x: mousePosition.x * 0.1,
              y: mousePosition.y * 0.1,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Send me a message</span>
            <FaEnvelope className="relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
