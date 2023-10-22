"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactType } from "@/utils/types";
import { contact } from "@/utils/validation";
import Link from "next/link";
const Contact = ({color}:any) => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<contactType>({
    mode: "all",
    resolver: zodResolver(contact),
  });
  const onSubmit = handleSubmit((data) => {
    const response = fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        //SetshowMessage(true);
      });
  });
  return (
    
    <section className={`${color} w-full h-full  py-[5rem] `}>
    <div
      data-aos="zoom-out-up"
      className="w-full h-[400px] bg-[url('/form.jpg')] flex items-center justify-center grayscale-[60%]"
    >
      <h1 className="text-3xl text-white border-2 border-white py-2 px-6">
        Entre em Contato
      </h1>
    </div>

    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full h-full text-[#072137]"
    >
      <div className="grid grid-cols-1 justify-items-center w-full h-full pt-10  lg:grid-cols-3">
        <div className="w-full h-full flex flex-col items-center  py-10 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <Link
            href={
              "https://wa.me/5551980519018?text=Olá!+Gostaria+de+adquirir+um+contrato+manualmente.+Como+devo+proceder?"
            }
            target="_blank"
          >
            <p className="text-[#072137] pt-2">( 51 )98051-9018</p>
          </Link>
          <p className="text-[#072137] pt-2 flex items-center">
            ( 51 )98051-9018
          </p>
        </div>
        <div className="md:border-l-2 md:border-r-2 border-[#072137] flex flex-col items-center py-10 px-4 lg:w-full h-full @screen md:border-l-0 md:border-r-0  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-[#072137] pt-2">
            Avenida Borges de Medeiros, N°343
          </p>
          <p className="text-[#072137] pt-2">Porto Alegre,Rs / Brasil</p>
        </div>
        <div className="w-full h-full flex flex-col items-center  py-10 px-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <p className="text-[#072137] pt-2">
            <Link href={"mailto:contato@guedesbampi.com.br"}>
              contato@guedesbampi.com.br
            </Link>
          </p>
          <p className="text-[#072137] pt-2">
            <Link href={"mailto:contato@guedesbampi.com.br"}>
              contato@guedesbampi.com.br
            </Link>
          </p>
        </div>
      </div>
      <h2 className="text-center font-bold text-2xl text-[#072137] py-[2rem]">
        Envie Sua Mensagem e Faça Parte da Conversa!
      </h2>

      <div className="w-full">
       
          <form
            className="mx-auto py-5 px-5  max-w-xl bg-[#e8e8e8] rounded-md"
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Nome completo"
                    className="block w-full bg-[#d9d9d9] outline-none rounded-md border-0 px-3.5 py-2   placeholder:text-[#072137] font-bold   sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm pl-1">
                      {errors?.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="seuemail@gmail.com"
                    className="block w-full bg-[#d9d9d9] outline-none rounded-md border-0 px-3.5 py-2   placeholder:text-[#072137]  font-bold sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm pl-1">
                      {errors?.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Telefone"
                  className="block w-full bg-[#d9d9d9] outline-none rounded-md border-0 px-3.5 py-2   placeholder:text-[#072137] font-bold  sm:text-sm sm:leading-6"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm pl-1">
                    {errors?.phone.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <textarea
                    {...register("message")}
                    placeholder="Mensagem"
                    rows={8}
                    className="resize-none block w-full outline-none bg-[#d9d9d9]  rounded-md border-0 px-3.5 py-2   placeholder:text-[#072137] font-bold  sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm pl-1">
                      {errors?.message.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full px-5 py-1 bg-[#83adc6] text-[#fff] border-2 border-[#072137] rounded-md  hover:text-white hover:bg-[#072137] hover:border-[#83adc6]  uppercase"
              >
                Enviar
              </button>
            </div>
          </form>
      
      </div>
    </div>
  </section>
  );
};

export default Contact;
