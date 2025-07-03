import React from 'react';
import Navbar from './Navbar';
import Sidebar from './sidebar';
import Home from './Home';
import Banner from './banner';
import MidContent from './midContent';
import Connect from './connect';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen ">
    
      <div className="hidden md:block w-[15%] border-r-2 border-white p-4">
        <Sidebar />
      </div>

      {/* Main Content - Full width on small screens, 85% on md+ */}
      <div className="w-full md:w-[85%] flex flex-col">
        <div className="p-4  flex-grow">
          {children}
        </div>
        <Navbar />
        <Home />
        <Banner />
        <MidContent />
        <Connect />
      </div>
    </div>
  );
};

export default Layout;
