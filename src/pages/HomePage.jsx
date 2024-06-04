import React from "react";
import styles from "./styles/homepage.module.scss";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HomePage = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <Layout>
      {/* <main className={styles.container}> */}
      <Swiper
        rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.container}
      >
        <SwiperSlide className={styles.firstSlide}>
          <h1>Zelcar Games</h1>
          <p>Game development and the fascinating world of Secret Forest</p>
          <button>Learn More</button>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      {/* </main> */}
    </Layout>
  );
};

export default HomePage;
