'use client'

import React, { useRef } from "react";
import styles from "./CardsSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface slideData {
  id: number;
  year: number;
  fact: string;
}

interface SliderProps {
  sliderData: slideData[];

}

export const CardsSlider = ({sliderData}: SliderProps) => {

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.mySwiper}
        wrapperClass={styles.wrapper}
        spaceBetween={25}
        initialSlide={0}
        grabCursor
        slidesPerView={2}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prew}`
        }}
        onInit={(swiper) => {
          const navigation =
            typeof swiper.params.navigation === "boolean"
              ? null
              : swiper.params.navigation;
          if (navigation) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet
        }}
        breakpoints={{
          1070: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}>
        {sliderData.map((card: slideData) => {
          return (
            <SwiperSlide className={styles.mySlide} key={card.id}>
              <h3 className={styles.title}>{card.year}</h3>
              <p className={styles.description}>{card.fact}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div  className={styles.pagination}></div>

      <button ref={prevRef}  className={styles.prew}>
        4444
      </button>
      <button ref={nextRef} className={ styles.next}>
        55555
      </button>
    </div>
  );
};
