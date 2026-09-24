import { motion } from 'framer-motion';
import { siteConfig } from '../content/config';
import { MOTION, EXTERNAL } from '../config/constants';
import { ArrowDownRight, ArrowUpRight } from './Icon';

export default function Hero() {
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero section-shell">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
        <motion.div className="eyebrow" variants={fadeUp}><span className="eyebrow-line" />{siteConfig.identity.eyebrow}</motion.div>
        <motion.h1 variants={fadeUp}>{siteConfig.identity.headline}<span className="hero-cursor" aria-hidden="true">_</span></motion.h1>
        <motion.p variants={fadeUp}>{siteConfig.identity.description}</motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <button className="button button-primary" onClick={scrollToWork}>Explore the work <ArrowDownRight /></button>
          <a className="button button-ghost" href={siteConfig.links.resume} target={EXTERNAL.target} rel={EXTERNAL.rel}>Resume <ArrowUpRight /></a>
        </motion.div>
        <motion.div className="hero-meta" variants={fadeUp}>
          <span>{siteConfig.identity.location}</span><i /><span>{siteConfig.identity.status}</span>
        </motion.div>
      </motion.div>

      <motion.div className="hero-identity" aria-label="Portrait of Samyak Shah" initial={{ opacity: 0, scale: 0.88, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.25 }}>
        <div className="identity-ring identity-ring-one" />
        <div className="identity-ring identity-ring-two" />
        <div className="identity-frame">
          <img src="/Samyak_transparent_bw.png" alt="Samyak Shah" />
        </div>
        <span className="identity-label identity-label-top">ENGINEER / 01</span>
        <span className="identity-label identity-label-right">AI + SYSTEMS</span>
        <span className="identity-label identity-label-bottom">SEATTLE / WA</span>
        <span className="identity-cross cross-one" />
        <span className="identity-cross cross-two" />
      </motion.div>

      <div className="hero-bottom">
        <div className="scroll-cue"><span /> Scroll to explore</div>
        <div className="hero-index">01 / 06</div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: MOTION.duration.slow, ease: MOTION.ease } }
};
