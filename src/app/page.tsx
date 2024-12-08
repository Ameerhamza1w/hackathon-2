import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero, { Hero3, Hero4, Hero5 } from "./components/hero";
import { Hero1 } from "./components/hero";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero3 />
      <Hero1 />
      <Hero4/>
      <Hero5/>
      <br />
      <Footer />
    </div>
  );
}
