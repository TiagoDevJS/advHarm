"use client";
import Head from "./head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "@/utils/types";
import { login } from "@/utils/validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
const Signin = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Login>({
    mode: "all",
    resolver: zodResolver(login),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    setError("");
    const { email, password } = data;

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.error) {
      setLoading(false);
      setError(login?.error);
      return;
    } else {
      setLoading(false);
      reset();

      toast.success(`Usuário logado com sucesso aguarde...`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/");
    }
  });
  if (loading) {
    return (
      <section className=" w-full h-screen flex items-center justify-center">
        <BeatLoader color="#072137" size={25} />
      </section>
    );
  }

  return (
    <>
      <Head />
      <section className="w-full h-screen bg-white">
        <div className="w-full h-full grid-cols-1  md:grid md:grid-cols-3 ">
          <div className="w-full h-full  flex flex-col justify-center px-4 gap-4 ">
            <h1 className="text-xl  text-left w-full  font-bold uppercase text-[#54595F]">
              Entrar em sua conta
            </h1>
            <form className="w-full flex flex-col " onSubmit={onSubmit}>
              <div className="w-full mb-10">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                  placeholder="name@company.com"
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                {errors.email && (
                  <p className="text-red-600 text-sm">
                    {errors?.email.message}
                  </p>
                )}
              </div>
              <div className="w-full mb-10">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    {errors?.password.message}
                  </p>
                )}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-start">
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <Link
                        href={"/authentication/signup"}
                        className="font-medium "
                      >
                        Cadastrar
                      </Link>
                    </p>
                  </div>
                  <a href="#" className="">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>

              <div className="w-full h-full flex items-center justify-center">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
            <h2 className="text-center  text-">ou</h2>
            <div className="w-full flex items-center justify-center  ">
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full flex items-center justify-center  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <span>Continue com Google</span>
              </button>
            </div>
          </div>
          <div className=" md:bg-[url('/form.jpg')] bg-cover bg-center w-full h-screen col-span-2 brightness-50 hidden md:block "></div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Signin;
