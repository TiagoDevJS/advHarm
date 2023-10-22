import { BeatLoader } from "react-spinners";

const loading = () => {
    return ( 
     <section className=" w-full h-screen flex items-center justify-center">
        <BeatLoader color="#072137" size={25}/>
     </section>

     );
}
 
export default loading;