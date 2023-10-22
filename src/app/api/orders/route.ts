import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import prisma from "@/server/prisma";
export async function GET(request: Request) {
     const session = await getServerSession(authOptions)
    const  orderByUser  = await prisma.user.findMany({
    
        where:{
            id:session?.user.id
        },select:{
            Checkout:{
                
                take:10,
                include:{
                    Item:true
                },
                orderBy:{
                    creatAt:"desc"
                }
               
            }
            
        },
        
    })
    return NextResponse.json({orderByUser},{status:200})
}