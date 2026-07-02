import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import socialData from "../../content/social.json";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '32px 24px',
      background: 'rgba(0,0,0,0.3)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: '16px',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '7px',
            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '10px', color: '#fff',
          }}>AA</div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {year} <strong style={{ color: 'var(--text-primary)' }}>Ahbar Ajaib</strong>
          </span>
        </div>

        {/* Built with */}
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Built with React &amp; <FaHeart style={{ color: '#f43f5e', fontSize: '0.75rem' }} />
        </p>

        {/* Socials */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            { href: socialData.linkedin, Icon: FaLinkedin },
            { href: socialData.github,   Icon: FaGithub },
            { href: socialData.twitter,  Icon: FaXTwitter },
          ].map(({ href, Icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--text-subtle)', fontSize: '1rem', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-subtle)'}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
