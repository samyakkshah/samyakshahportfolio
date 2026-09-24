import './styles/site.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SystemMap from './components/SystemMap';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import { sectionConfig } from './content/config';

const SECTION_COMPONENTS = {
  hero: Hero,
  projects: Projects,
  'system-map': SystemMap,
  experience: Experience,
  about: About,
  contact: Contact,
};

function App() {
  return (
    <div className="site">
      <Navigation />
      <main>
        {sectionConfig.filter((section) => section.enabled).map((section) => {
          const Component = SECTION_COMPONENTS[section.type];
          return Component ? <Component key={section.id} /> : null;
        })}
      </main>
    </div>
  );
}

export default App;
