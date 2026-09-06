export type Locale = "ES" | "EN";

/** A value that differs per language. */
export type Localized<T> = Record<Locale, T>;

export interface Tech {
  /** Key into the icon map in `src/data/tech.ts`. */
  value: string;
  title: string;
}

export interface Project {
  id: string;
  title: string;
  /** Shown as an accent chip on the card: "Trabajo", "Personal", "Cliente"… */
  tag?: Localized<string>;
  description: Localized<string>;
  /** Path under /public, or "" to render the fallback pattern. */
  image: string;
  deploy?: string;
  repository?: string;
  stack: Tech[];
  /** Featured projects get the wide card at the top of the grid. */
  featured?: boolean;
  /** Private/NDA work: renders a lock instead of dead links. */
  privateRepo?: boolean;
}

export interface Company {
  id: string;
  name: string;
  /** Path under /public/works. Falls back to the name as text. */
  logo?: string;
  url?: string;
  /** Set for dark logos that need inverting to read on the dark background. */
  invert?: boolean;
}

export interface Job {
  id: string;
  company: string;
  position: Localized<string>;
  start: string;
  /** Omit while it is the current job. */
  end?: string;
  description: Localized<string>;
  stack: string[];
}
