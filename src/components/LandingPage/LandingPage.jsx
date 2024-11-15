import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Info from "./Info";
import About from "./About";
import TemplateCollection from "./TemplateCollection";
import Testimonial from "./Testimonial";

function LandingPage() {
  return (
    <div className="">
      <Hero />
      <Info />
      <About />
      <Features />
      <TemplateCollection />
      <Testimonial />
    </div>
  );
}

export default LandingPage;
