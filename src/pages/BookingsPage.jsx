import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { toast } from "react-toastify";
import { useApp } from "../context/AppContext.jsx";
import { usePageChrome } from "../hooks/usePageChrome.js";

const chartColors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
          Z`;
};

function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (!height || !width) {
    return null;
  }

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}

export function BookingsPage() {
  const { bookedDoctors, cancelDoctor } = useApp();

  usePageChrome({ footerVisible: true, title: "Booking | DocTalk" });

  const chartData = useMemo(
    () =>
      bookedDoctors.map((doctor) => ({
        name: `Dr. ${doctor.name.split(" ")[2] || doctor.name.split(" ")[1]}`,
        fee: doctor.fee,
      })),
    [bookedDoctors],
  );

  const handleCancelAppointment = (doctor) => {
    cancelDoctor(doctor.id);
    toast.warn(`Appointment canceled for ${doctor.name}`, {
      style: {
        background: "#facc15",
        color: "#1f2937",
      },
    });
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your Booked Appointments
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
              Review your scheduled doctors, track the appointment fee, and
              cancel any booking whenever plans change.
            </p>
          </div>
        </div>

        {bookedDoctors.length > 0 ? (
          <div className="mt-8 space-y-6">
            <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
              <div className="h-90 w-full rounded-3xl bg-slate-50 p-3 sm:p-5">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 8, left: -10, bottom: 4 }}
                    barCategoryGap="14%"
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#d5dbe5"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 1800]}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(37, 99, 235, 0.08)" }}
                      formatter={(value) => [
                        `Tk. ${value}`,
                        "Consultation Fee",
                      ]}
                    />
                    <Bar dataKey="fee" shape={<TriangleBar />} barSize={64}>
                      {chartData.map((entry, index) => (
                        <Cell key={entry.name} fill={chartColors[index % 10]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </aside>

            <div className="space-y-5">
              {bookedDoctors.map((doctor) => (
                <article
                  key={doctor.id}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {doctor.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        {doctor.education}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {doctor.speciality}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-slate-500">
                      Appointment Fee : Tk. {doctor.fee} + Vat
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleCancelAppointment(doctor)}
                      className="btn btn-outline btn-error rounded-full px-6 font-semibold"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <h2 className="font-(family-name:--font-heading) text-3xl font-bold text-slate-900">
              No appointments found
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Add a doctor from the homepage to start managing your bookings.
            </p>
            <Link
              to="/"
              className="btn btn-primary mt-6 rounded-full px-8 font-semibold shadow-lg shadow-primary/20"
            >
              Back to Homepage
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
