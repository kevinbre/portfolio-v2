import { motion, useInView } from "motion/react";
import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO } from "../../lib/motion";

/**
 * Reveals its children one after another as the group scrolls into view,
 * so a grid or list arrives in a cascade rather than all at once.
 *
 * Like Reveal, a timeout backstop shows the content even if the observer
 * never fires, so nothing can be stranded at opacity 0.
 */
export const RevealGroup = ({
  children,
  stagger = 0.07,
  delay = 0,
  className = "",
  childClassName = "",
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  /** Applied to each generated wrapper — useful for grid item spans. */
  childClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForced(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  const shown = inView || forced;

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={shown ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.55,
            delay: delay + i * stagger,
            ease: EASE_OUT_EXPO,
          }}
          className={childClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
