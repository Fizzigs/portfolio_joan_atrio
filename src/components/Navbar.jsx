import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#technologies", label: "Tecnologías" },
  { href: "#formation", label: "Formación" },
];

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setMenuActive(false);
  const toggleMenu = () => setMenuActive((open) => !open);

  useEffect(() => {
    if (!menuActive) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuActive]);

  return (
    <nav className="navbar" ref={navRef}>
      <button
        type="button"
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-expanded={menuActive}
        aria-controls="navbar-menu"
        aria-label={menuActive ? "Cerrar menú" : "Abrir menú"}
      >
        <span className={`navbar-toggle-icon ${menuActive ? "active" : ""}`} />
      </button>
      <ul id="navbar-menu" className={menuActive ? "active" : undefined}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={closeMenu}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
