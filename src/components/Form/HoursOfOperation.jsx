import React from "react";

const HoursOfOperation = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      {days.map((day) => (
        <div
          className="flex flex-col md:flex-row items-center gap-4 mb-4"
          key={day}
        >
          <label className="block text-gray-700 dark:text-gray-300 w-full md:w-auto">
            {day}
          </label>
          <select className="w-full md:w-1/4 p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300">
            <option>Open</option>
            <option>Closed</option>
          </select>
          <input
            type="time"
            className="w-full md:w-1/4 p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
          <span className="mx-2">to</span>
          <input
            type="time"
            className="w-full md:w-1/4 p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
      ))}
    </div>
  );
};

export default HoursOfOperation;
