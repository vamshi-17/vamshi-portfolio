import { FC, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONFIG } from "../../config/site.config";
import { useTheme } from "../../context/theme-context";
import ThemeToggle from "../shared/theme-toggle.component";

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
      ? `${theme === 'dark' ? 'bg-gray-950/80' : 'bg-white/80'} backdrop-blur-xl shadow-2xl ${theme === 'dark' ? 'shadow-cyan-500/10' : 'shadow-gray-200'} border-b ${theme === 'dark' ? 'border-cyan-500/10' : 'border-gray-200'}`
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          {CONFIG.site.title}
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {CONFIG.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-cyan-400 transition-all duration-300 relative group text-sm lg:text-base`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-cyan-400 transition-colors`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-950/95' : 'bg-white/95'} backdrop-blur-xl border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {CONFIG.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-cyan-400 transition-colors py-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;