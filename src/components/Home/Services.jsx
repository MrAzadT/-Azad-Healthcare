import React from "react";
import myData from "../MyData/MyData";

const Services = () => {
  const newData = myData.slice(0, 6);
  return (
    <div className=" my-10 mt-20">
      <h1 className="text-center text-5xl ">OUR SERVICES & FACILITIES</h1>
      <hr className="p-1 max-w-2xl m-auto mt-4 h2 border-1 border-gray-700 bg-gray-700 rounded-lg  " />
      <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        {newData.map((item) => (
          <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <a href="/">
                <img className="rounded-t-lg" src={item.img} alt="" />
              </a>
              <div className="p-5">
                <a href="/">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {item.name}
                  </h5>
                </a>
                <p className="font-normal text-gray-700 mb-3">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  href="/"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
