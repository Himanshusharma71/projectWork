import React from "react";

const Context = () => {
  return (
    <div className="text-white min-h-screen font-sans mt-0 border-l-2 border-white px-4">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center md:justify-between items-center py-6 text-sm space-y-2 md:space-y-0 md:space-x-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="#" className="hover:text-gray-400">Events</a>
          <a href="#" className="hover:text-gray-400">Gen AI</a>
          <a href="#" className="hover:text-gray-400">Careers</a>
          <a href="#" className="hover:text-gray-400">Case Study</a>
          <a href="#" className="hover:text-gray-400">SME Talks</a>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between py-10 gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg md:text-2xl font-medium mt-6 md:mt-16">
            For any collaborative <br />
            projects or enquiries feel free <br />
            to connect with us.
          </p>
          <p className="text-lg md:text-xl font-semibold">vayuz.com</p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold mb-8">
            Connect <br /> With Us
          </h1>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none placeholder-white text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none placeholder-white text-sm md:text-base"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none placeholder-white text-sm md:text-base"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-full text-white text-sm md:text-base"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center md:justify-start gap-4 px-4 md:px-10 py-5 text-sm text-gray-400">
        <a href="#" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Insights</a>
        <a href="#" className="hover:text-gray-200">Community</a>
        <a href="#" className="hover:text-gray-200">Privacy & Policies</a>
      </footer>
    </div>
  );
};

export default Context;
