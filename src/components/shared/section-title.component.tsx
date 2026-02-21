import { FC, ReactNode } from "react";
import { useTheme } from "../../context/theme-context";
import useScrollAnimation from "../../hooks/use-scroll-animation.hook";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children, subtitle }) => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center mb-12 sm:mb-16 transition-all duration-700 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
      {subtitle && <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-lg`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;