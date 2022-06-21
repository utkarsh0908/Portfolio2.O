import { tech } from "./data";

const technologies = () => {
  return (
    <div
      id="technologies"
      className="flex min-h-screen flex-col py-2 font-Noto pl-12 md:pl-32"
      
    >
    <div className="h-[6px] w-[64px] bg-[#FFFF00]  pt-2 mt-44 rounded-md " data-aos="fade-up" data-aos-duration="100"></div>
      <div data-aos="fade-up" className="text-white font-semibold opacity-[.95] text-3xl md:text-6xl">
        Technologies
      </div>
      <div data-aos="zoom-left" data-aos-delay="300" data-aos-duration="500" className="text-white font-Space mt-6  text-base md:text-lg opacity-[.70]">
        I've worked with a range of technologies in the Development World. From Web to BlockChain
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col md:flex-row">
        {tech.map((item) => (
          <div id={item.id}  className="flex flex-col justify-start mr-20 my-6 md:my-16 rounded-md">
          <div className="text-white text-4xl mb-4">
            <item.icon/>
          </div>
            <div className="text-[#FFFF00] font-semibold opacity-[.95] text-xl md:text-3xl">{item.title}</div>
            <div className="text-white font-light text-sm md:text-base font-Space mt-2 opacity-[.70]">{item.des}</div>
          <div>
        </div>
      </div>
        ))}
    </div>
    </div>
  );
};

export default technologies;
