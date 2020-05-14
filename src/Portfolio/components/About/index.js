import React from "react";

import styles from "./index.module.scss";

import AboutImg from "../../img/image8.jpeg";
import Logo1 from "../../img/about-logos/logo-envato.png";
import Logo2 from "../../img/about-logos/logo-magento.png";
import Logo3 from "../../img/about-logos/logo-woocommerce.png";
import Logo4 from "../../img/about-logos/logo-wordpress.png";

import Person1 from "../../img/testimonials/person1.jpg";
import Person2 from "../../img/testimonials/person2.jpg";
import Person3 from "../../img/testimonials/person3.jpg";
import Person4 from "../../img/testimonials/person4.jpg";

import Award from "../Award";
import Skill from "../Skill";
import Testimonial from "../Testimonial";

export default () => (
  <>
    <div id={styles.aboutMe}>
      <div className={styles.container}>
        <h1 className={styles.heading}>ABOUT ME</h1>
        <div className={styles.bottomLine} />
        <p>Let me tell you a little about myself and what I do...</p>
        <div className={styles.aboutContent}>
          <img src={AboutImg} alt="Profile Image" />
          <div>
            <h3>YOUR PROJECT IS IN SAFE HANDS</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!</p>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!</p>
          </div>
        </div>
        <div className={styles.awards}>
          <Award award={1} />
          <Award award={2} />
          <Award award={3} />
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.container}>
          <h1 className={styles.heading}>TECHNICAL SKILLS</h1>
          <div className={styles.bottomLine} />
          <div>
            <Skill title="JAVASCRIPT" percent={100} />
            <Skill title="HTML & CSS" percent={80} />
            <Skill title="REACT" percent={50} />
            <Skill title="PYTHON" percent={40} />
            <Skill title="SWIFT" percent={90} />
            <Skill title="DJANO" percent={60} />
            <Skill title="FLASK" percent={40} />
          </div>
        </div>
      </div>

      <div className={styles.clients}>
        <div className={styles.container}>
          <img src={Logo1} />
          <img src={Logo2} />
          <img src={Logo3} />
          <img src={Logo4} />
        </div>
      </div>

      <div className={styles.testimonials}>
        <div className={styles.container}>
          <h1 className={styles.heading}>TESTIMONIALS</h1>
          <div className={styles.bottomLine} />
          <p>Take a look at what my clients say...</p>
          <div>
            <Testimonial image={Person1} detail="Sam Smith, New York" />
            <Testimonial image={Person2} detail="Sara Williams, Michigan" />
            <Testimonial image={Person3} detail="Jill Johnson, London" />
            <Testimonial image={Person4} detail="Steve Thompson, Boston" />
          </div>
        </div>
      </div>
    </div>
  </>
);
