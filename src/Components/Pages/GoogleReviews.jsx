import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// Google logo URL
const googleLogo =
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";

const GoogleReviews = () => {
  return (
    <div className="bg-[#fff6f0] py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto rounded-xl">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Google Reviews
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Google Rating Block */}
        <div className="flex flex-col items-center text-center w-full lg:w-1/4">
          <img src={googleLogo} alt="Google Logo" className="w-20 h-20 mb-4" />
          <div className="flex items-center gap-1 mb-2">
            <Star className="text-yellow-500 fill-yellow-400 w-5 h-5" />
            <span className="text-2xl font-bold text-gray-800">4.9</span>
          </div>
          <p className="text-orange-600 font-semibold text-sm sm:text-base">
            (1.6 Lakh +)
          </p>
          <p className="text-gray-600 text-sm">Verified Google Ratings</p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              {/* Google Badge */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-bl-full flex items-center justify-center">
                <img src={googleLogo} alt="Google" className="w-5 h-5" />
              </div>

              {/* Reviewer Info */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-2"
                />
                <h4 className="font-semibold text-gray-800 text-base">
                  {review.name}
                </h4>

                {/* Stars */}
                <div className="flex justify-center gap-1 mt-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500 fill-yellow-400 w-4 h-4"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-600">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
