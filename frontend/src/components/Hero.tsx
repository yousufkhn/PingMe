import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-green-100 to-white">
      <h1 className="text-5xl font-bold text-gray-900">PingMe 📲</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Your WhatsApp Reminder Buddy — Smart reminders, synced with Google
        Calendar, right inside WhatsApp.
      </p>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Start on WhatsApp
      </a>
    </section>
  );
};

export default Hero;
