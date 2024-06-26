import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Landing = ({ addEntry }) => {
  const navigate = useNavigate();

  const handleShowData = () => {
    addEntry();
    navigate("/showdata");
  };

  const handleAboutUs = () => {
    navigate("/aboutus");
  };

  return (
    <div className="body-landing flex justify-center items-center min-h-screen relative"> {/* Flexbox container */}
      <div className="text-center px-4 md:px-8">
        <h2 className="font-bold text-2xl md:text-4xl">Metro Ride Optimizer</h2>
        <h2 className="text-sm md:text-lg mt-4">
          Solusi cerdas penempatan ojek online
        </h2>
        <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center">
          <button
            className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
          >
            Home
          </button>
          <button
            className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
            onClick={handleShowData}
          >
            Data Perjalanan
          </button>
          <button
            className="btn bg-transparent text-white hover:bg-transparent hover:text-[#3399ff] border-none ml-4 md:text-lg md:px-8 md:rounded-1xl"
            onClick={handleAboutUs}
          >
            About Us
          </button>
        </div>
        <div className="mt-8 flex flex-col md:flex-row md:gap-8 justify-center items-center">
          <button
            className="btn bg-[#4da6ff] text-white hover:bg-white hover:text-[#4da6ff] border-none mt-4 md:mt-0 md:text-lg md:px-8 md:rounded-1xl"
            onClick={() => navigate("/inputshelter")}
          >
            Input Data Baru
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
