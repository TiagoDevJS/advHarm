import { NextResponse } from "next/server";
import { redirect } from 'next/navigation'
import prisma from "@/server/prisma";
import { cookies } from 'next/headers';
import { parseCookies } from "nookies";
export async function GET(req: Request) {
 const token = cookies().get("token") as any
 const {searchParams } = new URL(req.url)
 if(!token){
   return  redirect("/expired")

 }
  const id = searchParams.get("id")
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: "Basic c2tfdGVzdF93bnBWMDNPZk94SU5RYkJNOg==",
    },
  };
  const requeste = await fetch(
    `https://api.pagar.me/core/v5/orders/${id}`,
    options
  );
  const response = await requeste.json();
  const order = await prisma.checkout.findUnique({
    where:{
      id:Number(response.customer.metadata.orderID)
    },
    include:{
      Item:true
    }
  })
  const paths = order?.Item.map((name)=>name.name)
  const pdfs = await  prisma.pDF.findMany({
    where:{
      name:{
        in:paths
      }
    }
  })
  const link = pdfs.map((pdf) => pdf.path);
    const downloadHTML = `
      <html>
      <head>
      <style>
      h1{
        text-align: center;
        padding: 1rem 0;
        font-size: 30px;
        color: gray;
      }
      </style>
      </head>
        <body>
          <h1>Preparando downloads...</h1>
          ${link.map((item, index) => `
            <a id="downloadLink${index}" href="${item}" style="display: none;"></a>
            <script>
              setTimeout(() => {
                document.getElementById("downloadLink${index}").click();
              }, ${index * 1000});
              setTimeout(() => {
                window.close()
              }, 10000);
            </script>
          `).join("")}
        </body>
      </html>
    `;

    return new Response(downloadHTML, {
      headers: { "Content-Type": "text/html" },
    });
    
    
}
  