import React from "react";
import TemplatesInfo from "./TemplatesInfo";

function TemplateCollection() {
  const collections = [
    {
      image: "devBg",
      title: "DevPro",
      body: "Showcase your web development expertise with DevPro, a clean and professional template.",
      linkText: "Explore DevPro",
    },
    {
      image: "devBg2",
      title: "CodeMaster",
      body: "Highlight your coding skill with CodeMaster, a modern and responsive template.",
      linkText: "Discover CodeMaster",
    },
    {
      image: "cloudBg2",
      title: "CloudBase",
      body: "Demonstrate your cloud computing expertise with CloudBase, a robust and scalable template.",
      linkText: "Learn more about CloudBase",
    },
    {
      image: "cloudBg",
      title: "TechSpace",
      body: "Highlight your cloud engineering skills with TechSpace, a modern and secure template.",
      linkText: "Discover TechSpace",
    },
    {
      image: "productBg",
      title: "Productify",
      body: "Unleash your product design skills with Productify, an intuitive and clean template.",
      linkText: "View Productify",
    },
    {
      image: "productBg2",
      title: "UXPortfolio",
      body: "Showcase your UX design expertise with UXPortfolio, a modern and responsive template.",
      linkText: "Explore UXPortfolio",
    },
    {
      image: "graphicBg2",
      title: "DesignStudio",
      body: "Unleash your creativity with DesignStudio, a visually stunning template.",
      linkText: "View DesignStudio",
    },
    {
      image: "graphicBg",
      title: "Artistic",
      body: "Showcase your artistic skills with Artistic, a modern and flexible template.",
      linkText: "Explore Artistic",
    },
  ];
  return (
    <section className="w-full lg:px-20 px-10 py-20">
      <h3 className="text-center lg:text-4xl text-3xl text-primary font-bold mb-10">
        Explore Our Template Collection
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        {collections.map((collection, index) => (
          <TemplatesInfo
            key={index}
            image={collection.image}
            title={collection.title}
            body={collection.body}
            linkText={collection.linkText}
          />
        ))}
      </div>
    </section>
  );
}

export default TemplateCollection;
