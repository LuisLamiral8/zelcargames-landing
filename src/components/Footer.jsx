import React from "react";
import styles from "./styles/footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.form}>
        <h3>Contact us</h3>
        <input type="text" placeholder="your@email.com" />
        <button>Send</button>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <p>Zelcar Games</p>
          <p>ceo@secretforest.world</p>
          <p>c@zelcar.games</p>
        </div>
        <div className={styles.infoMid}>
          <p>Office</p>
          <p>Zelcar Games LLC</p>
          <p>2201 Manaul Blvd NE,STE A</p>
          <p>Alburquerque, NM 87107 USA</p>
          <p>(430) 305-1445</p>
        </div>
        <div className={styles.infoRight}>
          <p>Terms & conditions</p>
          <p>Refund policy</p>
          <p>Privacy policy</p>
          <p>Copyright 2023 Zelcar Games LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
