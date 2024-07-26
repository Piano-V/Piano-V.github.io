import React, { useState } from 'react';
import { SPECIALIZATIONS, CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("specializations");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1a1a1a;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ff69b4;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #ff85c1;
          }
          .certificates-container {
            max-height: 500px; /* Adjust this height based on your design */
            overflow-y: auto;
          }
        `}
      </style>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Coursework & Certifications
      </motion.h2>
      <div className="text-center mb-8">
        <button
          className={`mx-2 py-2 px-4 rounded ${activeTab === "specializations" ? "bg-pink-300 text-white" : "bg-neutral-800 text-pink-300"}`}
          onClick={() => handleTabChange("specializations")}
        >
          Specializations
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded ${activeTab === "certifications" ? "bg-pink-300 text-white" : "bg-neutral-800 text-pink-300"}`}
          onClick={() => handleTabChange("certifications")}
        >
          Course Certifications
        </button>
      </div>
      <div className="certificates-container custom-scrollbar px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {activeTab === "specializations"
            ? SPECIALIZATIONS.map((spec, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex flex-col bg-neutral-900 p-4 rounded-lg shadow-md cursor-pointer"
                  onClick={() => window.open(spec.link, "_blank")} // Open link in a new tab
                >
                  <motion.img
                    className="mb-4 rounded"
                    src={spec.image}
                    alt={spec.title}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="text-center">
                    <h6 className="mb-2 text-xl font-semibold">{spec.title}</h6>
                  </div>
                </motion.div>
              ))
            : CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex flex-col bg-neutral-900 p-4 rounded-lg shadow-md cursor-pointer"
                  onClick={() => window.open(cert.link, "_blank")} // Open link in a new tab
                >
                  <motion.img
                    className="mb-4 rounded"
                    src={cert.image}
                    alt={cert.title}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="text-center">
                    <h6 className="mb-2 text-xl font-semibold">{cert.title}</h6>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
