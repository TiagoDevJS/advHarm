"use client";
import Link from "next/link";
import Hotmart from "@/components/Hotmart";
import Head from "./head";
import Banner from "@/components/Banner";


import BottomNav from "@/components/BottomNav";

const Home = () => {
  
  
   
  return (
    <>
      <Head />
      <section className="w-full -full">
        {/*Banner*/}
        <section className="w-ful h-full bg-white  items-center flex  flex-col gap-10 py-[1.5rem]">
          <h1 className="text-2xl w-full md:text-4xl font-bold md:w-[80%]  text-center  py-[3rem] ">
            A Primeira Plataforma jurídica com foco na responsabilidade civil
            dos <span className="text-color"> profissionais da saúde</span>
          </h1>
          <div className="">
            <Link
              href={"https://www.youtube.com/watch?v=U24A-Vo5xBI&t=1s"}
              target="_blank"
            >
              <button className="btn">Proteja-se</button>
            </Link>
          </div>

          <div className="w-full md:w-[50%] h-full flex items-center justify-center my-10">
            <video muted autoPlay loop className="movie ">
              <source src="/docs.mp4" type="video/mp4" className="rounded-md" />
            </video>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full px-2 ">
            <h1 className="text-2xl w-full md:text-4xl font-bold md:w-[80%]  text-center  py-[3rem]">
              Prontuários Planejados e
              <span className="text-color"> Segurança Profissional</span>
            </h1>
            <p className="text-left w-[90%] md:text-[#54595F] md:w-[60%] md:text-center">
              Nesta plataforma você terá acesso a documentos, cursos e
              informações fundamentais para atuar com mais segurança jurídica na
              sua profissão. Aproveite a experiência dos nossos Advogados e
              profissionais de saúde na elaboração de documentos de modo
              detalhados, protetivos e pautados nos princípios da bioética
            </p>
          </div>
        </section>
        {/*Grid Documentos*/}
        <section className="w-full h-full  bg-white flex items-center flex-col justify-center py-[1.5rem]">
          <h1 className="text-2xl w-full md:text-4xl font-bold md:w-[80%]  text-center  py-[3rem]">
            Entenda como usar o seu prontuário como principal meio de defesa
            <span className="text-color"> da sua atividade profissional</span>
          </h1>
          <div className="px-2 grid-cols-1 w-full md:w-[96%] h-full grid md:grid-cols-3 gap-4 mt-20">
            <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md border-2 border-[#ccc]">
              <div className="">
                <img src="/1.svg" alt="Icon" className=" h-20" />
              </div>

              <p className="text-center w-full h-28 text-[#54595F]">
                O{" "}
                <span className="text-color font-bold">
                  prontuário juridicamente adequado{" "}
                </span>{" "}
                é o principal meio de defesa da sua atividade profissional.
              </p>
            </div>
            <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md border-2 border-[#ccc]">
              <div className="">
                <img src="/2.svg" alt="Icon" className=" h-20" />
              </div>

              <p className="text-center w-full h-28 text-[#54595F] ">
                Termos de consentimento (TCLE’s) projetados para harmonização,
                focado na{" "}
                <span className="text-color font-bold">prevenção</span> das
                principais causas de{" "}
                <span className="text-color font-bold">
                  demandas judiciais.
                </span>
              </p>
            </div>
            <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md border-2 border-[#ccc]">
              <div className="">
                <img src="/3.svg" alt="Icon" className=" h-20" />
              </div>

              <p className="text-center w-full h-28 text-[#54595F]">
                Use documentos baseados em
                <span className="text-color font-bold">
                  {" "}
                  princípios Bioéticos, aspectos clínicos e dermatológicos{" "}
                </span>
                dos pacientes
              </p>
            </div>
          </div>
          <div className="px-2 grid-cols-1 w-full md:w-[96%] h-full grid md:grid-cols-3 gap-4 mt-20">
            <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md border-2 border-[#ccc]">
              <div className="">
                <img src="/4.svg" alt="Icon" className=" h-20" />
              </div>

              <p className="text-center w-full h-28 text-[#54595F]">
                Contratos e termos{" "}
                <span className="text-color font-bold">
                  editáveis e personalizáveis
                </span>{" "}
                Específicos para cada procedimento e{" "}
                <span className="text-color font-bold">
                  projetados para descrever todo o plano de tratamento indicado.
                </span>
              </p>
            </div>
            <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md border-2 border-[#ccc]">
              <div className="">
                <img src="/5.svg" alt="Icon" className=" h-20" />
              </div>
              <div className="w-full  ">
                <p className="text-center w-full h-28 text-[#54595F]">
                  Evite problemas com a subjetividade da
                  <span className="text-color font-bold">
                    {" "}
                    percepção de resultados por parte do paciente
                  </span>{" "}
                  através de documentos compreensíveis e detalhados.
                </p>
              </div>
            </div>
            <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center gap-4 rounded-md border-2 border-[#ccc]">
              <div className="">
                <img src="/6.svg" alt="Icon" className=" h-20" />
              </div>

              <div className="w-full  ">
                <p className="text-center w-full h-28 text-[#54595F]">
                  Documentos protetivos com ênfase em aspectos psicossociais,
                  intercorrências e{" "}
                  <span className="text-color font-bold">
                    prontuários focado em atividades de resultado.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*Banner Video*/}
        <section className="flex-col md:w-full h-screen flex  items-center justify-center bg-white py-[1.5rem]">
          <h1 className="w-full text-2xl md:text-4xl font-bold  text-center  py-[3rem] ">
            Apresentação da
            <span className="text-color"> Plataforma</span>
          </h1>
          <div className="w-full px-4 md:w-[70%] h-full flex items-center justify-center my-10">
            <Banner />
          </div>
        </section>
        {/*Banner Categorias*/}
        <section className="w-full h-full bg-white py-[1.5rem]">
          <h1 className="w-full text-2xl md:text-4xl font-bold  text-center  py-[3rem]">
            Explore por
            <span className="text-color"> Categorias</span>
          </h1>
          <div>
            <div className="px-4 w-full grid-cols-1 md:grid md:grid-cols-3 md:w-[80%] h-full gap-2 mx-auto">
              <div className="w-full h-full py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md">
                <div className="w-full h-[350px] px-2 py-2">
                  <img
                    src="/33.svg"
                    alt="Dent"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h1 className="w-full text-base h-10 font-bold  text-left px-2">
                  Documentos para dos{" "}
                  <span className="text-color"> Dentistas</span>
                </h1>
                <div className="gap-2 w-full flex flex-col sm:flex-row px-2  pt-4 items-center justify-between ">
                  <button className="btn-small ">Basico</button>
                  <button className="btn-small">Avançado</button>
                </div>
              </div>
              <div className="w-full h-full py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md">
                <div className="w-full h-[350px] px-2 py-2">
                  <img
                    src="/biomedico.svg"
                    alt="Dent"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h1 className="w-full text-base h-10  font-bold  text-left px-2">
                  Documentos para dos{" "}
                  <span className="text-color"> Biomedicos</span>
                </h1>
                <div className="gap-2 w-full flex flex-col sm:flex-row px-2  pt-4 items-center justify-between ">
                  <button className="btn-small">Basico</button>
                  <button className="btn-small">Avançado</button>
                </div>
              </div>
              <div className="w-full h-full py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md">
                <div className="w-full h-[350px] px-2 py-2 flex items-center justify-center">
                  <img
                    src="/dentista.svg"
                    alt="Dent"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h1 className="w-full text-base h-10 font-bold  text-left px-2">
                  Documentos para dos{" "}
                  <span className="text-color"> harmonizaçao</span>
                </h1>
                <div className="gap-2 w-full flex flex-col sm:flex-row px-2  pt-4 items-center justify-between ">
                  <button className="btn-small">Basico</button>
                  <button className="btn-small">Avançado</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Hotmart />
        {/* Banner Chamada CLiente*/}
        <section className="parallax">
          <h1 className="text-white text-2xl w-full md:text-4xl font-bold md:w-[80%]  text-center  py-[3rem] ">
            A Primeira Plataforma jurídica com foco na responsabilidade civil
            dos <span className="text-color"> profissionais da saúde</span>
          </h1>
        </section>
        {/*Banner Serviços*/}
        <section className="bg-color">
          <div className="w-[98%] h-full flex  ">
            <div className="w-[40%] h-[450px] ">
              <img
                src="/m1.jpeg"
                alt=""
                className="w-full h-full object-cover  border-[2px] border-white  "
              />
            </div>
            <div className="w-[30%] h-[450px]  flex flex-col border-[1px] ">
              <div className="w-full h-[50%] bg-black">
                <img
                  src="/cs.svg"
                  alt=""
                  className="w-full h-full object-cover border-[1px] border-white "
                />
              </div>
              <div className="w-full h-[50%] flex  items-center justify-center  ">
                <div className="w-[50%] h-full">
                  <img
                    src="/m3.jpeg"
                    alt=""
                    className="w-full h-full  object-cover border-[1px] border-white "
                  />
                </div>
                <div className="w-[50%] h-full ">
                  <img
                    src="/m6.jpeg"
                    alt=""
                    className="w-full h-full object-cover border-[1px] border-white "
                  />
                </div>
              </div>
            </div>
            <div className="w-[30%] h-[450px] bg-blue-800">
              <img
                src="/m4.jpeg"
                alt=""
                className="w-full h-full object-cover bg-left border-[2px] border-white "
              />
            </div>
          </div>
          <div className="flex flex-col py-10 items-center justify-center w-full">
            <p className="text-left w-full md:w-[60%] text-white font-bold md:text-center pb-6 px-4">
              Somos Advogados e professores na área médica, da saúde e do
              direito Empresarial. Atuamos de modo multidisciplinar no estudo
              das principais demandas jurídicas da área de Harmonização e das
              demais atividades de resultado, buscando difundir conhecimentos e
              publicar documentos fundamentais para segurança jurídica das
              atividades de nossos alunos, institutos e clinicas.
            </p>

          </div>
          <div className="w-full flex items-center justify-center">
            <button className="btn ">Saiba Mais</button>
          </div>
        </section>

        {/* sessao depoimentos */}
      </section>
     
       
     
      <BottomNav/>
    
    </>
  );
};

export default Home;
