import { motion } from 'framer-motion';
import projects from '../config/projects.json';
import { UI } from '../config/constants';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const featured = projects.filter((project) => project.featured).slice(0, UI.projectFeaturedLimit);
  return (
    <section id="work" className="content-section section-shell">
      <SectionHeading index="02" eyebrow="Selected work" title="Things I've built." description="A mix of product engineering, AI/ML experiments, and systems work. The selection can be changed entirely from config." />
      <div className="projects-grid">
        {featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
