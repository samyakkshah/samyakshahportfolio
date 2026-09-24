import { motion } from 'framer-motion';

export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <motion.div className="section-index" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        {index}
      </motion.div>
      <div>
        <div className="section-eyebrow">{eyebrow}</div>
        <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {title}
        </motion.h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
