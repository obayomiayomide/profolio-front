import React from "react";

function InfoContent({ image, subImage, infoTitle, infoBody }) {
  return (
    <div className="lg:max-w-[500px] max-w-[100%] flex flex-col justify-between items-center shrink">
      <div className="w-[170px] h-[170px] bg-secondary rounded-full mb-5 flex justify-center items-center">
        <img src={image} alt="" width={80} />
      </div>
      <div className="text-center ">
        <h3 className="lg:text-3xl text-2xl text-primary font-semibold mb-3">
          {infoTitle}
        </h3>
        <p className="lg:text-xl text-base font-medium lg:leading-10 leading-6">
          {infoBody}
        </p>
      </div>
    </div>
  );
}

export default InfoContent;
