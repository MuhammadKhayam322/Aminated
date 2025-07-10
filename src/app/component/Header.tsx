"use client";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const AppHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="bg-black px-4 py-4  text-white w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Collapsible Nav */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:justify-between mt-4`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          {/* Dropdown 1 */}
          <li className="relative group">
            <span className="text-white hover:text-gray-400 flex items-center gap-1 cursor-pointer">
              Instructors <ChevronDown size={16} />
            </span>
            <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg min-w-[160px] z-10">
              <li>
                <Link
                  href="/services/web"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="relative group">
            <span className="text-white hover:text-gray-400 flex items-center gap-1 cursor-pointer">
              All Categories <ChevronDown size={16} />
            </span>
            <ul className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg min-w-[160px] z-10">
              <li>
                <Link
                  href="/services/web"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </li>

          {/* Animated Link */}
          <li>
            <Link href="/contact">
              <motion.span
                className="text-white hover:text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                View Plans
              </motion.span>
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 lg:ml-10 items-start lg:items-center text-black ">
          
          <button
            onClick={() => setShowLogin(true)}
            className="border-2 border-white px-4 py-2 text-black bg-white rounded-sm hover:bg-gray-700 hover:text-black-100 w-full lg:w-auto"
          >
            Login
          </button>

          <button
            onClick={() => setShowRegister(true)}
            className="border-2 border-white px-4 py-2 text-black bg-white rounded-sm hover:bg-gray-200 w-full lg:w-auto"
          >
            Register
          </button>
          {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}
          {showRegister && (
            <RegisterCard onClose={() => setShowRegister(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
