import Link from "next/link";
import { Links, links } from "../Mocks";
const Footer = () => {
  return (
    <footer className="relative bg-white pt-8 pb-6 shadow-[0px_-4px_5px_0px_#00000024]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="fonat-semibold uppercase text-[#54595F]  text-sm font-bold mb-2">
              Siga Nos!
            </h4>
            <h5 className="text-base mt-0 mb-2 text-[#54595F] ">
              Para obter insights legais, atualizações jurídicas e conselhos
              especializados. Mantenha-se informado e protegido!
            </h5>
            <div className="flex mt-6 lg:mb-0 mb-6">
              <button
                className="bg-[#e8e8e8] border-2 border-[#072137] text-[#3b5998] rounded-full flex items-center justify-center font-normal h-10 w-10   mr-2"
                type="button"
              >
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100086693444267"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </button>

              <button className="bg-[#e8e8e8] border-2 border-[#072137] text-[#3f729b ] rounded-full flex items-center justify-center font-normal h-10 w-10   mr-2">
                <Link href={"https://www.instagram.com/guedesbampi.med/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </button>
              <button className="bg-[#e8e8e8] border-2 border-[#072137] text-[#c4302b] rounded-full flex items-center justify-center font-normal h-10 w-10   mr-2">
                <Link
                  href={
                    "https://www.youtube.com/channel/UCzSf0QeSUTbE-jfcgEFGJag"
                  }
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-[#54595F]  text-sm font-bold mb-2">
                  Menu Rápido
                </span>
                <ul className="list-unstyled text-[#54595F] ">
                  {
                    links.map((link:Links,index:number)=>(
                      <li key={index}>
                      <Link
                        className="text-[#54595F]  hover:text-[#416a82] font-semibold block pb-2 text-sm"
                        href={link.path}
                      >
                        {link.name}
                      </Link>
                    </li>
                    ))
                  }
                 
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-[#54595F]  text-sm font-bold mb-2">
                  Insitucional
                </span>
                <ul className="list-unstyled text-[#54595F] ">
                  <li>
                    <Link
                      className=" flex items-center  gap-1 font-semibold  pb-2 text-sm  "
                      href="https://guedesbampi.com.br/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      guedesbampi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-1 font-semibold  pb-2 text-sm "
                      href="mailto:suporteharmonizacao@xn--advogadosdaharmonizao-21b5g.com.br"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      contato@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-1 font-semibold  pb-2 text-sm"
                      href={
                        "https://wa.me/5551980519018?text=Olá!+Gostaria+de+adquirir+um+contrato+manualmente.+Como+devo+proceder?"
                      }
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      51 980-519-018
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full h-full">
          <h1 className="text-center text-xl  font-bold text-[#54595F] ">
            Formas de Pagamentos
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img src="/pix.png" alt="pix" className="w-[51px] h-[32px]" />
            </div>
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img src="/visa.png" alt="visa" className="w-[51px] h-[32px]" />
            </div>
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img
                src="/mastercard.png"
                alt="master"
                className="w-[51px] h-[32px]"
              />
            </div>
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img
                src="/american.png"
                alt="american"
                className="w-[51px] h-[32px]"
              />
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#072137]" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-[#54595F]  font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <Link href="https://guedesbampi.com.br/" target="_blank">
                GuedesBampi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
