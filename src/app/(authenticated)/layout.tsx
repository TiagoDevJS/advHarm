"use client"
import { SessionProvider } from "next-auth/react"
import "./globals.css";
import { Poppins,Montserrat } from "next/font/google";
import Nav from "@/components/Nav/index";
import Footer from "@/components/Footer";
import CartProvider from "../../Context/index";
const monteserrat = Montserrat({
  subsets:['latin'],
  weight:['400','500',"600","700"]
});

export default function RootLayout({ children,}: { children: React.ReactNode;}) {

  return (
    <html lang="pt-br" className={monteserrat.className}>
      <body className={ 'overflow-x-hidden'}>
     
      <CartProvider>
        <SessionProvider>
        <Nav/>
        {children}
      <Footer/>
      </SessionProvider>
      </CartProvider>
      </body>
    </html>
  );
}
