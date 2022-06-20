import { tech } from "./data";
import React from 'react';
import { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';

const technologies = () => {
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
    <div
      id="technologies"
      className="flex min-h-screen flex-col py-2 font-Noto pl-12 md:pl-32"
      
    >
    <div className="h-[6px] w-[64px] bg-[#FFFF00]  pt-2 mt-44 rounded-md "></div>
      <div className="text-white font-semibold opacity-[.95] text-3xl md:text-6xl">
        Technologies
      </div>
      <div className="text-white font-Space mt-6  text-base md:text-lg opacity-[.70]">
        I've worked with a range of technologies in the Development World. From Web to BlockChain
      </div>

      <div className="flex flex-col md:flex-row"
      >
        {tech.map((item) => (
          <motion.div id={item.id} className="flex flex-col justify-start mr-20 my-6 md:my-16 rounded-md"
          ref={ref} 
      initial="hidden" 
      animate={control} variants={variants} transition={{delay: 0.5}}>
          <div className="text-white text-4xl mb-4">
            <item.icon/>
          </div>
            <div className="text-[#FFFF00] font-semibold opacity-[.95] text-xl md:text-3xl">{item.title}</div>
            <div className="text-white font-light text-sm md:text-base font-Space mt-2 opacity-[.70]">{item.des}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default technologies;
