import projects from '../config/projects.json';
import { UI } from '../config/constants';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const featured = projects.filter((project) => project.featured).slice(0, UI.projectFeaturedLimit);

  return (
    <section id="work" className="content-section section-shell">
      <SectionHeading
        index="02"
        eyebrow="Selected systems"
        title="Things I've built, broken, and shipped."
        description="A working archive of product ideas, machine-learning experiments, and systems work. Each piece is here because it taught me something worth carrying forward."
      />
      <div className="projects-grid">
        {featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
