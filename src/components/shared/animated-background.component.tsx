import { useTheme } from "../../context/theme-context";
import useIsMobile from "../../hooks/use-is-mobile.hook";

// Animated Background
const AnimatedBackground = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 ${theme === 'dark'
        ? 'bg-gradient-to-br from-gray-950 via-blue-950/30 to-indigo-950/30'
        : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50'} ${!isMobile ? 'animate-gradient-shift' : ''}`}
      ></div>

      {/* Reduce animated orbs on mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow-delay"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-medium"></div>
        </>
      )}

      {/* Grid overlay */}
      <div className={`absolute inset-0 ${theme === 'dark'
        ? 'bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)]'
        : 'bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)]'} 
        bg-[size:4rem_4rem]`}
      ></div>
    </div>
  );
};

export default AnimatedBackground;