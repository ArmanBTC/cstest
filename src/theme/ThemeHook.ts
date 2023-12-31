import { useState, useLayoutEffect } from "react";


export const useThemeHook = () => {
  const [theme, setTheme] = useState("light");
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, setTheme };
};
