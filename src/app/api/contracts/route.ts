import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function POST(req: Request) {
  const { title, slug, img, oldPrice, price } = await req.json();

  try {
    const create = await prisma?.products.update({
      where:{
        id:1
      },
      data: {
        
        price,
        categoriesId: 1,
      },
    });
    return NextResponse.json({ message: "Atualizado com sucesso", create });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
}
export async function GET(req: Request) {
  const products = await prisma.products.findMany({
    take: 4,
    include: {
      desccript: true,
      Categories: true,
    },
  });
  return NextResponse.json({ products });
}
