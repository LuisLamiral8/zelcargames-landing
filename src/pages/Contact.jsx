import React from "react";
import styles from "./styles/contact.module.scss";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <img
          className={styles.overlayUp}
          src="/contact/overlay-up.png"
          alt=""
        />
        <img
          className={styles.overlayDown}
          src="/contact/overlay-down.png"
          alt=""
        />
        <img src="/contact/alufi.png" className={styles.alufi} alt="" />
        <div className={styles.main}>
          <div className={styles.separator}></div>
          <h3>Contact us</h3>
          <input type="text" placeholder="your@email.com" />
          {/* <input type="textarea" placeholder="How can we help you?" /> */}
          <textarea placeholder="How can we help you?"></textarea>
          <button>Send</button>
          <div className={styles.info}>
            <p>Or contact us through the following emails:</p>
            <p>ceo@secretforest.world</p>
            <p>c@zelcar.games</p>
          </div>
          <div className={styles.separator}></div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
