import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AISkills from "./components/AISkills";
import Technologies from "./components/Technologies";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

const Portfolio = () => {
  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Ambient background blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
        <main>
          <section id="home"><Hero /></section>
          <hr className="section-divider" />
          <section id="ai-skills"><AISkills /></section>
          <hr className="section-divider" />
          <section id="technologies"><Technologies /></section>
          <hr className="section-divider" />
          <section id="experience"><Experience /></section>
          <hr className="section-divider" />
          <section id="projects"><Projects /></section>
          <hr className="section-divider" />
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
