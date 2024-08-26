import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Section6 } from "@/components/Section6";

export default function Home() {
  return (
    <div className="flex bg-white dark:bg-gray-950 items-center flex-col relative overflow-hidden">
      <div className="container bg-white dark:bg-gray-950 ">
        <Header />
      </div>
      <div
        className="flex items-center text-black dark:text-white bg-white dark:bg-gray-950 flex-col md:container
       md:pl-9 md:pr-9 pl-4 pr-4"
      >
        <Section1 />
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 w-screen flex justify-center ">
        <Section2 />
      </div>
      <div className="container md:pl-9 md:pr-9 mb-24 pl-4 pr-4 ">
        <Section3 />
      </div>
      <div className="bg-gray-50  dark:bg-gray-900 w-screen md flex justify-center">
        <Section4 />
      </div>
      <div className="container gap-12  ">
        <Section5 />
      </div>
      <div className="container  ">
        <Section6 />
      </div>
      <div className="bg-gray-50  dark:bg-gray-900 w-screen md  flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
