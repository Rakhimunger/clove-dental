import React from "react";
import doctor from "../../assets/doctor.jpg"; // Replace with actual image path

const reasons = [
  "DORI - A.I. enabled Dental chair",
  "10x Safety and 4 steps sterilization process",
  "Experienced and Certified implantologist",
  "Updated with world class equipments",
  "Regular audits for safety protocols",
];

const WhyChooseClove = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 px-4 py-14 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-left mb-3">
            Why Choose Clove Dental
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center lg:text-left mb-6 max-w-lg mx-auto lg:mx-0">
            Clove Dental is India’s Leading dental care brand with 600+ clinics
            nationwide
          </p>

          <ul className="space-y-4 max-w-md mx-auto lg:mx-0">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="flex justify-between items-start text-gray-800 text-sm sm:text-base font-medium border-b pb-2 border-dashed border-orange-200"
              >
                <span>{reason}</span>
                <span className="text-orange-500 font-bold text-lg">+</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src={doctor}
            alt="Doctors at Clove Dental"
            className="w-full max-w-[500px] sm:max-w-[300px] md:max-w-[600px] rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseClove;
