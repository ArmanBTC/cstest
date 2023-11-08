import { url } from "inspector";
import { useThemeHook } from "./ThemeHook";
import DarkIcon from "./iconDark.png";
import LightIcon from "./iconLight.png";
import React from "react";

const Theme = () => {
  const { theme, setTheme } = useThemeHook();

  function ChangeTheme() {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
    console.log("Test 1");
  }
  //    background-color: transparent; background-repeat: no-repeat;
  return (
    <React.Fragment>
      <button
        onClick={ChangeTheme}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "transparent",
          border: "0",
        }}
      >
        <span
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",

            backgroundImage:
              theme === "dark"
                ? `url(./icons/iconLight.png)`
                : `url(./icons/iconDark.png)`,
          }}
        ></span>
      </button>
    </React.Fragment>
  );
};

export default Theme;
