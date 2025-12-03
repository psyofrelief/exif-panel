"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register GSAP plugins only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggeredTextProps {
  text: string;
  className?: string;
  // Use a semantic element prop for accessibility, defaulting to 'h1'
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Renders text with a staggered scroll-based animation effect.
 */
export default function StaggeredText({
  text,
  className,
  as: Tag = "h1",
}: StaggeredTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  // Prepare the text by wrapping each character in a <span>
  const animatedChildren = text.split("").map((char, index) => (
    <span
      key={index}
      // Tailwind utility to allow transform (for GSAP y-translation)
      className="inline-block"
      aria-hidden={char === " "} // Hide spaces from screen readers if preferred
    >
      {char === " " ? "\u00A0" : char} {/* Use non-breaking space for spaces */}
    </span>
  ));

  useEffect(() => {
    const animatedTextElement = textRef.current;
    if (!animatedTextElement) return;

    // Use a context to auto-revert the animations when the component unmounts
    const ctx = gsap.context(() => {
      gsap.from(animatedTextElement.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: animatedTextElement,
          start: "top 85%", // Start animation when the element enters the bottom 15% of the viewport
          end: "top 35%", // End animation when the element reaches the top 35% of the viewport
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 1, // GSAP duration is relative in scrub mode, but needed for proper timing
        stagger: 0.1,
      });
    }, textRef);

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, [text]);

  return (
    <Tag ref={textRef} className={cn("overflow-hidden", className)}>
      {animatedChildren}
    </Tag>
  );
}
