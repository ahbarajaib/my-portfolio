import { motion } from "framer-motion";
import aiSkillsData from "../../content/ai-skills.json";
import {
  Brain, Database, Wrench, Zap, PenLine, Cpu, Layers, Code2
} from "lucide-react";

const ICON_MAP = {
  brain: Brain,
  database: Database,
  wrench: Wrench,
  zap: Zap,
  pencil: PenLine,
  cpu: Cpu,
  layers: Layers,
  code: Code2,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" }
  }),
};

const AISkills = () => {
  return (
    <div className="section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
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
            AI Engineering
          </span>
        </div>
        <h2 className="section-title gradient-text">What I Build with AI</h2>
        <p className="section-subtitle">
          From integrating LLMs to shipping production-ready AI products — here are the capabilities I bring to every project.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '20px',
      }}>
        {aiSkillsData.map((skill, i) => {
          const Icon = ICON_MAP[skill.icon] || Brain;
          return (
            <motion.div
              key={skill.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-base"
              style={{ padding: '28px 24px', cursor: 'default' }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(168,85,247,0.15))',
                border: '1px solid rgba(168,85,247,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 0 16px rgba(168,85,247,0.1)',
              }}>
                <Icon size={22} color="var(--primary-light)" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1rem', fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.01em',
              }}>
                {skill.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.875rem', color: 'var(--text-muted)',
                lineHeight: 1.65,
              }}>
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AISkills;
