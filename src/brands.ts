import {
  siApple,
  siNike,
  siAdidas,
  siJordan,
  siFila,
  siPuma,
  siDior,
  siZara,
} from "simple-icons";

export type Brand = {
  id: string;
  name: string;
  path?: string;
  svg?: string;
  viewBox?: string;
  /** Caminho em `public/` (ex.: `brands/vans.png`). */
  src?: string;
  layout?: "default" | "wide" | "tall";
  /** false = logo a cores (ex.: Loro Piana); não inverter no slide preto. */
  mono?: boolean;
};

export const brands: Brand[] = [
  {
    id: "apple",
    name: "Apple",
    path: siApple.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "nike",
    name: "Nike",
    path: siNike.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "adidas",
    name: "Adidas",
    path: siAdidas.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "jordan",
    name: "Jordan",
    path: siJordan.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "fila",
    name: "Fila",
    path: siFila.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "vans",
    name: "Vans",
    src: "brands/vans.png",
    layout: "wide",
  },
  {
    id: "puma",
    name: "Puma",
    path: siPuma.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "louis-vuitton",
    name: "Louis Vuitton",
    src: "brands/louis-vuitton.svg",
    layout: "tall",
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    src: "brands/mercedes.png",
    layout: "tall",
  },
  {
    id: "zara",
    name: "Zara",
    path: siZara.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "loropiana",
    name: "Loro Piana",
    src: "brands/loropiana.png",
    layout: "wide",
    mono: false,
  },
  {
    id: "dior",
    name: "Dior",
    path: siDior.path,
    viewBox: "0 0 24 24",
  },
  {
    id: "chanel",
    name: "Chanel",
    src: "brands/chanel.png",
    layout: "tall",
  },
];

export function layoutClass(brand: Brand): string {
  if (brand.layout === "wide") return "logo-slot--wide";
  if (brand.layout === "tall") return "logo-slot--tall";
  return "";
}

export function revealInnerClass(brand: Brand): string {
  if (brand.layout === "wide") return "reveal__inner reveal__inner--wide";
  if (brand.layout === "tall") return "reveal__inner reveal__inner--tall";
  return "reveal__inner";
}
