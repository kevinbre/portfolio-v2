import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO } from "../../lib/motion";

/**
 * Fades content up as it scrolls into view, once.
 *
 * A timeout backstop reveals the content anyway if the observer never fires
 * (headless renderers, some in-app browsers), so text can never get stranded
 * at opacity 0.
 */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForced(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  const shown = inView || forced;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
