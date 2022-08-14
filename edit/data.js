import { DiReact } from "react-icons/di"
import {FaEthereum} from "react-icons/fa"
import {SiCplusplus} from "react-icons/si"

export const details = {
        firstName: "Utkarsh",
        lastName: "Singh",
        role: "Web & BlockChain Developer!",
        about: "Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web & BlockChain Dev!",
        email:"utkarsh13.ugec20@iiitranchi.ac.in",
        gitHub: "https://github.com/utkarsh0908",
        instaGram: "https://www.instagram.com/utkarsh.0901/",
        linkedIn: "https://www.linkedin.com/in/utkarsh-singh-432228213/",
        twitter: ""
}
export const techMain = "I've worked with a range of technologies in the Development World. From Web to BlockChain"

export const tech = [
    
    {
        id: "1",
        icon: () => <DiReact/>,
        title: "MERN Stack",
        des: "Experience with MERN Stack, NextJS, TailwindCSS & NodeJS"

    },
    {
        id: "2",
        icon: () => <FaEthereum/>,
        title: "BlockChain",
        des: "Experience with Truffle, Ganache, Web3.0 and Solidity"
    },
    {
        id: "3",
        icon: () => <SiCplusplus/>,
        title: "Languages",
        des: "Proficient in C++, Javascript, Solidity & decent experience in Python, Java and C#"
    }
]

export const project = [
    {
        id: "1",
        title: "Decentralized Chat App",
        img: "./1.png",
        des: "Peer to peer communication with no central server that stores our text messages, thus preventing interception. Made using NextJS, TailWindCSS & GunJS",
        tech: ["NextJS", "TailwindCSS", "GunJS"],
        link: "https://github.com/utkarsh0908/DecentralisedChat"
    },
    {
        id: "2",
        title: "SecretHub",
        img: "./2.png",
        des: "WebApp to post your secrets anonymously. Made using ExpressJS, Bootstrap & MongoDB",
        tech: ["ExpressJS", "Bootstrap"],
        link: "https://github.com/utkarsh0908/SecretHub"
    },
    {
        id: "3",
        title: "WeatherApp",
        img: "./3.png",
        des: "WebApp to display the temperature of your city. Fetches data using RESTful API. Made using ExpressJS & Javascript",
        tech: ["ExpressJS", "REST_API"],
        link: "https://github.com/utkarsh0908/WeatherApp"
    }
]