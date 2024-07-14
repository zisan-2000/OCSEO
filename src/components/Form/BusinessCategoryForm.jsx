import React from "react";

const BusinessCategoryForm = () => {
  return (
    <div className="max-w-lg mx-auto p-4 md:p-8 bg-white dark:bg-gray-900 shadow-md rounded-md">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">
        Additional Business Categories
      </h2>
      <form className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Business Category..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3-3m0 0l3 3m-3-3v12"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Business Category..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3-3m0 0l3 3m-3-3v12"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Business Category..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3-3m0 0l3 3m-3-3v12"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessCategoryForm;
