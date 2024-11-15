import React from "react";
import InfoContent from "./InfoContent";
import domain from "../../assets/domain.svg";
import vector from "../../assets/vector.svg";
import cloud from "../../assets/cloud-computing.svg";
import model from "../../assets/modeling.svg";

function Info() {
  const contents = [
    {
      image: domain,
      infoTitle: "Web Development",
      infoBody:
        "Build a stunning portfolio that showcases your coding skill and web development expertise. Choose from our customizable templates designed specifically for Web Developers. Hightlight your projects, technical skills, and experience to attract pontential employers and clients.",
    },
    {
      image: vector,
      infoTitle: "Graphic Design",
      infoBody:
        "Showcase your creative flair with our graphic design portfolio templates. Easily display your best works, skills, and experience in a visually stunning format. Perfect for freelancers, agencies, and in-house designers looking to stand out in the industry.",
    },
    {
      image: cloud,
      infoTitle: "Cloud Computing",
      infoBody:
        "Demonstrate your cloud computing expertise with our tailored portfolio templates. Highlight your experience in cloud architecture, migration, and management. Showcase your projects, certifications, and skills to attract top cloud computing companies and clients.",
    },
    {
      image: model,
      infoTitle: "Product Design",
      infoBody:
        "Create a captivating portfolio that showcases your product design skills and process. Our templates help you display your designs, prototypes, and user experience (UX) expertise, Perfect for product designers, UI/UX specialists, and innovators looking to impress potential employers and clients.",
    },
  ];

  return (
    <section className="w-full lg:px-20 px-[10%] py-20">
      <div className="lg:w-full flex flex-wrap justify-center items-start lg:gap-20 gap-10">
        {contents.map((content, index) => (
          <InfoContent
            key={index}
            image={content.image}
            subImage={content.subImage}
            infoTitle={content.infoTitle}
            infoBody={content.infoBody}
          />
        ))}
      </div>
    </section>
  );
}

export default Info;
