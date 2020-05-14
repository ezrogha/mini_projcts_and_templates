import React from "react";
import styles from './index.module.scss'

export default ({ image, detail }) => (
  <div className={styles.testimonial}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum
      soluta ipsam eos, eius ad error voluptate sint? Non, fugit!
    </p>
    <div>
      <img src={image} />
      <span>{detail}</span>
    </div>
  </div>
);
