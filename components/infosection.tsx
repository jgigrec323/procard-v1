"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils"; // Import your custom `cn` utility

gsap.registerPlugin(ScrollTrigger);

interface InfoSectionProps {
  orientation: "left" | "right";
  color: string;
  bgColor: string;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  orientation,
  color,
  bgColor,
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      console.error("sectionRef is not attached to a DOM element.");
      return;
    }

    const onUpdateHandler = (self: ScrollTrigger) => {
      const scaleValue = 0.9 + 0.1 * (1 - self.progress); // Scale down by 10%
      element.style.transform = `scale(${scaleValue})`;
    };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      pin: true,
      pinSpacing: false,
      onUpdate: onUpdateHandler,
    });

    // Cleanup on component unmount
    return () => {
      trigger.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "h-screen flex items-center p-8 rounded-2xl", // Base classes
        color, // Text color (dynamic)
        bgColor, // Background color (dynamic)
        orientation === "left" ? "text-left" : "text-right" // Conditional class
      )}
    >
      <p className="infoSectionText w-9/12 text-lg md:text-xl lg:text-2xl font-bold">
        {children}
      </p>
    </section>
  );
};

export default InfoSection;
