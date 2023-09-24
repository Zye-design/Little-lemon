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
  BsFillTelephoneFill,
} from "react-icons/bs";


export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    path: '/'
  },
  {
    id: 'booking',
    title: 'Reservation',
    path: '/booking'
  },
  {
    id: 'menu',
    title: 'Menu',
    path: '/menu'
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    path: '/testimonials'
  },
  {
    id: 'about',
    title: 'About',
    path: '/about'
  },
  {
    id: 'login',
    title: 'Login',
    path: '/login'
  }
];


export const footerLinks = [
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
        name: "Testimonials",
        link: "https://www.littlelemon.com/Testimonials/",
      },
      {
        name: "Terms & Services",
        link: "https://www.littlelemon.com/terms-and-services/",
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

export const socialMedia = [

  {
    id: "social-media-1",
    icon: <BsFacebook size={16} />,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-2",
    icon: <BsInstagram size={16} />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    icon: <BsFillTelephoneFill size={16} />,
    link: "+2348168214500",
  },
  {
    id: "social-media-4",
    icon: <BsTwitter size={16} />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-5",
    icon: <BsLinkedin size={16} />,
    link: "https://www.linkedin.com/",
  },
];

export const occasions = [

  {
    title: "Birthday",
    name: "Birthday",
  },
  {
    title: "Anniversary",
    name: "Anniversary",
  },
  {
    title: "Christmas Eve",
    name: "Christmas Eve",
  },
  {
    title: "Wedding",
    name: "Wedding",
  },
  {
    title: "Retirement Dinner",
    name: "Retirement Dinner",
  },
  {
    title: "Engagement Party",
    name: "Engagement Party",
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


export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    }
  }
}


