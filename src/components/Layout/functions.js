export const handleTheme = () => {
    if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "dark"
    ) {
      console.log("getting here");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };