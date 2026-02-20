import { Download } from "lucide-react";
import { CONFIG } from "../../config/site.config";
import { useTheme } from "../../context/theme-context";
import useParallax from "../../hooks/use-parallax.hook";
import useTypingEffect from "../../hooks/use-typing-effect.hook";
import MagneticButton from "../shared/magnetic-button.component";

const HeroSection = () => {
  const { theme } = useTheme();
  const typedRole = useTypingEffect(CONFIG.site.typingRoles);
  const parallaxOffset = useParallax(0.3);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      <div className="relative z-10 text-center max-w-5xl w-full">
        <div className="mb-4 sm:mb-6">
          <span className={`px-4 sm:px-6 py-2 sm:py-3 ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-100'} backdrop-blur-xl border ${theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-300'} rounded-full text-cyan-500 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20 inline-block`}>
            ✨ Full Stack Developer + DevOps
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {CONFIG.site.name}
          </span>
        </h1>
        <div className="h-16 sm:h-20 mb-4 sm:mb-6">
          <p className={`text-lg sm:text-2xl md:text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} flex items-center justify-center gap-2 font-semibold`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{typedRole}</span>
            <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 bg-cyan-500 animate-pulse"></span>
          </p>
        </div>
        <p className={`text-sm sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4`}>
          {CONFIG.site.tagline}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
          <MagneticButton href="#projects" variant="primary">
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Get in Touch
          </MagneticButton>
          <MagneticButton href={CONFIG.site.resumeUrl} variant="outline" download>
            <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;