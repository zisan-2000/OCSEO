import React, { useEffect, useState } from "react";
import BrandAssetsForm from "../components/BrandAssetsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BrandAssetsPage = ({ onNext }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const alertMessage = {
    title: "You're halfway there!",
    message: "Moving right along. Making awesome progress.",
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
        alertStyle="bg-blue-100 dark:bg-blue-800 border md:border-blue-300 md:bg-blue-100 dark:border-blue-600 text-blue-600 dark:text-blue-300 2xl:bg-blue-100 2xl:border-blue-300"
        polygonStyle="absolute -left-4   w-28 h-28 bg-blue-300 border-pink-600 clip-polygon "
        onCloseAlert={handleCloseAlert}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/brand-assets" />
      <div className="flex-grow mt-20 md:mt-32 md:mr-52 flex justify-center items-center w-full md:ml-52 lg:mr-48 lg: xl:mr-[400px] xl:mb-[200px] 2xl:mr-[800px] 2xl:mb-44 dark:bg-gray-900 p-4">
        <BrandAssetsForm onNext={onNext} />
      </div>
    </div>
  );
};

export default BrandAssetsPage;
