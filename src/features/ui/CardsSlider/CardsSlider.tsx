import styles from "./CardsSlider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from 'swiper/modules';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CardsSlider = () => {
  //   const { children } = props;
  const cards = [
    {
      id: 1,
      title: "First",
      description: "First card",
    },
    {
      id: 2,
      title: "First",
      description: "First card",
    },
    {
      id: 3,
      title: "First",
      description: "First card",
    },
  ];

  return (
    <div className={styles.slider}>
      <Swiper></Swiper>

      {/* <Swiper
        className={styles.mySwiper}
        wrapperClass={styles.wrapper}
        spaceBetween={25}
        initialSlide={0}
        grabCursor
        slidesPerView={2}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prew}`,
        }}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
        }}
        breakpoints={{
          1070: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide className={styles.mySlide} key={card.id}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </div>
  );
};
