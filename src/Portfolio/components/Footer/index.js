import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./index.module.scss";

export default () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <p>Copyright © 2019. All Rights Reserved</p>
      <ul>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </div>
  </div>
);
