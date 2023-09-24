import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../style";
import { onlineMenu, sliderSettings } from "../constants";

const Menu = () => {
  return (
    <>
      <section className="m-wrapper mt-8" id="menu">
        <div
          className={`m-container ${styles.padding} ${styles.innerWidth} ${styles.flexCenter}`}
        >
          {/* Headings */}
          <div
            className={`flex md:justify-between justify-start gap-y-8 md:px-20 px-10 flex-wrap`}
          >
            <div className={`flex flex-col items-start justify-center`}>
              <h2 className={`${styles.primaryText} md:text-4xl text-2xl`}>
                {" "}
                This Weeks Specials!
              </h2>
            </div>

            <div
              className={`s-button ${styles.flexStart} ${styles.secondaryText} `}
            >
              <button className="button capitalize md:block hidden">
                {" "}
                online menu
              </button>
            </div>
          </div>
        </div>

        <Swiper className="!justify-between !mx-8" {...sliderSettings}>
          {onlineMenu.map((card, i) => (
            <SwiperSlide key={i}>
              <div className={`${styles.flexColStart} m-card `}>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full max-w-sm bg-contain rounded-t-2xl"
                />
                <div className="m-flex text-xl text-primary1 md:px-4 px-1 font-semibold capitalize">
                  <h3>{card.title}</h3>
                  <span className="md:ps-32 ps-20 test text-secondary1 ">
                    {card.price}
                  </span>
                </div>
                <p className="px-4">{card.detail}</p>
                <div className="m-flex px-4 font-semibold py-4 ">
                  <button>{card.buttonTitle}</button>
                  <span className="order-icon ps-8">{card.icon}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Menu;
