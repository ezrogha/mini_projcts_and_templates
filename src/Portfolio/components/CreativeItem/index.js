import React from "react";
import styles from "./index.module.scss";

export default ({ Icon, number, title }) => (
  <div className={styles.creative}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icon} />
      <div>{number}</div>
    </div>
    <h3>{title}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
      molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam
      numquam quidem
    </p>
  </div>
);
