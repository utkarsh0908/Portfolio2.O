import React from "react";
import { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const about = () => {
  const variants = {
    hidden: {opacity:0, y:-50},
    visible: {opacity:1, y: 0}
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <motion.div ref={ref} className="flex flex-col py-2 font-Noto pl-12 md:pl-32"  initial="hidden" id="about" animate={control} variants={variants} transition={{delay: 0.5}}
  >
      <div className="w-full flex flex-col justify-between mt-20" >

        <div className="font-Space text-lg">Hello, I am</div>
        <div className="text-white  font-semibold opacity-[.95] text-4xl md:text-7xl pt-2">Utkarsh Singh</div>
        <div className="text-white opacity-[.70] mt-6 text-3xl md:text-6xl">Web & BlockChain Developer!</div>

      </div>

      <div className="w-4/5 md:w-1/2 flex flex-col justify-start">
        <div className="text-white opacity-[.70] mt-14 text-base md:text-lg font-Space">Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web & BlockChain Dev!</div>
      </div>

      <div>
        <button className="duration-500 mt-16 mr-4 hover:bg-transparent bg-[#ffff52be]  hover:text-[#FFFF00] text-white py-4 px-4 border border-transparent hover:border-[#FFFF00] rounded  font-Space font-semibold"><a href="#contact">Get in Touch</a></button>
        <button className="duration-500 mt-16 bg-transparent hover:bg-[#ffff52be] hover:text-white py-4 px-4 border border-[#FFFF00] hover:border-transparent rounded  font-Space font-semibold"><a href="">Resume</a></button>
      </div>

    </motion.div>
  );
};

export default about;
