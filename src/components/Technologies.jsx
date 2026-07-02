import { RiReactjsLine, RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript, SiPrisma, SiOpenai, SiVercel } from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import technologiesData from "../../content/technologies.json";

const iconMap = {
  RiReactjsLine,
  TbBrandNextjs,
  SiMongodb,
  FaNodeJs,
  BiLogoPostgresql,
  RiFirebaseFill,
  FaGitAlt,
  RiTailwindCssFill,
  SiTypescript,
  SiPrisma,
  SiOpenai,
  SiVercel,
};

const iconVariants = (duration) => ({
  initial: { y: -6 },
  animate: {
    y: [6, -6],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const Technologies = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)',
            color: '#22d3ee', padding: '4px 14px', borderRadius: '20px',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Tech Stack
          </span>
        </div>
        <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
          Tools &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle">
          The technologies I work with daily to build scalable, production-ready applications.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: '16px',
        }}
      >
        {technologiesData.map((tech, index) => {
          const IconComponent = iconMap[tech.icon];
          return (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.15, y: -4 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                padding: '22px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                cursor: 'default',
                minWidth: '90px',
                transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
              }}
              onHoverStart={e => {}}
              title={tech.name}
            >
              {IconComponent && (
                <IconComponent style={{ fontSize: '2.6rem' }} className={tech.color} />
              )}
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.02em' }}>
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
