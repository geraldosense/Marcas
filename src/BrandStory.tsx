import { brandStories } from "./brandStories";

type Props = {
  brandId: string;
  brandName: string;
};

export function BrandStory({ brandId, brandName }: Props) {
  const points = brandStories[brandId];
  if (!points) return null;

  const [a, b, c, d] = points;

  return (
    <div className="brand-story" aria-label={`Origem da marca ${brandName}`}>
      <ul className="brand-story__col brand-story__col--tl">
        <li>{a}</li>
        <li>{b}</li>
      </ul>
      <ul className="brand-story__col brand-story__col--br">
        <li>{c}</li>
        <li>{d}</li>
      </ul>
    </div>
  );
}
