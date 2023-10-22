"use client";
import { useRouter } from "next/navigation";
import {  useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/Context";
import Loading from "@/components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "./head";
import dynamic from 'next/dynamic'
import BottomNav from "@/components/BottomNav";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })
const Id = ({ params }: { params: { id: string } }) => {
  const {data:session} = useSession()
  const id = params.id;
  const router = useRouter()
   const {addToCart} = useContext(CartContext)
  const [products, setProducts] = useState<any>();// state que recebe os produtos 
  const [loading, setLoading] = useState(false); //state de loading
  useEffect(() => {
    if (id) {
      getDados();
      return;
    }
  }, []);
  
  const urlDev = `http://localhost:3000/api/contracts/${id}`
  const url = `https://adv-harmo.vercel.app/api/contracts/${id}`;
  //Funçao para receber o produto da categoria selecionado 
  async function getDados() {
    setLoading(true)
    const get = await fetch(urlDev as string, {
      method: "GET",
      cache:"no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (get.ok) {
      const data = await get.json();
      setProducts(data.product);
      setLoading(false);
    }
    

    
  }
  // Adicona e vai para carrinho de compraas
  const addGoToCart = (contract:any)=>{
    if(!session){
      router.push("/authentication/signin")
      return
    }
    else{
      const {id, price , oldPrice, title,img} = contract
      const newCart = {id, title,price, oldPrice, img,qtd:1}
      addToCart(newCart)
      router.push("/cart")
    }
  }
 
 

  return (
    <>
    <Head slug={'Produtos'}/>
    <section className="w-full h-full py-[5rem] bg-white">
      {
        loading ?
        <Loading/>
        :
        <div className="w-full h-full px-5  mx-auto">
        <div className="lg:w-full h-full  flex gap-3">
          <div className="w-full lg:w-1/2 h-[400px] flex items-center justify-center">
            <ReactPlayer
              url="/docs.mp4"
              width="100%"
              height="100%"
              
              playing={true}
              loop={true}
            />
          </div>

          <div className="lg:w-1/2 w-full h-full  px-2 py-2">
          <h1 className="w-full text-4xl font-bold  text-left   ">
         
            <span className="text-color"> {products?.title}</span>
          </h1>
            <h2 className="text-sm title-font text-[#54595F] tracking-widest">
              
            </h2>
           
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-[#54595F] ml-3">4 Avaliações</span>
              </span>
            </div>
            <div>
              <p className="leading-relaxed text-[#54595F] text-justify">
                {products?.slug}
              </p>
            </div>
            <div className="flex flex-col  w-full h-full py-5 ">
              <p className="font-bold text-lg  text-black flex gap-2 ">
                Valor total:
                 <span className="text-color font-bold ">
                   {products?.oldPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </p>
             
            </div>
            <div className="flex  mt-6 gap-5">
              <button
                onClick={()=>addGoToCart(products)}
                className="btn "
              >
                Comprar
              </button>
             
            </div>
          </div>
        </div>
        <div className="flex mt-6 py-5">
          <div className="flex  items-start ">
            <span className=" text-[#54595F] font-bold  text-xl">
              Documentaçao inclusa no {products?.title}
            </span>
            <div className="relative"></div>
          </div>
        </div>
        <div className="grid grid-col-1 gap-4 ">
          {products?.desccript?.map((details: any, index: number) => (
            <div key={index} className="w-[100%] border-[1px] border-[#ccc] py-5 px-5 rounded-md bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <h1 className="font-bold text-base text-[#072137] mb-2">
              <span className="text-color">{details.name}</span>
              </h1>
              <ul className="text-base text-[#072137]  ">
                {details.list.split(",").map((list: any,index:number) => (
                  <li key={index} className=" flex pb-3">{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      }
     

      <ToastContainer />
    </section>
    <BottomNav/>
    </>
  );
};

export default Id;
