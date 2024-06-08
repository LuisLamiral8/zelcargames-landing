import React from "react";
import Layout from "../components/Layout";
import styles from "./styles/aboutus.module.scss";
const AboutUs = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <img
          loading="lazy"
          className={styles.overlayUp}
          src="/contact/overlay-up.png"
          alt=""
        />
        <img
          loading="lazy"
          className={styles.overlayDown}
          src="/contact/overlay-down.png"
          alt=""
        />
        <h3>About Us</h3>
        <p className={styles.subtitle}>
          ZelcarGames is a new and passionate video game company founded by a
          team of experienced developers with a shared vision: to create
          innovative and exciting games that will captivate players around the
          world.
        </p>
        <img
          loading="lazy"
          className={styles.logo}
          src="/aboutUs/logo.png"
          alt=""
        />
        <section className={styles.section1}>
          <div className={styles.section1Left}>
            <p>Our Passion</p>
            <p>
              Our passion for video games runs deep in our veins. We grew up
              playing, learning from the masters, and dreaming of creating our
              own experiences. We love how video games can transport us to
              different worlds, challenge our minds, and connect us with people
              from all over the planet.
            </p>
          </div>
          <div className={styles.section1Right}>
            <img loading="lazy" src="/aboutUs/section1.png" alt="" />
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.section2Left}>
            <img loading="lazy" src="/aboutUs/section2.png" alt="" />
          </div>
          <div className={styles.section2Right}>
            <h4>Our Focus</h4>
            <p>
              We focus on developing original and immersive games that offer a
              unique experience. We use the latest technologies and techniques
              to make them visually stunning and run smoothly. We are also
              commiteed to building strong communities so that players can
              connect with each other and share their experiences.
            </p>
          </div>
        </section>
        <section className={styles.section3}>
          <h4>Our Team</h4>
          <p>
            Our team is made up of talented artists, skilled programmers, and
            creative designers who share our passion for video games. We are
            constantly learning, growing, and evolving, always looking for new
            ways to create games that are even more fun, engaging, and
            meaningful.
          </p>
        </section>
        <section className={styles.section4}>
          <div className={styles.section4Left}>
            <h4>Mission</h4>
            <p>
              To inspire players around the world through innovative and
              high-quality experiences that spark creativity, foster connection,
              and provide moments of lasting joy.
            </p>
          </div>
          <div className={styles.section4Mid}></div>
          <div className={styles.section4Right}>
            <h4>Vision</h4>
            <p>
              To transform the world of video games through unparalleled
              experiences that inspire, connect, and entertain players of all
              generations, establishing ourselves as the leading company in
              creativity, innovation, and community commitment.
            </p>
          </div>
        </section>
        <section className={styles.section5}>
          <p>
            We believe that video games have the power to bring people together
            and create shared experiences that will last a lifetime. We are
            commiteed to creating games that are enjoyed by players of all ages
            and backgrounds, and we hope to inspire the next generation of video
            game developers.
          </p>
          <p>
            Join us on our journey as we embark on this exciting adventure to
            create the best games in the world.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default AboutUs;
