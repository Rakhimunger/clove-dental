import React from "react";

const testimonials = [
  {
    name: "Dr. Shubham",
    location: "Indore",
    treatment: "Aligners",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dr. Shubpreet",
    location: "Delhi",
    treatment: "RCT",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Anita",
    location: "Bangalore",
    treatment: "Laser Treatment",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Aarti",
    location: "Mumbai",
    treatment: "Dentures",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Dr. Aditya",
    location: "Chennai",
    treatment: "Implant",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Dr. Nikita",
    location: "Pune",
    treatment: "Braces",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

export default function TestimonialPage() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
        What Our Patients Say
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        Real smiles, real stories. Here’s what our patients love about their
        CLOVE Dental experience!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {testimonials.map((person, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 object-cover mx-auto rounded-full mb-4 border-4 border-orange-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {person.name}
            </h3>
            <p className="text-sm text-gray-500">{person.location}</p>
            <p className="text-sm text-orange-600 font-medium mt-2">
              {person.treatment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
