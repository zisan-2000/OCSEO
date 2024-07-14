import React, { useEffect, useState } from "react";
import GrantAccessForm from "../components/GrantAccessForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const GrantAccessPage = ({ onNext }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "Important Final Step!",
    message: "Please get this done now so our team can get to work",
  };

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-blue-100 dark:bg-blue-800 border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300"
        onCloseAlert={handleCloseAlert}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/grant-access" />
      <div className="flex-grow mt-20 md:mt-6 md:ml-16 flex justify-center items-center w-full p-4 dark:bg-gray-900">
        <GrantAccessForm onNext={onNext} />
      </div>
    </div>
  );
};

export default GrantAccessPage;
