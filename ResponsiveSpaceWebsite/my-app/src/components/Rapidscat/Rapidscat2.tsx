import React from "react";

const Rapidscat2 = () => {
  return (
    <div className="bg-black text-white pb-1 relative z-50 pt-5">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-sky-800 border-b-sky-800 border-l-2 border-b-2">
            <p className="uppercase text-cyan-900">our mission</p>
            <h1 className="uppercase py-2 text-5xl">Rapidscat</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <button className="primary-button mt-5">View All</button>
          </div>
          <div>
            <img
              src="/assets/satelite2.jpg"
              alt="satellite1"
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rapidscat2;
