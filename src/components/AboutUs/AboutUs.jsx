import React from "react";

const AboutUs = () => {
  return (
    <div className="flex mt-5">
      <div className=" p-10">
        <h1 className="text-5xl ">Azad Healthcare</h1>
        <h3 className="text-3xl mt-3">GET A WORLD CLASS HEALTH SERVICE</h3>
        <p className="mt-4">
          Azad-Healthcare has all the characteristics of a world-class hospital
          with wide range of services and specialists, equipments and
          technology, ambience and service quality. The hospital is a showcase
          of synergy of medical technology and advances in ICT Division through
          paperless medical records. The skilled nurses, technologists and
          administrators of Bangladesh Specialized Hospital, aided by
          state-of-the-art equipments, provide a congenial infrastructure for
          the medical professionals in providing healthcare of international
          standards.
        </p>
      </div>

      <div className="">
        <img
          className="h-4/5 m-auto "
          src="https://res.cloudinary.com/abidazad/image/upload/v1634556133/pexels-oles-kanebckuu-127873_eqbya6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
