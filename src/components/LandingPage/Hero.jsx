import React from "react";

function Hero() {
  return (
    <section className="px-20 py-10 bg-secondary flex justify-between items-center">
      <div className="w-1/2 ">
        <h1 className="text-5xl font-bold text-primary leading-[50px] py-4">
          Unleash Your Creativity: Build a Portfolio That Speaks Volumes
        </h1>
        <p className="w-3/4 font-normal text-2xl text-white">
          Transform your work into a stunning digital showcase and captivate
          your audience with every click.
        </p>
      </div>
      <div>
        <img src="" alt="" width={400} height={400} />
      </div>
    </section>
  );
}

export default Hero;
