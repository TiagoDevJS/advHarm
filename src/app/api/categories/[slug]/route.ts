import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug
    const get = await prisma.categories.findFirst({
      where:{
        slug:slug as string
      },
      include:{
         products:true
      }
   })
  return NextResponse.json({ get})
  }