"use client"
import "./global.css";
import { Poppins } from "next/font/google";

import  CartProvider  from "../../../Context/index";
const poppins = Poppins({
  subsets:['latin'],
  weight:['400','500',"600","700"]
});
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function RootLayout({ children,}: { children: React.ReactNode;}) {
  useEffect(()=>{
    AOS.init({
      duration:800,
      once:false
    })
  },[])
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
      <CartProvider>
        
        

      { children }
   
      </CartProvider>
      </body>
    </html>
  );
}

