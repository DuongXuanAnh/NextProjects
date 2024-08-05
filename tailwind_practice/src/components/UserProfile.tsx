import React from "react";
import Image from "next/image";
import pic from "../assets/2.png";

const UserProfile = () => {
  return (
    <div>
      <div className="flex w-[30rem] gap-x-4 rounded-lg bg-white p-12">
        <Image
          src={pic}
          width={114}
          height={114}
          alt="Picture of the author"
          className="self-start rounded-full border-[11px] border-[#E6EFFA]"
        />
        <div className="space-y-5 font-semibold text-[#1C2B62]">
          <div>
            <h1 className="text-3xl font-bold">David Grant</h1>
            <h2 className="mt-2">3D Artist</h2>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              4.7 Rating
            </p>
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              4,447 Reviews
            </p>
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              478 Students
            </p>
          </div>
          <p className="font-semibold">
            David Grant has been making video games for a living for more than
            14 years as a Designer, Producer, Creative Director, and Executive
            Producer, creating games for console, mobile, PC and Facebook.
          </p>
          <button className="rounded-sm border-2 p-2">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
