"use client";
import Link from "next/link";

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
