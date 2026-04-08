import { Link } from "react-router-dom";

const todayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  new Date(),
);

export function DoctorCard({ doctor }) {
  const availableToday = doctor.availability.includes(todayName);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-sky-100 to-slate-200">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="badge border-0 bg-emerald-100 text-emerald-700">
            {doctor.speciality}
          </span>
          <span
            className={`badge border-0 ${availableToday ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}
          >
            {availableToday ? "Available Today" : "Unavailable"}
          </span>
        </div>
      </div>

      <div className="space-y-3 pt-4 text-left">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
          <p className="text-sm text-slate-500">{doctor.education}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {doctor.speciality}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {doctor.experience}
          </span>
        </div>

        <p className="text-sm text-slate-500">
          Reg No: {doctor.registrationNumber}
        </p>

        <Link
          to={`/doctors/${doctor.slug}`}
          className="btn btn-outline btn-primary w-full rounded-full font-semibold"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
