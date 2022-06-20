import { DiReact } from "react-icons/di"
import {FaEthereum} from "react-icons/fa"
import {SiCplusplus} from "react-icons/si"

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
        link: ""
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