import React from "react";
import ActionBtn from "./ActionBtn";

function About() {
  return (
    <section className="w-full lg:text-left text-center lg:px-20 px-10 lg:py-40 py-20 bg-primary flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-10">
      <div className="lg:w-[600px] w-full lg:h-[500px] h-[300px] bg-[url('./assets/about.jpg')] bg-cover bg-center lg:rounded-[50px] rounded-3xl border-8 border-white"></div>
      <div className="lg:w-[400px] lg:block flex flex-col items-center">
        <h3 className="lg:text-4xl text-3xl font-bold mb-3">
          <span className="text-xl font-semibold uppercase">Hello there</span>
          <br /> We are Profolio
        </h3>
        <p className="lg:text-2xl text-xl mb-4 leading-[40px] text-grey">
          We empower professionals to shine. Our mission is to help build
          stunning potfolios that showcase skills and experience, making you
          stand out in the market.
        </p>
        <ActionBtn btnText="Learn more" bg="white" />
      </div>
    </section>
  );
}

export default About;
