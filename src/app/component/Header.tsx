'use client';

import Image from 'next/image';
import { ChevronDown,Search } from 'lucide-react'; // Import the icon

const AppHeader: React.FC = () => {
  return (
    <nav className="bg-black p-4 flex items-center justify-between h-30">
      {/* Logo */}
      <div className="flex items-center ml-28">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>

      {/* Nav links */}
      <ul className="flex space-x-10 mr-16">
       
        {/* Dropdown */}
        <li className="relative group">
          <a
            href="#"
            className="text-white hover:text-gray-400 flex items-center mt-4 gap-1"
          >
            Instructors <ChevronDown size={16} />
          </a>
          <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg min-w-[160px]">
            <li>
              <a href="/services/web" className="block px-4 py-2 hover:bg-gray-600">Web Development</a>
            </li>
            <li>
              <a href="/services/mobile" className="block px-4 py-2 hover:bg-gray-600">Mobile Apps</a>
            </li>
            <li>
              <a href="/services/design" className="block px-4 py-2 hover:bg-gray-600">UI/UX Design</a>
            </li>
          </ul>
        </li>

     
        <li className="relative group justify-center">
          <a
            href="#"
            className="text-white hover:text-gray-400 flex items-center mt-4  gap-1"
          >
            All categaries <ChevronDown size={16} />
          </a>
          <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg min-w-[160px]">
            <li>
              <a href="/services/web" className="block px-4 py-2 hover:bg-gray-600">Web Development</a>
            </li>
            <li>
              <a href="/services/mobile" className="block px-4 py-2 hover:bg-gray-600">Mobile Apps</a>
            </li>
            <li>
              <a href="/services/design" className="block px-4 py-2 hover:bg-gray-600">UI/UX Design</a>
            </li>
          </ul>
        </li>

        <li className="flex items-center justify-center mt-4">
          <a href="/contact" className="text-white hover:text-gray-400">View Plans</a>
        </li>
   
      </ul>
      <div className="flex items-center justify-space-between right-0 mr-14 gap-14">
      <button className='border-2 border-white p-2  rounded-sm hover:bg-gray-700 '>
        <Search size={20} className="text-white hover:text-gray-400" />
      </button>
      <button className='border-2 border-white p-3  w-[69px] h-[39px] text-white rounded-sm hover:bg-gray-700 '>
       <h1 className='text-white'>Login</h1>
      </button>
      <button className='border-2 border-white p-3 w-[89px] h-[39px] rounded-sm bg-white '>
        <h1>Register</h1>
      </button>
      </div>
    </nav>
  );
};

export default AppHeader;






