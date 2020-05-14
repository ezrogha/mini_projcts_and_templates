import React from "react";
import { FaEnvelope, FaPhone, FaAddressCard } from 'react-icons/fa'
import styles from "./index.module.scss";

export default () => (
  <div className={styles.contact}>
    <div className={styles.container}>
      <h1 className={styles.heading}>MY CONTACT</h1>
      <div className={styles.bottomLine} />
      <p>Here is how you can reach me</p>
      <div className={styles.form}>
        <input type="text" placeholder="Name" className={styles.name} />
        <input
          type="text"
          placeholder="Email Adress"
          className={styles.email}
        />
        <input type="text" placeholder="Subject" className={styles.subject} />
        <input type="text" placeholder="phone" className={styles.phone} />
        <textarea placeholder="Enter Message" className={styles.message} />
      </div>
        <button>Submit</button>
    </div>
    <div>
      <div>
        <FaEnvelope />
        <h3>EMAIL</h3>
        <p>rimbiti@gmail.com</p>
      </div>
      <div>
        <FaPhone />
        <h3>PHONE</h3>
        <p>(555) 555-5555</p>
      </div>
      <div>
        <FaAddressCard />
        <h3>Address</h3>
        <p>Kampala, Uganda</p>
      </div>
    </div>

    <div>
      <p>Let's Start Your Next Project</p>
    </div>
  </div>
);
