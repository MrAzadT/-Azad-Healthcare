import React from "react";

const Section = () => {
  return (
    <section className="text-blueGray-700 bg-white mt-20">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
          <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
            Forward. For all of us.
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 " />
          As we focus on the future of medicine and what it means for health
          care, our communities and your family, we invite you to take part in
          our progress.
          <div className="flex flex-col justify-center lg:flex-row">
            <button className="flex mt-4 items-center px-6 py-2  font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded-lg hover:bg-primary focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Move forward with us
            </button>
          </div>
        </div>
        <div className="w-full h-full lg:w-1/3 lg:max-w-lg md:w-1/2">
          <img
            className="object-cover object-center rounded-lg "
            alt="hero"
            src="https://res.cloudinary.com/abidazad/image/upload/v1634713416/pexels-jonas-mohamadi-1416736_wdss3t.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
