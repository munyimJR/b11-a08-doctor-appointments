import { Route, Routes, Navigate } from "react-router-dom";
import { AppShell } from "./components/AppShell.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { DoctorDetailsPage } from "./pages/DoctorDetailsPage.jsx";
import { BookingsPage } from "./pages/BookingsPage.jsx";
import { BlogsPage } from "./pages/BlogsPage.jsx";
import { ContactUsPage } from "./pages/ContactUsPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors/:slug" element={<DoctorDetailsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
