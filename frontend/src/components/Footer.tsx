import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center bg-gray-100 text-gray-600 mt-10">
      <p>© {new Date().getFullYear()} PingMe. Built by Yousuf Khan 🚀</p>
    </footer>
  );
};

export default Footer;
