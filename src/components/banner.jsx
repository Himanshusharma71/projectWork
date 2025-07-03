import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function Banner() {
  return (
    <div className="flex flex-col md:flex-row w-full mt-16 border-l-2 border-white px-4 md:px-0 gap-6 md:gap-0">
      {/* Left - 30% */}
      <div className="md:w-[30%] w-full text-white flex md:justify-center h-auto md:h-32 flex-col">
        <h1 className="font-playfair text-3xl md:text-5xl ml-2 md:ml-10">
          Flutter's Dawn
        </h1>
        <p className="mt-1 text-sm ml-2 md:ml-10">
          History of Flutter
        </p>
      </div>

      {/* Center - 40% */}
      <div className="md:w-[40%] w-full text-white flex justify-center items-center text-center">
        <p className="text-sm md:text-base">
          Uncover the fascinating story of Flutter in <b>'Flutter's Dawn'</b>: From humble origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey! Click to begin!
        </p>
      </div>

      {/* Right - 30% */}
      <div className="md:w-[30%] w-full flex justify-center md:justify-end items-center md:mr-10">
        <button
          type="button"
          className="mt-4 md:mt-10 flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-400 dark:hover:bg-blue-700"
        >
          BEGIN
          <ArrowUpRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
