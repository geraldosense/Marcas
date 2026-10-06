import type { Brand } from "./brands";
import { brandAssetUrl } from "./brandAsset";

type Props = {
  brand: Brand;
  className?: string;
};

export function BrandLogo({ brand, className }: Props) {
  const mono = brand.mono !== false;

  if (brand.src) {
    const multiply =
      brand.multiplyOnLight !== false && brand.src.endsWith(".png");
    return (
      <img
        className={`brand-logo brand-logo--raster ${mono ? "brand-logo--mono" : "brand-logo--color"} ${multiply ? "brand-logo--multiply" : ""} ${className ?? ""}`.trim()}
        src={brandAssetUrl(brand.src)}
        alt={brand.name}
        draggable={false}
        loading="eager"
        decoding="async"
      />
    );
  }

  const viewBox = brand.viewBox ?? "0 0 200 200";

  return (
    <svg
      className={`brand-logo brand-logo--mono ${className ?? ""}`.trim()}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
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
