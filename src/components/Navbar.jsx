import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import Logo from "../assets/Logo.svg";
import { navLinks } from "../constants";

const Navbar = ({ isTopOfPage }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary ";

  return (
    <nav
      className={`${navbarBackground} w-full flex py-6 justify-between items-center navbar `}
    >
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Little Lemon logo" />
        </a>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-markazi font-normal cursor-pointer text-[1rem] ${
              active === nav.title ? "text-primary2" : "text-primary1"
            } ${index === navLinks.length - 1 ? "mr-0 button" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.path} className="text-lg">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu  bar"
          className="w-[28px] h-[28px] object-contain icon fill-Highlight1 stroke-secondary2"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary2 absolute z-10 top-20 ml-2 my-2 min-w-[140px] rounded-xl right-0 sidebar`}
        >
          <ul
            className={`list-none flex justify-end items-start flex-1 flex-col `}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-markazi font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primary1" : "text-Highlight1"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <Link to={nav.path} className="text-lg">
                  {" "}
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
