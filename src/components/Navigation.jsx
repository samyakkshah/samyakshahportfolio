import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig, sectionConfig } from '../content/config';
import { UI } from '../config/constants';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const sections = sectionConfig.filter((section) => section.enabled && section.id !== 'hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > UI.navScrollThreshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.header
      className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <button className="nav-brand" onClick={() => scrollTo('hero')} aria-label="Back to top">
        <span className="brand-mark">S</span>
        <span>{siteConfig.identity.name}</span>
      </button>
      <nav aria-label="Primary navigation">
        {sections.map((section) => (
          <button key={section.id} onClick={() => scrollTo(section.id)}>
            {section.label}
          </button>
        ))}
      </nav>
      <a className="nav-status" href={`mailto:${siteConfig.links.email}`}>
        <span className="status-dot" />
        <span className="status-label">Let's talk</span>
      </a>
    </motion.header>
  );
}
