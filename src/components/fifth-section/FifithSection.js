import React from "react";
import "./FifthSection.css";
import hat from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialsData } from "../../data/testimonials";

const FifithSection = () => {
  return (
    <div className="fifth-sec">
      <div className="upper-section">
        <div className="u-left">
          <span>TOP RATED</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>
        <div className="u-middle">
          <img src={hat} alt="" />
        </div>
        <div className="u-right">
          <span>100K</span>
          <span>HAPPY CUSTOMERS WITH US</span>
        </div>
      </div>
      <div className="reviews">reviews</div>
      <div className="lower-sec">
        <Swiper
          loop={true}
          className="myswiper"
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          breakpoints={{
            856: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {TestimonialsData.map((person, i) => (
            <SwiperSlide>
              <div className="left-slide">
                <img src={person.image} alt="persons" className="slideimge" />
                <span className="comments">{person.comment}</span>
                <hr />
                <span>{person.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FifithSection;
