import type { Brand } from "./brands";

type Props = {
  brand: Brand;
  className?: string;
};

export function BrandLogo({ brand, className }: Props) {
  if (brand.src) {
    return (
      <img
        className={`brand-logo brand-logo--raster ${className ?? ""}`.trim()}
        src={brand.src}
        alt={brand.name}
        draggable={false}
      />
    );
  }

  const viewBox = brand.viewBox ?? "0 0 200 200";

  return (
    <svg
      className={`brand-logo ${className ?? ""}`.trim()}
      viewBox={viewBox}
      aria-label={brand.name}
      role="img"
    >
      <title>{brand.name}</title>
      {brand.path ? (
        <path d={brand.path} fill="currentColor" />
      ) : (
        <g dangerouslySetInnerHTML={{ __html: brand.svg ?? "" }} />
      )}
    </svg>
  );
}
