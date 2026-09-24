import { motion } from 'framer-motion';
import experience from '../config/experience.json';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="content-section section-shell">
      <SectionHeading index="04" eyebrow="Experience" title="Where I've worked." description="Production engineering, startup speed, and a bias toward learning by building." />
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article key={`${item.company}-${item.period}`} className={`timeline-item ${item.current ? 'current' : ''}`} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <div className="timeline-company">{item.company} {item.current && <span>NOW</span>}</div>
              <h3>{item.role}</h3>
              <div className="timeline-location">{item.location}</div>
              <p>{item.summary}</p>
              <div className="tag-row">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              {item.highlights.length > 0 && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
