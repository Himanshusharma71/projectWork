import React from "react";
import { Plus } from "lucide-react";
import Img4 from "../assets/img-4.jpg";

function MidContent() {
  return (
    <div className="mt-0 border-l-2 border-white px-4">
      {/* Top Content Section */}
      <div className="mt-10 flex flex-col justify-center items-center text-center text-white px-2">
        <h1 className="font-playfair text-3xl md:text-6xl leading-tight">
          Our Dynamic Services Suite!
        </h1>
        <h2 className="font-quicksand text-lg md:text-xl mt-2">
          Embrace Innovation: Let's Create Together!
        </h2>
        <p className="mt-4 text-sm md:text-base">
          Step into innovation! Explore our range of services and let's create
          something extraordinary together.
          <br /> Your vision, our expertise. Let's begin!
        </p>
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-col md:flex-row mt-10 text-white gap-6">
        {/* Left Side - Text & List */}
        <div className="md:w-1/2 w-full flex flex-col">
          <h1 className="font-playfair text-2xl md:text-3xl">
            Flutter App Development
          </h1>

          <p className="font-quicksand mt-3 text-sm md:text-base">
            Unlock endless possibilities with Flutter App Development. Build
            beautiful, high-performance applications for any platform - faster
            and easier than ever before. Ready to revolutionize your app
            experience?
            <a href="#" className="text-blue-400"> Let's get started today! </a>
          </p>

          <ul className="font-playfair text-lg md:text-2xl list-none mt-8 space-y-3">
            {[
              "UI/UX Design",
              "Customization & Integration",
              "Testing & Quality Assurance",
              "Maintenance & Support",
              "Consulting & Training",
              "Migration & Upgrades",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                {item}
                <Plus className="w-5 h-5 text-white ml-auto" />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={Img4}
            alt="Flutter Dev"
            className="h-64 w-auto md:h-96 rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MidContent;
