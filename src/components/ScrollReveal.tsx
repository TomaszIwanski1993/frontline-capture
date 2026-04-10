import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  y = 18,
  duration = 0.35,
  once = true,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // ease-out cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
