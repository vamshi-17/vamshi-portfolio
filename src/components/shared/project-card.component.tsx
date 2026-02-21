import { FC, useState } from "react";
import { useTheme } from "../../context/theme-context";
import useScrollAnimation from "../../hooks/use-scroll-animation.hook";
import { Project } from "../../types/ui.types";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative h-80 sm:h-96 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        perspective: '1000px'
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
          <div className="relative p-6 sm:p-8 h-full flex flex-col">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <h3 className={`text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-cyan-400 transition-colors pr-2`}>
                {project.title}
              </h3>
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0" />
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4 sm:mb-6 leading-relaxed flex-1 text-sm sm:text-base`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 sm:px-4 py-1 sm:py-2 ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-gray-200/60'} backdrop-blur-sm rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-cyan-500 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300'} group-hover:border-cyan-500 transition-colors`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-center text-cyan-500 text-xs sm:text-sm font-medium animate-pulse">
              Tap to see tech details →
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
          <div className="relative p-6 sm:p-8 h-full flex flex-col">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-500 mb-4 sm:mb-6">Technical Stack</h3>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1 overflow-y-auto">
              {project.techDetails.map((detail, i) => (
                <li key={i} className={`flex items-center gap-2 sm:gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-xs sm:text-sm`}>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className={`p-3 sm:p-4 ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-100/50'} rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300'}`}>
              <p className="text-xs sm:text-sm font-semibold text-cyan-500 mb-1">Impact</p>
              <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{project.impact}</p>
            </div>
            <div className="text-center text-cyan-500 text-xs sm:text-sm font-medium mt-3 sm:mt-4 animate-pulse">
              Tap to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;