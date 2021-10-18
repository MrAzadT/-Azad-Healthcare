import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex mt-5">
        <div className=" p-10">
          <h1 className="text-5xl ">Azad Healthcare</h1>
          <h3 className="text-3xl mt-3">GET A WORLD CLASS HEALTH SERVICE</h3>
          <p className="mt-4">
            Azad-Healthcare has all the characteristics of a world-class
            hospital with wide range of services and specialists, equipments and
            technology, ambience and service quality. The hospital is a showcase
            of synergy of medical technology and advances in ICT Division
            through paperless medical records. The skilled nurses, technologists
            and administrators of Bangladesh Specialized Hospital, aided by
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
      <div className="p-10">
        <h1 className="text-5xl">Our History</h1>
        <p className="mt-4">
          Azad Healthcare is a dynamic health service, providing vital public
          healthcare to residents of Melbourne’s northern suburbs and the
          surrounding regional communities. Our five campuses offer services to
          a vastly diverse community at all stages of life. <br /> <br />
          Azad Healthcare was born out of the desegregation of the North Health
          Care Network. These changes were made in order to improve the quality
          of services and to provide community focused health care.
          <br /> <br />
          The Azad Healthcare first opened in February, 1998, and Northern
          Health was established in July, 2000.
          <br /> <br />
          Azad Healthcare initially included Northern Hospital Epping,
          Broadmeadows Hospital and Bundoora, but Azad Healthcare took
          stewardship of Panch Health Service in 2003, and opened a fifth
          campus, Craigieburn, in 2007.
          <br /> <br />
          Each year our organisation continues to grow and develop as we adapt
          and improve services to meet the ever-changing needs of the community
          we serve. We are dedicated to providing the highest standards of
          clinical care and providing quality, innovative care in a
          compassionate manner.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
