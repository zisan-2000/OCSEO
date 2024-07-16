import React, { useEffect, useState } from "react";
import Finish from "../components/Finish";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const FinishPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "Woohoo! You did it.",
    message: "Thank you for completing your account setup. Let's go!",
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
        alertStyle="bg-green-100 dark:bg-green-800 border md:border-green-300 md:bg-green-100 dark:border-green-600 text-green-600 dark:text-green-300 2xl:bg-green-100 2xl:border-green-600"
        polygonStyle="absolute -left-4   w-28 h-28 bg-green-300 border-pink-600 clip-polygon "
        onCloseAlert={handleCloseAlert}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/finish" />
      <div className="flex-grow mt-20 md:ml-60 md:mb-56  flex justify-center items-center w-full  lg:mr-52 lg: xl:mr-[450px] xl:mb-[200px] p-4  2xl:mr-[800px] 2xl:mb-[400px] dark:bg-gray-900">
        <Finish />
      </div>
    </div>
  );
};

export default FinishPage;
