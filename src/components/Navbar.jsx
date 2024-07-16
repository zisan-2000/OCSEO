import React, { useContext } from "react";
import logo from "../assets/logo1.png";
import { ThemeContext } from "../context/ThemeContext";
import Alert from "./Alert"; // Import the new Alert component

const Navbar = ({
  showAlert,
  alertMessage,
  alertStyle,
  polygonStyle,
  onCloseAlert,
  onToggleSidebar,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 h-[80px] md:h-[100px] w-full flex items-center shadow-md fixed top-0 left-0 px-4 py-4 md:px-8 z-50">
      <button
        aria-label="Toggle Sidebar"
        className="text-gray-700 dark:text-gray-300 md:hidden p-2 rounded-full ring-2 ring-lime-600 focus:outline-none"
        onClick={onToggleSidebar}
      >
        &#9776;
      </button>
      <div className="flex items-center px-6">
        <img
          src={logo}
          alt="OCSEO Logo"
          className="h-12 md:h-10 w-auto rounded-full"
        />
      </div>
      {showAlert && (
        <Alert
          alertMessage={alertMessage}
          alertStyle={alertStyle}
          polygonStyle={polygonStyle}
          onCloseAlert={onCloseAlert}
        />
      )}
      <div className="flex-grow"></div>
      <button
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className="text-gray-700 dark:text-gray-300 p-2 ring-2 ring-lime-600 focus:outline-none ml-2 md:ml-4"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
