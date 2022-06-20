import {project} from './data'
import {AiFillGithub} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';

const projects = () => {
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  var v = 1;
  return (
    <motion.div id="projects" className="flex min-h-screen flex-col py-2 font-Noto pl-12 md:pl-32"
    >
      <div className="h-[6px] w-[64px] bg-[#FFFF00]  pt-2 mt-24 rounded-md "></div>
      <motion.div className="text-white font-semibold opacity-[.95] text-3xl md:text-6xl"
      ref={ref} 
      initial="hidden" 
      animate={control} 
      variants={variants}
      transition={{delay: 2}}>Projects</motion.div>

      <div>
        {project.map((item)=>( 
          <motion.div className='text-white flex flex-col md:flex-row mt-20  mb-20 md:mb-40'
         >
              <img src={item.img} className={ v%2==0 ? "md:hidden h-2/3 w-auto mr-10 ": "h-2/3 w-auto md:h-1/2 md:w-1/2 mr-10"}  id="image"/>
              <motion.div className='flex flex-col'
               >
                <div className='font-Space text-[#FFFF00] text-sm mt-16 md:mt-8 lg:mt-24'>Project {item.id}</div>
                <motion.div className='mb-4 text-lg md:text-lg lg:text-xl'
                
                >{item.title}</motion.div>
                <div className='font-Space text-sm md:text-sm lg:text-base opacity-[.70]'>{item.des}</div>
                <div className='flex flex-row font-Space text-[#FFFF00] text-xs md:text-sm justify-end mr-2'>{item.tech.map((i)=>(
                  <div className='mr-6 mt-4'>{i}</div>
                ))}</div>
                <div className='text-2xl mt-4 flex justify-end mr-8'>
                <div className='text-[#FFFF00] opacity-90'><BsArrowRightShort/></div>
                  <a href={item.link} target="_blank" className='hover:text-[#808080] duration-200'><AiFillGithub/></a>
                </div>
              </motion.div>
              <div className='hidden'>{v++}</div>
              <img src={item.img} className={v%2==0 ? "hidden h-1/2 w-1/2  m-auto": "hidden md:block h-1/2 w-1/2 ml-10"}  id="image"/>
              <div className='bg-white h-[2px] w-11/12 rounded-md opacity-[.40] mt-10 md:hidden'></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default projects;
