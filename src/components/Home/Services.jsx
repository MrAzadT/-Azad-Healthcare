import React from "react";
import myData from "../MyData/MyData";
import { Link } from "react-router-dom";

const Services = () => {
  const newData = myData.slice(0, 6);
  return (
    <div className=" my-10 mt-20">
      <h1 className="text-center text-5xl ">OUR SERVICES & FACILITIES</h1>
      <hr className="p-1 max-w-2xl m-auto mt-4 h2 border-1 border-gray-700 bg-gray-700 rounded-lg  " />
      <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl">
        {newData.map((item) => (
          <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <img className="rounded-t-lg w-96 h-80" src={item.img} alt="" />

              <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {item.name}
                </h5>

                <p className="font-normal text-gray-700 mb-3">1. {item.p1}</p>
                <p className="font-normal text-gray-700 mb-3">2. {item.p2}</p>
                <p className="font-normal text-gray-700 mb-3">3. {item.p3}</p>
                <p className="font-normal text-gray-700 mb-3">4. {item.p4}</p>

                <Link to={`/service/${item.id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
