"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const Orders = () => {
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const urlDev = `http://localhost:3000/api/orders`;
  const url = `https://adv-harmo.vercel.app/api/orders`;
  useEffect(() => {
    async function getOrders() {
      setLoading(true);
      const request = await fetch(url, {
        method: "GET",
        cache:"no-cache"
      });
      const response = await request.json();
      if (response) {
        setOrders(response.orderByUser[0].Checkout);

        setLoading(false);
      }
      return;
    }
    getOrders();
  }, []);
  
  if (loading) {
    return (
      <div className="w-full h-screen ">
        <Loading/>
      </div>
    );
  }
  return (
    <section className="w-full h-full  bg-[#e8e8e8] py-[5rem] ">
      <h1 className="text-center py-[1rem] uppercase text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Meus Pedidos
      </h1>
      <div className="md:flex">
        <div className="w-full flex items center justify-center">
          <table className="table-auto  border-gray-400 ">
            <thead>
              <tr className="bg-[#072137] text-white">
                <th className="px-4 py-2 ">Data</th>
                <th className="px-4 py-2 ">Nome</th>
                <th className="px-4 py-2 md:table-cell hidden">Items</th>
                <th className="px-4 py-2">Pagamento</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(
                (order: any, index: number) =>
                  order.payment === true && (
                    <tr key={index} className="border-b-2 border-gray-500">
                     
                      <td className="px-4 py-2 text-center ">
                        {new Date(order.creatAt).toLocaleDateString(
                          "pt-br",
                          options as any
                        )}
                      </td>
                      <td className="px-4 py-2 text-center capitalize  ">
                        {order.name}
                      </td>
                      <td className="px-4 py-2 text-center md:table-cell hidden ">
                        {order.Item.map((item: any, index: number) => (
                          <p key={index}>{item.name}</p>
                        ))}
                      </td>

                      <td className="px-4 py-2 text-center">
                        {order.payment === true && "Aprovado"}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
