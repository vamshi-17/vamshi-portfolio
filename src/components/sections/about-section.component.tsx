import { CONFIG } from "../../config/site.config";
import { useTheme } from "../../context/theme-context";
import useScrollAnimation from "../../hooks/use-scroll-animation.hook";
import SectionTitle from "../shared/section-title.component";

// Glassmorphism About Card
const AboutSection = () => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="A bit about my journey and expertise">About Me</SectionTitle>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Background Card */}
          <div className={`${theme === 'dark' ? 'bg-gray-900/30' : 'bg-white/30'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors">Background</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
              {CONFIG.about.intro}, specializing in building scalable, enterprise-grade applications across the entire development lifecycle.
            </p>
          </div>

          {CONFIG.about.highlights.map((highlight, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-gray-900/30' : 'bg-white/30'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group`}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                {highlight.title}
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
                {highlight.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;