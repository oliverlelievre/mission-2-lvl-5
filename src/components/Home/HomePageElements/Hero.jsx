import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {

    return (
      <div className={styles.hero}>
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Welcome to the <span className="hero__title--highlight">React</span> course</h1>
          <p className="hero__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button className="hero__btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
