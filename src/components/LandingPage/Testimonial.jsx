import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import TestimonialInfo from "./TestimonialInfo";
import profileImage1 from "../../assets/about.jpg";
import profileImage2 from "../../assets/about.jpg";
import profileImage3 from "../../assets/about.jpg";
import profileImage4 from "../../assets/about.jpg";

function Testimonial() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1024, itemsToShow: 2 },
  ];

  const testimonials = [
    {
      image: profileImage1,
      name: "Aderolu Latifat",
      stack: "Web Developer",
      testimony:
        "Profolio helped me showcase my projects in a sleek and modern way, landing me my dream job!",
    },
    {
      image: profileImage2,
      name: "Adepoju A.",
      stack: "Cloud Engineer",
      testimony:
        "I was impressed by profolio Scalability and flexibility. It helped me demonstrate my cloud architecture skills and attract top-tier clients.",
    },
    {
      image: profileImage3,
      name: "name",
      stack: "Product designer",
      testimony:
        "Profolio beautiful templates and it's remarkable functionality helped me create a stunning portfolio that showcases my design skills.",
    },
    {
      image: profileImage4,
      name: "Zainab A. O.",
      stack: "Graphic Designer",
      testimony:
        "Profolio beautiful templates and it's remarkable functionality helped me create a stunning portfolio that showcases my design skills.",
    },
  ];
  return (
    <section>
      <div className="lg:w-full w lg:p-20 md:p-10 md:py-20 p-0 py-20">
        <h3 className="text-center lg:text-5xl text-3xl text-primary font-bold lg:m-10 mb-10">
          Testimonials
        </h3>
        <ReactElasticCarousel breakPoints={breakPoints}>
          {testimonials.map((testimonial) => (
            <TestimonialInfo
              testimony={testimonial.testimony}
              image={testimonial.image}
              stack={testimonial.stack}
              name={testimonial.name}
            />
          ))}
        </ReactElasticCarousel>
      </div>
    </section>
  );
}

export default Testimonial;
