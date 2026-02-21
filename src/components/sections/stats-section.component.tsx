import React from 'react';
import { useTheme } from '../../context/theme-context';
import useScrollAnimation from '../../hooks/use-scroll-animation.hook';
import useCountAnimation from '../../hooks/use-count-animation.hook';
import { CONFIG } from '../../config/site.config';

interface StatCardProps {
  stat: typeof CONFIG.stats[0];
  isVisible: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible, delay }) => {
  const { theme } = useTheme();
  const count = useCountAnimation(stat.value, 2000, isVisible);

  return (
    <div
      className={`text-center p-4 sm:p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white'} backdrop-blur-xl border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-200'} hover:border-cyan-500 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 group`}
      style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <div className="flex justify-center mb-2 sm:mb-3 text-cyan-500 group-hover:scale-125 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
        {count}{stat.suffix}
      </div>
      <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
        {stat.label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-16 sm:py-20 px-4 sm:px-6 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-white/50'} backdrop-blur-sm relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-indigo-500/5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {CONFIG.stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;