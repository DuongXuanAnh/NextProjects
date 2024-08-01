import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
};

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
      </ul>
    </>
  );
}
