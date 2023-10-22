"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Banner = () => {
  return (
    <section className="w-full h-full  flex items-center justify-center  ">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=U24A-Vo5xBI"
        width="98%"
        height="100%"
        controls={true}
       
      />
    </section>
  );
};

export default Banner;
