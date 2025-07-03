import React from 'react';
import { Menu } from 'lucide-react'; // Hamburger icon

function Navbar({ toggleSidebar }) {
  return (
    <div className="w-full border-b border-white h-24 text-white flex justify-between items-center px-4 pb-4">
      {/* Hamburger button on small screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white focus:outline-none"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Title */}
      <h1 className="text-base sm:text-lg font-semibold text-left ml-2">
        Securing Your Flutter App: Best Practices and Techniques
      </h1>
    </div>
  );
}

export default Navbar;
