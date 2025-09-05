import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareSize?: number;
  glareOpacity?: number;
  glareReverse?: boolean;
}

export function GlareCard({
  children,
  className,
  glareColor = "white",
  glareSize = 300,
  glareOpacity = 0.3,
  glareReverse = false,
  ...props
}: GlareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState<number>(0);
  const rectRef = useRef<DOMRect | null>(null);

  const updateRect = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !rectRef.current) return;

    const x = e.clientX - rectRef.current.left;
    const y = e.clientY - rectRef.current.top;

    setPosition({ x, y });
    setOpacity(glareOpacity);
  };

  const handleMouseEnter = () => {
    updateRect();
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Glare effect */}
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: glareReverse
            ? `radial-gradient(${glareSize}px circle at ${position.x}px ${position.y}px, ${glareColor}, transparent 40%)`
            : `radial-gradient(${glareSize}px circle at ${position.x}px ${position.y}px, ${glareColor}, transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 