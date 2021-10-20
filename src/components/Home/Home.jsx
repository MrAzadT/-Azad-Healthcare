import React from "react";
import Carousel from "./Carousel";
import Section from "./Section";
import Services from "./Services";

const Home = () => {
  return (
    <div className="mt-5">
      <img
        className=" w-32 h-28mt-8 m-auto mb-5"
        src="https://res.cloudinary.com/abidazad/image/upload/v1634538240/healthcare_zlmjqo.png"
        alt=""
      />
      <h1 className="text-5xl mt-8 text-center mb-6">Azad Healthcare</h1>
      <p className="text-3xl text-center mb-8 ">
        The Best Healthcare In The World{" "}
      </p>
      <Carousel />
      <Services />
      <Section />
    </div>
  );
};

export default Home;
