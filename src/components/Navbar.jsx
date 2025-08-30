// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Filmzerr</h1>

        {/* Links */}
        <ul className="flex items-center gap-6 text-white font-medium">
          <button className="hover:text-blue-400 transition  hover:bg-white/10 px-3 py-2 rounded-lg hover:shadow-md  "> Home</button>
          <button className="hover:text-blue-400 transition  hover:bg-white/10 px-3 py-2 rounded-lg hover:shadow-md  ">Movies    </button>
          <button className="hover:text-blue-400 transition  hover:bg-white/10 px-3 py-2 rounded-lg hover:shadow-md  ">TV Shows  </button>
          <button className="hover:text-blue-400 transition  hover:bg-white/10 px-3 py-2 rounded-lg hover:shadow-md  ">My Stuff </button>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-11 h-11 rounded-full border border-white/30"
          />
        </div>
      </div>
    </nav>
  );
}
