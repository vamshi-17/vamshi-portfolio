import ThemeProvider, { useTheme } from './context/theme-context';
import SEOHead from './components/seo/seo-head.component';
import GoogleAnalytics from './components/seo/google-analytics.component';
import LoadingScreen from './components/layout/loading-screen.component';
import AnimatedBackground from './components/shared/animated-background.component';
import Navigation from './components/layout/navigation.component';
import HeroSection from './components/sections/hero-section.component';
import StatsSection from './components/sections/stats-section.component';
import AboutSection from './components/sections/about-section.component';
import ExperienceSection from './components/sections/experience-section.component';
import SkillsSection from './components/sections/skills-section.component';
import ProjectsSection from './components/sections/projects-section.component';
import CertificationsSection from './components/sections/certifications-section.component';
import ContactSection from './components/sections/contact-section.component';
import Footer from './components/layout/footer.component';
import ScrollToTop from './components/layout/scroll-to-top.component';
import { useEffect, useState } from 'react';


const PortfolioContent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <>
      <SEOHead />
      <GoogleAnalytics />
      <LoadingScreen isLoading={loading} />

      <div className={`${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} min-h-screen transition-colors duration-300 relative`}>
        <AnimatedBackground />
        <Navigation scrolled={scrolled} />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;