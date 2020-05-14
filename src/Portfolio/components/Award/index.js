import React from "react";
import { FaAward } from "react-icons/fa";

import styles from './index.module.scss';

export default ({ award }) => (
  <div className={styles.award}>
    <FaAward className={styles.icon} />
    <h3>Award {award}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!</p>
  </div>
);
