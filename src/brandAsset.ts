/** URLs corretas em dev e GitHub Pages (base `/Marcas/`). */
export function brandAssetUrl(relativePath: string): string {
  const path = relativePath.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${path}`;
}
