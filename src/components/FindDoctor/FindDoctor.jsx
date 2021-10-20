import React from "react";

const FindDoctor = () => {
  return (
    <div>
      <h1 className="mt-20 text-5xl ml-16">Find a Doctor</h1>
      <hr className=" max-w-2xl w-72 ml-16 mt-3 h-2 border-1 border-bg-primary bg-primary rounded-lg  " />
      <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl">
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634630850/1142_kknyb3.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Rana Abraham, MD
            </h2>
            <p className="mt-2 text-gray-600">
              Clinical Area: Gastroenterology Services
            </p>
            <p className="mt-2">Languages: English</p>
            <p className="mt-2">Phone: (312) 942-5861</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
        {/* ------------------2 */}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634631022/18888_ivw2tm.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Saju Abraham, MD
            </h2>
            <p className="mt-2 text-gray-600">
              Clinical Area: Neurology Services
            </p>
            <p className="mt-2">Languages: English</p>
            <p className="mt-2">Phone: (312) 563-2030</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
        {/* -------------------3 */}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634631905/1349_cgglhw.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Richard Abrams, MD
            </h2>
            <p className="mt-2 text-gray-600">
              Clinical Area: Hospital Medicine; Primary Care
            </p>
            <p className="mt-2">Languages: English</p>
            <p className="mt-2">Phone: (312) 563-2875</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
        {/* ------------------4 */}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634630247/843_uj5aee.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Kurian Abraham, MD
            </h2>
            <p className="mt-2 text-gray-600">
              Clinical Area: Pathology Services
            </p>
            <p className="mt-2">Languages: English</p>
            <p className="mt-2">Phone: (630) 692-5025</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
        {/* ----------------5 */}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634633636/17600_iuuftx.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Sol Abreu-Sosa, MD
            </h2>
            <p className="mt-2 text-gray-600">
              Clinical Area: Physical Rehabilitation Services
            </p>
            <p className="mt-2 ">Languages: English, Spanish</p>
            <p className="mt-2 ">Phone: (312) 942-8905</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
        {/* ---------------------6 */}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634633890/18606_uavqrd.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Nadia Abu-Nijmeh
            </h2>
            <p className="mt-2 text-gray-600">
              Clinical Area: Child Life Services; Primary Care, Pediatric
            </p>
            <p className="mt-2 ">Languages: Arabic, English</p>
            <p className="mt-2 ">Phone: (630) 820-7100</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
        {/* --------------------7 */}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              alt="img"
              className="w-40 h-40 mb-3 object-cover rounded-lg border-2 border-primary"
              src="https://res.cloudinary.com/abidazad/image/upload/v1634633890/18043_dkq2rd.jpg"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Salaheldin Abusin
            </h2>
            <p className="mt-2 text-gray-600">Clinical Area: Heart Care</p>
            <p className="mt-2 ">Languages: Arabic, English</p>
            <p className="mt-2 ">Phone: (312) 942-5020</p>
          </div>
          <button className="p-2 pl-5 mt-4 pr-5 bg-transparent border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Request to Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
