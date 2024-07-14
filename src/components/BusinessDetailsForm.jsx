import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import BusinessCategoryForm from "./Form/BusinessCategoryForm";
import GeneralInformation from "./Form/GeneralInformation";
import HoursOfOperation from "./Form/HoursOfOperation";
import MoreAboutTheBusiness from "./Form/MoreAboutTheBusiness";
import SocialProfileLinks from "./Form/SocialProfileLinks";

const BusinessDetailsForm = ({ onNext }) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);
  const [isAdditionalBusinessOpen, setIsAdditionalBusinessOpen] =
    useState(false);
  const [isSocialLinksOpen, setIsSocialLinksOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleNext = () => {
    setShowAlert(true);
    setTimeout(() => {
      onNext("/brand-assets");
      navigate("/brand-assets");
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-md w-full max-w-3xl mx-auto rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">
        Business Details
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
        Add your business details so our team has the correct information for
        creating local business listings through directory submissions. Use the
        search function by typing and selecting your business location. Search
        is powered by Google Places API and only returns profiles with a visible
        street address. You can also add your details manually.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setIsGeneralInfoOpen(!isGeneralInfoOpen)}
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            General Information{" "}
            <span className="text-gray-500">
              {isGeneralInfoOpen ? "▲" : "▼"}
            </span>
          </button>
          {isGeneralInfoOpen && (
            <div className="mt-4">
              <GeneralInformation />
            </div>
          )}
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setIsHoursOpen(!isHoursOpen)}
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            Hours of Operation{" "}
            <span className="text-gray-500">{isHoursOpen ? "▲" : "▼"}</span>
          </button>
          {isHoursOpen && (
            <div className="mt-4">
              <HoursOfOperation />
            </div>
          )}
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setIsMoreAboutOpen(!isMoreAboutOpen)}
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            More About the Business{" "}
            <span className="text-gray-500">{isMoreAboutOpen ? "▲" : "▼"}</span>
          </button>
          {isMoreAboutOpen && (
            <div className="mt-4">
              <MoreAboutTheBusiness />
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            type="button"
            onClick={() =>
              setIsAdditionalBusinessOpen(!isAdditionalBusinessOpen)
            }
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            Additional Business Categories{" "}
            <span className="text-gray-500">
              {isAdditionalBusinessOpen ? "▲" : "▼"}
            </span>
          </button>
          {isAdditionalBusinessOpen && (
            <div className="mt-4">
              <BusinessCategoryForm />
              {/* Additional Business Categories Form Fields */}
              {/* Your form fields for Additional Business Categories go here */}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            type="button"
            onClick={() => setIsSocialLinksOpen(!isSocialLinksOpen)}
            className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded flex justify-between items-center dark:bg-gray-800 dark:text-gray-300"
          >
            Social Profile Links{" "}
            <span className="text-gray-500">
              {isSocialLinksOpen ? "▲" : "▼"}
            </span>
          </button>
          {isSocialLinksOpen && (
            <div className="mt-4">
              <SocialProfileLinks />
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0"
          >
            Save & Finish Later
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-green-500 text-white py-2 px-6 rounded"
          >
            Next
          </button>
        </div>
      </form>
      <Modal
        isOpen={showAlert}
        onRequestClose={() => setShowAlert(false)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-transparent"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-lg font-bold mb-4 dark:text-white">
            Form is completed!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Let's go to the next form!
          </p>
          <button
            onClick={() => setShowAlert(false)}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BusinessDetailsForm;
