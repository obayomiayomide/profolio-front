import React from "react";
import FeaturesInfo from "./FeaturesInfo";
import effortless from "../../assets/effortlessCreation.svg";
import template from "../../assets/template.svg";
import multimedia from "../../assets/multimediaIntegration.svg";
import privacy from "../../assets/privacy.svg";
import mobile from "../../assets/mobileOptimized.svg";

function Features() {
  return (
    <section className="lg:px-40 px-10 py-20 bg-whyPro bg-cover bg-center">
      <h3 className="text-center lg:text-5xl text-3xl text-primary font-bold lg:m-10">
        Why Profolio?
      </h3>
      <FeaturesInfo
        head="Effortless Creation"
        body="Craft your portfolio in minutes with our intuitive readily made templates. No design skills required!"
        image={effortless}
      />
      <FeaturesInfo
        head="Tailored Templates"
        body="Choose from a diverse range of customizable templates designed to fit every creative style—be it minimalist, bold, or artistic."
        image={template}
      />
      <FeaturesInfo
        head="Multi-Media Integration"
        body="Seamlessly incorporate images, videos, and links to present your work in dynamic ways that resonate with your viewers."
        image={multimedia}
      />
      <FeaturesInfo
        head="Privacy and Control"
        body="Keep your work safe with customizable privacy settings. Share with the world or keep it exclusive to select eyes."
        image={privacy}
      />
      <FeaturesInfo
        head="Mobile-Optimized Design"
        body="Your portfolio will shine on any device. Impress potential clients and employers, whether they're browsing on a phone or a desktop."
        image={mobile}
      />
    </section>
  );
}

export default Features;
