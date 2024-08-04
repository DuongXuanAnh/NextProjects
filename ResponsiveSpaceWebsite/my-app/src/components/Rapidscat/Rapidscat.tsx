import React from "react";

const Rapidscat = () => {
  return (
    <div className="bg-black text-white pb-1 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              data-aos="zoom-in"
              src="/assets/satelite1.jpg"
              alt="satellite1"
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-sky-800 border-b-sky-800 border-r-2 border-b-2">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-cyan-900"
            >
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase py-2 text-5xl"
            >
              Rapidscat
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button mt-5"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rapidscat;
