import { useTheme } from "../../context/theme-context";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 sm:py-12 px-4 sm:px-6 border-t ${theme === 'dark' ? 'border-cyan-500/10' : 'border-cyan-200'} backdrop-blur-sm`}>
      <div className={`max-w-6xl mx-auto text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'} text-xs sm:text-sm`}>
        <p>© 2026 Vamshi Krishna Durganala. Built with React & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;