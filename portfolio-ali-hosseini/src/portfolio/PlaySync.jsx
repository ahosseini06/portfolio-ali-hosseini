import React from "react";
import styles from "./PlaySync.module.css";
import Laptop from "./assets/MacBook-PlaySync.png";
import Phone from "./assets/iPhone_PlaySync.png";
import PhoneHL from "./assets/Phone_HL.png";
import LaptopHL from "./assets/Laptop_HL.png";

const PlaySync = () => {
  return (
    <div className={styles.page}>
      <div className={styles.t1}>
        <div className={styles.c1}>
          <h1 className={styles.title}>PLAYSYNC</h1>
          <p className={styles.description}>
            An all-in-one sports tournament management platform built to
            simplify the organization of sports events, whether local leagues or
            national championships. With a focus on automation and user-friendly
            design, Playmaker is tailored to meet the needs of tournament
            organizers, athletes, and fans.
          </p>
          <img className={styles.phone} src={PhoneHL} alt="iPhone" />
        </div>
        <div className={styles.c2}>
          <img className={styles.laptop} src={LaptopHL} alt="MacBook" />
        </div>
      </div>
    </div>
  );
};

export default PlaySync;
