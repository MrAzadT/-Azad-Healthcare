import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]);

const Carousel = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 540px
          540: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiper}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634549839/pexels-vidal-balielo-jr-1250655_fq3dpj.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              minHeight: "20rem",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634549839/pexels-rodnae-productions-6129049_xk6zpl.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              minHeight: "20rem",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634549828/pexels-edward-jenner-4033148_azop4r.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              minHeight: "20rem",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
