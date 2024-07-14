import React from "react";

const MoreAboutTheBusiness = () => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Business contact first name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Business contact last name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Business contact email
        </label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Mobile phone number
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Business Fax number
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Payment methods accepted
        </label>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
          <label className="mr-4 flex items-center">
            <input
              type="radio"
              name="payment"
              value="Debit/Credit Cards"
              className="mr-2"
            />
            Debit/Credit Cards
          </label>
          <label className="mr-4 flex items-center">
            <input
              type="radio"
              name="payment"
              value="Personal Checks"
              className="mr-2"
            />
            Personal Checks
          </label>
          <label className="mr-4 flex items-center">
            <input type="radio" name="payment" value="Cash" className="mr-2" />
            Cash
          </label>
          <label className="mr-4 flex items-center">
            <input
              type="radio"
              name="payment"
              value="Wire/Electronic Payments"
              className="mr-2"
            />
            Wire/Electronic Payments
          </label>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutTheBusiness;
