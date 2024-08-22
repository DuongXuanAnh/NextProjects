import React from "react";
import Card from "./Card";
import Image from "next/image";
import Card1 from "@/assets/img/card-1.png";
import Card2 from "@/assets/img/card-2.png";
import Card3 from "@/assets/img/card-3.png";

const Bottom = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-16">
      <Card
        image={Card1}
        title="yellow"
        description="585 standard gold"
        backgroundColor="bg-gradient-to-r from-gray-400 to-gray-900"
      />
      <Card
        image={Card2}
        title="white"
        description="585 standard gold"
        backgroundColor="bg-gradient-to-r from-gray-400 to-gray-900 "
      />
      <Card
        image={Card3}
        title="pink"
        description="750 standard gold"
        backgroundColor="bg-gradient-to-r from-gray-400 to-gray-900"
      />
    </div>
  );
};

export default Bottom;
