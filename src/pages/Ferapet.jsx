import React from "react";
import styles from "./styles/ferapet.module.scss";
import Layout from "../components/Layout";

const Ferapet = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <>
          <img
            className={styles.overlayUp}
            src="/secretForest/overlay-up.png"
            alt=""
          />
          <img
            className={styles.overlayMidUp}
            src="/secretForest/overlay-mid-up.png"
            alt=""
          />
          <img
            className={styles.overlayMidDown}
            src="/secretForest/overlay-mid-down.png"
            alt=""
          />
          <img
            className={styles.overlayDown}
            src="/secretForest/overlay-down.png"
            alt=""
          />
        </>
        <header className={styles.header}>
          <img
            className={styles.fera1}
            src="./ferapet/headerFera1.png"
            alt=""
          />
          <img
            className={styles.fera2}
            src="./ferapet/headerFera2.png"
            alt=""
          />
          <img className={styles.logo} src="./ferapet/logo.png" alt="" />
          <p>
            Immerse yourself in a vibrant world filled with fascinating
            creatures called Fera, where exploration and discovery are the keys
            to success. Unlike traditional games, FeraPet invites you to explore
            a boundless world, where every step brings you closer to new
            adventures and exciting challenges.
          </p>
        </header>
        <section className={styles.section1}>
          <img
            className={styles.fera1}
            src="./ferapet/section1Fera1.png"
            alt=""
          />
          <img
            className={styles.fera2}
            src="./ferapet/section1Fera2.png"
            alt=""
          />
          <div className={styles.section1Container0}>
            <div className={styles.section1Container1}>
              <h3>
                Real-time <br />
                combat
              </h3>
              <p>
                The game will also feature open combat in the open world, freely
                exploring and encountering random enemies. In some areas, close
                combat will be mandatory to progress, facing groups of Ferpaets
                of powerful trainers
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <img
            className={styles.section2Fera}
            src="/ferapet/section2Fera.png"
            alt=""
          />
          <div>
            <img src="/ferapet/section2Cube.png" alt="" />
            <h3>Capture and Collect</h3>
            <p>
              Over 400 unique Fera to discover, each with their own elemental
              types and abilities
            </p>
          </div>
        </section>
        <section className={styles.section3}>
          <img
            className={styles.section3Fera}
            src="/ferapet/section3Fera.png"
            alt=""
          />
          <div>
            <div>
              <img src="/ferapet/section3Ferapedia.png" alt="" />
              <h3>Complete the Ferapedia</h3>
              <p>Research and document each Fera to become a true master.</p>
            </div>
          </div>
        </section>
        <section className={styles.section4}>
          <img
            className={styles.fera}
            src="/ferapet/section4Fera2.png"
            alt=""
          />
          <h3>EMBARK ON AN EPIC ADVENTURE WITH FERAPET!</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/83HM1vGdp4I?si=ls0g714s2vQ9gHfH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <button>Let's Go to Ferapet</button>
        </section>
      </main>
    </Layout>
  );
};

export default Ferapet;
