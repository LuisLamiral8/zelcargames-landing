import React from "react";
import styles from "./styles/secretforest.module.scss";
import Layout from "../components/Layout";
const SecretForest = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <>
          <img
            loading="lazy"
            className={styles.embear}
            src="/secretForest/embear.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.goblin}
            src="/secretForest/goblin.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.axolotl}
            src="/secretForest/axolotl.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.aquan}
            src="/secretForest/aquan.png"
            alt=""
          />
          <img
            loading="lazy"
            className={styles.fairan}
            src="/secretForest/fairan.png"
            alt=""
          />
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
        <img
          loading="lazy"
          className={styles.logo}
          src="/secretForest/logo.png"
          alt=""
        />
        <h3>A NEW DIFFERENT, and INNOVATIVE MMORPG!</h3>
        <p className={styles.text1}>
          In the Secret Forest, the land is divided into two parts: Light and
          Darkness. Players take on the role of a young warrior who must choose
          between joining the forces of Light or Darkness.
        </p>
        <div className={styles.text2}>
          <p>
            Embark on an exciting adventure in Secret Forest, where you can
            choose from 12 fascinating professions that will allow you to
            develop your talents and achieve your goals.
          </p>
        </div>
        <p className={styles.text3}>
          Not only will you enjoy doing what you love most, but you will also
          gain a competitive edge over other players.
        </p>
        <div className={styles.text4}>
          <img loading="lazy" src="/secretForest/darkness.png" alt="" />
          <p>
            Character faction choice will impact how characters interact with
            the world and other characters in the game.
          </p>
          <img loading="lazy" src="/secretForest/light.png" alt="" />
        </div>
        <p className={styles.text5}>
          In Secret Forest, we recommend that you enter a vast and mysterious
          forest, full of magical creatures, hidden treasures and exciting
          challenges. Become the hero of your own story as you explore lush
          lands, uncover ancient secrets, and face off against powerful enemies.
        </p>
        <div className={styles.text6}>
          <p>
            Additionally, we highly value interaction and community in our
            games. Secret Forest wil allow you to connect woth other players
            from around the world, forge alliances, face challenges together and
            share unforgettable adventures in real time.
          </p>
        </div>
        <div className={styles.trailer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/83HM1vGdp4I?si=-9GRb7GJrQBOa4cA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>Trailer</p>
        </div>
        <button onClick={() => console.log("Clicked!")}>
          Let's go to Secret Forest!
        </button>
      </main>
    </Layout>
  );
};

export default SecretForest;
