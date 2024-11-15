import React from "react";

function TestimonialInfo({ testimony, image, name, stack }) {
  return (
    <div className="lg:w-[500px] lg:h-[300px] md:h-[300px] w-full lg:p-10 md:p-10 p-5 bg-primary rounded-2xl flex flex-col justify-between lg:gap-0 md:gap-0 gap-5">
      <div className="lg:text-lg md:text-lg text-sm lg:text-left md:text-left text-center font-medium">
        <p>{testimony}</p>
      </div>
      <div className="flex lg:gap-10 md:gap-10 gap-5 items-center">
        <div className="rounded-full">
          <img
            className="rounded-full"
            src={image}
            alt=""
            width={80}
            height={80}
          />
        </div>

        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="font-medium">{stack}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialInfo;
