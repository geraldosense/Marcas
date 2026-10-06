import { useCallback, useEffect, useState } from "react";
import { brands, layoutClass, revealInnerClass } from "./brands";
import { BrandLogo } from "./BrandLogo";
import { themeForIndex } from "./theme";

const DURATION_MS = 900;

function wrapIndex(i: number, len: number): number {
  return ((i % len) + len) % len;
}

export function App() {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState<{
    from: number;
    to: number;
    direction: 1 | -1;
  } | null>(null);

  const len = brands.length;
  const busy = transition !== null;

  const go = useCallback(
    (direction: 1 | -1) => {
      if (busy || len === 0) return;
      const to = wrapIndex(index + direction, len);
      setTransition({ from: index, to, direction });
    },
    [busy, index, len],
  );

  useEffect(() => {
    if (!transition) return;
    const t = window.setTimeout(() => {
      setIndex(transition.to);
      setTransition(null);
    }, DURATION_MS);
    return () => window.clearTimeout(t);
  }, [transition]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  const stableIndex = transition?.to ?? index;
  const stableTheme = themeForIndex(stableIndex);
  const stableBrand = brands[stableIndex];

  const fromBrand = transition ? brands[transition.from] : null;
  const fromTheme = transition ? themeForIndex(transition.from) : null;
  const forward = transition?.direction === 1;
  const stageTheme =
    transition && forward ? themeForIndex(transition.from) : stableTheme;

  const slotClass = (brand: (typeof brands)[number]) =>
    `logo-slot ${layoutClass(brand)}`.trim();

  const chromeTheme = transition ? stageTheme : stableTheme;

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", chromeTheme.bg);
  }, [chromeTheme.bg]);

  return (
    <div
      className="app"
      data-chrome={chromeTheme.light ? "light" : "dark"}
      style={{
        ["--transition-duration" as string]: `${DURATION_MS}ms`,
        ["--chrome-bg" as string]: chromeTheme.bg,
        ["--chrome-fg" as string]: chromeTheme.fg,
        backgroundColor: chromeTheme.bg,
        color: chromeTheme.fg,
      }}
    >
      <div
        className="stage"
        role="button"
        tabIndex={0}
        aria-label="Toque ou clique para a marca seguinte"
        data-inverted={!stageTheme.light ? true : undefined}
        style={{
          backgroundColor: stageTheme.bg,
          color: stageTheme.fg,
        }}
        onClick={() => go(1)}
        onKeyDown={(e) => {
          if (e.key === " " && e.target === e.currentTarget) {
            e.preventDefault();
            go(1);
          }
        }}
      >
        {transition && !forward && (
          <div className={`${slotClass(stableBrand)} logo-slot--base`}>
            <BrandLogo brand={stableBrand} className="logo" />
          </div>
        )}

        {!transition && (
          <div className={slotClass(stableBrand)}>
            <BrandLogo brand={stableBrand} className="logo" />
          </div>
        )}

        {transition && forward && fromBrand && (
          <div className={`${slotClass(fromBrand)} logo-slot--zoom-out`}>
            <BrandLogo brand={fromBrand} className="logo" />
          </div>
        )}

        {transition && forward && (
          <div
            className="reveal reveal--forward"
            data-inverted={!stableTheme.light ? true : undefined}
            style={{
              backgroundColor: stableTheme.bg,
              color: stableTheme.fg,
            }}
          >
            <div className={revealInnerClass(stableBrand)}>
              <BrandLogo brand={stableBrand} className="logo logo--incoming" />
            </div>
          </div>
        )}

        {transition && !forward && fromBrand && fromTheme && (
          <div
            className="reveal reveal--backward"
            data-inverted={!fromTheme.light ? true : undefined}
            style={{
              backgroundColor: fromTheme.bg,
              color: fromTheme.fg,
            }}
          >
            <div
              className={`${revealInnerClass(fromBrand)} reveal__inner--backward`}
            >
              <BrandLogo brand={fromBrand} className="logo" />
            </div>
          </div>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        {stableBrand.name}, {stableIndex + 1} de {len}
      </p>
    </div>
  );
}
