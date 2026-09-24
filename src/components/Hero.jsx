import { motion } from 'framer-motion';
import { siteConfig } from '../content/config';
import { MOTION, EXTERNAL } from '../config/constants';

export default function Hero() {
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero section-shell">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
        }}
      >
        <motion.div className="eyebrow" variants={fadeUp}>
          <span className="eyebrow-line" />
          {siteConfig.identity.eyebrow}
        </motion.div>
        <motion.h1 variants={fadeUp}>
          {siteConfig.identity.headline}
          <span className="hero-cursor" aria-hidden="true">_</span>
        </motion.h1>
        <motion.p variants={fadeUp}>{siteConfig.identity.description}</motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <button className="button button-primary" onClick={scrollToWork}>
            Explore the work <span>↘</span>
          </button>
          <a className="button button-ghost" href={siteConfig.links.resume} target={EXTERNAL.target} rel={EXTERNAL.rel}>
            Resume <span>↗</span>
          </a>
        </motion.div>
        <motion.div className="hero-meta" variants={fadeUp}>
          <span>{siteConfig.identity.location}</span>
          <span>•</span>
          <span>{siteConfig.identity.status}</span>
        </motion.div>
      </motion.div>
      <motion.div className="hero-orbit" aria-hidden="true" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit-core">S</div>
        <span className="orbit-label label-one">AI</span>
        <span className="orbit-label label-two">SYSTEMS</span>
        <span className="orbit-label label-three">PRODUCT</span>
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
