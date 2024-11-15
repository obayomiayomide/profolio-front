import React from "react";
import ActionBtn from "./ActionBtn";

function Hero() {
  return (
    <section className="w-full lg:min-h-[700px] min-h-[400px] lg:px-40 px-[5%] lg:py-40 py-20 bg-proHero bg-cover flex lg:justify-start justify-center items-center">
      <div className="lg:w-[775px] w-[90%] lg:block flex flex-col items-center">
        <div>
          <h1 className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-primary leading-20 pb-4">
            Unleash Your Creativity: Build a Portfolio That Speaks Volumes
          </h1>
          <p className="lg:font-normal lg:text-xl text-sm lg:text-left text-center text-white mb-4">
            Create an exceptional portfolio that showcases your skills and
            experience.{" "}
            <span>
              <strong>Profolio</strong>
            </span>{" "}
            helps you build a professional profile,
            <span>
              <strong> effortlessly</strong>
            </span>
          </p>
        </div>
        <div className="w-full">
          <ActionBtn btnText="Get Started" bg="#1aa5ff" color="white" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
