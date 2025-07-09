import React from "react";
import teeth from "../../assets/teeth.jpg";

const RootCanalSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug whitespace-nowrap overflow-auto">
          Types of Root Canal Treatments
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
          In a root canal, the dentist removes infected pulp, cleans the tooth,
          and fills it with special material.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <img
            src={teeth}
            alt="Root Canal Treatment"
            className="w-36 h-auto rounded-lg mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Root Canal Treatment
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Ideal for infected or damaged tooth
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
              <li>Root Canal Treatment</li>
              <li>Split RCT</li>
              <li>Split RCT with rubber dam</li>
              <li>Split RCT with laser</li>
            </ul>
            <p className="text-sm text-orange-500 font-semibold">
              Starting Price
            </p>
            <p className="text-xl font-bold text-gray-900 mb-3">₹ 19,999</p>
            <button className="bg-orange-500 text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-orange-600 transition">
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <img
            src={teeth}
            alt="Re-Root Canal Treatment"
            className="w-36 h-auto rounded-lg mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Re-Root Canal Treatment
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Ideal issues that persist or recur after an initial root canal
              treatment
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
              <li>Re-RCT with rubber dam</li>
              <li>Re-RCT laser specialist</li>
              <li>e-RCT with retrieval of old RCT filling</li>
            </ul>
            <p className="text-sm text-orange-500 font-semibold">
              Starting Price
            </p>
            <p className="text-xl font-bold text-gray-900 mb-3">₹ 19,999</p>
            <button className="bg-orange-500 text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-orange-600 transition">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootCanalSection;
