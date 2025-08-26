import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-green-600">PingMe</h1>
      <a
        href="https://wa.me/1234567890" // Replace with your bot's number
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </a>
    </nav>
  );
};

export default Navbar;
