import React from "react";

const Alert = ({ alertMessage, alertStyle, polygonStyle, onCloseAlert }) => {
  return (
    <div
      role="alert"
      className={`relative bg-pink-100 border border-pink-600 px-4 py-2 rounded-lg flex items-center ${alertStyle} ml-auto md:ml-14`}
    >
      <div className={`${polygonStyle}`}></div>
      <div className="flex flex-col text-left ml-6">
        <span className="font-bold text-blue-600 dark:text-blue-300 text-sm md:text-base">
          {alertMessage.title}
        </span>
        <span className="text-black-500 dark:text-black-500 text-xs md:text-sm">
          {alertMessage.message}
        </span>
      </div>
      <button
        aria-label="Close Alert"
        className="ml-auto text-black-500 dark:text-black-500"
        onClick={onCloseAlert}
      >
        ✖
      </button>
    </div>
  );
};

export default Alert;
