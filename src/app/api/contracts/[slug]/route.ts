import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug 
    
     const product = await prisma.products.findUnique({
        where:{
            id:Number(slug)
        },
        include:{
            Categories:true,
            desccript:true
        }
     })
   
  return NextResponse.json({ product})
  }