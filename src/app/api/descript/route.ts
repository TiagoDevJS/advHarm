import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function POST(req: Request) {
  const { name, list} = await req.json();
 console.log(name,list)
  try {
    const create = await prisma?.descript.create({
      data: {
       name,
       list,
       productsId:2
      },
    });
    return NextResponse.json({ message: "Atualizado com sucesso", create });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
  
}