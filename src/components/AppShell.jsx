import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { Loader } from "./Loader.jsx";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";

const titleFromPath = (pathname) => {
  if (pathname === "/") return "DocTalk | Home";
  if (pathname === "/bookings") return "Booking | DocTalk";
  if (pathname === "/blogs") return "Blogs | DocTalk";
  if (pathname === "/contact-us") return "Contact Us | DocTalk";
  if (pathname.startsWith("/doctors/")) return "Doctor Details | DocTalk";
  return "Page not found | DocTalk";
};

export function AppShell({ children }) {
  const location = useLocation();
  const { isBooting, footerVisible, setFooterVisible } = useApp();
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    document.title = titleFromPath(location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFooterVisible(true);
    setTransitioning(true);

    const timeoutId = window.setTimeout(() => setTransitioning(false), 420);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, setFooterVisible]);

  const showLoader = useMemo(
    () => isBooting || transitioning,
    [isBooting, transitioning],
  );

  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <Navbar />
      <main>{children}</main>
      {footerVisible ? <Footer /> : null}
      {showLoader ? <Loader /> : null}
    </div>
  );
}
