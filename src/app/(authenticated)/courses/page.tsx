import { courses } from "@/components/Mocks";
import Link from "next/link";
import Head from "./head";
import Hotmart from "@/components/Hotmart";
import BottomNav from "@/components/BottomNav";

const Courses = () => {
    return ( 
      <>
      <Head/>
      
        <Hotmart/>
      <BottomNav/>
      </>
     );
}
 
export default Courses;