import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig, sectionConfig } from '../content/config';
import { UI } from '../config/constants';
import { ArrowUpRight } from './Icon';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const sections = sectionConfig.filter((section) => section.enabled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > UI.navScrollThreshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [sections]);

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
        {sections.filter((section) => section.id !== 'hero').map((section) => (
          <button key={section.id} className={active === section.id ? 'active' : ''} onClick={() => scrollTo(section.id)}>
            {section.label}
          </button>
        ))}
      </nav>

      <a className="nav-status" href={`mailto:${siteConfig.links.email}`}>
        <span className="status-dot" />
        <span className="status-label">Let's talk</span>
        <ArrowUpRight size={13} />
      </a>
    </motion.header>
  );
}
