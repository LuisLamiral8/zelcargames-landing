import React from "react";
import styles from "./styles/ferapet.module.scss";
import Layout from "../components/Layout";

const Ferapet = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <>
          <img
            loading="lazy"
            className={styles.overlayUp}
            src="/secretForest/overlay-up.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.overlayMidUp}
            src="/secretForest/overlay-mid-up.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.overlayMidDown}
            src="/secretForest/overlay-mid-down.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.overlayDown}
            src="/secretForest/overlay-down.png"
            alt=""
          />
        </>
        <header className={styles.header}>
          <img
            loading="lazy"
            className={styles.fera1}
            src="./ferapet/headerFera1.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.fera2}
            src="./ferapet/headerFera2.webp"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.logo}
            src="./ferapet/logo.png"
            alt=""
          />
          <h5 className={styles.subtitle}>Join the battle!</h5>
          <p>
            Immerse yourself in a vibrant world full of fascinating creatures
            called Fera, where exploration and discovery are the keys to
            success. FeraPet invites you to explore a limitless world, where
            every step brings you closer to new adventures and exciting
            challenges with unique creatures, each with their own abilities and
            powers that you won't be able to resist geting to know and capture.
          </p>
        </header>
        <section className={styles.section1}>
          <img
            loading="lazy"
            className={styles.fera1}
            src="./ferapet/section1Fera1.png"
            alt=""
          />
          <img
            loading="lazy"
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
                combat will be mandatory to progress, facing groups of Ferapets
                of powerful trainers
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <img
            loading="lazy"
            className={styles.section2Fera}
            src="/ferapet/section2Fera.png"
            alt=""
          />
          <div>
            <img loading="lazy" src="/ferapet/section2Cube.png" alt="" />
            <h3>Capture and Collect</h3>
            <p>
              Over 400 unique Fera to discover, each with their own elemental
              types and abilities
            </p>
          </div>
        </section>
        <section className={styles.section3}>
          <img
            loading="lazy"
            className={styles.section3Fera}
            src="/ferapet/section3Fera.png"
            alt=""
          />
          <div>
            <div>
              <img loading="lazy" src="/ferapet/section3Ferapedia.png" alt="" />
              <h3>Complete the Ferapedia</h3>
              <p>Research and document each Fera to become a true master.</p>
            </div>
          </div>
        </section>
        <section className={styles.section4}>
          <img
            loading="lazy"
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
