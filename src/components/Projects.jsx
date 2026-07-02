import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import projectsData from "../../content/projects.json";

const FILTERS = ["All", "AI", "Full Stack", "Mobile", "Web"];

const CATEGORY_STYLE = {
  "AI":         { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.35)', color: '#c084fc' },
  "Full Stack": { bg: 'rgba(6,182,212,0.12)',  border: 'rgba(6,182,212,0.3)',   color: '#22d3ee' },
  "Mobile":     { bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.3)',   color: '#86efac' },
  "Web":        { bg: 'rgba(249,115,22,0.1)',  border: 'rgba(249,115,22,0.3)',  color: '#fdba74' },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

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
            background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)',
            color: 'var(--primary-light)', padding: '4px 14px', borderRadius: '20px',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Portfolio
          </span>
        </div>
        <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of real-world applications — from AI-powered tools to full-stack platforms.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '48px' }}
      >
        {FILTERS.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 20px', borderRadius: '8px',
                fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem',
                cursor: 'pointer', transition: 'all 0.2s ease',
                background: active ? 'linear-gradient(135deg, var(--primary), var(--primary-light))' : 'rgba(255,255,255,0.04)',
                color: active ? '#fff' : 'var(--text-muted)',
                border: active ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: active ? '0 4px 16px var(--primary-glow-sm)' : 'none',
              }}
            >
              {filter}
            </button>
          );
        })}
      </motion.div>

      {/* Project Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px',
      }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const catStyle = CATEGORY_STYLE[project.category] || CATEGORY_STYLE["Web"];
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.02}
                  transitionSpeed={400}
                  glareEnable={true}
                  glareMaxOpacity={0.06}
                  glareColor="rgba(168,85,247,0.8)"
                  glarePosition="all"
                  style={{ height: '100%' }}
                >
                  <div style={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '18px',
                    padding: '28px 26px',
                    display: 'flex', flexDirection: 'column',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative', overflow: 'hidden',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = '0 8px 40px var(--primary-glow-sm)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Top glow line */}
                    <div style={{
                      position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
                      background: `linear-gradient(to right, transparent, ${catStyle.color}66, transparent)`,
                    }} />

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{
                        padding: '3px 12px', borderRadius: '20px', fontSize: '0.7rem',
                        fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                        background: catStyle.bg, border: `1px solid ${catStyle.border}`, color: catStyle.color,
                      }}>
                        {project.category}
                      </span>
                      {project.featured && (
                        <span style={{
                          display: 'flex', alignItems: 'center', gap: '4px',
                          fontSize: '0.7rem', fontWeight: 700,
                          color: '#fbbf24', letterSpacing: '0.05em',
                        }}>
                          <FaStar style={{ fontSize: '0.65rem' }} /> Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.05rem', fontWeight: 700,
                      color: 'var(--text-primary)', marginBottom: '12px',
                      letterSpacing: '-0.01em', lineHeight: 1.35,
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: 'var(--text-muted)', fontSize: '0.875rem',
                      lineHeight: 1.65, marginBottom: '20px', flex: 1,
                    }}>
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                      {project.technologies.map((tech, k) => (
                        <span key={k} className="tech-badge">{tech}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          padding: '7px 14px', borderRadius: '8px', fontSize: '0.8rem',
                          fontWeight: 600, textDecoration: 'none',
                          background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                          color: '#fff', transition: 'opacity 0.2s',
                        }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} /> Live
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          padding: '7px 14px', borderRadius: '8px', fontSize: '0.8rem',
                          fontWeight: 600, textDecoration: 'none',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-muted)', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
