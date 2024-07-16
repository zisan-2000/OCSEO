import React from "react";
import AccountForm from "../components/AccountForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ContactsPage = ({ onNext }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const alertMessage = {
    title: "Let's Create Your Account!",
    message: "Please follow the prompts below to complete account setup.",
  };

  React.useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="absolute -left-4   w-28 h-28 bg-pink-300 border-pink-600 clip-polygon mr-16"></div>
      <Navbar
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertStyle="bg-pink-100 dark:bg-pink-800 border border-pink-300 dark:border-pink-600 text-pink-600 dark:text-pink-300"
        polygonStyle="absolute -left-4   w-28 h-28 bg-pink-300 border-pink-600 clip-polygon "
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar isOpen={isSidebarOpen} activePage="/contacts" />
      <div className="flex-grow mt-16 md:mt-22 md:ml-0 flex justify-center items-center w-full md:ml-52 lg:mr-52 lg: xl:mr-[400px] xl:mb-[200px] 2xl:mr-[800px] 2xl:mb-[200px]   dark:bg-gray-900 p-4">
        <AccountForm onNext={onNext} />
      </div>
    </div>
  );
};

export default ContactsPage;
