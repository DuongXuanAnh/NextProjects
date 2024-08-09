import React from "react";
import Image from "next/image";
import peopleWebp from "../../../assets/people.webp";

const Title = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-12">
        <div>
          <Image
            src={peopleWebp}
            alt="people"
            className="h-[100px] w-[300px] rounded-[50px] object-cover"
          />
        </div>
        <h1 className="text-[80px]">
          <b>Unique</b> Ideas
        </h1>
      </div>

      <div className="flex items-center gap-10">
        <h1 className="text-[80px]">
          <b>For Your</b> Business.
        </h1>
        <button className="h-[80px] w-[250px] cursor-pointer rounded-[50px] bg-orange-500 text-xl">
          WHAT WE DO?
        </button>
      </div>
    </div>
  );
};

export default Title;
