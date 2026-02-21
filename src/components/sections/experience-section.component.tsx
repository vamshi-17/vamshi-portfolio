import { Briefcase, Calendar, MapPin } from "lucide-react";
import { CONFIG } from "../../config/site.config";
import { useTheme } from "../../context/theme-context";
import useScrollAnimation from "../../hooks/use-scroll-animation.hook";
import SectionTitle from "../shared/section-title.component";

const ExperienceSection = () => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className={`py-16 sm:py-20 px-4 sm:px-6 ${theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-100/30'} backdrop-blur-sm`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="My professional journey and achievements">Work Experience</SectionTitle>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${theme === 'dark' ? 'bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500' : 'bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400'} opacity-30`}></div>

          <div className="space-y-8 sm:space-y-12">
            {CONFIG.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
              >
                <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* DOT */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-2">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 ${theme === 'dark' ? 'border-gray-950' : 'border-gray-50'} shadow-lg shadow-cyan-500/50`}></div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                    <div className={`${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20`}>
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                          <h3 className="text-lg sm:text-xl font-bold text-cyan-500 group-hover:text-cyan-400 transition-colors mb-1">
                            {exp.role}
                          </h3>
                          <p className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{exp.company}</p>
                        </div>
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      </div>
                      <div className={`flex flex-wrap items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm mb-4 sm:mb-6`}>
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <ul className={`space-y-2 sm:space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-xs sm:text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            {index % 2 === 0 ? (
                              <>
                                <span className="flex-1">{achievement}</span>
                                <span className="text-cyan-500 mt-0.5 sm:mt-1 text-base sm:text-lg">▪</span>
                              </>
                            ) : (
                              <>
                                <span className="text-cyan-500 mt-0.5 sm:mt-1 text-base sm:text-lg">▪</span>
                                <span className="flex-1">{achievement}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;