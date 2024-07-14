import React from "react";
import BusinessDetailsForm from "../components/BusinessDetailsForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BusinessDetails = ({ onNext }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const alertMessage = {
    title: "Great job. Keep going!",
    message: "Just a few more steps before our team can get to work.",
  };

  React.useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-yellow-100 dark:bg-yellow-800 border border-yellow-300 dark:border-yellow-600 text-yellow-600 dark:text-yellow-300"
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/business-details" />
      <div className="flex-grow mt-20 md:mt-26 md:ml-16 flex justify-center items-center w-full dark:bg-gray-900 p-4">
        <BusinessDetailsForm onNext={onNext} />
      </div>
    </div>
  );
};

export default BusinessDetails;
