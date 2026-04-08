import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { usePageChrome } from "../hooks/usePageChrome.js";
import { ErrorState } from "./ErrorState.jsx";
import { toast } from "react-toastify";

export function DoctorDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { doctors, bookDoctor, bookedDoctorIds, getTodayName } = useApp();
  const doctor = doctors.find((entry) => entry.slug === slug);

  usePageChrome({
    footerVisible: true,
    title: doctor ? `${doctor.name} | DocTalk` : "Doctor Details | DocTalk",
  });

  useEffect(() => {
    if (doctor) {
      document.title = `${doctor.name} | DocTalk`;
    }
  }, [doctor]);

  if (!doctor) {
    return (
      <ErrorState
        title="Doctor not found"
        message="The doctor profile you tried to open does not exist or has been removed."
        footerVisible={false}
      />
    );
  }

  const todayName = getTodayName();
  const availableToday = doctor.availability.includes(todayName);
  const alreadyBooked = bookedDoctorIds.has(doctor.id);

  const handleBooking = () => {
    if (alreadyBooked) {
      toast.error(`${doctor.name} is already booked.`);
      return;
    }

    const result = bookDoctor(doctor);

    if (!result.success) {
      if (result.reason === "unavailable") {
        toast.error("Doctor is unavailable today.");
      } else {
        toast.error(`${doctor.name} is already booked.`);
      }
      return;
    }

    toast.success(`Appointment booked with ${doctor.name}`);
    navigate("/bookings");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Doctor’s Profile Details
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            View profile highlights, chamber details, and availability before
            booking your consultation in a few clicks.
          </p>
        </div>
      </section>

      <section className="mt-6 space-y-6">
        <article className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-72 w-full rounded-2xl object-cover object-center"
            />

            <div>
              <h2 className="font-(family-name:--font-heading) text-3xl font-bold text-slate-900 sm:text-4xl">
                {doctor.name}
              </h2>
              <p className="mt-3 text-lg text-slate-500">
                {doctor.education.split(",")[0]}
              </p>
              <p className="text-sm text-slate-500">
                {doctor.speciality},{" "}
                {doctor.education.split(",").slice(1).join(",").trim()}
              </p>

              <p className="mt-5 text-sm text-slate-500">Working at</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">
                {doctor.workplace}
              </p>

              <div className="mt-5 border-t border-dashed border-slate-200 pt-4 text-slate-500">
                <p className="text-sm">Reg No: {doctor.registrationNumber}</p>
              </div>

              <div className="mt-4 border-t border-dashed border-slate-200 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Availability
                  </span>
                  {doctor.availability.map((day) => (
                    <span
                      key={day}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${day === todayName ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}
                    >
                      {day}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-700">
                  Consultation Fee:
                  <span className="ml-2 text-blue-600">
                    Taka : {doctor.fee}
                  </span>
                  <span className="ml-1 font-normal text-slate-500">
                    (incl. Vat)
                  </span>
                  <span className="ml-1 text-blue-600">Per consultation</span>
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <h3 className="text-center font-(family-name:--font-heading) text-3xl font-bold text-slate-900">
            Book an Appointment
          </h3>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <p className="text-sm font-semibold text-slate-700">
                Availability
              </p>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${availableToday ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
              >
                {availableToday
                  ? "Doctor Available Today"
                  : "Doctor Unavailable Today"}
              </span>
            </div>

            <p className="mt-3 rounded-full bg-amber-50 px-4 py-2 text-xs text-amber-600">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>

          <button
            type="button"
            onClick={handleBooking}
            className="btn btn-primary mt-5 h-12 w-full rounded-full text-base font-semibold"
          >
            {alreadyBooked ? "Already Booked" : "Book Appointment Now"}
          </button>
        </article>
      </section>
    </div>
  );
}
