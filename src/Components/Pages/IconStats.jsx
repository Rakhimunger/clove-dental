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
      <BuildingOffice2Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
    ),
    label: "Clinics",
    highlight: "600+",
  },
  {
    icon: <UserIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />,
    label: "Dentists",
    highlight: "1300+",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />,
    label: "Happy Patients",
    highlight: "30 L+",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />,
    label: "Ortho Cases",
    highlight: "35K+",
  },
  {
    icon: (
      <WrenchScrewdriverIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
    ),
    label: "Implants Placed",
    highlight: "55K+",
  },
];

const IconStats = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap bg-[#FFF6F0] py-5 px-4">
      <div className="inline-flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {statsData.map(({ icon, label, highlight }, index) => (
          <div
            key={index}
            className="flex items-center gap-2 min-w-[140px] justify-center mx-7"
          >
            {icon}
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 ">
              <span className="text-orange-600 font-semibold">{highlight}</span>{" "}
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconStats;
