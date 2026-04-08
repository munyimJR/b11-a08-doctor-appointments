export function Loader({ message = "Loading content" }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/20 px-4 backdrop-blur-sm">
      <div className="card w-full max-w-sm border border-white/60 bg-white/95 shadow-2xl">
        <div className="card-body items-center gap-4 text-center">
          <span className="loading loading-spinner loading-lg text-primary" />
          <h2 className="font-(family-name:--font-heading) text-2xl font-bold text-slate-900">
            {message}
          </h2>
          <p className="text-sm text-slate-500">
            Please wait while the page is being prepared.
          </p>
        </div>
      </div>
    </div>
  );
}
