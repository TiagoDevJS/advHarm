"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import { CartContext } from "../../Context";
import { signOut, useSession } from "next-auth/react";
import { links } from "../Mocks";
import { Links } from "@/utils/types";
const Mabvigation = () => {
   useEffect(()=>{
    const cartStorage = JSON.parse(localStorage.getItem("cart") as any) || [];
    if(cartStorage){
      setCartStorage(cartStorage);
    }
   },[])
  const [showMenu, setShowMenu] = useState(false);
  const [showUser, setSHowUser] = useState(false);
  const [cartStorage, setCartStorage] = useState([]);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  const handleShowUser = () => {
    setSHowUser(!showUser);
  };
  const { data: session, status } = useSession();

 
  return (
    <>
    <header className="px-4 w-full h-28 flex items-center justify-around bg-white relative border-b-2 border-gray-400 ">
      <div className="w-[15%] h-full ">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <nav className="md:flex items-center justify-start w-[70%] h-full ">
        <ul className="hidden  md:flex gap-4">
          {links.map((link: Links, index: number) => (
            <li className="uppercase text-gray-400 hover:text-black">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul  className={showMenu ? "bg-white pt-10 absolute top-28 bottom-0 left-0 right-0 z-50 flex flex-col gap-4 w-[100%] h-screen md:hidden":"hidden"}>
          {links.map((link: Links, index: number) => (
            <li onClick={()=>setShowMenu(false)} className="w-full  flex items-center justify-center uppercase text-gray-400 hover:text-black hover:bg-gray-300">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          <li onClick={()=>signOut({callbackUrl:"/"})} className="w-full  flex items-center justify-center uppercase text-gray-400 hover:text-black hover:bg-gray-300">Sair</li>
        </ul>
      </nav>
      <div className= "hidden md:w-[20%] md:flex items-center justify-center h-full gap-1 ">
        {status === "unauthenticated" && (
          <Link href={"/authentication/signin"}>
            <button className="btn">Entrar</button>
          </Link>
        )}
        {
          status === "loading" && (
            <>
            <p className="w-8 h-8 rounded-full bg-gray-400"></p>
            <p className="text-gray-400 text-lg">carregando</p>
            </>
          )
        }
        {
          status === "authenticated" && (
          <>
        
            <img
            src={session?.user.image as string}
            alt="Perfil"
            className="w-8 h-8 bg-transparent  rounded-full"
          />
          <p className="text-gray-400 text-lg capitalize">{session?.user.name}</p>
          </>
          )
        }
          <div className="relative ">
          <Link href={"/cart"} >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-/ h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="flex items-center justify-center absolute -top-2 -right-2 w-6 rounded-full h-6 bg-[#072137] text-[10px] text-[#fff] ">
              {cartStorage?.length}
            </p>
          
          </Link>
          </div>
      </div>
      <div onClick={handleShow} className="w-[20%] flex items-center justify-end md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      
    </header>
    
    </>
  );
};

export default Mabvigation;
