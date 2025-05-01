'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const AppHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-4 py-4 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white ml-37">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>

      {/* Mobile toggle */}
      <div className=" lg:hidden ml-[-67]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-gray-400 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav links and buttons */}
      <div
        className={`w-full lg:flex lg:items-center lg:justify-between lg:w-auto transition-all duration-300 `}
      >
        {/* Links */}
        <ul className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 lg:gap-10 lg:items-center">
          {/* Dropdown 1 */}
          <li className="relative group">
            <a
              href="#"
              className="text-white hover:text-gray-400 flex items-center gap-1"
            >
              Instructors <ChevronDown size={16} />
            </a>
            <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg min-w-[160px] z-10">
              <li>
                <a href="/services/web" className="block px-4 py-2 hover:bg-gray-600">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile" className="block px-4 py-2 hover:bg-gray-600">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/services/design" className="block px-4 py-2 hover:bg-gray-600">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="relative group">
            <a
              href="#"
              className="text-white hover:text-gray-400 flex items-center gap-1"
            >
              All Categories <ChevronDown size={16} />
            </a>
            <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg min-w-[160px] z-10">
              <li>
                <a href="/services/web" className="block px-4 py-2 hover:bg-gray-600">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile" className="block px-4 py-2 hover:bg-gray-600">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/services/design" className="block px-4 py-2 hover:bg-gray-600">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </li>

          {/* Animated link */}
          <li>
            <motion.a
              href="/contact"
              className="text-white hover:text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              View Plans
            </motion.a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 lg:ml-10 items-center">
          <button className="border-2 border-white p-2 rounded-sm hover:bg-gray-700">
            <Search size={20} className="text-white" />
          </button>
          <button className="border-2 border-white px-4 py-2 w-[90px] text-white rounded-sm hover:bg-gray-700">
            Login
          </button>
          <button className="border-2 border-white px-4 py-2 w-[100px] rounded-sm bg-white text-black hover:bg-gray-200">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;







