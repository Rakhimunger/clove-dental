import React from "react";
import dental from "../../assets/dental.jpg"; // Ensure the image path is correct

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-16 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left: Doctor Image */}
        <div className="relative md:col-span-2 rounded-lg overflow-hidden shadow-lg">
          <img
            src={dental}
            alt="Doctor"
            className="w-full h-[400px] md:h-[480px] object-cover"
          />
          {/* Transparent Overlay Box */}
          <div
            className="absolute top-1/2 left-2/6 bg-white/40 backdrop-blur-md p-5 rounded-lg shadow-md max-w-xs md:max-w-md
             transform -translate-x-1/2 -translate-y-1/3"
          >
            <h2 className="text-xs md:text-2xl font-normal text-gray-900">
              Painless Root Canal Treatment in Delhi
            </h2>
            <p className="text-sm md:text-base text-gray-800 mt-1 mb-4">
              Expert RCT. Zero Pain. Right Here in Delhi.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition text-sm md:text-base">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right: Responsive Form */}
        <div
          className="bg-[#fff8f1] p-5 rounded-xl shadow-md w-full max-w-md mx-auto flex flex-col justify-center text-center md:text-left"
          style={{ minHeight: "480px" }}
        >
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
            Get Expert Dental Guidance in Delhi
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-5">
            Book your free consultation today and take the first step towards
            healthy, beautiful teeth.
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Captcha"
                className="flex-1 border border-gray-300 px-3 py-2 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="bg-orange-600 text-white px-4 py-2 rounded-r-full text-sm select-none">
                1514
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs md:text-sm text-left">
              <input type="checkbox" id="agree" className="mt-1" />
              <label htmlFor="agree" className="text-gray-700">
                I agree to CLOVE Dental's{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>{" "}
                and consent to contact via phone, email, or SMS.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition text-sm"
            >
              Book a Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
