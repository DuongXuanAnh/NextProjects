import React from "react";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              perspiciatis placeat, quo nisi officiis amet! Beatae dicta
              distinctio sed sit earum? Dignissimos commodi ducimus eaque
              quibusdam iusto, exercitationem labore nisi?
            </p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
      {/* Surface section */}
      <img
        src="/assets/moon-surface-hd.png"
        alt="moon-surface"
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      {/* Bottom gradient section */}
      <div
        className="absolute bottom-0 z-30 
                w-full bg-gradient-to-b 
                from-transparent from-10% 
                to-black to-90% h-[20px] 
                sm:h-[50px] md:[60px]"
      ></div>
    </div>
  );
};

export default Hero;
