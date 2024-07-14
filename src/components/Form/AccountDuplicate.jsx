import React from "react";

const AccountForm = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-md w-full max-w-3xl mx-auto mt-8 md:mt-16 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">
        Account Contacts
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        Add contacts you want us to communicate with, or anyone you want to have
        access to your account and reports. You can add additional contacts
        later from your business profile.
      </p>
      <form>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Primary User
          </label>
          <input
            type="text"
            placeholder="John Smith"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-6">
          <input
            type="email"
            placeholder="johnsmith@abcompany.com"
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
          <input
            type="phone"
            placeholder="(562) 555-8080"
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <h3 className="text-lg font-bold mb-4 dark:text-white">
          Additional Contact
        </h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="phone"
            placeholder="Phone"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-gray-300"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <button
            type="button"
            className="w-full md:w-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded border border-gray-300 dark:border-gray-600 mb-4 md:mb-0"
          >
            + Add Contact
          </button>
          <div className="flex items-center w-full md:w-auto">
            <input type="checkbox" id="sendAccess" className="mr-2" />
            <label
              htmlFor="sendAccess"
              className="text-gray-700 dark:text-gray-300"
            >
              Send access
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0"
          >
            Skip & Finish Later
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
