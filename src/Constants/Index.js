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
  FaFacebook,
  FaWhatsapp,
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
    url: "/#services",
  },

  {
    id: "4",
    title: "skills",
    url: "/#skills",
  },
  {
    id: "5",
    title: "projects",
    url: "/#projects",
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
    name: "ashiful islam Mukto",
    title: "Web Developer (Front End)",
    desc: "Hello! I am ashiful islam mukto, a self tought front end  web developer with expertise in building responsive, user-friendly, and visually appealing web interfaces. Proficient in modern technologies like Tailwind CSS, React Bootstrap, JavaScript (JS), and ReactJS, I specialize in crafting seamless user experiences and dynamic web applications.With a passion for clean, efficient code and a deep understanding of design principles, I thrive in translating complex ideas into functional, engaging digital products. Whether it's optimizing performance, enhancing accessibility, or delivering pixel-perfect designs, I am committed to creating web solutions that stand out.",
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
  {
    id: "2",
    icon: FaHtml5,
    title: "psd to html",
    desc: "I'll convert your PSD file to pixel perfect HTML design. All type of scratch to HTML is included like img to HTML, XD to HTML Etc",
  },
  {
    id: "3",
    icon: FaRegStopCircle,
    title: "responsive design",
    desc: "Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc",
  },
];
export const projects = [
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

  {
    id: "3",
    title: "photoholic ah",
    desc: "Website for a photographer who loves to capture the wordl",
    url: "https://photoholicah.vercel.app/",
    img: ah,
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
    id: "0",
    title: "facebook",
    icon: FaFacebook,
    url: "#",
  },
  {
    id: "1",
    title: "whatsapp",
    icon: FaWhatsapp,
    url: "https://wa.me/+8801759907907",
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
