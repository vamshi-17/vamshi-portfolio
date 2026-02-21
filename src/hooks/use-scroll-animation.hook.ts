import { useEffect, useState } from "react";

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return { ref: setRef, isVisible };
};

export default useScrollAnimation;
