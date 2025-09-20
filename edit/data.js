import { AiFillEdit } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { BiSolidServer } from "react-icons/bi";
import { FaAmazon } from "react-icons/fa";

export const data = {
  details: {
    firstName: "Utkarsh",
    lastName: "Singh",
    role: "SDE 1 | Amazon",
    resume: "https://drive.google.com/file/d/1_Ba_sLnt0SXYy0YI_n9KSvq0VZGtqvg_/view?usp=sharing",
    about:
      "My expertise lies in fullstack development, particularly with React, Java, Springboot and AWS, alongside core web technologies like HTML, CSS, and JavaScript",
    email: "utkarsh13.ugec20@iiitranchi.ac.in",
    gitHub: "https://github.com/utkarsh0908",
    instaGram: "https://www.instagram.com/utk9rsh8/",
    linkedIn: "https://www.linkedin.com/in/utk0908/",
    twitter: "",
  },
  technologiesSection: {
    heading: "I've worked with a range of technologies related to website development and microservices",
    tech: [
      {
        id: "1",
        icon: () => <BiSolidServer />,
        title: "Backend",
        des: "Experience with AWS, Java, Springboot, NodeJS",
      },
      {
        id: "2",
        icon: () => <AiFillEdit />,
        title: "Web Development",
        des: "Experience with MERN Stack, NextJS, TailwindCSS, Sanity, Firebase",
      },
      {
        id: "3",
        icon: () => <SiCplusplus />,
        title: "Languages",
        des: "Proficient in C++, Javascript & decent experience in Python, Java and C#",
      },
      
    ]
  },
  experienceSection: {
    experience: [
      {
        id: "1",
        icon: () => <FaAmazon />,
        title: "Amazon",
        des: "As a Software Developer at Amazon, I collaborated with the Cross-Border Team to migrate large-scale services from AWS DUB to FRA region, leveraging Amazon internal tools to ensure high availability, scalability, and seamless deployment.",
      },
      {
        id: "2",
        icon: () => <MdOutlineWork />,
        title: "Collegedunia",
        des: "As a Frontend Developer at Collegedunia, I optimized key pages using NextJS, ReactJS, and SEO strategies, contributing to a site with 900 million page views and 200 million new visitors monthly.",
      },
      {
        id: "3",
        icon: () => <FaLaptopHouse />,
        title: "Internships",
        des: "I have completed two internships: at Maximl, where I developed production apps with React.js and Nest.js, and at NeatSkills, where I built and optimized a fullstack edtech web app.",
      },
    ]
  },
  projectsSection: {
    projects: [
      {
        id: "1",
        title: "",
        img: "LLD Cache.png",
        des: "Built a thread-safe Java cache using Facade and Strategy patterns with plug-and-play eviction logic like LRU and TTL.",
        tech: ["Java", "Collections Framework", "System Design"],
        link: "https://github.com/utkarsh0908/ThreadSafe-Cache",
      },
      {
        id: "2",
        title: "Table Tap",
        img: "./4.png",
        des: "Webapp which streamlines the restaurant ordering process by allowing customers to conveniently order food and beverages using a QR code on their table",
        tech: ["NextJs", "Tailwind", "Firebase"],
        link: "https://github.com/utkarsh0908/Table-Ordering",
      }
    ]
  }
};


export const project = [
  {
    id: "1",
    title: "Table Tap",
    img: "./4.png",
    des: "Webapp which streamlines the restaurant ordering process by allowing customers to conveniently order food and beverages using a QR code on their table",
    tech: ["NextJs", "Tailwind", "Firebase"],
    link: "https://github.com/utkarsh0908/Table-Ordering",
  },
  {
    id: "2",
    title: "Ecommerce Store",
    img: "./1.png",
    des: "Webapp that is an online marketplace which can eliminate the need for brick-and-mortar locations",
    tech: ["NextJS", "TailwindCSS", "Sanity"],
    link: "https://github.com/utkarsh0908/Store",
  },
  {
    id: "3",
    title: "SecretHub",
    img: "./2.png",
    des: "WebApp to post your secrets anonymously. Made using ExpressJS, Bootstrap & MongoDB",
    tech: ["ExpressJS", "Bootstrap"],
    link: "https://github.com/utkarsh0908/SecretHub",
  },
  {
    id: "4",
    title: "WeatherApp",
    img: "./3.png",
    des: "WebApp to display the temperature of your city. Fetches data using RESTful API. Made using ExpressJS & Javascript",
    tech: ["ExpressJS", "REST_API"],
    link: "https://github.com/utkarsh0908/WeatherApp",
  },
];
