import { FC } from "react";
import { Skill } from "../../types/ui.types";
import { useTheme } from "../../context/theme-context";
import useScrollAnimation from "../../hooks/use-scroll-animation.hook";
import useCountAnimation from "../../hooks/use-count-animation.hook";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge: FC<SkillBadgeProps> = ({ skill, index }) => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();
  const progress = useCountAnimation(skill.proficiency, 1500, isVisible);

  return (
    <div
      ref={ref}
      className={`${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group`}
      style={{
        transitionDelay: `${index * 50}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">
          {skill.icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1">
            <span className={`text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} group-hover:text-cyan-500 transition-colors truncate`}>
              {skill.name}
            </span>
            <span className="text-xs text-cyan-500 font-bold ml-2">{progress}%</span>
          </div>
          <div className={`h-1.5 sm:h-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;