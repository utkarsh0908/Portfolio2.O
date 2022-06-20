const contact = () => {
  return (
    <div id="contact" className='flex min-h-screen flex-col py-2 font-Noto items-center justify-center'>
      <div>
      <div className="h-[6px] w-[64px] bg-[#FFFF00]  pt-2 rounded-md "></div>
        <div className="text-white font-semibold opacity-[.95] text-3xl md:text-5xl">Get In Touch</div>
      </div>
      <div className="font-Space opacity-70 text-white w-1/2 flex text-center mt-16">
        My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
      </div>
      <button className="duration-500 mt-10 mr-4 bg-transparent hover:bg-[#ffff52be]  hover:text-white py-2 px-8 border border-[#FFFF00] hover:border-transparent rounded font-Space font-semibold">Email</button>
      </div>
  )
}

export default contact