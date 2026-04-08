import { Link } from "react-router-dom";
import { SocialIcon } from "./Icons.jsx";
import { brandAssets } from "../data/doctors.js";

const footerNav = [
  { to: "/", label: "Home" },
  { to: "/bookings", label: "My-Bookings" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "Contact Us" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    type: "facebook",
  },
  {
    label: "X",
    href: "https://x.com/",
    type: "x",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    type: "linkedin",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 px-4 py-10 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 text-center">
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

        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-600">
          {footerNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="grid size-10 place-items-center rounded-full bg-slate-900 text-white transition hover:-translate-y-0.5 hover:bg-primary"
            >
              <SocialIcon type={item.type} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
