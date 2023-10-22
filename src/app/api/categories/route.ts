import { NextResponse } from 'next/server';
import prisma from '@/server/prisma';
export async function POST(request: Request) {
    const { img} = await  request.json()
   
   const categories = await prisma.categories.update({
      where:{
         id:3
      },data:{
         img:img
      }
   })
   return NextResponse.json({categories},{status:200})
}
 
export async function GET(request: Request) {
  
   
   const categories = await prisma.categories.findMany({})
   return NextResponse.json({categories},{status:200})
}