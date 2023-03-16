import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, EffectFade, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Gallery.css";

SwiperCore.use([EffectCoverflow, Pagination, Virtual]);
// if you want to use array
const slide_img = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://lh3.googleusercontent.com/vLoywVkkAeb-JQsJsURx1HCP4ihEnFtzI8RXxCkc5r3_q2Z-demzHSjzrOFB9T5_46Tm6kxXPfbJlAo=w544-h544-p-l90-rj",
];

const Gallery = () => {
  return (
    <>
      <section className="mt-3">
        <h2 className="text-center">Latest Photos</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section>
        <div className="container-fluid">
          <div className="second_slider">
            <Swiper spaceBetween={50} slidesPerView={3} virtual>
              {slide_img.map((img, i) => {
                return (
                  <SwiperSlide key={img} virtualIndex={i}>
                    <img src={img} alt="" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>

      </section>
    </>
  );
};

export default Gallery;