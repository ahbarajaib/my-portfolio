import { motion } from "framer-motion";
import experiencesData from "../../content/experiences.json";

const TYPE_COLORS = {
  ai:        { bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.3)',  color: '#c084fc' },
  fullstack: { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.3)',   color: '#22d3ee' },
  mobile:    { bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.3)',   color: '#86efac' },
  backend:   { bg: 'rgba(249,115,22,0.1)',  border: 'rgba(249,115,22,0.3)',  color: '#fdba74' },
  other:     { bg: 'rgba(100,116,139,0.1)', border: 'rgba(100,116,139,0.3)', color: '#94a3b8' },
};

const TYPE_LABEL = {
  ai: 'AI', fullstack: 'Full Stack', mobile: 'Mobile', backend: 'Backend', other: 'Other',
};

export const Experience = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)',
            color: '#fdba74', padding: '4px 14px', borderRadius: '20px',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Career Journey
          </span>
        </div>
        <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          5+ years of building production applications across startups, agencies, and enterprise teams.
        </p>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '32px' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '7px', top: 0, bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--primary), rgba(124,58,237,0.1))',
        }} />

        {experiencesData.map((exp, i) => {
          const typeStyle = TYPE_COLORS[exp.type] || TYPE_COLORS.other;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ position: 'relative', marginBottom: '48px' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-29px', top: '6px',
                width: '14px', height: '14px', borderRadius: '50%',
                background: 'var(--primary)',
                border: '2px solid var(--bg-base)',
                boxShadow: '0 0 12px var(--primary-glow)',
                zIndex: 1,
              }} />

              {/* Card */}
              <div style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px', padding: '24px 28px',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'rgba(168,85,247,0.04)';
                  e.currentTarget.style.boxShadow = '0 4px 24px var(--primary-glow-sm)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      {exp.type !== 'other' && (
                        <span style={{
                          padding: '2px 10px', borderRadius: '20px', fontSize: '0.68rem',
                          fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                          background: typeStyle.bg, border: `1px solid ${typeStyle.border}`,
                          color: typeStyle.color,
                        }}>
                          {TYPE_LABEL[exp.type]}
                        </span>
                      )}
                    </div>
                    <p style={{ color: 'var(--primary-light)', fontWeight: 500, fontSize: '0.9rem' }}>
                      {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                    </p>
                  </div>
                  <span style={{
                    color: 'var(--text-subtle)', fontSize: '0.82rem', fontWeight: 500,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
                    padding: '4px 10px', borderRadius: '6px', whiteSpace: 'nowrap',
                  }}>
                    {exp.year}
                  </span>
                </div>

                {/* Bullet points */}
                <ul style={{ marginBottom: exp.technologies.length ? '18px' : 0, paddingLeft: '0', listStyle: 'none' }}>
                  {exp.description.map((point, j) => (
                    <li key={j} style={{
                      display: 'flex', gap: '10px', alignItems: 'flex-start',
                      color: 'var(--text-muted)', fontSize: '0.875rem',
                      lineHeight: 1.65, marginBottom: '6px',
                    }}>
                      <span style={{ color: 'var(--primary-light)', marginTop: '4px', flexShrink: 0, fontSize: '0.6rem' }}>◆</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                {exp.technologies.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.technologies.map((tech, k) => (
                      <span key={k} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
