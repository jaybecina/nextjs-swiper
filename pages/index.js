import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Autoplay,
  EffectCoverflow,
  Lazy,
  Zoom,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import "swiper/css/zoom";
import "swiper/css";
import styles from "../styles/Home.module.scss";

const photos = [
  "banner-img-1.jpg",
  "banner-img-2.jpg",
  "banner-img-3.jpg",
  "banner-img-4.jpg",
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[
          Navigation,
          EffectFade,
          Autoplay,
          EffectCoverflow,
          Lazy,
          Zoom,
        ]}
        // effect="fade"
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides
        navigation
        speed={800}
        slidesPerView={2}
        grabCursor
        loop
        autoplay
        zoom
        className={styles.swiper}
      >
        {photos.map((photo, i) => (
          <SwiperSlide className={styles.swiperSlide}>
            <div className="swiper-zoom-container">
              <img src={`/images/${photo.toString()}`} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
