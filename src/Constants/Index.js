import engineersHome from "../assets/engineershome.jpg";
import rswa from "../assets/rswa.jpg";
import ah from "../assets/ah.jpg";
import helloshe from "../assets/helloshe.jpg";
import { v4 as uuidv4 } from "uuid";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaWeebly,
  FaRegStopCircle,
  FaSatellite,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";

export const navItems = [
  {
    id: "1",
    title: "home",
    url: "/#home",
  },
  // {
  //   id: "2",
  //   title: "About me",
  //   url: "/#About",
  // },
  {
    id: "3",
    title: "services",
    url: "#services",
  },

  {
    id: "4",
    title: "skills",
    url: "#skills",
  },
  {
    id: "5",
    title: "projects",
    url: "#projects",
  },
  // {
  //   id: "6",
  //   title: "Testimonials",
  //   url: "/#testimonials",
  // },
  {
    id: "7",
    title: "blog",
    url: "/blog",
  },
  {
    id: "8",
    title: "practice",
    url: "/practice",
  },
  // {
  //   id: "9",
  //   title: "todo app",
  //   url: "/practice/#todoAPP",
  // },
  // {
  //   id: "10",
  //   title: "Complete todo app",
  //   url: "/practice/#completeTodoApp",
  // },
  // {
  //   id: "11",
  //   title: "Fake Store",
  //   url: "/practice/#fakeStore",
  // },
  // {
  //   id: "12",
  //   title: "Country App",
  //   url: "/practice/#countryApp",
  // },
];

export const aboutDetails = [
  {
    id: "0",
    name: "ashiful islam (Mukto)",
    title: "Web Developer",
    desc: "A passionate frontEnd focused full stack web developer. I enjoy crafting clean, responsive, and user-friendly web applications that bring ideas to life. Constantly learning new tools and frameworks, I’m eager to solve real-world problems through code. Let’s build something amazing together!",
  },
];

export const services = [
  {
    id: "0",
    icon: FaSatellite,
    title: "landing page design",
    desc: "Qualified web designs and attractive effects which catches visitor's eye.",
  },
  {
    id: "1",
    icon: FaWeebly,
    title: "web development",
    desc: "Clean and fresh issue free code to make your website dynamic perfectly.",
  },
  // {
  //   id: "2",
  //   icon: FaHtml5,
  //   title: "figma to ",
  //   desc: "I'll convert your PSD file to pixel perfect HTML design. All type of scratch to HTML is included like img to HTML, XD to HTML Etc",
  // },
  {
    id: "3",
    icon: FaRegStopCircle,
    title: "responsive design",
    desc: "Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc",
  },
];
export const projects = [
  {
    id: "5",
    title: "Real Estate Project",
    desc: "A role-based MERN application for property buying and selling. Users can browse and purchase properties, agents can list new ones, and admins can manage users, agents, and listings. Features CRUD operations and secure access with Firebase tokens.",
    url: "https://real-estate-client-2025.web.app",
    img: "https://camo.githubusercontent.com/250c84671ab743155e69ac9054a418af95fb5986a17a6fdae89e4929cbe4025d/68747470733a2f2f692e6962622e636f2e636f6d2f4b31776e4b58782f53637265656e73686f742d323032352d30382d30382d61742d332d32312d35312d504d2e706e67",
  },
  {
    id: "4",
    title: "Event management application",
    desc: "SODEV is a community-driven event management platform where users can create, join, and track social development events in their local area.",
    url: "https://event-management-app-b86d6.web.app/",
    img: "https://ashifulislam-portfolio-2002.web.app/assets/eventManagement-BNCHxb3G.png",
  },
  {
    id: "5",
    title: "Recipe booking platform",
    desc: "Cook_verse is a web application designed for food enthusiasts who love to explore and share their favorite recipes. The app allows users to browse featured recipes, save their favorites, and contribute their own — all in a smooth, authenticated environment.",
    url: "https://books-recipe-app.web.app/",
    img: "https://ashifulislam-portfolio-2002.web.app/assets/cookverse-zoSthvfF.png",
  },

  {
    id: "2",
    title: "Hello She",
    desc: "Hello She is a non-profit organization dedicated to raising awareness about Cyber Security among women and female students. We believe that in today’s digital age, everyone deserves to feel safe online, and our goal is to provide the knowledge and tools necessary to achieve that. this is just a landing page without functionality",
    url: "https://helloshe.org/",
    img: helloshe,
  },
  {
    id: "1",
    title: "RSWA",
    desc: "Rowmari Students Welfare Association, a social and students welfare association. This is a web application with various functionality. ",
    url: "https://rswa-rowmari.vercel.app",
    img: rswa,
  },
  {
    id: "0",
    title: "Engineers Home Consulteansey",
    desc: "A engineering Consultancy for civil engineers. They provide many services like indoor and outdoor designs etc.",
    url: "https://engineershome.vercel.app/",
    img: engineersHome,
  },
];
export const skillsDetails = [
  {
    id: "0",
    title: "html 5",
    level: "5",
    icon: FaHtml5,
    percent: "90",
    strokeColor: "#F1672B",
  },
  {
    id: "1",
    title: "css3",
    level: "5",
    icon: FaCss3,
    percent: "75",
    strokeColor: "#663399",
  },

  {
    id: "5",
    title: "tailwind Css",
    level: "5",
    icon: RiTailwindCssFill,
    percent: "80",
    strokeColor: "#349FAF",
  },
  {
    id: "2",
    title: "javascript",
    level: "5",
    icon: FaJs,
    percent: "50",
    strokeColor: "#F7DF1E",
  },
  {
    id: "3",
    title: "react",
    level: "5",
    icon: FaReact,
    percent: "65",
    strokeColor: "#4AD5FF",
  },
  {
    id: "4",
    title: "react-bootstrap",
    level: "5",
    icon: SiReactbootstrap,
    percent: "85",
    strokeColor: "#6D52F9",
  },
  {
    id: "6",
    title: "git",
    level: "5",
    icon: FaGitAlt,
    percent: "10",
    strokeColor: "#F15233",
  },
];

