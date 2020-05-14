import React from "react";
import styles from './index.module.scss'

export default ({ Icon, title }) => (
  <div className={styles.specialization}>
    <Icon className={styles.icon} />
    <h3>{title}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
      molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam
      numquam quidem
    </p>
  </div>
);
