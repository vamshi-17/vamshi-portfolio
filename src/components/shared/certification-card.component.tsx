import { FC } from "react";
import { Certification } from "../../types/ui.types";
import { useTheme } from "../../context/theme-context";
import useScrollAnimation from "../../hooks/use-scroll-animation.hook";
import { Award } from "lucide-react";

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

const CertificationCard: FC<CertificationCardProps> = ({ cert, index }) => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 flex items-start gap-3 sm:gap-4 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`p-2.5 sm:p-3 ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-100'} rounded-lg sm:rounded-xl group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300`}>
        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`text-sm sm:text-lg font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-cyan-400 transition-colors`}>
          {cert.name}
        </h3>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm`}>{cert.issuer} • {cert.year}</p>
      </div>
    </div>
  );
};

export default CertificationCard;