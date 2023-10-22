import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import nodemailer from "nodemailer";
import {  maskEmail } from 'react-email-mask'
import 'react-email-mask/dist/index.css'
export async function POST(req: any) {
  const { id } = await req.json();

  const session = await getServerSession(authOptions);
  const maskEmailInput = maskEmail(session?.user.email as string)
  try {
    if (id) {
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
      if (response.status === "paid") {
        const dynamicLink = `http://localhost:3000/api/download?id=${id}`;
        const transporter = await nodemailer.createTransport({
          service: "SMTP",
          host: "mail.xn--advogadosdaharmonizao-21b5g.com.br",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
          },
        });
        const info = await transporter.sendMail({
          from: "teste@xn--advogadosdaharmonizao-21b5g.com.br",
          to:session?.user.email,
          subject: "Advogados da Harmonização ",
         

          html: `
      <html>
        <head>
          <style>
            /* Adicione seus estilos CSS aqui */
            body{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 10;
            }
            p {
              font-size: 19px;
              color: #333;
              margin-bottom: 20px;
            }
            a {
              
              color: black;
             
              text-transform: uppercase!important;
              font-size: 88% !important;
              font-weight: bold;
             
             
            }
            span {
              font-size: 19px;
              color:red;
            }
            img{
              width: 250px;
              height: 250px;
              object-fit: cover;
            }

          </style>
        </head>
        <body>
        <img src="https://res.cloudinary.com/tiagobecker/image/upload/v1697656192/logo_optpg4.png" alt="Logo"/>
          <p>Obrigado por escolher a nossa empresa.</p
          <p>Clique no link abaixo para fazer o download</p>
          <a href="${dynamicLink}">Baixar Arquivo</a> 
          <span>Este link será expirado em 3 horas</span>   
        </body>
      </html>
      `,
        });

        return NextResponse.json({ message: `Enviado com sucesso! Verifique seu email e caixa de spam , email enviado para ${maskEmailInput}` });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Tente novamente mais tarde!" },
      { status: 500 }
    );
  }
 finally{
   await prisma.$disconnect()

 }
  
}
