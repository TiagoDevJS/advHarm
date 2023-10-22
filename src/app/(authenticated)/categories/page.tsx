"use client";
import Link from "next/link";
import Head from "./head";
import { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";

const Contract = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async () => {
    if (searchInput) {
      await search(searchInput);
    } else {
      const request = await fetch(`http://localhost:3000/api/search`, {
        method: "GET",
      });
      const res = await request.json();
      setProducts(res.searchProducts);
      return;
    }
  };

  const search = async (searchInput: string) => {
    const request = await fetch(
      `http://localhost:3000/api/search?search=${searchInput}`,
      {
        method: "GET",
      }
    );
    const res = await request.json();
    setProducts(res.searchProducts);
    return;
  };

  return (
    <>
      <Head />
      <section className="w-full h-full bg-white py-[1.5rem] ">
        <div className="w-[70%] mx-auto flex pt-4 gap-2 items-center justify-between">
          <div className="w-[80%]">
            <input
              type="text"
              className="w-full h-9 outline-none border-[1px] border-gray-300 pl-3"
              placeholder="Exemplo: Dentista, Biomedico"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </div>
          <div className="w-[20%]">
            <button className="btn-small" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
        {products.map((items: any, index: number) => (
          <div className="w-[80%] h-full flex justify-center mx-auto mt-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4">
            <div className="w-[50%] h-full px-4 py-4">
              <img
                src={items.img}
                alt="Items"
                className="w-[400px] h-full object-cover"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="text-color font-bold text-2xl">{items.title}</h1>
              <p className="text-bse text-[#ccc]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                voluptate sit doloremque at velit, officiis dolorum vel
                laudantium facilis nihil quae nesciunt dolore perspiciatis optio
                praesentium maiores illum et animi
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                voluptate sit doloremque at velit, officiis dolorum vel
                laudantium facilis nihil quae nesciunt dolore perspiciatis optio
                praesentium maiores illum et animi.
              </p>
              <p className="py-4 ">Valor <span>R$ 2598</span></p>
              <Link href={`/categories/${items.id}`}>
              <button className="btn">
                Explorar
                </button>
                </Link>
            </div>
          </div>
        ))}
       
      </section>
     
       <BottomNav/>
     
    </>
  );
};

export default Contract;
