import React from "react";
import styles from "../style";
import { onlineMenu } from "../constants";

const Menu = () => {
  return (
    <>
      <section className="m-wrapper mt-8" id="menu">
        <div
          className={`m-container ${styles.padding} ${styles.innerWidth} ${styles.flexCenter}`}
        >
          {/* Headings */}
          <div
            className={`flex md:justify-between justify-start gap-y-8 px-20 flex-wrap`}
          >
            <div className={`flex flex-col items-start justify-center`}>
              <h2 className={`${styles.primaryText}`}> This Weeks Specials!</h2>
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

        {onlineMenu.map((card, i) => (
          <div className="card-container">
            <div className="m-card" key={i}>
              <img src={card.img} alt={card.alt} />
              <div className="card-title">
                <h3>{card.title}</h3>
                <span>{card.price}</span>
              </div>
              <p>{card.detail}</p>
              <div className="cta">
                <button>{card.buttonTitle}</button>
                <span className="order-icon">{card.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Menu;
