import React from "react";
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  UserIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const statsData = [
  {
    icon: (
      <BuildingOffice2Icon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
    ),
    label: "Clinics",
    highlight: "600+",
  },
  {
    icon: <UserIcon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
    label: "Dentists",
    highlight: "1300+",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
    label: "Happy Patients",
    highlight: "30 L+",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
    label: "Ortho Cases",
    highlight: "35K+",
  },
  {
    icon: (
      <WrenchScrewdriverIcon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
    ),
    label: "Implants Placed",
    highlight: "55K+",
  },
];

const IconStats = () => {
  return (
    <div className="overflow-x-auto bg-[#FFF6F0] py-8 px-4">
      <div className="inline-flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 border border-orange-300 bg-white rounded-2xl p-6 shadow-md">
        {statsData.map(({ icon, label, highlight }, index) => (
          <div
            key={index}
            className="flex items-center gap-3 min-w-[160px] px-4 py-3 bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition duration-300 ease-in-out"
          >
            <div className="flex-shrink-0">{icon}</div>
            <span className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
              <span className="text-orange-600 font-bold">{highlight}</span>{" "}
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconStats;
