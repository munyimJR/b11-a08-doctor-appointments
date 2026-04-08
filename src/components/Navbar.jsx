import { NavLink, Link } from "react-router-dom";
import { brandAssets } from "../data/doctors.js";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/bookings", label: "My-Bookings" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <img
            src={brandAssets.logoImage}
            alt="Phudu"
            className="h-10 w-auto"
          />
          <span className="font-(family-name:--font-heading) text-2xl font-bold tracking-tight">
            Phudu
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end md:hidden">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost btn-circle border border-slate-200 text-slate-700"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] mt-3 w-52 rounded-box border border-slate-200 bg-white p-2 shadow-xl"
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/bookings"
            className="btn btn-primary h-9 min-h-0 rounded-full px-3 text-xs font-semibold shadow-lg shadow-primary/25 sm:h-10 sm:px-4 sm:text-sm md:h-auto md:min-h-[3rem] md:px-5 md:text-base"
          >
            Emergency
          </Link>
        </div>
      </div>
    </header>
  );
}
