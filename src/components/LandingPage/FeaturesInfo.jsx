import React from "react";

function FeaturesInfo({ head, body, image }) {
  return (
    <div className="lg:text-left text-center flex lg:flex-row flex-col justify-between items-center gap-10 lg:my-20 my-5 lg:mb-0 mb-20">
      <div className="lg:w-2/3 lg:mb-10 mb-0">
        <h3 className="font-semibold lg:text-3xl text-2xl text-primary lg:my-5 my-2">
          {head}
        </h3>
        <p className="lg:font-medium font-medium text-white lg:text-xl text-base lg:leading-8">
          {body}
        </p>
      </div>
      <div className="w-[200px] h-[200px] bg-white flex justify-center items-center rounded-full">
        <img
          className="lg:drop-shadow-2xl lg:drop-shadow-white"
          src={image}
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default FeaturesInfo;
