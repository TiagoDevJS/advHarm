import Link from "next/link";
 const getData = async ()=>{
   const data = await  fetch(process.env.URL_DEV + "/api/contracts",{
    cache:"no-cache"
   })
    const res = data.json()
   return res
 } 
 
const BestSellers = async ()=> {
 const products  = await getData()
 
  return (
    <section className="w-full h-full bg-[#d9d9d9] flex items-center justify-center py-[5rem] flex-col ">
      <h1 className="text-center text-3xl py-[5rem] text-[#072137] font-bold uppercase">
        Populares
      </h1>
      <div className="w-full h-full grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 ">
      {products.products?.map((product: any, index: number) => (
          
          <div key={index} data-aos="zoom-out-up">
           
            <div className="w-full max-w-sm bg-white border border-[#072137] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img
                className="p-8 rounded-t-lg w-full min-h-[300px] object-cover"
                src={product.img}
                alt={product.title}
              />
              <div className="px-5 pb-5">
                <h5 className="text-base font-semibold tracking-tight text-gray-900 ">
                  <span className="text-[#072137] text-sm">{product.title}</span>
                  <p>Categoria: {product.Categories.name}</p>
                </h5>
              </div>
              <div className="px-5 pb-5">
                <h5 className="text-base  tracking-tight text-[#072137] ">
                  {product.slug}...
                </h5>

               
                  <>
                    <div className="flex flex-col gap-3  py-2">
                      <span className="text-xl font-bold text-[#072137] ">
                        {product.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                        }
                      </span>
                      
                    </div>

                    <div className="flex items-center justify-between pt-5 ">
                      <button className=" px-5 py-1 bg-[#83adc6] text-[#fff] border-2 border-[#072137] rounded-md  hover:text-white hover:bg-[#072137] hover:border-[#83adc6] ">
                        <Link
                          href={`/categories/${product.Categories.slug}/${product.id}`}
                        >
                          Ler mais
                        </Link>
                      </button>
                      
                    </div>
                  </>
               
              </div>
            </div>
          </div>
        ))}
                      
      </div>
    </section>
  );
};

export default BestSellers;
