import React from "react";
import styles from "./styles/homepage.module.scss";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.main}>
          <h1>
            Live Your <br /> Passion
          </h1>
          <p>Immerse yourself in our worlds</p>
          <button onClick={() => navigate("/about-us")}>
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path fill-rule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" />
            </svg>
          </button>
        </div>
        <img
          className={styles.overlayUp}
          src="/secretForest/overlay-up.png"
          alt=""
        />
        <img
          className={styles.overlayDown}
          src="/secretForest/overlay-down.png"
          alt=""
        />
        <Swiper
          rewind={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.bg1}>
            <img src="/homePage/bg.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.bg2}>
            <img src="/homePage/bg2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.bg3}>
            <img src="/homePage/bg3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.bg4}>
            <img src="/homePage/bg4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.bg5}>
            <img src="/homePage/bg5.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </main>
      {/* <main className={styles.container}> */}
      {/* </main> */}
    </Layout>
  );
};

export default HomePage;