// export const skills = [
//   {
//     id: "0",
//     title: "html",
//     level: "5",
//     icon: html,
//     percent: "90",
//     strokeColor: "green",
//   },
//   {
//     id: "1",
//     title: "css",
//     level: "5",
//     icon: css,
//     percent: "70",
//     strokeColor: "#ffec6e",
//   },
//   {
//     id: "2",
//     title: "javascript",
//     level: "5",
//     icon: javascript,
//     percent: "40",
//     strokeColor: "#cc8254",
//   },
//   {
//     id: "3",
//     title: "react",
//     level: "5",
//     icon: react,
//     percent: "50",
//     strokeColor: "#cc8254",
//   },
//   {
//     id: "4",
//     title: "react-bootstrap",
//     level: "5",
//     icon: bootstrap,
//     percent: "85",
//     strokeColor: "#5aa35a",
//   },
//   {
//     id: "5",
//     title: "react-tailwind",
//     level: "5",
//     icon: tailwindcss,
//     percent: "80",
//     strokeColor: "#5aa35a",
//   },
//   {
//     id: "6",
//     title: "git",
//     level: "5",
//     icon: git,
//     percent: "10",
//     strokeColor: "#a14842",
//   },
// ];

export const contactDetails = [
  {
    id: "0",
    title: "+880 1759907907",
    icon: FaPhone,
    url: "tel:+8801759907907",
  },
  {
    id: "1",
    title: "Azimpur, Dhaka,bangladesh",
    icon: FaMapLocationDot,
    url: "https://maps.app.goo.gl/iiMZZTxToZKc9eoQ9",
  },
  {
    id: "2",
    title: "ashifulislam2002@gmail.com",
    icon: FaEnvelope,
    url: "mailto:ashifulislam2002@gmail.com",
  },
];
export const SoicalMidea = [
  {
    id: "3",
    title: "ashifulislam2002@gmail.com",
    icon: FaEnvelope,
    url: "mailto:ashifulislam2002@gmail.com",
  },
  {
    id: "4",
    title: "linked in",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ashiful-mukto-b2b1a9258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRusKHJJNTzOzkiGI507DZQ%3D%3D",
  },

  {
    id: "2",
    title: "github",
    icon: FaGithub,
    url: "https://github.com/ashiful2002",
  },
];

export const usersData = [
  {
    id: uuidv4(),
    name: "ashiful islam",
  },
  {
    id: uuidv4(),
    name: "ariful islam",
  },
  {
    id: uuidv4(),
    name: "nasim mahmud",
  },
];

export const reducerData = [
  {
    id: uuidv4().substring(0, 7),
    title: "naim mahmud",
    desc: "student",
  },
  {
    id: uuidv4().substring(0, 7),
    title: "amit hasan ",
    desc: "student",
  },
  {
    id: uuidv4().substring(0, 7),
    title: "murad hossain",
    desc: "onterprenure",
  },
];
