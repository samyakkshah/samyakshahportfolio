import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';

const nodes = [
  { id: 'systems', label: 'SYSTEMS', x: '18%', y: '34%' },
  { id: 'intelligence', label: 'INTELLIGENCE', x: '50%', y: '18%' },
  { id: 'products', label: 'PRODUCT', x: '82%', y: '34%' },
  { id: 'shipped', label: 'SHIPPED', x: '50%', y: '72%' }
];

export default function SystemMap() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-500, 500], [-14, 14]), { stiffness: 90, damping: 20 });
  const y = useSpring(useTransform(my, [-500, 500], [-10, 10]), { stiffness: 90, damping: 20 });

  return (
    <section id="systems" className="content-section system-section section-shell" onMouseMove={(e) => { mx.set(e.clientX - window.innerWidth / 2); my.set(e.clientY - window.innerHeight / 2); }}>
      <SectionHeading
        index="03"
        eyebrow="The build loop"
        title="Curiosity → systems → products."
        description="I like understanding the machinery underneath an idea, then pushing it toward something useful. This is the loop I keep coming back to."
      />
      <motion.div className="system-map" style={{ x, y }}>
        <svg className="system-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M18 34 L50 18 L82 34 L50 72 Z M18 34 L82 34 M18 34 L50 72 M82 34 L50 72 M50 18 L50 72" />
        </svg>
        <div className="system-center">SAMYAK<br /><span>BUILD SYSTEM</span></div>
        {nodes.map((node) => (
          <motion.div key={node.id} className={`system-node node-${node.id}`} style={{ left: node.x, top: node.y }} whileHover={{ scale: 1.12 }}>
            <span className="node-pulse" />
            {node.label}
          </motion.div>
        ))}
        <div className="system-caption">cursor → change the perspective</div>
      </motion.div>
    </section>
  );
}
