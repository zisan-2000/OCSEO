import React from "react";

const SocialProfileLinks = () => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Facebook
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Instagram
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          LinkedIn
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Twitter
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Yelp
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
    </div>
  );
};

export default SocialProfileLinks;
