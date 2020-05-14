import React from "react";
import styles from "./index.module.scss";

import Image1 from "../../img/items/item1.jpg";
import Image2 from "../../img/items/item2.jpg";
import Image3 from "../../img/items/item3.jpg";
import Image4 from "../../img/items/item4.jpg";
import Image5 from "../../img/items/item5.jpg";
import Image6 from "../../img/items/item6.jpg";
import Image7 from "../../img/items/item7.jpg";
import Image8 from "../../img/items/item8.jpg";
import Image9 from "../../img/items/item9.jpg";
import GalleryItem from "../GalleryItem";

export default () => (
  <div className={styles.myWork}>
    <div className={styles.container}>
      <h1 className={styles.heading}>MY WORK</h1>
      <div className={styles.bottomLine} />
      <p>Check out some of my projects</p>
      <div className={styles.arrow} />
      <div className={styles.gallery}>
        <GalleryItem
          image={Image1}
          title="GREAT GRADIENTS"
          paragraph="DESIGN"
        />
        <GalleryItem
          image={Image2}
          title="WORLD EXPERIENCE"
          paragraph="UI/UX"
        />
        <GalleryItem
          image={Image3}
          title="VANISHING"
          paragraph="PHOTOGRAPHY & DESIGN"
        />
        <GalleryItem
          image={Image4}
          title="BEZIER CURVES"
          paragraph="DESIGN CONCEPT"
        />
        <GalleryItem
          image={Image5}
          title="FACE THE EXPERIENCE"
          paragraph="MOBILE UI DESIGN"
        />
        <GalleryItem image={Image6} title="GAP INC" paragraph="DESIGN" />
        <GalleryItem
          image={Image7}
          title="DOCK PONDER"
          paragraph="PHOTOGRAPHY"
        />
        <GalleryItem
          image={Image8}
          title="RESTAURANT APP"
          paragraph="WEB APPLICATIONS"
        />
        <GalleryItem
          image={Image9}
          title="FRIENDFEED"
          paragraph="SOCIAL NETWORK CONCEPT"
        />
      </div>
    </div>
  </div>
);
