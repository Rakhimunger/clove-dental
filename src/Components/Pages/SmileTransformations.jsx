import React from "react";

const transformations = [
  {
    name: "Dr. Arjun Mehta",
    location: "Mumbai",
    before: "https://randomuser.me/api/portraits/men/75.jpg",
    after: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Dr. Kavita Sharma",
    location: "Bangalore",
    before: "https://randomuser.me/api/portraits/women/65.jpg",
    after: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Dr. Neha Joshi",
    location: "Delhi",
    before: "https://randomuser.me/api/portraits/women/70.jpg",
    after: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    name: "Dr. Viram Desai",
    location: "Chennai",
    before: "https://randomuser.me/api/portraits/women/50.jpg",
    after: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];

const SmileTransformations = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Real Smiles, Real Transformations
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Witness the incredible smile transformations by our expert dentists.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {transformations.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center border border-orange-100"
          >
            <div className="flex justify-center gap-4 items-start">
              <div className="flex flex-col items-center">
                <img
                  src={doc.before}
                  alt={`${doc.name} before`}
                  className="rounded-lg w-30 h-30 object-cover border border-gray-300 hover:scale-105 transition-transform"
                />
                <span className="text-xs mt-1 text-gray-500">Before</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={doc.after}
                  alt={`${doc.name} after`}
                  className="rounded-lg w-30 h-30 object-cover border border-gray-300 hover:scale-105 transition-transform"
                />
                <span className="text-xs mt-1 text-orange-500 font-semibold">
                  After
                </span>
              </div>
            </div>
            <p className="mt-3 font-semibold text-gray-800 text-sm sm:text-base">
              {doc.name}
            </p>
            <p className="text-orange-500 text-xs font-medium">
              {doc.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmileTransformations;
