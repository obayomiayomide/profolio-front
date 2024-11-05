import React from "react";

function FeaturesInfo({ head, body, image }) {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="w-1/4">
        <h3 className="font-bold text-5xl">{head}</h3>
        <p className="font-medium text-secondary">{body}</p>
      </div>
      <div>
        <img src={image} alt="" width={200} height={200} />
      </div>
    </div>
  );
}

export default FeaturesInfo;
