import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const location = useLocation();
  return (
    <nav className={styles.container}>
      <img className={styles.logo} src="/navbar/logo.png" alt="" />
      <ul className={styles.desktopNav}>
        <li className={`${location.pathname == "/" && styles.active}`}>
          <a href="/">Home</a>
        </li>
        <li className={`${location.pathname == "/work-team" && styles.active}`}>
          <a href="/work-team">Workteam</a>
        </li>
        <li
          className={`${
            location.pathname == "/secret-forest" && styles.active
          }`}
        >
          <a href="/secret-forest">Secret Forest</a>
        </li>
        <li className={`${location.pathname == "/ferapet" && styles.active}`}>
          <a href="/ferapet">Ferapet</a>
        </li>
        <li className={`${location.pathname == "/contact" && styles.active}`}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button
        className={`${styles.ham} ${navState == true ? styles.activeHam : ""}`}
        onClick={() => setNavState(!navState)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 17h14M5 12h14M5 7h14"
          />
        </svg>
      </button>
      <ul
        className={`${styles.mobileNav} ${
          navState == true ? styles.activeNav : ""
        }`}
      >
        <li className={`${location.pathname == "/" && styles.active}`}>
          <a href="/">Home</a>
        </li>
        <li className={`${location.pathname == "/work-team" && styles.active}`}>
          <a href="/work-team">Workteam</a>
        </li>
        <li
          className={`${
            location.pathname == "/secret-forest" && styles.active
          }`}
        >
          <a href="/secret-forest">Secret Forest</a>
        </li>
        <li className={`${location.pathname == "/ferapet" && styles.active}`}>
          <a href="/ferapet">Ferapet</a>
        </li>
        <li className={`${location.pathname == "/contact" && styles.active}`}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
