import React, { useEffect } from "react";
import styles from "./layout.module.scss";
import { SunShineIcon, MoonIcon } from "assets/svg";
import { handleTheme } from "./functions";

const Layout = ({ children }) => {
  const [icon, setIcon]= React.useState("moon")
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.getElementById("root").setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutHeader}>
        Martian
        <div onClick={()=>handleTheme(setIcon)}>
          {icon === "moon" ? (
            <SunShineIcon />
          ) : (
            <MoonIcon />
          )}
        </div>
      </div>
      <div className={styles.LayoutBody}>{children}</div>
    </div>
  );
};
export default Layout;
