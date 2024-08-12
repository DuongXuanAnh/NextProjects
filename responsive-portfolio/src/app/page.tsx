import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="bg-img fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center space-y-8 p-4">
        <Hero />
      </div>
    </div>
  );
}
