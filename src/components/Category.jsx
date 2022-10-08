import React from "react";
import data from "../data";

const Category = () => {
  console.log(data);
  return (
    <div className="px-[5rem] my-[4rem] category">
      <h3 className="text-xl text-gray-400 mb-2">
        {/* Categories */}
        श्रेणियाँ
      </h3>
      <h2 className="text-3xl font-bold">
        {/* Find schemes based on categories */}
        श्रेणियों के आधार पर योजनाएं खोजें
      </h2>
      <div className="grid gap-7 grid-cols-5 grid-rows-3 mt-[3rem]">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=" w-full bg-white p-5 flex-col text-start items-start justify-center my-5 cursor-pointer rounded-lg  shadow-xl ... hover:shadow-2xl"
            >
              <img src={item.logo} alt="" className="w-[30%] mb-5" />
              {/* <p className="text text-[#FEB347] font-bold">
                {" "}
                {item.count} योजनाए{" "}
              </p> */}
              <div className="font-bold text-lg">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
