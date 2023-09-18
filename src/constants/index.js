import star from "../assets/Star.png"
import Amanda from "../assets/Amanda.png"
import Claude from "../assets/Claude.png"
import jao from "../assets/jao.png"
import Bruchetta from "../assets/bruchetta.svg"
import greekSalad from "../assets/greek.jpg"
import lemonDessert from "../assets/lemon-dessert.jpg"
import janet from "../assets/janet.png"
import { MdDeliveryDining } from "react-icons/md";
import {
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "reservations",
    title: "Reservations",
  },

  {
    id: "orderOnline",
    title: "Order Online",
  },
  {
    id: "login",
    title: "Login",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Login",
        link: "https://www.littlelemon.com/Login/",
      },
      {
        name: "Return policy",
        link: "https://www.littlelemon.com/return-policy/",
      },
      {
        name: "Reservations",
        link: "https://www.littlelemon.com/reservations/",
      },
      {
        name: "Order Online",
        link: "https://www.littlelemon.com/Order-online/",
      },
      {
        name: "Terms & Services",
        link: "https://www.littlelemon.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Contact us",
    links: [
      {
        name: "1001 fannin suite 270, Houston Texas, USA",
        link: "https://www.littlelemon.com/Address/",
        ref: "#",
      },
      {
        name: "Phone :+546 3876 387",
        link: "https://www.littlelemon.com/Phone",
        ref: "tel:5463876387",
      },
      {
        name: "Email :sales.littlelemon@gmail.com",
        link: "https://www.littlelemon.com/Email/",
        ref: "mailto:john.doe@gmail.com",
      },
    ],
  },
  {
    title: "follow us",
    links: [
      {
        name: "facebook",
        link: "https://www.littlelemon.com/facebook/",
        icon: <BsFacebook size={20} />,
      },
      {
        name: "twitter",
        link: "https://www.littlelemon.com/twitter/",
        icon: <BsTwitter size={20} />,
      },
      {
        name: "Pinterest",
        link: "https://www.littlelemon.com/Pinterest/",
        icon: <BsPinterest size={20} />
      },
      {
        name: "instagram",
        link: "https://www.littlelemon.com/instagram/",
        icon: <BsInstagram size={20} />,
      },
      {
        name: "linkedin",
        link: "https://www.littlelemon.com/linkedin/",
        icon: <BsLinkedin size={20} />,
      },
    ],
  },
];

export const onlineMenu = [
  {
    title: "Greek Salad",
    price: "$ 12.99",
    detail: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    buttonTitle: "Order a delivery",
    img: greekSalad,
    alt: "Greek Salad",
    icon: <MdDeliveryDining size={20} />,
  },
  {
    title: "Bruchetta",
    price: "$ 5.99",
    detail: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    buttonTitle: "Order a delivery",
    img: Bruchetta,
    alt: "Bruchetta",
    icon: <MdDeliveryDining size={20} />,
  },
  {
    title: "Lemon Dessert",
    price: "$ 5.00",
    detail: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
    buttonTitle: "Order a delivery",
    img: lemonDessert,
    alt: "Lemon Dessert",
    icon: <MdDeliveryDining size={20} />,
  },

];
export const testimonials = [
  {
    rating: star,
    name: "$ Jao Feng",
    description: "Sed aliquam ultrices mauris. Donec posuere vulputate arcu.",
    img: jao,
  },
  {
    rating: star,
    name: "Janet Smith",
    description: "Sed aliquam ultrices mauris. Donec posuere vulputate arcu.",
    img: janet,
  },
  {
    rating: star,
    name: "Claude Klein",
    description: "Sed aliquam ultrices mauris. Donec posuere vulputate arcu.",
    img: Claude,
  },
  {
    rating: star,
    name: "Amanda Jason",
    description: "Sed aliquam ultrices mauris. Donec posuere vulputate arcu.",
    img: Amanda,
  },

];


