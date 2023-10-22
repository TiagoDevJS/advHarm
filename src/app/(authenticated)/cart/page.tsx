"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartContext } from "@/Context";
import { Checkout } from "@/utils/types";
import { checkout } from "@/utils/validation";
import { useSession } from "next-auth/react";
import Modal from "@/components/modal";
import Head from "./head";
import BottomNav from "@/components/BottomNav";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false); //state para abrir o modal de termos de uso
  const [cartStorage, setCartStorage] = useState<any>([]);
  const [termsAccepted, setTermsAccepted] = useState(false); //state para aceitar os termos
  const [error, setError] = useState(false); //state para setar erro
  const { removeToCart, clearCart } = useContext(CartContext); // cart , remove itens do cart via context api
  const [pageLoaded, setPageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") as any) || [];
     if(cart){
      classCart.getCart(cart)
      setCartStorage(cart)
     }
  }, []);
  //  React hook forms  para checkout
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Checkout>({
    mode: "all",
    resolver: zodResolver(checkout),
  });

  class Cart {
   
    getCart(cartItems:any) {
     
      if (cartItems.length > 0) {
        setCartStorage(cartItems);
      }
    }
    addTotal(cartItems:any) {
      const totalPrice = cartItems?.reduce((acc: any, item: any) => {
        return acc + item.oldPrice * item.qtd;
      }, 0) as any;
      return totalPrice;
    }
    removeItems(items: any) {
      //Remove os items do carrinho
      removeToCart(items);
      setCartStorage((prevCart:any) => prevCart.filter((item:any) => item.id !== items.id));
     
    }

    deletItems() {
      //Remove os items do carrinho
       const newCart = localStorage.setItem("cart", JSON.stringify([]))
      setCartStorage([]);
      return newCart
    }
  }

  // FUnçao para enviar os dados para o gatway
  const formData = handleSubmit(async (data) => {
    try {
      const payment = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartStorage, data }),
      });

      const response = await payment.json();
      if (response.data) {
        setLoading(true);
        setTimeout(() => {
          window.location.href = response.data;
        }, 3000);
        JSON.parse(localStorage.setItem("cart",JSON.stringify([])) as any) || [];
        setCartStorage([])
        return;
      }
    } catch (error) {
      console.log(error);
    }
  });
  //Funçao para abrir e fechar o modal
  const handleShowModal = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(!isOpen);
  };
  // Envia os termos aceito para o usuario logado
  const classCart = new Cart();

  if (cartStorage.length <= 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h3 className="text-lg font-semibold text-[#072137]">
          Seu carrinho está vazio no momento
        </h3>
      </div>
    );
  }
  return (
    <>
      <Head />
      <section className="w-full h-full relative">
        {loading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="text-checkout">
              Por favor, aguarde. Em breve, você será direcionado para um
              ambiente seguro.
            </p>
          </div>
        ) : (
          <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Lista de Produtos</p>
              {cartStorage?.map((items: any, index: any) => (
                <div
                  className=" relative mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
                  key={index}
                >
                  <p
                    className=" absolute top-2 right-2 text-red-500 cursor-pointer"
                    onClick={() => classCart.removeItems(items)}
                  >
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </p>
                  <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={items.img}
                      alt=""
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">{items.title}</span>
                      <span className="float-right text-gray-400">Plano:</span>
                      <p className="text-lg font-bold">
                        {items.oldPrice?.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={() => classCart.deletItems()}>Limpar</button>
            </div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Detalhes do Pagamento</p>
              <p className="text-gray-400">Complete os detalhes do pagamento</p>
              <form onSubmit={formData}>
                <div className="">
                  <label
                    htmlFor="name"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Nome
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Digite seu nome"
                      {...register("name")}
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.name && (
                    <p className="text-red-600 text-sm">
                      {errors?.name.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-4 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="seu@email.com"
                      {...register("email")}
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors?.email.message}
                    </p>
                  )}
                  <label
                    htmlFor="card-no"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Telefone
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="( xx ) 999-999-999"
                      {...register("phone")}
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-600 text-sm">
                      {errors?.phone.message}
                    </p>
                  )}
                  <label
                    htmlFor="billing-address"
                    className="mt-4 mb-2 block text-sm font-medium"
                  >
                    Cidade
                  </label>

                  <div className="relative ">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-600 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Cidade"
                      {...register("city")}
                    />
                  </div>
                  {errors.city && (
                    <p className="text-red-600 text-sm">
                      {errors?.city.message}
                    </p>
                  )}

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        {classCart.addTotal(cartStorage)?.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>

                    <p className="text-2xl font-semibold text-gray-900">
                      {classCart.addTotal(cartStorage)?.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
                <div className="py-4">
                  <button type="submit" className="btn-small">
                    Confirmar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      <BottomNav/>
    </>
  );
};

export default Cart;
