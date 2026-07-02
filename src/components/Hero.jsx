import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
import profileData from "../../content/profile.json";
import profilePic from "../assets/ahbarAjaibProfile.png";
import socialData from "../../content/social.json";

const AI_BADGES = ["RAG Pipelines", "Tool Calling", "LLM Integration", "Streaming AI", "Agentic Workflows"];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>

          {/* ── Left Content ── */}
          <div style={{ flex: '1 1 480px', minWidth: '300px' }}>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '24px' }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                color: '#86efac', padding: '6px 14px', borderRadius: '20px',
                fontSize: '0.8rem', fontWeight: 500,
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80',
                  boxShadow: '0 0 8px #4ade80', animation: 'glow-pulse 2s infinite',
                }} />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: '-0.03em', marginBottom: '12px',
                color: 'var(--text-primary)',
              }}
            >
              {profileData.name}
            </motion.h1>

            {/* Typewriter title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 600, marginBottom: '24px',
                minHeight: '40px',
              }}
            >
              <span style={{ color: 'var(--primary-light)' }}>
                <Typewriter
                  options={{
                    strings: [
                      "AI Application Engineer",
                      "Full Stack Developer",
                      "LLM Integration Specialist",
                      "RAG Pipeline Builder",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                color: 'var(--text-muted)', fontSize: '1.05rem',
                lineHeight: 1.75, marginBottom: '36px', maxWidth: '520px',
              }}
            >
              {profileData.heroContent}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}
            >
              <button onClick={scrollToProjects} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                color: '#fff', padding: '13px 26px', borderRadius: '10px',
                fontWeight: 600, fontSize: '0.95rem', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 24px var(--primary-glow)', transition: 'all 0.25s ease',
                fontFamily: 'inherit',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px var(--primary-glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px var(--primary-glow)'; }}
              >
                View My Work <FaArrowRight style={{ fontSize: '0.85rem' }} />
              </button>

              <a href="/ahbar-ajaib-resume.pdf" download style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent',
                color: 'var(--text-primary)', padding: '13px 26px', borderRadius: '10px',
                fontWeight: 600, fontSize: '0.95rem',
                border: '1px solid var(--border)',
                textDecoration: 'none', cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-light)'; e.currentTarget.style.color = 'var(--primary-light)'; e.currentTarget.style.background = 'rgba(168,85,247,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <FaDownload style={{ fontSize: '0.85rem' }} /> Download Resume
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Find me on
              </span>
              <div style={{ width: '32px', height: '1px', background: 'var(--border)' }} />
              {[
                { url: socialData.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                { url: socialData.github, Icon: FaGithub, label: "GitHub" },
              ].map(({ url, Icon, label }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  color: 'var(--text-muted)', fontSize: '0.88rem',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary-light)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <Icon style={{ fontSize: '1rem' }} /> {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{ flex: '0 1 360px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
          >
            {/* Glow ring + photo */}
            <div style={{ position: 'relative' }}>
              {/* Outer glow ring */}
              <div style={{
                position: 'absolute', inset: '-12px', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--primary), var(--primary-light), var(--accent), var(--primary))',
                animation: 'spin-slow 8s linear infinite',
                padding: '2px',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-base)' }} />
              </div>
              {/* Inner glow */}
              <div style={{
                position: 'absolute', inset: '-4px', borderRadius: '50%',
                boxShadow: '0 0 60px var(--primary-glow), 0 0 120px var(--primary-glow-sm)',
              }} />
              {/* Photo */}
              <img
                src={profilePic}
                alt="Ahbar Ajaib"
                style={{
                  width: '260px', height: '260px', borderRadius: '50%',
                  objectFit: 'cover', objectPosition: 'top',
                  border: '3px solid var(--primary)',
                  position: 'relative', zIndex: 1,
                }}
              />
            </div>

            {/* Floating AI Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '320px' }}>
              {AI_BADGES.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  style={{
                    animation: `badge-float ${2.5 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    background: 'rgba(124,58,237,0.12)',
                    border: '1px solid rgba(168,85,247,0.3)',
                    color: 'var(--primary-light)',
                    padding: '5px 12px', borderRadius: '20px',
                    fontSize: '0.75rem', fontWeight: 500,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  ✦ {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}
        >
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            color: 'var(--text-subtle)', fontSize: '0.75rem', letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            <span>Scroll to explore</span>
            <div style={{
              width: '1px', height: '40px',
              background: 'linear-gradient(to bottom, var(--primary-light), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
