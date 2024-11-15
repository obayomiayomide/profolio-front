import React from "react";

function ActionBtn({ btnText, icon, bg, color }) {
  const actionStyle = {
    backgroundColor: `${bg}`,
    color: `${color}`,
  };
  return (
    <div
      className="lg:w-40 md:w-80 w-full lg:h-16 h-12 text-center lg:rounded-lg rounded-full flex justify-center items-center tracking-wider hover:cursor-pointer"
      style={actionStyle}
    >
      <span className={`lg:text-lg text-sm lg:font-semibold font-medium`}>
        {btnText}
      </span>
      <span>{icon}</span>
    </div>
  );
}

export default ActionBtn;
