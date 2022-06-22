import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration:300
    });
  }, []);

  useEffect(()=>{
    var loader = document.getElementById("preloader");
    window.addEventListener("load", ()=>{
      loader.style.display = "none";
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
