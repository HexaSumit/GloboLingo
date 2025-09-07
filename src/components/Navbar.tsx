import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Learn", path: "/learn" },
  { name: "About", path: "/about" },
  { name: "Login", path: "/login" }
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-white cursor-pointer">
              GloboLingo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-100 hover:text-yellow-300 font-medium transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? (
                <HiX className="h-7 w-7 text-white" />
              ) : (
                <HiMenu className="h-7 w-7 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-4 py-3 space-y-2 shadow-lg">
          {navLinks.map((link) => (
             <Link
              key={link.name}
              to={link.path}
              className="block text-gray-100 hover:text-yellow-300 font-medium transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
