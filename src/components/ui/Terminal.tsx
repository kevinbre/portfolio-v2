import { useEffect, useState, useSyncExternalStore } from "react";

interface Line {
  /** Rendered before the text, in the prompt colour. */
  prompt?: string;
  text: string;
  className?: string;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Tracks the reduced-motion preference, including later changes to it. */
const useReducedMotion = () =>
  useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_MOTION_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );

/**
 * Types out a script of terminal lines, then leaves a blinking cursor.
 * With reduced motion the whole script is printed at once.
 */
export const Terminal = ({ lines }: { lines: Line[] }) => {
  const reduced = useReducedMotion();
  const [typedCount, setTypedCount] = useState(0);
  const [typed, setTyped] = useState("");

  /* Derived rather than stored, so the reduced-motion branch needs no effect. */
  const visible = reduced ? lines.length : typedCount;
  const current = visible < lines.length ? lines[visible] : null;

  useEffect(() => {
    if (reduced || !current) return;

    if (typed.length < current.text.length) {
      const timer = setTimeout(
        () => setTyped(current.text.slice(0, typed.length + 1)),
        22
      );
      return () => clearTimeout(timer);
    }

    /* Line finished: pause, then move on to the next one. */
    const timer = setTimeout(() => {
      setTypedCount((count) => count + 1);
      setTyped("");
    }, 420);
    return () => clearTimeout(timer);
  }, [typed, current, reduced]);

  const cursor = (
    <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-brand-bright" />
  );

  return (
    <div className="animate-breathe overflow-hidden rounded-xl border border-line bg-abyss/90 backdrop-blur-sm">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-faint">
          kevin@portfolio — zsh
        </span>
      </div>

      <div className="min-h-[232px] px-4 py-4 font-mono text-[13px] leading-7 sm:min-h-[264px]">
        {lines.slice(0, visible).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt && <span className="text-term">{line.prompt}</span>}
            <span className={line.className ?? "text-muted"}>{line.text}</span>
          </div>
        ))}

        {current ? (
          <div className="flex gap-2">
            {current.prompt && <span className="text-term">{current.prompt}</span>}
            <span className={current.className ?? "text-muted"}>
              {typed}
              {cursor}
            </span>
          </div>
        ) : (
          <div className="flex gap-2">
            <span className="text-term">❯</span>
            {cursor}
          </div>
        )}
      </div>
    </div>
  );
};
