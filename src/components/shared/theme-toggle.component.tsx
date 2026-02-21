import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/theme-context';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/30 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-cyan-400" />
      ) : (
        <Moon className="w-5 h-5 text-cyan-600" />
      )}
    </button>
  );
};

export default ThemeToggle;