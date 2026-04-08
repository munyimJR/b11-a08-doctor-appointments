import { ErrorState } from "./ErrorState.jsx";

export function NotFoundPage() {
  return (
    <ErrorState
      title="Page not found"
      message="The route you opened does not exist. Use the homepage to continue browsing doctors and appointments."
      footerVisible={false}
    />
  );
}
