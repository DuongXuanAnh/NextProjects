import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <section className="h-screen snap-center">Section 1</section>
        <section className="h-screen snap-center">Section 2</section>
        <section className="h-screen snap-center">Section 3</section>
        <section className="h-screen snap-center">Section 4</section>
        <section className="h-screen snap-center">Section 5</section>
        <section className="h-screen snap-center">Section 6</section>
        <section className="h-screen snap-center">Section 7</section>
        <section className="h-screen snap-center">Section 8</section>
      </div>
    </>
  );
}
