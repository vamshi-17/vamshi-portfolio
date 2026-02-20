import { FC, ReactNode } from "react";
import { useTheme } from "../../context/theme-context";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialIcon: FC<SocialIconProps> = ({ href, icon, label }) => {
  const { theme } = useTheme();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-3 sm:p-4 ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-xl sm:rounded-2xl border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/20 flex items-center gap-2 sm:gap-3`}
      aria-label={label}
    >
      {icon}
      <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} group-hover:text-cyan-500 transition-colors text-xs sm:text-sm font-medium`}>
        {label}
      </span>
    </a>
  );
};

export default SocialIcon;