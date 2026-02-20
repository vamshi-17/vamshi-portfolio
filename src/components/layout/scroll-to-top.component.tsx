import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../../context/theme-context";

// Scroll to Top Button
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full ${theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-500/80'} backdrop-blur-xl border ${theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-400'} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 group`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
    </button>
  );
};

export default ScrollToTop;