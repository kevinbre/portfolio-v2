import { useCallback, useRef, useState } from "react";

interface Tilt {
  rx: number;
  ry: number;
  /** Cursor position over the card, in %, for the sheen highlight. */
  mx: number;
  my: number;
  active: boolean;
}

const RESTING: Tilt = { rx: 0, ry: 0, mx: 50, my: 50, active: false };

/**
 * Tracks the pointer over an element and returns a small 3D tilt plus the
 * cursor position, for a card that leans towards the cursor.
 *
 * Updates are throttled to one per animation frame, and pointers that aren't
 * a mouse (touch, pen) are ignored — a tilt that can't be hovered is just a
 * jump on tap.
 */
export const useTilt = (maxDeg = 6) => {
  const [tilt, setTilt] = useState<Tilt>(RESTING);
  const frame = useRef(0);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (event.pointerType !== "mouse") return;

      const rect = event.currentTarget.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setTilt({
          /* Top of the card leans away, bottom leans toward the viewer. */
          rx: (0.5 - py) * maxDeg * 2,
          ry: (px - 0.5) * maxDeg * 2,
          mx: px * 100,
          my: py * 100,
          active: true,
        });
      });
    },
    [maxDeg]
  );

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    setTilt(RESTING);
  }, []);

  return { tilt, onPointerMove, onPointerLeave };
};
