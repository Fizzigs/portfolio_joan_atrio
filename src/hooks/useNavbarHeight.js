import { useLayoutEffect } from "react";

const useNavbarHeight = (setNavbarHeight) => {
  useLayoutEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
      return undefined;
    }

    const updateNavbarHeight = () => {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    const observer = new ResizeObserver(updateNavbarHeight);
    observer.observe(navbar);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      observer.disconnect();
    };
  }, [setNavbarHeight]);
};

export default useNavbarHeight;
