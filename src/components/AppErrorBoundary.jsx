import { Component } from "react";

export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || "Unexpected application error",
    };
  }

  componentDidCatch(error, info) {
    // Keep debugging details in the browser console for local diagnosis.
    console.error("App runtime error:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center px-4 bg-slate-100">
          <div className="w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-xl text-center">
            <h1 className="text-3xl font-bold text-red-600">
              Something went wrong
            </h1>
            <p className="mt-3 text-slate-600">
              The app hit a runtime error instead of rendering the page.
            </p>
            <p className="mt-2 text-sm text-slate-500 break-words">
              {this.state.message}
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="btn btn-primary mt-6 rounded-full px-6"
            >
              Reload App
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
