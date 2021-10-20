import React from "react";

const Section = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">OUR BLOG</h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <article
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634664354/international-services-2x-3753028_0001_zielui.webp")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <a
                    className="text-white text-2xl font-bold text-center"
                    href="/"
                  >
                    <span className="absolute inset-0"></span>
                    The trusted leader in healthcare worldwide
                  </a>
                </h3>
              </div>
            </article>
            <article
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634664354/devaml2109septemberchallengetilead520x360mr_do7be4.webp")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <a
                    className="text-white text-2xl font-bold text-center"
                    href="/"
                  >
                    <span className="absolute inset-0"></span>
                    $1 Million Challenge Opportunity Triples the Power of Your
                    Gift
                  </a>
                </h3>
              </div>
            </article>
            <article
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634664353/coronavirus-map-tile-520x360_a7tygb.webp")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <a
                    className="text-white text-2xl font-bold text-center"
                    href="/"
                  >
                    <span className="absolute inset-0"></span>
                    Track the latest COVID-19 trends.
                  </a>
                </h3>
              </div>
            </article>
          </section>
        </article>
      </section>
    </>
  );
};

export default Section;
