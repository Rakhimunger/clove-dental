import React from "react";
import hospital from "../../assets/hospital.jpg";
import hospital1 from "../../assets/hospital1.jpg";
import hospital2 from "../../assets/hospital2.jpg";

const features = [
  {
    title: "Uncompromised Safety",
    desc: "10X Safety Protocols for a secure and worry-free dental experience",
    image: hospital,
    bgColor: "bg-[#0e1d2c]/70", // transparent maroon
    buttonColor: "text-orange-400",
  },
  {
    title: "Experience AIPS",
    desc: "Our AI-Powered Sterilization (AIPS) Monitoring system from DORI, USA. Exclusively at Clove",
    image: hospital2,
    bgColor: "bg-[#42210b]/70", // transparent brown
    buttonColor: "text-orange-300",
  },
  {
    title: "Assuring Cleanliness",
    desc: "Rigid 4-Step Sterilization process, assuring a safe & spotless clinic.",
    image: hospital1,
    bgColor: "bg-[#0d2235]/70", // transparent dark blue-gray
    buttonColor: "text-orange-400",
  },
];

const SafetyFeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Safety, Precision, and Innovation
        </h2>
        <p className="text-gray-800 mt-2 text-base">
          Advanced care with top safety, sterilization, and technology
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-72 object-cover rounded-xl"
            />

            {/* Colored transparent overlay */}
            <div
              className={`absolute bottom-4 left-4 right-4 ${feature.bgColor} backdrop-blur-sm px-4 py-4 rounded-xl border border-white/30 text-white`}
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {feature.title}
              </h3>
              <div className="h-1 w-20 bg-orange-500 mt-2 mb-3 rounded-full" />
              <p className="text-sm text-white mb-4">{feature.desc}</p>
              <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
                <span className={`${feature.buttonColor}`}>Learn More</span>
                <span
                  className={`text-xl ${feature.buttonColor} group-hover:translate-x-1 transition-transform`}
                >
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyFeatureSection;
