import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DoctorCard } from "../components/DoctorCard.jsx";
import { StatCard } from "../components/StatCard.jsx";
import {
  doctors,
  dashboardStats,
  homeHeroHighlights,
  brandAssets,
} from "../data/doctors.js";
import { usePageChrome } from "../hooks/usePageChrome.js";

export function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");

  usePageChrome({ footerVisible: true, title: "Phudu | Home" });

  const filteredDoctors = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    const visibleDoctors = showAll ? doctors : doctors.slice(0, 6);

    if (!query) {
      return visibleDoctors;
    }

    return visibleDoctors.filter((doctor) =>
      [doctor.name, doctor.education, doctor.speciality, doctor.designation]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [searchText, showAll]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(219,234,254,0.85),rgba(239,246,255,0.9)_42%,rgba(255,255,255,0.96))] px-5 py-8 shadow-[0_22px_70px_rgba(37,99,235,0.12)] sm:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1 text-sm font-semibold text-primary shadow-sm">
            Trusted care, one appointment at a time
          </p>
          <h1 className="font-(family-name:--font-heading) text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Our platform connects you with verified doctors across major
            specialties, making it easier to search, compare, and book
            appointments with confidence.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <label className="input input-bordered flex h-14 w-full max-w-2xl items-center gap-3 rounded-full border-slate-200 bg-white px-4 shadow-sm focus-within:outline-none">
              <svg
                className="size-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="search"
                placeholder="Search by doctor, speciality, or hospital"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </label>

            <Link
              to="/bookings"
              className="btn btn-primary h-14 rounded-full px-7 text-base font-semibold shadow-lg shadow-primary/20"
            >
              Search Now
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/70 shadow-lg backdrop-blur">
              <img
                src={brandAssets.bannerImage}
                alt="Doctors in a clinic"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/70 shadow-lg backdrop-blur">
              <img
                src={brandAssets.heroImage}
                alt="Medical appointment setup"
                className="h-60 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Best Doctors
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Choose from experienced specialists prepared to support your medical
            needs with empathy, precision, and clear communication.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="btn btn-primary rounded-full px-8 font-semibold shadow-lg shadow-primary/20"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Show Less Doctors" : "Show All Doctors"}
          </button>
        </div>
      </section>

      <section className="pb-8 lg:pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-heading) text-3xl font-bold text-slate-900 sm:text-4xl">
            We Provide Best Medical Services
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Our platform connects you with verified professionals and simple
            booking tools that keep the process fast and reliable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat, index) => (
            <StatCard
              key={stat.title}
              iconKey={["doctors", "reviews", "patients", "staff"][index]}
              {...stat}
            />
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_18px_52px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-(family-name:--font-heading) text-2xl font-bold text-slate-900">
              Why patients choose Phudu
            </h3>
            <span className="badge badge-primary badge-outline rounded-full px-3 py-3 font-semibold">
              Responsive care flow
            </span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {homeHeroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[22px] bg-slate-50 p-5 text-left text-sm leading-7 text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
