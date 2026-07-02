import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import socialData from "../../content/social.json";

const NAV_LINKS = [
  { label: "AI Skills", href: "#ai-skills" },
  { label: "Tech Stack", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "ai-skills", "technologies", "experience", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7,7,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '14px', color: '#fff', letterSpacing: '0.5px',
                  boxShadow: '0 0 20px var(--primary-glow-sm)',
                }}>AA</div>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                  Ahbar<span style={{ color: 'var(--primary-light)' }}>.</span>
                </span>
              </div>
            </a>

            {/* Desktop nav links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hide-mobile">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                    background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(124,58,237,0.3)' : '1px solid transparent',
                    color: isActive ? 'var(--primary-light)' : 'var(--text-muted)',
                    padding: '6px 14px', borderRadius: '8px',
                    cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500,
                    transition: 'all 0.2s ease', fontFamily: 'inherit',
                  }}
                    onMouseEnter={e => { if (!isActive) { e.target.style.color = 'var(--text-primary)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}}
                    onMouseLeave={e => { if (!isActive) { e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'transparent'; }}}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px', fontSize: '1.1rem' }} className="hide-mobile">
                {[
                  { url: socialData.linkedin, Icon: FaLinkedin },
                  { url: socialData.github, Icon: FaGithub },
                  { url: socialData.twitter, Icon: FaXTwitter },
                ].map(({ url, Icon }) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer" style={{
                    color: 'var(--text-muted)', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-light)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <a href="mailto:ahbarajaib@gmail.com" style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                color: '#fff', padding: '8px 18px', borderRadius: '8px',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem',
                boxShadow: '0 0 20px var(--primary-glow-sm)',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 24px var(--primary-glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px var(--primary-glow-sm)'; }}
                className="hide-mobile"
              >
                Hire Me
              </a>
              {/* Hamburger */}
              <button onClick={() => setMobileOpen(!mobileOpen)} style={{
                background: 'transparent', border: 'none', color: 'var(--text-primary)',
                fontSize: '1.5rem', cursor: 'pointer', display: 'none', padding: '4px',
              }} className="show-mobile">
                {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(7,7,15,0.98)', backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)', padding: '16px 24px 24px',
          }}>
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'transparent', border: 'none', color: 'var(--text-muted)',
                padding: '12px 0', fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                {link.label}
              </button>
            ))}
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px', alignItems: 'center' }}>
              {[
                { url: socialData.linkedin, Icon: FaLinkedin },
                { url: socialData.github, Icon: FaGithub },
                { url: socialData.twitter, Icon: FaXTwitter },
              ].map(({ url, Icon }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
                  <Icon />
                </a>
              ))}
              <a href="mailto:ahbarajaib@gmail.com" style={{
                marginLeft: 'auto', background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                color: '#fff', padding: '8px 18px', borderRadius: '8px',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem',
              }}>
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive style injected globally */}
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default NavBar;
