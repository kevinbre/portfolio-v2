import { useEffect, useState } from "react";

/**
 * Highlights the nav item for whichever section is currently in view.
 *
 * Uses scroll position rather than IntersectionObserver: an observer band
 * across the upper viewport never matches the last section, because the page
 * runs out of scroll before that section reaches the band — so "Contact"
 * could never light up.
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      /* Aim a third of the way down: what the reader is actually looking at. */
      const probe = scrollY + viewport * 0.34;

      /* At the very bottom no further scrolling is possible, so the last
         section wins outright — otherwise a short footer never activates. */
      const atBottom =
        scrollY + viewport >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const node = document.getElementById(id);
        if (!node) continue;
        if (node.getBoundingClientRect().top + scrollY <= probe) current = id;
      }
      setActive(current);
    };

    /* Coalesce scroll events into one measurement per frame. */
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
};
