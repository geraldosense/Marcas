export type Theme = {
  bg: string;
  fg: string;
  /** Slide com fundo claro (logo preto). */
  light: boolean;
};

/** Contraste máximo, sem cinza — fundo e logo opostos. */
export const LIGHT_THEME: Theme = {
  bg: "#ffffff",
  fg: "#000000",
  light: true,
};

export const DARK_THEME: Theme = {
  bg: "#000000",
  fg: "#ffffff",
  light: false,
};

/** Índice par: branco · ímpar: preto. */
export function themeForIndex(index: number): Theme {
  return index % 2 === 0 ? LIGHT_THEME : DARK_THEME;
}
