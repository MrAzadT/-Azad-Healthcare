import React from "react";
import { useParams } from "react-router";
import myData from "../MyData/MyData";

const Service = () => {
  const { serviceDetails } = useParams();
  console.log(serviceDetails);

  const item = myData.find((item) => item.id === Number(serviceDetails));

  return (
    <div className="mt-8 border-1 border-gray-300 bg-gray-200 shadow-lg  h-3/5 m-auto rounded-lg mb-10 w-3/5 p-10 ">
      <h1 className=" my-10 text-4xl">Service Details :</h1>
      <img className="rounded-t-lg w-96 h-80" src={item.img} alt="" />

      <div className="p-5 ">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {item.name}
        </h5>

        <p className="font-normal text-gray-700 mb-3">1. {item.h1}</p>
        <p className="font-normal text-gray-700 mb-3">2. {item.h2}</p>
        <p className="font-normal text-gray-700 mb-3">3. {item.p1}</p>
        <p className="font-normal text-gray-700 mb-3">4. {item.p2}</p>
        <p className="font-normal text-gray-700 mb-3">5. {item.p3}</p>
        <p className="font-normal text-gray-700 mb-3">6. {item.p4}</p>
      </div>
    </div>
  );
};

export default Service;
