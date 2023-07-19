import React from "react";
import "./SecondSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { SliderProducts } from "../../data/products";

const SecondSection = () => {
  return (
    <div className="sec-section">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="myswiper"
        spaceBetween={40}
        slidesPerView={3}
        slidesPerGroup={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          0: { slidesPerView: 1 },
        }}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide className="slides">
            <div className="left-slide">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span className="l-price">{slide.price}$</span>
              <div className="shopnow">Shop now</div>
            </div>
            <img src={slide.img} alt="" className="slideimg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondSection;
