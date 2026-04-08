import { Link } from "react-router-dom";
import { usePageChrome } from "../hooks/usePageChrome.js";

export function ErrorState({ title, message, footerVisible = false }) {
  usePageChrome({ footerVisible, title: `${title} | Phudu` });

  return (
    <div className="mx-auto flex w-full max-w-4xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="w-full rounded-[34px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_54px_rgba(15,23,42,0.08)] sm:p-10">
        <div className="mx-auto grid size-20 place-items-center rounded-full bg-red-50 text-4xl text-red-500">
          !
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          {message}
        </p>
        <Link
          to="/"
          className="btn btn-primary mt-8 rounded-full px-8 font-semibold shadow-lg shadow-primary/20"
        >
          Return to Homepage
        </Link>
      </section>
    </div>
  );
}
