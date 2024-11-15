import React from "react";

function TemplatesInfo({ image, title, body, linkText }) {
  const myStyle = {
    backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0, 0.75), rgb(0, 0, 0, 0.75)), url('../../src/assets/${image}.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="lg:w-[600px] w-full flex lg:flex-row flex-col justify-center items-center shadow-lg shadow-black">
      <div
        className="lg:max-w-[300px] w-full lg:h-[400px] h-[100px] lg:border-y-4 lg:border-x-none border-x-4 lg:border-l-4 border-t-4 border-primary lg:text-3xl text-2xl text-primary font-semibold flex justify-center items-center grow "
        style={myStyle}
      >
        {title}
      </div>
      <div className="lg:max-w-[300px] lg:h-[400px] bg-secondary lg:p-10 p-6  grow flex flex-col justify-between lg:items-start items-center lg:gap-0 gap-10 ">
        <h4 className="lg:w-[200px] lg:text-xl text-lg lg:text-left text-center text-white font-semibold lg:mb-10">
          {body}
        </h4>
        <p className="lg:w-[200px] md:w-80 w-full h-16 lg:my-5 bg-primary rounded-lg text-center font-medium flex justify-center items-center hover:cursor-pointer">
          {linkText}
        </p>
      </div>
    </div>
  );
}

export default TemplatesInfo;
