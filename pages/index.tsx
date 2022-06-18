import Head from "next/head";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";
import Header from "./components/header";
import Contact from "./components/contact";

const Home = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-black text-[#FFFF00]">
      <Head>
        <title>Utkarsh Singh - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row w-full">
        <div className="h-screen sticky top-0 z-50 w-1/12 justify-end hidden md:flex md:flex-col">
          <LeftSide/>
        </div>
        <div className="flex flex-col w-full md:w-11/12">
          <Header/>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <div className='h-screen sticky top-0 z-50 w-1/12 justify-center items-center hidden md:flex md:flex-col'>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
