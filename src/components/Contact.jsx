import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import socialData from "../../content/social.json";

const CONTACT_ITEMS = [
  { Icon: FaEnvelope, label: "Email", value: "ahbarajaib@gmail.com", href: "mailto:ahbarajaib@gmail.com" },
  { Icon: FaPhone,   label: "Phone", value: "+91 7411223375",         href: "tel:+917411223375" },
  { Icon: FaMapMarkerAlt, label: "Location", value: "Bhatkal, India", href: null },
];

const Contact = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span style={{
          display: 'inline-block',
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
          color: '#86efac', padding: '4px 14px', borderRadius: '20px',
          fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Contact
        </span>
        <h2 className="section-title" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>
          Let's <span className="gradient-text">Work Together</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7,
          marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px',
        }}>
          I'm open to new opportunities, collaborations, and interesting AI projects. Drop me a message — I'd love to connect.
        </p>
      </motion.div>

      {/* Contact Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
        {CONTACT_ITEMS.map(({ Icon, label, value, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {href ? (
              <a href={href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid var(--border-subtle)', borderRadius: '14px',
                  padding: '18px 24px', textAlign: 'left',
                  transition: 'all 0.25s ease', cursor: 'pointer',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(168,85,247,0.05)';
                    e.currentTarget.style.boxShadow = '0 4px 20px var(--primary-glow-sm)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
                    border: '1px solid rgba(168,85,247,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ color: 'var(--primary-light)', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 500, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{value}</p>
                  </div>
                </div>
              </a>
            ) : (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid var(--border-subtle)', borderRadius: '14px',
                padding: '18px 24px', textAlign: 'left',
              }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
                  border: '1px solid rgba(168,85,247,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ color: 'var(--primary-light)', fontSize: '1rem' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 500, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Big email CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="mailto:ahbarajaib@gmail.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
          color: '#fff', padding: '15px 36px', borderRadius: '12px',
          fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
          boxShadow: '0 4px 32px var(--primary-glow)',
          transition: 'all 0.25s ease', marginBottom: '36px',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px var(--primary-glow)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 32px var(--primary-glow)'; }}
        >
          <FaEnvelope /> Send me an email
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}
      >
        {[
          { href: socialData.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
          { href: socialData.github,   Icon: FaGithub,   label: "GitHub" },
          { href: socialData.twitter,  Icon: FaXTwitter, label: "Twitter" },
        ].map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '44px', height: '44px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)', fontSize: '1.1rem',
            transition: 'all 0.2s ease', textDecoration: 'none',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--primary-light)';
              e.currentTarget.style.background = 'rgba(168,85,247,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
