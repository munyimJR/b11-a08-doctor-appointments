import CountUpModule from "react-countup";
import { FeatureGlyph } from "./Icons.jsx";

const CountUpComponent =
  CountUpModule?.default ?? CountUpModule?.CountUp ?? CountUpModule;

export function StatCard({ iconKey, iconSrc, title, value, suffix }) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-4">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt=""
            className="size-12 rounded-2xl object-contain"
          />
        ) : (
          <FeatureGlyph label={iconKey} />
        )}
        <div className="text-left">
          <div className="text-3xl font-black tracking-tight text-slate-900">
            {typeof CountUpComponent === "function" ? (
              <CountUpComponent
                end={value}
                duration={2.4}
                enableScrollSpy
                scrollSpyOnce
                suffix={suffix}
              />
            ) : (
              `${value}${suffix ?? ""}`
            )}
          </div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
        </div>
      </div>
    </article>
  );
}
