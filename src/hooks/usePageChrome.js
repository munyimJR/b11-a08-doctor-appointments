import { useEffect } from "react";
import { useApp } from "../context/AppContext.jsx";

export function usePageChrome({ footerVisible = true, title }) {
  const { setFooterVisible } = useApp();

  useEffect(() => {
    setFooterVisible(footerVisible);

    if (title) {
      document.title = title;
    }

    return () => {
      setFooterVisible(true);
    };
  }, [footerVisible, setFooterVisible, title]);
}
