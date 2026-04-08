import { usePageChrome } from "../hooks/usePageChrome.js";

export function ContactUsPage() {
  usePageChrome({ footerVisible: true, title: "Contact Us | Phudu" });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-(family-name:--font-heading) text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact the Phudu Team
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Reach out for booking support, doctor profile updates, or
            partnership questions.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4 rounded-[28px] bg-slate-50 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Support
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Get help quickly
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              We usually reply within one business day for appointment, doctor
              profile, and technical questions.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <strong className="text-slate-900">Email:</strong>{" "}
                support@phudu.example
              </p>
              <p>
                <strong className="text-slate-900">Phone:</strong> +880 1234
                567890
              </p>
              <p>
                <strong className="text-slate-900">Hours:</strong> Saturday to
                Thursday, 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          <form className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="form-control w-full">
                <span className="label-text mb-2 text-sm font-semibold text-slate-700">
                  Your Name
                </span>
                <input
                  className="input input-bordered w-full rounded-2xl border-slate-200"
                  placeholder="Enter your name"
                />
              </label>
              <label className="form-control w-full">
                <span className="label-text mb-2 text-sm font-semibold text-slate-700">
                  Email Address
                </span>
                <input
                  className="input input-bordered w-full rounded-2xl border-slate-200"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="form-control mt-4 w-full">
              <span className="label-text mb-2 text-sm font-semibold text-slate-700">
                Message
              </span>
              <textarea
                className="textarea textarea-bordered min-h-40 w-full rounded-2xl border-slate-200"
                placeholder="Tell us how we can help"
              />
            </label>

            <button
              type="button"
              className="btn btn-primary mt-5 w-full rounded-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
