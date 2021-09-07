import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-900 ">
      <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          {/* carousel here */}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            loading="lazy"
            src="https://dummyimage.com/720x600/F3F4F7/8693ac"
          />
        </div>
        <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            "Ill News Runs Apace"
          </h2>
          <h1 className="mb-8 text-2xl font-bold leading-loose text-left text-black lg:text-5xl">
            {" "}
            Authentic, Rumor-free & Validated
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-700 ">
            Follow us to get updated news throughout the whole country as well
            as tactical analysis of all news in terms of authenticity.
          </p>
          <div className="flex flex-col justify-left lg:flex-row">
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-600 rounded-lg hover:bg-red-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {" "}
              Read About It{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
