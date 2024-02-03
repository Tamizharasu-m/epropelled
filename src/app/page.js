import Image from "next/image";
import styles from "./page.module.css";
import Section1 from "@/component/Homepage/Section1";
import Section2 from "@/component/Homepage/Section2";
import Section3 from "@/component/Homepage/Section3";
import Section4 from "@/component/Homepage/Section4";
import Section5 from "@/component/Homepage/Section5";


export default function Home() {
  return (
   <>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   </>
  );
}
