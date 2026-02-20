import { useEffect, useState } from "react";

// Typing Animation Hook
const useTypingEffect = (
  texts: string[],
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timer);
  }, [
    displayText,
    currentIndex,
    isDeleting,
    texts,
    speed,
    deleteSpeed,
    pauseTime,
  ]);

  return displayText;
};

export default useTypingEffect;
