import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col   ">
    <input
      type="text"
      className="border-2 border-#ccc rounded-[5px]  border-red text-2xl  p-4 outline-none mb-5"
      placeholder="Name "
    />

    <input
      type="text"
      className="border-2 border-#ccc rounded-[5px]  border-red text-2xl  p-4 outline-none"
      placeholder="Password "
    />
    </div>
  );
};

export default Input;
