import React from "react";
import styles from './index.module.scss'

export default ({ image, title, paragraph }) => (
  <div className={styles.gallery_item}>
    <div className={styles.gallery_image}>
      <img alt="image" src={image} />
    </div>
    <div className={styles.gallery_content}>
      <p>{paragraph}</p>
      <h2>{title}</h2>
    </div>
  </div>
);
