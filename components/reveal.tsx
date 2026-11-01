"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Content is visible by default. Only elements that start below the fold are
 * hidden and then revealed, so a failed observer or disabled JS never removes
 * content from the page.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94) return;

    element.style.transitionDelay = `${delay}ms`;
    element.classList.add("will-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      element.classList.remove("will-reveal", "is-visible");
      element.style.transitionDelay = "";
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
