import React from "react";

const Blog = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">OUR BLOG</h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <article
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634712018/laboratory-g68944ea46_1920_utgkpw.jpg")`,
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
                    BLOGS ABOUT MEDICAL TECHNOLOGY
                  </a>
                </h3>
              </div>
            </article>
            <article
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634712019/woman-g007452a23_1920_beogcq.jpg")`,
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
                    SPECIAL INTEREST MEDICAL BLOGS
                  </a>
                </h3>
              </div>
            </article>
            <article
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/abidazad/image/upload/v1634712020/surgery-gf6c37f75e_1920_gciy5d.jpg")`,
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
                    BLOGS FOR HEALTH CARE PROFESSIONALS
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

export default Blog;
