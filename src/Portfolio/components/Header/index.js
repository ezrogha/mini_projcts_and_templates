import React, { useEffect, useState } from "react";

import styles from "../../css/main.module.scss";
import Logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

export default ({ changeHeader }) => {
  let wait = 100;
  const words = ["Developer", "Designer", "Designated", "Creator"];
  const [element, setElement] = useState('')

  useEffect(() => {
    const updateState = (value) => {
      setElement(value.toUpperCase());
    };

    const TypeWriter = function (wait, words) {
      this.wait = wait;
      this.words = words;
      this.wordIndex = 0;
      this.isDeleting = false;
      this.fillerText = "";
      this.type();
    };

    TypeWriter.prototype.type = function () {
      let currentWordIndex = this.wordIndex % this.words.length;
      let currentWord = this.words[currentWordIndex];
      let typeSpeed = 100;

      if (this.isDeleting) {
        typeSpeed /= 3;
        this.fillerText = currentWord.substring(0, this.fillerText.length - 1);
      } else {
        this.fillerText = currentWord.substring(0, this.fillerText.length + 1);
      }

      updateState(this.fillerText);

      if (this.fillerText === currentWord) {
        this.isDeleting = true;
        typeSpeed = 1000;
      }

      if (this.isDeleting && this.fillerText === "") {
        this.wordIndex += 1;
        this.isDeleting = false;
      }

      setTimeout(() => this.type(), typeSpeed);
    };

    new TypeWriter(wait, words);
  }, [])
  
  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <nav id={styles.navbar}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <ul>
            <li>
              <NavLink onClick={() => changeHeader(true)} className={`${styles.a}`} to='/' exact>Home</NavLink>
            </li>
            <li>
              <NavLink onClick={() => changeHeader(false)} className={`${styles.a}`} to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink onClick={() => changeHeader(false)} className={`${styles.a}`} to='/work'>Work</NavLink>
            </li>
            <li>
              <NavLink onClick={() => changeHeader(false)} className={`${styles.a}`} to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.showcase}>
          <h1>
            IAM ROGHASHIN, THE{" "}
            <span className={styles.textCursor}>{element}</span>
          </h1>
        </div>
      </div>
    </header>
  );
};
