import { Link } from "react-router-dom";
import { usePageChrome } from "../hooks/usePageChrome.js";

export function ContactUsPage() {
  usePageChrome({ footerVisible: false, title: "Page Not Found | DocTalk" });

  return (
    <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <section className="w-full rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_54px_rgba(15,23,42,0.08)] sm:p-10">
        <svg
          className="mx-auto h-40 w-40 text-blue-400"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="45"
            y="30"
            width="130"
            height="160"
            rx="16"
            stroke="currentColor"
            strokeWidth="8"
          />
          <path
            d="M75 85h70M75 110h52"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle
            cx="160"
            cy="165"
            r="26"
            fill="#dbeafe"
            stroke="#2563eb"
            strokeWidth="7"
          />
          <path
            d="m178 184 20 20"
            stroke="#2563eb"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="m148 157 10 10M158 157l-10 10"
            stroke="#ef4444"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="mt-6 font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Contact page is not available in this assignment requirement. Please
          return to the homepage to continue browsing doctors and bookings.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-8 rounded-full px-8 font-semibold shadow-lg shadow-primary/20"
        >
          Back to Homepage
        </Link>
      </section>
    </div>
  );
}
