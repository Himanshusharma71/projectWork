import React from "react";
import Img1 from "../assets/img-1.jpg";
import Img2 from "../assets/img-2.png";
import Img3 from "../assets/img-3.png";

function Home() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen mt-10 px-4">
      {/* Left Section */}
      <div className="md:w-[35%] w-full text-white">
        <h1 className="mt-10 md:mt-20 font-playfair text-3xl md:text-5xl leading-tight">
          Unlock the Potential of Flutter
        </h1>
        <p className="text-lg md:text-2xl mt-4 md:mt-6">
          Your Premier Partner for Cross-Platform App Excellence!
        </p>
        <button
          type="button"
          className="mt-6 md:mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-700"
        >
          UPGRADE YOUR TECH
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-[65%] w-full mt-10 md:mt-0 flex justify-center items-center">
        <div className="relative w-full max-w-xl">
          {/* Base Image */}
          <img src={Img1} alt="Main" className="rounded-md h-60 md:h-80 w-full object-cover" />

          {/* Top-right Image */}
          <img
            src={Img2}
            alt="Overlay 1"
            className="absolute top-10 right-4 h-16 md:h-20 rounded-md"
          />

          {/* Bottom-left Image */}
          <img
            src={Img3}
            alt="Overlay 2"
            className="absolute top-48 left-56 h-32 md:h-48 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
