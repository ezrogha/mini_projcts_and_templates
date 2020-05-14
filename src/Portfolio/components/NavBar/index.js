import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../img/logo.png";

import styles from "./index.module.scss";

export default function index({ changeHeader }) {
  return (
    <div id={styles.navbar}>
      <div className={styles.container}>
        <nav>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <ul>
            <li>
              <NavLink onClick={() => changeHeader(true)} className={`${styles.a}`} to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => changeHeader(false)} className={`${styles.a}`} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => changeHeader(false)} className={`${styles.a}`} to="/work">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => changeHeader(false)} className={`${styles.a}`} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
