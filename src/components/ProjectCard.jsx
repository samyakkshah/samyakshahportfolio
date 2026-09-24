import { motion } from 'framer-motion';
import { EXTERNAL } from '../config/constants';
import { ArrowRight, ArrowUpRight } from './Icon';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3) }}
    >
      <div className="project-topline">
        <span className="project-number">0{index + 1}</span>
        <span>{project.kicker}</span>
        <span className="project-open" aria-hidden="true"><ArrowUpRight size={14} /></span>
      </div>

      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <span>{project.title.slice(0, 1)}</span>
          </div>
        )}
        <div className="project-scan" />
        <div className="project-visual-label">VIEW / PROJECT {String(index + 1).padStart(2, '0')}</div>
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="project-arrow"><ArrowRight /></span>
        </div>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-footer">
          <span className="project-type">{project.kicker || 'PROJECT'}</span>
          <div className="project-links">
            {project.demo && <a href={project.demo} target={EXTERNAL.target} rel={EXTERNAL.rel}>Live <ArrowUpRight size={13} /></a>}
            {project.github && <a href={project.github} target={EXTERNAL.target} rel={EXTERNAL.rel}>Source <ArrowUpRight size={13} /></a>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
