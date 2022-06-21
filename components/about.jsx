const about = () => {
  return (
    <div className="flex flex-col py-2 font-Noto pl-12 md:pl-32" id="about" >
      <div className="w-full flex flex-col justify-between mt-20" >

        <div className="font-Space text-lg" data-aos="fade-up" data-aos-delay="500">Hello, I am</div>
        <div className="text-white  font-semibold opacity-[.95] text-4xl md:text-7xl pt-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="center-bottom">Utkarsh Singh</div>
        <div className="text-white opacity-[.70] mt-6 text-3xl md:text-6xl" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="center-bottom">Web & BlockChain Developer!</div>

      </div>

      <div className="w-4/5 md:w-1/2 flex flex-col justify-start" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="center-bottom">
        <div className="text-white opacity-[.70] mt-14 text-base md:text-lg font-Space">Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web & BlockChain Dev!</div>
      </div>

      <div data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="center-bottom">
        <button className="duration-500 mt-16 mr-4 hover:bg-transparent bg-[#ffff52be]  hover:text-[#FFFF00] text-white py-4 px-4 border border-transparent hover:border-[#FFFF00] rounded  font-Space font-semibold"><a href="#contact">Get in Touch</a></button>
        <a href="Resume.pdf" download="Resume.pdf"><button className="duration-500 mt-16 bg-transparent hover:bg-[#ffff52be] hover:text-white py-4 px-4 border border-[#FFFF00] hover:border-transparent rounded  font-Space font-semibold">Resume</button></a>
      </div>
    </div>
  );
};

export default about;
