import { motion } from 'framer-motion';
import { EXTERNAL } from '../config/constants';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card accent-${project.accent || 'orange'} ${project.featured ? 'project-featured' : ''}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3) }}
    >
      <div className="project-topline">
        <span>0{index + 1}</span>
        <span>{project.kicker}</span>
      </div>
      <div className="project-visual">
        {project.image ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" /> : <div className="project-placeholder"><span>{project.title.slice(0, 1)}</span></div>}
        <div className="project-scan" />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          {project.demo && <a href={project.demo} target={EXTERNAL.target} rel={EXTERNAL.rel}>Live <span>↗</span></a>}
          {project.github && <a href={project.github} target={EXTERNAL.target} rel={EXTERNAL.rel}>Code <span>↗</span></a>}
        </div>
      </div>
    </motion.article>
  );
}
