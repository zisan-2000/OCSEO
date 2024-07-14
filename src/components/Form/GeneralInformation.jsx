import React from "react";

const GeneralInformation = () => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Business Name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Country*
        </label>
        <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300">
          {/* Options go here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          State*
        </label>
        <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300">
          {/* Options go here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Address line 1*
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Address line 2
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Town / City*
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Zipcode / Postcode*
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Phone number*
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Primary Category*
        </label>
        <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300">
          {/* Options go here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Website*
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Google Business Profile Link
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Business description
        </label>
        <textarea className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"></textarea>
      </div>
    </div>
  );
};

export default GeneralInformation;
