import React from "react";
import FeaturesInfo from "./FeaturesInfo";
import lpImg from "../../assets/L-P-Img3.png";

function Features() {
  return (
    <section className="px-10">
      <h2>What to Expect</h2>
      <FeaturesInfo
        head="Effortless Creation"
        body="Craft your portfolio in minutes with our intuitive readily made templates. No design skills required!"
        image={lpImg}
      />
      <FeaturesInfo
        head="Tailored Templates"
        body="Choose from a diverse range of customizable templates designed to fit every creative style—be it minimalist, bold, or artistic."
      />
      <FeaturesInfo
        head="Multi-Media Integration"
        body="Seamlessly incorporate images, videos, and links to present your work in dynamic ways that resonate with your viewers."
      />
      <FeaturesInfo
        head="Privacy and Control"
        body="Keep your work safe with customizable privacy settings. Share with the world or keep it exclusive to select eyes."
      />
      <FeaturesInfo
        head="Mobile-Optimized Design"
        body="Your portfolio will shine on any device. Impress potential clients and employers, whether they're browsing on a phone or a desktop."
      />
    </section>
  );
}

export default Features;
