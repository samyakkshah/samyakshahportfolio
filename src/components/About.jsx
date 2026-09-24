import { motion } from 'framer-motion';
import { siteConfig } from '../content/config';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="content-section section-shell about-section">
      <SectionHeading index="05" eyebrow="A little context" title="Engineer. Builder. Technically curious." />
      <div className="about-grid">
        <motion.div className="about-copy" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="about-lead">I enjoy the space where <strong>software, AI, and product thinking</strong> overlap.</p>
          <p>My background spans electronics and computer science, full-stack development, applied machine learning, and production software. I tend to learn by taking things apart, rebuilding them, and seeing where the edges break.</p>
          <p>Outside the implementation details, I'm interested in the path from a rough idea to a product that people actually want to use.</p>
        </motion.div>
        <div className="stats-grid">
          {siteConfig.stats.map((stat, index) => (
            <motion.div key={stat.value} className="stat-card" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <span className="stat-number">{stat.value}</span>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
