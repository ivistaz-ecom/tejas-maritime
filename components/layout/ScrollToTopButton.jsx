"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const SCROLL_TOP_THRESHOLD = 80;

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(
        window.scrollY > SCROLL_TOP_THRESHOLD
      );
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        w-11 h-11 rounded-full
        red-gradient text-white
        flex items-center justify-center
        shadow-lg
        md:hover:scale-110
        md:transition-transform
      "
    >
      <FiArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTopButton;