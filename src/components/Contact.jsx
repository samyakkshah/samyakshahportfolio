import { motion } from 'framer-motion';
import { siteConfig } from '../content/config';
import { EXTERNAL } from '../config/constants';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-shell">
      <div className="contact-orb" aria-hidden="true" />
      <motion.div className="contact-inner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="section-eyebrow">06 / CONTACT</div>
        <h2>Have something<br /><em>interesting</em> to build?</h2>
        <p>I'm always up for a good technical rabbit hole.</p>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${siteConfig.links.email}`}>Email me <span>↗</span></a>
          <a className="button button-ghost" href={siteConfig.links.github} target={EXTERNAL.target} rel={EXTERNAL.rel}>GitHub <span>↗</span></a>
          <a className="button button-ghost" href={siteConfig.links.linkedin} target={EXTERNAL.target} rel={EXTERNAL.rel}>LinkedIn <span>↗</span></a>
        </div>
      </motion.div>
      <footer>
        <span>© {new Date().getFullYear()} {siteConfig.identity.name}</span>
        <span>Built with intention.</span>
      </footer>
    </section>
  );
}
