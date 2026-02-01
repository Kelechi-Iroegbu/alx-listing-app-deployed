// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-semibold text-lg">LuxStay</span>
            </div>

            <nav className="hidden md:flex gap-3 ml-6 text-sm text-gray-600">
              <a className="hover:text-gray-900" href="#">Rooms</a>
              <a className="hover:text-gray-900" href="#">Villas</a>
              <a className="hover:text-gray-900" href="#">Countryside</a>
              <a className="hover:text-gray-900" href="#">Beachfront</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  aria-label="Search properties"
                  className="w-64 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Search location, property..."
                />
                <button
                  aria-label="Search"
                  className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 text-sm rounded-md"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-100">Sign in</button>
              <button className="px-3 py-1 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
