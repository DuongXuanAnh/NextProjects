"use client";
import React from "react";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>{data?.id}</div>
      <div>{data?.title}</div>
      <div>{data?.author}</div>
      <div>{data?.content}</div>
      <div>ViewDetailBlog</div>
    </>
  );
};

export default ViewDetailBlog;
