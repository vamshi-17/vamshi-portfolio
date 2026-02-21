import { useEffect, useState } from "react";
import useIsMobile from "./use-is-mobile.hook";

// Parallax Hook (disabled on mobile for performance)
const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, isMobile]);

  return isMobile ? 0 : offset;
};

export default useParallax;
