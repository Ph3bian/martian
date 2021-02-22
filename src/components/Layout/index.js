import React, { useEffect } from "react";
import { Logo } from "assets/svg";
import styles from "./layout.module.scss";
import {handleTheme} from "./functions"

const Layout = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme",  localStorage.getItem("theme"));
    }
  }, []);
  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutHeader}>
       Martian
        <div onClick={handleTheme}> click</div>
      </div>
      <div className={styles.LayoutBody}>{children}</div>
    </div>
  );
};
export default Layout;
