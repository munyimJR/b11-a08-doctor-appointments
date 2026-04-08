import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { AppErrorBoundary } from "./components/AppErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <AppProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={2400}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="colored"
          />
        </AppProvider>
      </BrowserRouter>
    </AppErrorBoundary>
  </StrictMode>,
);
