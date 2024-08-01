"use client";
import AppTable from "@/components/app.table";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(data);

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

      <AppTable />
    </>
  );
}
