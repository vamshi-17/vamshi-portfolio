import { CONFIG } from "../../config/site.config";
import ProjectCard from "../shared/project-card.component";
import SectionTitle from "../shared/section-title.component";

const ProjectsSection = () => (
  <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle subtitle="Tap cards to see technical details">Featured Work</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {CONFIG.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;