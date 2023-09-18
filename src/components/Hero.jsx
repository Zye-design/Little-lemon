import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import Landing from "../assets/restauranfood.jpg";

const hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col mb-0 pt-2 md:mt-0 bg-primary1 mt-8 pb-0 ${styles.heroWrapper}`}
  >
    <div
      className={`${styles.heroContainer}  ${styles.innerWidth} sm:px-20 mx-20 pb-0 mb-0 ${styles.flexCenter}`}
    >
      <div
        className={`${styles.heroLeft} ${styles.flexColStart} md:pt-10 pt-3`}
      >
        <div className={`${styles.heroTitle}`}>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className=" font-semibold md:text-6xl text-3xl pb-2 text-primary2"
          >
            Little Lemon
          </motion.h1>
          <span className="text-Highlight1 text-2xl pt-0 "> Chicago </span>
        </div>
        <div className={`heroDes ${styles.flexColStart}`}>
          <p className="text-Highlight1 text-sm mt-0 pt-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            assumenda sint earum ullam qui perspiciatis asperiores esse culpa
            quasi soluta. Repudiandae doloribus laboriosam vitae enim facere
            blanditiis amet dolorum ipsum!
          </p>
        </div>
        <button className="button mb-8">Reserve a Table</button>
      </div>

      {/* IMAGE SECTION */}
      <div className={`${styles.heroRight} ${styles.flexCenter} `}>
        <motion.div
          initial={{ x: "12rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ x: 2, type: "spring" }}
          className={`border2 rounded-2xl imageContainer md:absolute relative md:top-[1rem] top-[0] md:left-[55%] left-[0] md:z-4 z-0 md:shadow-[8px solid rgba(255, 255, 255, .12)] shadow-none`}
        >
          <img src={Landing} alt="landing img" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default hero;
