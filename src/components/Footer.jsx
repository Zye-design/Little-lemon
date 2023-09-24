import React from "react";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import logo from "../assets/Logo.svg";
const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} bg-white flex-col`}
  >
    <div
      className={`${styles.flexStart}  md:flex-row flex-col mb-4 w-full px-8`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-2">
        <img
          src={logo}
          alt="Little lemon logo"
          className="w-[200px] h-[70.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] !text-[15px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          deserunt itaque consequatur quibusdam totam, ullam nisi. Sunt, eius.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal !text-[15px] leading-[24px]  hover:text-primary2 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-primary2 ">
      <div className="px-8 w-full flex justify-between items-center md:flex-row flex-col">
        <p className="font-poppins font-normal text-center text-[15px] leading-[27px] ">
          Copyright Ⓒ 2023{" "}
          <span>
            <a
              href="https://zye-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary2 font-semibold"
            >
              {" "}
              Zye Design{" "}
            </a>
          </span>
          . All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => (
            <div
              key={social.id}
              className={`p-2 icon bg-primary2 rounded-full cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
