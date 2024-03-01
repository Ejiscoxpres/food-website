import Image from "next/image";

import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <Menu />
    </main>
  )
};
