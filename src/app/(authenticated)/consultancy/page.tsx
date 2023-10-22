import Link from "next/link";
import Head from "./head";
import BottomNav from "@/components/BottomNav";

const Consultancy = () => {
  return (
    <>
    <Head/>
    <section className="w-full h-full py-[5rem]">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="flex items-center justify-center ">
          <img src="/at.png" alt="Central" />
        </div>
        <div className=" pt-[2rem] flex flex-col items-center justify-center">
          <h1 className="w-full  text-center text-3xl  text-[#072137] font-bold uppercase">
            Agende Sua consulta
          </h1>
          <div className="flex flex-col gap-3 mt-5 ">
            <div className=" flex items-center justify-center flex-col">
            <h2 className=" text-center text-xl  text-[#072137] font-bold uppercase">Horario de atendimento</h2>
            <p className="text-base text-[#072137]">Seg á Sexta </p>
            <p className="text-base text-[#072137]">8:00 ás 12:00 / 13:30 ás 18:30</p>
         
            </div>
            <div className="flex mt-6 gap-5 items-center justify-center  ">
              <button
                className="bg-[#e8e8e8] border-2 border-[#072137] text-[#072137] rounded-full flex items-center justify-center font-normal h-10 w-10   mr-2"
                type="button"
              >
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100086693444267"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
              </button>

              <button className="bg-[#e8e8e8] border-2 border-[#072137] text-[#072137] rounded-full flex items-center justify-center font-normal h-10 w-10   mr-2">
                <Link
                  href={
                    "https://wa.me/5551980519018?text=Olá!+Gostaria+de+adquirir+um+contrato+manualmente.+Como+devo+proceder?"
                  }
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </Link>
              </button>
              <button className="bg-[#e8e8e8] border-2 border-[#072137] text-[#072137] rounded-full flex items-center justify-center font-normal h-10 w-10   mr-2">
                <Link href="mailto:suporteharmonizacao@xn--advogadosdaharmonizao-21b5g.com.br">
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
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BottomNav/>
    </>
  );
};

export default Consultancy;
