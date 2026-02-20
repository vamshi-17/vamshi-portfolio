import { FC, ReactNode, useRef, useState } from "react";
import useIsMobile from "../../hooks/use-is-mobile.hook";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  download?: boolean;
}

// INFO: Magnetic Button Component (disabled on mobile for performance)
const MagneticButton: FC<MagneticButtonProps> = ({
  href,
  children,
  variant = 'primary',
  download
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: 'px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50',
    secondary: 'px-8 py-3 border-2 border-cyan-500/50 rounded-lg hover:bg-cyan-500/10',
    outline: 'px-8 py-3 border-2 border-gray-700 rounded-lg hover:border-cyan-500'
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      download={download}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${variants[variant]} transition-all duration-300 font-medium inline-flex items-center gap-2 group`}
      style={{
        transform: isMobile ? 'none' : `translate(${position.x}px, ${position.y}px)`
      }}
    >
      {children}
    </a>
  );
};

export default MagneticButton;