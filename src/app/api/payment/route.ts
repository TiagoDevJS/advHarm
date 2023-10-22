import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import prisma from "@/server/prisma";

export async function POST(req: Request, res: Response) {
  const { data, cartStorage} = await req.json();
  const code: string = data.phone.substring(0, 2);
  const phone: string = data.phone.slice(2);
  const session = await getServerSession(authOptions);

 const  ids = cartStorage.map((id:any)=> {return id.id})

 
 
 
  
  try {
   const products = await prisma.products.findMany({
    where:{
      id:{
        in:ids
      }
    }
  })
    const items = products.map((item: any) => {
      return {
        code: item.id,
        quantity: 1,
        amount: item.price ,
        description: item.title,
      };
    });
    const totalAmount = items.reduce((accumulator:any, currentValue:any) => {
      return accumulator + currentValue.amount;
    }, 0);
    
   const checkout = await prisma.checkout.create({
    data: {
      email: data?.email,
      adress: data?.city,
      payment: false,
      name: data.name,
      phone: data.phone,
      userId: session?.user.id,
      Item: {
        create: {
          name: products[0].title,
          price: products[0].price,
        },
      },
    },
  });
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: "Basic c2tfdGVzdF93bnBWMDNPZk94SU5RYkJNOg==",
      },
      body: JSON.stringify({
        customer: {
          address: {
            country: "BR",
            state: "RS",
            city: data.city,
            zip_code: "Seu CEP",
            line_1: "Seu Endereço",
            line_2: "casa",
          },
          phones: {
            home_phone: {
              country_code: "55",
              area_code: code,
              number: phone,
            },
            mobile_phone: {
              country_code: "55",
              area_code: code,
              number: phone,
            },
          },
          name: data.name,
          type: "individual",
          email: data.email,
          metadata:{ orderID:checkout.id}
        },
        items: items,
      
        payments: [
          {
            payment_method: "checkout",
            
            checkout: {
              expires_in: 108000,
              default_payment_method: "pix",
              accepted_payment_methods: ["pix", "credit_card"],
              success_url: "http://localhost:3000/sucess",
              skip_checkout_success_page: false,
              customer_editable: true,
              billing_address_editable: true,
              Pix: {
                expires_in: 108000,
              },
              credit_card: {
                installments: [
                  {
                    number: 1,
                    total: totalAmount,
                  },
                  {
                    number: 2,
                    total: totalAmount  ,
                  },
                  {
                    number: 3,
                    total: totalAmount  ,
                  },
                  {
                    number: 4,
                    total: totalAmount  ,
                  },
                  {
                    number: 5,
                    total: totalAmount  ,
                  },
                ],
                statement_descriptor: "GuedesBampi",
              },
            },
  
           
          },
        ],
        antifraud_enabled: false,
        closed: true,
      }),
     
    }
    const request = await fetch("https://api.pagar.me/core/v5/orders", options);
    const response = await request.json();
    if (response.checkouts[0].payment_url) {
      

      return NextResponse.json({ data: response.checkouts[0].payment_url, status:200 },{status:200});
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Erro ao criar checkout" },
      { status: 500 }
    );
  }
  
 
}
