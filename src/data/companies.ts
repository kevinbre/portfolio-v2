import type { Company } from "./types";

/**
 * Marquee logos. Files live in public/works.
 *
 * `invert` is for logos whose own colour is too dark for this background
 * (Nosis is navy): the marquee renders those in white via a CSS filter.
 */
export const companies: Company[] = [
  { id: "membrane", name: "Membrane", logo: "/works/membrane-logo.webp" },
  { id: "ratherlabs", name: "RatherLabs", logo: "/works/ratherlabs.svg", url: "https://ratherlabs.com/" },
  { id: "geopagos", name: "Geopagos", logo: "/works/geopagos.svg", url: "https://geopagos.com/" },
  { id: "nosis", name: "Nosis", logo: "/works/nosis.webp", url: "https://www.nosis.com/", invert: true },
  { id: "qualita", name: "Qualita", logo: "/works/qualita.svg" },
  { id: "dosalcubo", name: "Dos al Cubo", logo: "/works/dos-al-cubo.svg" },
];
