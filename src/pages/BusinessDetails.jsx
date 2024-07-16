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
        polygonStyle="absolute -left-4   w-28 h-28 bg-yellow-300 border-pink-600 clip-polygon "
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/business-details" />
      <div className="flex-grow mt-20 md:mt-32 md:mr-52 flex justify-center items-center w-full md:ml-52 lg:mr-44 lg: xl:mr-[400px] xl:mb-[200px] 2xl:mr-[800px] 2xl:mb-44  dark:bg-gray-900 p-4 ">
        <BusinessDetailsForm onNext={onNext} />
      </div>
    </div>
  );
};

export default BusinessDetails;
