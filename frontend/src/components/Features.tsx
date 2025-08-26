import React from "react";

interface Feature {
  title: string;
  desc: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    { title: "📅 Google Calendar Sync", desc: "Link your calendar and never miss events." },
    { title: "💬 Simple Language", desc: "Just chat like a friend, PingMe understands you." },
    { title: "🔔 WhatsApp Alerts", desc: "Get pings at the right time, right place." },
  ];

  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Why PingMe?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
