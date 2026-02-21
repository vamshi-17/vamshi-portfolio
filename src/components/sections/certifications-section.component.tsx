import { CONFIG } from "../../config/site.config";
import { useTheme } from "../../context/theme-context";
import CertificationCard from "../shared/certification-card.component";
import SectionTitle from "../shared/section-title.component";

const CertificationsSection = () => {
  const { theme } = useTheme();

  return (
    <section id="certifications" className={`py-16 sm:py-20 px-4 sm:px-6 ${theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-100/30'} backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Professional certifications and credentials">Certifications</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {CONFIG.certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
