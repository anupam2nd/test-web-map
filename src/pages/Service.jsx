import React from "react";

export default function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies.",
      icon: "💻",
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android apps for your business needs.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for your applications.",
      icon: "☁️",
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights.",
      icon: "📊",
    },
    {
      title: "Consulting",
      description: "Expert advice for your technology strategy.",
      icon: "💡",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
