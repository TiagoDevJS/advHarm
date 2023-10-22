import mercadopago from "mercadopago";
import prisma from "@/server/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/utils/authOptions";
import { checkout } from "@/utils/validation";

export async function POST(req: Request, res: Response) {
  const url = new URL(req.url);
  const {data,status} = await req.json()
 
  try {
     if(data.status === "paid"){
      const checkout = await  prisma.checkout.update({
        where:{
          id:Number(data.customer.metadata.orderID)
        },
        data:{
          payment:true
        }
      })
   
    
    return NextResponse.json({ ok:"Ordem atualizada com sucesso " }, { status: 200 });
     }
      
   

   
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
  finally{
     await prisma.$disconnect()
    return NextResponse.json({ ok:"true" }, { status: 200 });
  }

}
