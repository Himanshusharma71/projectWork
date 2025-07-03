import logo from '../assets/logo.png';
import SideImg from '../assets/sideimg.jpg';


function Sidebar() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="text-white">
        <img src={logo} alt="Logo" className='h-8 ' />
        

      </div>
      <div>
       <button className="relative inline-block px-0.2 py-0.2 text-white font-semibold rounded-full bg-black">
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-sm"></span>
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></span>
            <span className="relative z-10 block bg-black rounded-full px-6 py-2">
                Contact Us
            </span>
            </button>


      </div>
            <div class="mt-10 list-none text-white">
                <li >App Development</li>
                <li className='mt-6'>Challenges</li>
                <li className='mt-6'>Hire developer</li>
                <li className='mt-6'>Community</li>
            </div>


            <div className="flex flex-col items-center justify-center mt-20 text-white text-center">
                <img src={SideImg} alt="Logo" className="h-20 rounded-sm" />
                <p className="text-sm mt-2 max-w-sm">
                    Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum..
                </p>
            </div>

    </div>
  );
}

export default Sidebar;
