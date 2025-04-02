"use client";
import { useEffect, useState, useRef } from "react";

const ScrollFadeIn = ({ children, direction = "left" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out transform opacity-0 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : direction === "left"
          ? "-translate-x-20"
          : "translate-x-10"
      }`}  // Fixed string interpolation inside className
      style={{ transformOrigin: "center center" }}  // Ensure transforms happen from the center
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
