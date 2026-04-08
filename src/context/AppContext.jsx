import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { doctors } from "../data/doctors.js";

const STORAGE_KEY = "phudu-booked-appointments";

const AppContext = createContext(null);

const getTodayName = () =>
  new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

const loadAppointments = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    const parsedValue = storedValue ? JSON.parse(storedValue) : [];

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue
      .map((appointment) => {
        const doctor = doctors.find(
          (entry) => entry.id === appointment.doctorId,
        );

        return doctor
          ? {
              doctorId: doctor.id,
              bookedAt: appointment.bookedAt || new Date().toISOString(),
            }
          : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
};

export function AppProvider({ children }) {
  const [appointments, setAppointments] = useState(loadAppointments);
  const [isBooting, setIsBooting] = useState(true);
  const [footerVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsBooting(false), 450);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  }, [appointments]);

  const bookedDoctorIds = useMemo(
    () => new Set(appointments.map((appointment) => appointment.doctorId)),
    [appointments],
  );

  const bookedDoctors = useMemo(
    () =>
      appointments
        .map((appointment) => {
          const doctor = doctors.find(
            (entry) => entry.id === appointment.doctorId,
          );

          return doctor ? { ...doctor, bookedAt: appointment.bookedAt } : null;
        })
        .filter(Boolean),
    [appointments],
  );

  const bookDoctor = (doctor) => {
    if (bookedDoctorIds.has(doctor.id)) {
      return { success: false, reason: "duplicate" };
    }

    const today = getTodayName();

    if (!doctor.availability.includes(today)) {
      return { success: false, reason: "unavailable" };
    }

    const nextAppointment = {
      doctorId: doctor.id,
      bookedAt: new Date().toISOString(),
    };

    setAppointments((currentAppointments) => [
      nextAppointment,
      ...currentAppointments,
    ]);

    return { success: true };
  };

  const cancelDoctor = (doctorId) => {
    setAppointments((currentAppointments) =>
      currentAppointments.filter(
        (appointment) => appointment.doctorId !== doctorId,
      ),
    );
  };

  const value = {
    doctors,
    appointments,
    bookedDoctors,
    bookedDoctorIds,
    bookDoctor,
    cancelDoctor,
    isBooting,
    footerVisible,
    setFooterVisible,
    getTodayName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
};
