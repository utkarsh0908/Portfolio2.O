import { AiFillEdit } from "react-icons/ai"
import {FaEthereum} from "react-icons/fa"
import {SiCplusplus} from "react-icons/si"

export const details = {
        firstName: "Utkarsh",
        lastName: "Singh",
        role: "Web Developer",
        about: "Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web & BlockChain Dev!",
        email:"utkarsh13.ugec20@iiitranchi.ac.in",
        gitHub: "https://github.com/utkarsh0908",
        instaGram: "https://www.instagram.com/utkarsh.0901/",
        linkedIn: "https://www.linkedin.com/in/utkarsh-singh-432228213/",
        twitter: ""
}
export const techMain = "I've worked with a range of technologies related to website development"

export const tech = [
    {
        id: "1",
        icon: () => <AiFillEdit/>,
        title: "Web Development",
        des: "Experience with MERN Stack, NextJS, TailwindCSS, Sanity, Firebase"
    },
    {
        id: "2",
        icon: () => <SiCplusplus/>,
        title: "Languages",
        des: "Proficient in C++, Javascript, Solidity & decent experience in Python, Java and C#"
    }
]

export const project = [
    {
        id: "1",
        title: "Table Tap",
        img: "./4.png",
        des: "Webapp which streamlines the restaurant ordering process by allowing customers to conveniently order food and beverages using a QR code on their table",
        tech: ["NextJs", "Tailwind", "Firebase"],
        link: "https://github.com/utkarsh0908/Table-Ordering"
    },
    {
        id: "2",
        title: "Ecommerce Store",
        img: "./1.png",
        des: "Webapp that is an online marketplace which can eliminate the need for brick-and-mortar locations",
        tech: ["NextJS", "TailwindCSS", "Sanity"],
        link: "https://github.com/utkarsh0908/Store"
    },
    {
        id: "3",
        title: "SecretHub",
        img: "./2.png",
        des: "WebApp to post your secrets anonymously. Made using ExpressJS, Bootstrap & MongoDB",
        tech: ["ExpressJS", "Bootstrap"],
        link: "https://github.com/utkarsh0908/SecretHub"
    },
    {
        id: "4",
        title: "WeatherApp",
        img: "./3.png",
        des: "WebApp to display the temperature of your city. Fetches data using RESTful API. Made using ExpressJS & Javascript",
        tech: ["ExpressJS", "REST_API"],
        link: "https://github.com/utkarsh0908/WeatherApp"
    }
]