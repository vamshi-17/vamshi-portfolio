import { CONFIG } from "../../config/site.config";
import { useTheme } from "../../context/theme-context";
import SectionTitle from "../shared/section-title.component";
import SkillBadge from "../shared/skill-badge.component";

const SkillsSection = () => {
  const { theme } = useTheme();
  const categories = ['Frontend', 'Backend', 'DevOps', 'Database'];

  return (
    <section id="skills" className={`py-16 sm:py-20 px-4 sm:px-6 ${theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-100/30'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Technologies I work with">Technical Skills</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-cyan-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                {category}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {CONFIG.skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <SkillBadge key={index} skill={skill} index={index} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;