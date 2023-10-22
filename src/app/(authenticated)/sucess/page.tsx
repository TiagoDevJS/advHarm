"use client";
import Head from "./head";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createCookies} from "@/utils/token"

const Sucess = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("order_id");
  const [ message ,setMessage] = useState('')
  const [ status , setStatus] = useState(false)

  useEffect(() => {
    //Funçao que recebe a order do gatway 
    async function order() {
     const token = await createCookies("token", )
      const request = await fetch("/api/pdf", {
        method: "POST",
        body: JSON.stringify({ id,token }),
      });
       const response = await request.json()
        console.log(response)
       if(response.message){
         setStatus(true)
         setMessage(response.message)
       }
      return
    }
    if (id) {
      
        order();
  
        // Marca a função como chamada no localStorage
        
      
    }
  }, []);

 
  
  
  
  
  
  
  
 
  return (
    <>
    <Head/>
    <section className="flex flex-col w-full h-screen  items-center ">
      <h1 className="text-center mt-14 text-lg text-[#072137] w-[80%]">
        Obrigado por sua compra! Agradecemos por escolher nossos produtos.
        Estamos trabalhando diligentemente para processar seu pedido, e em breve
        você poderá fazer o download dos seus itens adquiridos. Fique atento
        para mais atualizações em breve!
      </h1>
   
      {status && <p className="text-center text-xl text-gray-500">{message}</p>}
      
    </section>
    </>
  );
};

export default Sucess;
